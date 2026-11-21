// Background constellation: line-drawn stars drift and join when close. Decoration only.
(() => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  canvas.className = 'sky';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);

  const still = matchMedia('(prefers-reduced-motion: reduce)');
  const ink = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#000';
  const LINK = 130;
  let w = 0, h = 0, frame = 0;
  const stars = [];
  const wrap = (v, max) => ((v % max) + max) % max;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Keep existing stars: phones resize as the address bar hides, and re-seeding would make the field jump.
    const count = Math.min(70, Math.floor(w * h / 24000));
    while (stars.length < count) stars.push({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: 3 + Math.random() * 3, turn: Math.random() * Math.PI, spin: (Math.random() - 0.5) * 0.008
    });
    stars.length = count;
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = ink;
    ctx.lineCap = 'round';
    ctx.lineWidth = 1;
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const a = stars[i], b = stars[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d >= LINK) continue;
        ctx.globalAlpha = (1 - d / LINK) * 0.18;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }
    // Each star is three crossed strokes, like the gatehouse drawing.
    ctx.globalAlpha = 0.35;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (const s of stars) {
      for (let k = 0; k < 3; k++) {
        const t = s.turn + k * Math.PI / 3;
        const dx = Math.cos(t) * s.r, dy = Math.sin(t) * s.r;
        ctx.moveTo(s.x - dx, s.y - dy); ctx.lineTo(s.x + dx, s.y + dy);
      }
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  function tick() {
    for (const s of stars) {
      s.x = wrap(s.x + s.vx, w); s.y = wrap(s.y + s.vy, h); s.turn += s.spin;
    }
    draw();
    frame = requestAnimationFrame(tick);
  }

  // Moves only while the tab is visible and the visitor hasn't asked for reduced motion; otherwise it stays still.
  function start() {
    cancelAnimationFrame(frame);
    if (!still.matches && !document.hidden) frame = requestAnimationFrame(tick);
  }

  addEventListener('resize', resize);
  document.addEventListener('visibilitychange', start);
  still.addEventListener('change', start);
  resize();
  start();
})();

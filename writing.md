---
layout: default
title: Writing
permalink: /writing/
---
# Writing

{% if site.posts.size > 0 %}
<ul class="posts">
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %Y" }}</time></li>
{% endfor %}
</ul>
{% else %}
Nothing here yet.
{% endif %}

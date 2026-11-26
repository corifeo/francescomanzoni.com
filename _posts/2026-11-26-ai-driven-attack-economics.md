---
layout: post
title: The economics of an AI-driven attack
description: AI agents may make persistence cheaper for attackers while each campaign still consumes defenders' limited attention.
---
ARTEX is a penetration testing framework that uses AI agents to find and exploit vulnerabilities. Given a target and an objective, it can coordinate tools, interpret results and decide what to try next. Although developed for authorised security testing, it has found its way into the hands of attackers. The [FBI has reported](https://www.ic3.gov/CSA/2026/261113.pdf) its use against organisations across several sectors.

Automated vulnerability scanning has been around for years. Much of the work that follows a scan, however, has traditionally required an operator to interpret the results and decide whether a vulnerability is worth pursuing. Agents can now take on some of those decisions across multiple targets.

I think the more interesting consequence of this is economic. How much of an attacker's time does an organisation need to consume before it becomes an unattractive target? And what happens when that time becomes considerably cheaper?

## The attacker’s capacity

Anyone working in a security operations centre (SOC) will recognise the problem of limited capacity. Several incidents occurring simultaneously can force a team to make difficult decisions about where to concentrate its efforts. Better tooling and additional staff help, but there is always a practical limit.

The same constraint exists on the offensive side. Even a well-funded advanced persistent threat (APT) group has a finite number of operators. Researching a target, establishing access and working out what to do with that access all consume time. There will be opportunities that a group knows about but chooses not to pursue.

Being discovered carries a cost as well. Defenders can study an attacker's tooling, develop detections and share their findings with other organisations. A previously unknown technique may lose much of its usefulness following a single incident. For a group that invests in developing its own capabilities or acquiring zero-days, premature exposure can have consequences well beyond the immediate campaign.

These considerations influence target selection. A smaller organisation might offer a route into a valuable supplier network, for example, but investigating that possibility requires someone to spend time on it, potentially without any return. An agent could undertake some of that exploratory work with relatively little supervision. Opportunities that previously sat below a threat actor's threshold for investigation might suddenly become viable.

For less experienced attackers, the economics are slightly different. They may lack the resources of an APT, but access to an agentic framework allows them to pursue weaknesses that would otherwise exceed their technical ability or the time they are prepared to invest.

## The pyramid of pain

David Bianco’s [Pyramid of Pain](https://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html) provides a useful way of thinking about the cost of disrupting an attacker's operation. Replacing an IP address is relatively straightforward. Replacing a tool requires more effort, while changing established tactics, techniques and procedures (TTPs) can be considerably more difficult.

I've been wondering how agentic systems might affect some of the assumptions behind that model. Consider an operator whose procedure fails on a particular system. Depending on the circumstances, they might need to investigate the failure, modify an existing script or develop something specifically for that environment. Some of this work can now be delegated to an agent, which can attempt an alternative approach and report back.

There is also the question of whose resources are being used. In an [incident investigated by Palo Alto Networks](https://unit42.paloaltonetworks.com/ai-assisted-cyber-attack-inside-a-unit-42-investigation/), an attacker used stolen cloud credentials to repurpose the victim’s AI endpoints for further activity. The organisation was effectively paying for computing resources being used by its attacker.

Developing an entirely new technique remains a different proposition from adapting a script or changing a command. I wouldn't suggest that ARTEX renders the Pyramid of Pain obsolete. What interests me is whether the effort required to adapt certain procedures is decreasing, particularly where an attacker has access to computing resources they don't have to pay for themselves.

## Hundreds of scripts per machine

An [incident investigated by Telefónica Tech](https://telefonicatech.com/en/blog/cyberattacks-ai-real-cases) illustrates another aspect of the problem. Responders encountered hundreds of scripts on each machine, with differences between the scripts found on individual systems. They had to establish which had been executed and understand their effects and associated permissions. Meanwhile, the attacker remained active. The investigators could not establish from this behaviour alone whether AI agents or conventional automation were responsible.

The work left for the defenders is the part I keep thinking about. Anyone who has investigated unfamiliar scripts will appreciate the difference between the time it takes to execute one and the time it takes to understand it. During an active incident, even an unsuccessful attempt may warrant investigation. A responder cannot simply disregard a file because it appears less relevant than another.

The [forensic investigation](https://www.divd.nl/documents/DIVD-2026-00014-forensics-report.pdf) into the breach of the Dutch Institute for Vulnerability Disclosure (DIVD) offers a more direct example involving ARTEX. Investigators identified 990 custom-written scripts on a single server, alongside thousands of output files.

Interestingly, DIVD noted that the detailed comments in some of those scripts helped investigators understand the attacker's actions. The volume of material, however, still presents a considerable investigative burden.

Producing another script costs an agent relatively little. Establishing its significance during an incident is a different matter, especially when the investigation spans multiple systems.

## Who is behind the campaign?

Threat intelligence providers rely on observable characteristics to establish relationships between campaigns. Reused infrastructure, malware, targeting preferences and operational techniques can all contribute to an assessment of the actor responsible.

Widespread adoption of agentic frameworks could complicate this process. Finding evidence of ARTEX in an investigation tells us something about the tooling involved. Its usefulness for attribution diminishes as more unrelated actors adopt it. Equally, an agent adapting its procedures to individual environments could introduce greater variation between campaigns conducted by the same operator.

There may eventually be recognisable patterns in the way particular agents operate. The forensic evidence left by ARTEX suggests there is plenty of material for researchers to examine.

My concern is what this means for assessments of an attacker's capability. Apparent technical sophistication has historically been one of the characteristics used to understand and classify threat actors. How reliable is that characteristic when much of the technical work can be delegated to a commercially or publicly available framework?

An inexperienced operator could appear considerably more capable than they are. An established APT using the same framework for routine operations might leave little evidence of its more advanced capabilities.

For organisations consuming threat intelligence, information about exploited vulnerabilities and observed behaviour will remain valuable. I'm less certain about the predictive value of an actor's historical capability profile as access to these frameworks becomes more widespread.

## An omni-persistent threat

The distinction between an opportunistic attacker and a persistent one has, to some extent, reflected their willingness to commit resources to a target. An opportunistic attacker has little incentive to spend hours investigating a difficult system when easier targets are available elsewhere.

That decision becomes less significant when an agent can continue investigating with minimal operator involvement. An APT could assign agents to explore lower-priority targets while retaining its operators and more distinctive capabilities for strategically important campaigns. Less sophisticated attackers could leave agents working on opportunities they would previously have abandoned.

Consider the cumulative effect of many actors doing this independently. Organisations could experience persistent activity from a collection of otherwise unrelated attackers, none of whom necessarily considers the organisation particularly important.

I would describe this as an omni-persistent threat. Persistence becomes a characteristic of the threat environment itself, arising from the number of actors pursuing opportunities and the relatively low cost of continuing their operations. From a SOC's perspective, the distinction between these actors may offer little immediate relief. An incident involving hundreds of unfamiliar scripts requires investigation regardless of the experience, motivation or resources of the person who initiated it. Several such campaigns occurring concurrently could occupy a substantial proportion of a team's investigative capacity.

## Keeping pace with AI

There is an obvious role for AI on the defensive side. Grouping similar scripts, identifying common functionality and analysing large volumes of forensic evidence are areas where AI could save analysts considerable time.

The extent of those savings will depend on how much of the investigative process can be delegated reliably. An analyst reviewing AI-generated findings still needs sufficient confidence in the underlying evidence to make decisions about containment and remediation. Mistakes at this stage can have operational consequences for the organisation.

It is also worth considering where human supervision is required on either side of an incident. An attacker may be satisfied if one of several hundred attempts succeeds. A defender investigating those attempts has a responsibility to establish the extent of the compromise before declaring the incident contained.

Until defensive systems can reliably assume more of that responsibility, operator attention will remain a significant constraint. The question for an organisation is no longer simply whether it is valuable enough to attract a persistent attacker. It is how many persistent investigations its defenders can handle simultaneously, when the cost to an attacker of starting another continues to fall.
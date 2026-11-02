---
layout: post
title: Threat modelling in the age of AI
subtitle: The engine won’t tell you about the pedestrian
description: An agent can threat model your software in minutes, but it was trained on what firms and experts choose to disclose. Like the prisoners in Plato’s cave, it sees only the shadows of what went wrong.
---
An agent can threat model your software now. Point it at the code and the architecture and within minutes it will list the data flows, the threats and the mitigations, and the result is often decent. So does threat modelling still need a human in the loop?

I think it does, and the reason is where the agent's knowledge comes from. LLMs are trained on industry best practice and on what experts and firms choose to disclose, and that record is filtered by how people want to be seen. Data about breaches also suffers from survivorship bias, among other things. An agent sees the shadows on the wall of Plato's cave. It has never seen what cast them.

## The car analogy

Think of your software as a car. If you threat model it one part at a time, looking at how the locks, the engine, the brakes and the steering are built, you can infer a fair amount about what could go wrong with each. That is what an agent does with your services, APIs and data stores, and it does it better than people do.

In the real world things are more complicated. Electric motors are almost silent, which by any engineering measure of a motor is an improvement, yet [new electric cars sold in the EU](https://eur-lex.europa.eu/eli/reg/2014/540/oj/eng) must now make artificial noise at low speed, and the [US has its own law](https://www.govinfo.gov/app/details/PLAW-111publ373). A car you can't hear is a danger to anyone stepping off the kerb while looking at their phone.

> Nothing in the engine would have told you that.

Your software has quiet motors too, features that work exactly as designed and become the hazard once they meet customers, attackers and regulators. Threat modelling looks across the parts and out at the street, where the rubber meets the road. An agent knows about quiet cars because that consequence happened and someone wrote it down. Several steps away from your code, it is guessing. The agent looks at the engine and sees the car. The human in the loop looks at the engine and sees the distracted pedestrian in a loud city.

## What the agent has read

An agent knows your code and the public record of how security usually gets done, but people share what they are happy to be seen sharing, and the ones sharing are the ones who came through well enough to talk about it. Firms might publish how they were breached, but seldom how they could have prevented it or exactly which controls failed. Even what M&S and Jaguar Land Rover told MPs stays at the high level, so you can point to the area that failed, but not to the chain of controls or to the wrong assumption that gave a sense the risk was managed when it wasn't, which is the detail an engineer would need to turn it into a specific lesson learned.

Regulators publish more, sometimes in painful detail, when a case [ends in a final notice](https://handbook.fca.org.uk/handbook/enfg4). But that tells an agent how the case ended, not what was asked along the way or what was accepted as evidence of good behaviour. Those conversations stay private, because the [law limits](https://www.legislation.gov.uk/ukpga/2000/8/section/348) what the regulator can disclose and few firms would choose to publish them. That makes the people who were in the room with the regulator especially valuable.

## The room where it happens

An agent can list the threats and put a rating on each one, and the rating is where experience counts. Someone who has been through a breach or a regulatory inquiry was in the room where it happens, to borrow from Hamilton, and has seen which risks turned out to matter, what a regulator asked, what a CEO challenged and which answers held up. Those scenarios are confidential, so an LLM won't have been trained on what was said there, and the most it can do is guess. Put that person in the threat model and they bring all of that to the ratings.

## Bob from IT

None of this is peculiar to security. Any field that builds new things leans on precedent, and a lot of that precedent sits with people rather than in documents.

I am paraphrasing something I have heard many times, but you know who I mean: Bob from IT, who has been there forever. Every company has one. He is the only person left who knows how something works, and he answers every question himself because it is faster than teaching anyone else. He is getting older, and everybody, Bob included, agrees this is a bad model. It is often part of why firms adopt AI. But even if an agent interviewed Bob every day until he retires, it would never extract all the context that makes him valuable, because nobody has a list of the thousand options Bob tried before settling on the current solution. The only way to get that would be to copy his brain one to one, like in Dennis E. Taylor's Bobiverse novels, where a man called Bob dies and wakes up with his mind uploaded into a space probe. Until someone builds that, you want Bob in the room when you threat model.

## Not one or the other

A threat model cuts across the organisation as well as the system, and that is where qualitative and quantitative risks get weighed together. An agent can do great work at the micro level, and I would let one write the first draft. It will never replace the experience and the ability to contextualise. It will never replace Bob.

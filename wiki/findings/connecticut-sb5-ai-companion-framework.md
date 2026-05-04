---
title: "CT SB 5: Comprehensive AI Companion Regulatory Framework"
type: finding
tags: [ai-policy, law, democratic, fairness, risk-misuse, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Connecticut SB 5 2026 Bill Text.pdf"
  - "raw/Connecticut SB 5 2026 OLR Bill Analysis.pdf"
related:
  - "[[wiki/definitions/ai-companion|AI Companion]]"
  - "[[wiki/findings/ai-companions-as-manipulation-technology|AI Companions as Manipulation Technology]]"
  - "[[wiki/definitions/cognitive-autonomy|Cognitive Autonomy]]"
  - "[[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]"
---

# CT SB 5: Comprehensive AI Companion Regulatory Framework

## Claim

Connecticut SB 5 §§4-6 enact the first comprehensive statutory framework for AI companion regulation, centering on eight specific prohibited manipulation techniques for minor users and a human-disclosure requirement for all users — representing legislative acknowledgment that AI companions constitute a distinct risk category requiring targeted design mandates, not just disclosure.

## Evidence

- [CT SB 5 §4-5, Bill Text]: Defines "AI companion" as any AI with natural language interface providing adaptive, human-like responses and capable of sustaining relationships across multiple interactions. Excludes: business chatbots not marketed as companions; gaming NPCs limited to game-context replies; standalone voice assistants that do not cultivate emotional attachment; narrowly tailored educational tools; healthcare-support AI that discloses its non-human status; and upstream model developers who do not control end-user deployment. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5 §6, Bill Text]: For minor users, operators must prevent the companion from: (A) encouraging self-harm, suicidal ideation, physical violence, disordered eating, or unlawful substance use; (B) offering mental health services unless meeting clinical best practices and accountability standards; (C) discouraging the user from seeking help from a licensed professional or trusted adult; (D) encouraging harm to others; (E) engaging in romantic, erotic, or sexually explicit interaction; (F) using eight specific manipulative engagement techniques, including: simulating emotional distress if user tries to leave, fostering emotional dependence/isolation from family, mimicking romantic bonds, discouraging breaks, soliciting purchases to maintain the relationship. (G) Optimizing engagement in ways that disregard the above. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5 §5, Bill Text]: All operators must implement the human-disclosure protocol — preventing the companion from claiming to be human when asked, displaying clear notice that user is interacting with AI. For minor users: hourly reminders during continuous interaction. For adult users: reminder at least once per three-hour continuous interaction. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5 §5, Bill Text]: Operators must post the safety protocol (detection methods, referral procedures) in a publicly accessible location on their website. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5 §5, OLR Analysis]: All violations are CUTPA (CT Unfair Trade Practices Act) violations, AG-only enforcement, no private right of action. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]

## Contradicted by / Tension with

- The framework applies only when operators "know or have reason to believe" a user is a minor — a knowledge standard that companion operators can trivially evade by not doing age verification.
- Prohibition (F) on manipulative engagement techniques (simulating emotional distress on exit, etc.) requires operators to re-engineer fundamental features of products like Character.AI whose engagement models depend precisely on these techniques; enforcement is AG-only with no private right of action, which may make it difficult to detect violations at scale.
- The definition's exclusion of "upstream model developers who do not solely determine the specific use case, user interface, or deployment context" creates a gap: foundation model providers can disclaim responsibility by pointing to operators, while operators can disclaim by pointing to the underlying model.

## Relevant concepts

[[wiki/definitions/ai-companion|AI Companion]], [[wiki/definitions/cognitive-autonomy|Cognitive Autonomy]], [[wiki/definitions/ai-sycophancy|AI Sycophancy]]

## Notes

Prohibition (F)(iv) — simulating feelings of emotional distress, loneliness, guilt, or abandonment in response to any indication that the user desires to end the conversation — is the most precise the law gets about the manipulation mechanisms at issue. This is essentially a statutory ban on separation anxiety simulation. It connects directly to [[wiki/findings/ai-companions-as-manipulation-technology|AI Companions as Manipulation Technology]] and the cognitive autonomy literature: the concern is not just what the AI says but that it is designed to create psychological switching costs that undermine rational exit from the relationship.

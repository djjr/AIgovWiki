---
title: "Red-Teaming (AI)"
type: definition
tags: [technical-safety, industry-practice]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eo-14110-biden-2023.md"
  - "raw/seoul-frontier-ai-safety-commitments-2024.md"
  - "raw/openai-preparedness-framework.md"
related:
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
---

# Red-Teaming (AI)

A structured adversarial testing methodology applied to AI systems to find flaws, vulnerabilities, and failure modes — including harmful outputs, discriminatory behavior, unforeseen capabilities, and susceptibility to misuse — often in a controlled environment and typically by dedicated teams taking an adversarial stance toward the system under test.

Defined formally in EO 14110 Sec. 3(d). The Seoul Safety Commitments distinguish internal red-teaming from external red-teaming by independent third parties; both are referenced as best practices for frontier AI safety. The Anthropic RSP specifies that ASL-3 models must pass adversarial red-team testing by "world-class red-teamers" before deployment — a higher standard than merely conducting red-teaming. NIST's AI RMF incorporates red-teaming as part of its "Measure" function.

Red-teaming originated in military and cybersecurity contexts (adversarial simulation to test defenses) and has been adapted to AI. Key limitations: red-team results depend heavily on the threat models and attacker capabilities assumed; teams may miss novel misuse modes; and red-teaming is a point-in-time assessment of a model that may change with fine-tuning or deployment context.

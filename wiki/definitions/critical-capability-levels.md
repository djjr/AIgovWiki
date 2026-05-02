---
title: "Critical Capability Levels (CCL) — Google DeepMind"
type: definition
acronym: "CCL"
tags: [technical-safety, industry-practice]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/gdm-frontier-safety-framework.md"
related:
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
  - "[[wiki/definitions/ai-safety-levels-asl|AI Safety Levels (ASL) — Anthropic]]"
  - "[[wiki/definitions/uplift|Uplift]]"
---

# Critical Capability Levels (CCL) — Google DeepMind

Google DeepMind's term, introduced in its 2024 Frontier Safety Framework, for the minimum level of capability a model must possess for a threat actor to use it to cause severe harm in a specific risk domain. CCLs are defined by adversarial use-case analysis — what a motivated bad actor could do with the model — rather than by what the model can do in isolation.

GDM's initial CCL domains are autonomy, biosecurity, cybersecurity, and ML R&D. The framework uses "early warning evaluations" to detect when models are approaching a CCL before crossing it, enabling pre-emptive mitigation. CCLs trigger two types of response: security mitigations (protecting model weights from exfiltration) and deployment mitigations (restricting access to critical capabilities). Compare: Anthropic's [[wiki/definitions/ai-safety-levels-asl|AI Safety Levels (ASL) — Anthropic]] (ASLs), which are defined by risk potential rather than threat-actor-specific uplift.

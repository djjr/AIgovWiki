---
title: "AI Safety Levels (ASL) — Anthropic"
type: definition
acronym: "ASL"
tags: [technical-safety, industry-practice]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/anthropic-rsp.md"
related:
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
  - "[[wiki/definitions/critical-capability-levels|Critical Capability Levels (CCL) — Google DeepMind]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
---

# AI Safety Levels (ASL) — Anthropic

Anthropic's tiered classification system for AI model risk, introduced in its 2023 Responsible Scaling Policy and modeled on the U.S. government's Biosafety Level (BSL) standards. Each level specifies the catastrophic risk potential of models in that tier and the safety, security, and operational measures required before training or deployment at that level may proceed.

- **ASL-1**: No meaningful catastrophic risk (e.g., 2018-era LLMs, chess AI).
- **ASL-2**: Early signs of dangerous capability but insufficient to provide meaningful uplift over non-AI baselines (e.g., search engines); current Claude models assessed at ASL-2 as of 2023.
- **ASL-3**: Substantially increases risk of catastrophic misuse vs. non-AI baselines, or exhibits low-level autonomous capabilities.
- **ASL-4/5+**: Not yet fully defined; anticipated to involve qualitatively higher autonomous capability and catastrophic misuse potential, requiring safety assurance methods not yet solved.

The system creates a *conditional scaling pause*: Anthropic commits not to train more capable models if compliance with the next ASL level's requirements cannot be demonstrated. Compare: GDM's [[wiki/definitions/critical-capability-levels|Critical Capability Levels (CCL) — Google DeepMind]] (CCLs), OpenAI's High/Critical thresholds.

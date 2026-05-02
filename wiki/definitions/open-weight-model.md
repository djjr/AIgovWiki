---
title: "Open-Weight Model"
type: definition
tags: [technical-safety, open-weight-models, ai-policy]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Caspar et al 2026 Open Technical Problems in Open-Weight Model Risk Management.pdf"
related:
  - "[[wiki/definitions/tamper-resistant-training|Tamper-Resistant Training]]"
  - "[[wiki/findings/open-weight-tamper-resistance-limits|Open-Weight Model Tamper Resistance Has Narrow Safety Margins]]"
  - "[[wiki/findings/open-weight-lifecycle-governance-gaps|Open-Weight Model Lifecycle Governance Has Systematic Gaps]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
---

An AI model whose trained weights are publicly released — typically under an open-source or open-access license — enabling any holder to run inference, fine-tune, modify, or redistribute the model without the original developer's oversight or consent. Open-weight models are distinguished from closed-API models by the absence of a technical control surface after release: the developer cannot patch safety properties, revoke access, monitor usage, or enforce terms of service on weight holders. As analyzed in [[wiki/sources/open-weight-model-risk-management|Caspar et al. (2026)]], this creates a governance asymmetry — the safety properties baked in at training time must be robust to adversarial modification, because no post-release correction is possible. Prominent open-weight models include Meta's Llama series, Mistral, and (as of 2025) models in the GPT-oss family.

---
title: "Pretraining Data Filtering (Safety)"
type: definition
tags: [technical-safety, open-weight-models]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Deep Ignorance Pretraining Data Filtering for Tamper-Resistant LLM Safeguards.pdf"
related:
  - "[[wiki/sources/deep-ignorance-pretraining-filter|Deep Ignorance (O'Brien, Casper et al., 2025)]]"
  - "[[wiki/findings/pretraining-filter-tamper-resistance|Pretraining Data Filtering Produces Tamper-Resistant Safeguards]]"
  - "[[wiki/definitions/uplift|Uplift]]"
---

O'Brien, Casper et al. (2025): *pretraining data filtering* (for safety) is the practice of removing or suppressing categories of content from training corpora before model training begins, with the goal of producing models that lack harmful knowledge at the weight level rather than only at the post-training alignment layer. Unlike post-training safety techniques (RLHF, constitutional AI, system prompts), pretraining filters are harder to circumvent by adversarial fine-tuning because the model genuinely lacks the filtered knowledge rather than having learned to suppress it. The tradeoff is a capability-safety frontier: stronger filters remove more harmful content but also degrade model performance on benign tasks that draw on similar knowledge domains. Pretraining data filtering is one component of a defense-in-depth safety stack; it cannot block in-context harmful knowledge (information inferred from context rather than stored in weights).

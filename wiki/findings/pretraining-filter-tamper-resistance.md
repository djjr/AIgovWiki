---
title: "Pretraining Data Filtering Produces Tamper-Resistant Safeguards in Open-Weight LLMs"
type: finding
tags: [technical-safety, empirical, open-weight-models]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Deep Ignorance Pretraining Data Filtering for Tamper-Resistant LLM Safeguards.pdf"
related:
  - "[[wiki/sources/deep-ignorance-pretraining-filter|Deep Ignorance (O'Brien, Casper et al., 2025)]]"
  - "[[wiki/definitions/pretraining-data-filtering|Pretraining Data Filtering]]"
  - "[[wiki/definitions/uplift|Uplift]]"
  - "[[wiki/findings/responsible-capability-scaling-as-industry-norm|Responsible Capability Scaling as Industry Norm]]"
---

## Claim

Filtering harmful content from pretraining data produces LLM safeguards that are substantially more tamper-resistant to adversarial fine-tuning than post-training alignment alone — maintaining resistance through ~10,000 fine-tuning steps and 300 million tokens, roughly an order of magnitude beyond post-training-only baselines — though the approach cannot block in-context harmful knowledge and functions best as one layer in a defense-in-depth stack.

## Evidence

- O'Brien, Casper et al. (EleutherAI / UK AI Security Institute, August 2025): empirical experiments with 6.9B parameter model suite spanning filter strength spectrum; strongest filter (all harmful-topic data removed) maintains substantially higher refusal rates through 10k adversarial fine-tuning steps; post-training-only baseline is compromised within ~1k steps; limitation confirmed: in-context harmful reasoning partially bypasses filter → [[wiki/sources/deep-ignorance-pretraining-filter|Deep Ignorance]]

## Contradicted by / Tension with

The safety-capability tradeoff is real: stronger filters degrade benign task performance. The paper does not fully characterize this frontier, and the acceptable tradeoff is deployment-context-dependent. Also, the 6.9B model scale may not generalize to frontier models — the tradeoff dynamics could differ at larger scales.

## Relevant concepts

[[wiki/definitions/pretraining-data-filtering|Pretraining Data Filtering]], [[wiki/definitions/uplift|Uplift]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]]

## Notes

Governance implication: if safety is significantly determined at training, governance frameworks focused exclusively on deployment outputs (responsible scaling policies that trigger on deployed capability evaluations; IVO audits of model outputs) may miss the training-layer variable. This suggests audit scope may need to extend to training pipelines — a significantly more intrusive form of oversight with different [[wiki/definitions/technical-legibility|technical legibility]] requirements.

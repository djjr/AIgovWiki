---
title: "Deep Ignorance: Pretraining Data Filtering for Tamper-Resistant Safeguards (O'Brien, Casper et al., 2025)"
type: source
tags: [technical-safety, open-weight-models, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Deep Ignorance Pretraining Data Filtering for Tamper-Resistant LLM Safeguards.pdf"
related:
  - "[[wiki/definitions/pretraining-data-filtering|Pretraining Data Filtering]]"
  - "[[wiki/findings/pretraining-filter-tamper-resistance|Pretraining Data Filtering Produces Tamper-Resistant Safeguards]]"
  - "[[wiki/definitions/uplift|Uplift]]"
  - "[[wiki/definitions/red-teaming|Red-Teaming (AI)]]"
---

## Précis

O'Brien, Casper et al. (EleutherAI / UK AI Security Institute, August 2025) investigates whether filtering harmful content from *pretraining data* produces more tamper-resistant safeguards than post-training alignment alone. The central finding is affirmative: models trained on filtered pretraining data resist adversarial fine-tuning (jailbreaks via instruction tuning) significantly better than baselines — the strongest filter (filtering all data discussing harmful topics) remains substantially more resistant through 10,000 fine-tuning steps and 300 million tokens, roughly an order of magnitude beyond the point at which post-training-only baselines are fully compromised. The paper releases a suite of 6.9B parameter models spanning the filter-strength spectrum, enabling downstream research on the safety-capability tradeoff this approach involves.

The key limitation is explicitly acknowledged: pretraining data filtering cannot block *in-context* harmful knowledge — a sufficiently capable model may still respond to harmful prompts framed as hypotheticals, or may still possess implicitly encoded harmful knowledge that filtering didn't catch. The paper frames pretraining filtering as one layer in a defense-in-depth stack, not a standalone solution. The governance relevance is direct: this is one of the few empirical papers showing that technical properties of *training* (not just post-training alignment) have durable safety implications. For [[wiki/definitions/independent-verification-organization|IVO]]-style governance, it suggests that audits of *training pipelines* — not just deployed models — may be necessary for robust safety verification.

## Key terms introduced

- [[wiki/definitions/pretraining-data-filtering|Pretraining Data Filtering]] — new definition page warranted

## Findings extracted

- [[wiki/findings/pretraining-filter-tamper-resistance|Pretraining Data Filtering Produces Tamper-Resistant Safeguards in Open-Weight LLMs]]

## Tensions / contradictions with existing wiki

Connects to [[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps]] indirectly: the paper's evaluation methodology relies on standard refusal benchmarks, and BetterBench's critique of benchmark quality applies to safety evaluations as much as capability evaluations. Also in tension with the general framing of [[wiki/sources/hadfield-talk-regulatory-markets|Regulatory Markets]] as primarily a deployment-layer governance approach — if safety is significantly determined at training, governance frameworks that focus only on deployment outputs may be structurally inadequate.

## Raw source

[[raw/Deep Ignorance Pretraining Data Filtering for Tamper-Resistant LLM Safeguards.pdf]]

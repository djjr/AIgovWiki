---
title: "Foundation Model Transparency Index 2023 (Bommasani et al., 1st Edition)"
type: source
tags: [ai-policy, governance-theory, empirical, transparency]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Foundation Model Transparency Index 2023.pdf"
related:
  - "[[wiki/definitions/foundation-model-transparency-index|Foundation Model Transparency Index (FMTI)]]"
  - "[[wiki/findings/frontier-model-transparency-declining|Frontier Model Transparency Is Declining]]"
  - "[[wiki/sources/foundation-model-transparency-index-2025|FMTI 2025 (3rd Edition)]]"
  - "[[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]]"
---

## Précis

The inaugural Foundation Model Transparency Index (Bommasani et al., Stanford CRFM, 2023) established the first systematic cross-company measurement framework for foundation model transparency, assessing 10 major AI developers across 100 indicators. The average score was 37/100, with upstream transparency (training data, data sources, labor conditions) consistently the lowest-scoring domain and downstream transparency (third-party use, societal impact) only marginally higher. Open-weight developers (Meta, EleutherAI) scored substantially higher on upstream indicators than closed developers (OpenAI, Google, Anthropic) — but still exhibited near-zero downstream transparency. No developer disclosed anything meaningful about how its model is used by third parties or what downstream harms have been documented.

The 1st edition is the baseline for the longitudinal FMTI series and establishes the conceptual structure that subsequent editions use. Its governance contribution is to make explicit what "transparency" means operationally — disaggregated into 100 specific, checkable indicators — as opposed to high-level principles. This connects to the [[wiki/findings/principle-to-practice-gap-responsible-ai|Principle-to-Practice Gap]]: the FMTI shows that even companies espousing transparency principles score poorly on the practices those principles nominally require. The upstream/downstream asymmetry is particularly relevant for [[wiki/definitions/independent-verification-organization|IVO]] design: if developers don't track downstream harm themselves, IVOs cannot verify what developers cannot observe.

## Key terms introduced

- [[wiki/definitions/foundation-model-transparency-index|Foundation Model Transparency Index (FMTI)]] — shared with 2025 edition

## Findings extracted

- [[wiki/findings/frontier-model-transparency-declining|Frontier Model Transparency Is Declining]] — baseline data point

## Tensions / contradictions with existing wiki

The open vs. closed developer transparency asymmetry on upstream indicators cuts against simple claims that openness is uniformly safer: open developers are more transparent upstream but similarly opaque downstream, which is where harms actually manifest. This adds nuance to the [[wiki/findings/nonphysical-asset-governance-challenge|Nonphysical Asset Governance Challenge]] — open-weight models may be more auditable on training but less governable on deployment.

## Raw source

[[raw/Foundation Model Transparency Index 2023.pdf]]

---
title: "Frontier Model Transparency Is Declining"
type: finding
tags: [ai-policy, empirical, transparency, governance-theory]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Foundation Model Transparency Index 2025.pdf"
  - "raw/Foundation Model Transparency Index 2023.pdf"
related:
  - "[[wiki/sources/foundation-model-transparency-index-2025|FMTI 2025 (3rd Edition)]]"
  - "[[wiki/sources/foundation-model-transparency-index-2023|FMTI 2023 (1st Edition)]]"
  - "[[wiki/definitions/foundation-model-transparency-index|Foundation Model Transparency Index (FMTI)]]"
  - "[[wiki/findings/principle-to-practice-gap-responsible-ai|Principle-to-Practice Gap in Responsible AI Governance]]"
  - "[[wiki/findings/frontier-developer-special-responsibility-norm|Emerging Norm: Frontier AI Developers Bear Special Responsibility]]"
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
---

## Claim

Average transparency across frontier AI developers is declining over time, market and reputational pressures are insufficient to drive transparency improvements voluntarily, and no company discloses train-test data overlap — directly undermining the reliability of published benchmark scores as governance instruments.

## Evidence

- FMTI 2023 (Bommasani et al., Stanford CRFM): 10 companies, average score 37/100; upstream transparency systematically lowest; open developers higher on upstream, all developers near-zero on downstream impact → [[wiki/sources/foundation-model-transparency-index-2023|FMTI 2023]]
- FMTI 2025 (Bommasani et al., Stanford CRFM, 3rd edition): 13 companies, average score fell to 40 (with declining trend across editions when controlling for composition); IBM highest at 95; xAI and Midjourney lowest at 14; Frontier Model Forum members cluster in the middle, not at the top; no company discloses train-test overlap → [[wiki/sources/foundation-model-transparency-index-2025|FMTI 2025]]

## Contradicted by / Tension with

Individual companies have made transparency improvements (some scores increased across editions), so the aggregate trend does not preclude voluntary progress. The declining average is partly compositional (new low-scoring entrants). That said, the absence of any leader on the critical train-test overlap indicator is not a compositional artifact.

## Relevant concepts

[[wiki/definitions/foundation-model-transparency-index|FMTI]], [[wiki/definitions/benchmark-lifecycle|Benchmark Lifecycle]], [[wiki/definitions/data-leakage-ml|Data Leakage (ML)]]

## Notes

The train-test overlap finding is the most governance-significant specific result: governance frameworks that rely on benchmark scores (capability triggers in RSPs, EU AI Act risk tiering) are implicitly assuming those scores are not contaminated. FMTI shows no company provides the information needed to verify this assumption. This connects the transparency finding directly to [[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps]] and [[wiki/findings/data-leakage-reproducibility-crisis-ml|Data Leakage Reproducibility Crisis]].

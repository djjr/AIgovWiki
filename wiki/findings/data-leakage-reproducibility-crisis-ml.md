---
title: "Data Leakage Drives a Reproducibility Crisis in ML-Based Science"
type: finding
tags: [technical-safety, empirical, research-methodology]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Kapoor Narayanan 2023 Leakage and the Reproducibility Crisis in ML-Based Science.pdf"
related:
  - "[[wiki/sources/data-leakage-reproducibility-ml-science|Kapoor & Narayanan 2023]]"
  - "[[wiki/definitions/data-leakage-ml|Data Leakage (ML)]]"
  - "[[wiki/findings/computational-reproducibility-crisis-ai-research|Computational Reproducibility Crisis in Scientific Research]]"
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
  - "[[wiki/findings/frontier-model-transparency-declining|Frontier Model Transparency Is Declining]]"
---

## Claim

Data leakage — inadvertent use of test-correlated information during training or model selection — drives a pervasive reproducibility crisis across ML-based science, causing capability claims across 17 fields to be systematically inflated; when leakage is corrected, complex ML models frequently fail to outperform decades-old simpler baselines, undermining the evidentiary foundation for governance decisions that rely on published AI capability claims.

## Evidence

- Kapoor & Narayanan (*Patterns* / CellPress, 2023): survey of 294 papers across 17 scientific fields finding data leakage in the majority; civil war prediction case study: seminal ML papers claim large performance improvements over classical logistic regression; when leakage (temporal leakage and non-independence of train-test splits) is corrected, the ML improvements disappear and logistic regression matches or beats the complex models; 8-type leakage taxonomy; proposes model info sheets as governance-adjacent disclosure standard → [[wiki/sources/data-leakage-reproducibility-ml-science|Kapoor & Narayanan 2023]]

## Contradicted by / Tension with

The civil war prediction case study is an extreme case; the extent of leakage-induced inflation varies across fields and problem types. Some ML capability improvements survive methodological scrutiny. The paper's claim about governance-relevant AI capabilities (language models, reasoning) is implied but not directly tested — the leakage forms most relevant to LLM benchmarks (benchmark contamination / data poisoning) are adjacent but distinct from the leakage types studied.

## Relevant concepts

[[wiki/definitions/data-leakage-ml|Data Leakage (ML)]], [[wiki/definitions/benchmark-lifecycle|Benchmark Lifecycle]]

## Notes

The two-layer critique when combined with [[wiki/findings/computational-reproducibility-crisis-ai-research|CORE-Bench]]: CORE-Bench shows AI agents cannot reproduce published results; Kapoor & Narayanan show those published results may not be worth reproducing. Together they form the strongest available empirical case that the epistemic foundations of AI policy research are fragile. The model info sheets proposal is a direct analog to [[wiki/definitions/technical-legibility|Technical Legibility]] requirements for governance — standard machine-readable documentation of training-test methodology as a prerequisite for governance use of capability claims.

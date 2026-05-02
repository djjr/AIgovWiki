---
title: "Leakage and the Reproducibility Crisis in ML-Based Science (Kapoor & Narayanan, 2023)"
type: source
tags: [technical-safety, empirical, research-methodology]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Kapoor Narayanan 2023 Leakage and the Reproducibility Crisis in ML-Based Science.pdf"
related:
  - "[[wiki/definitions/data-leakage-ml|Data Leakage (ML)]]"
  - "[[wiki/findings/data-leakage-reproducibility-crisis-ml|Data Leakage Drives Reproducibility Crisis in ML-Based Science]]"
  - "[[wiki/findings/computational-reproducibility-crisis-ai-research|Computational Reproducibility Crisis in Scientific Research]]"
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
  - "[[wiki/sources/core-bench-computational-reproducibility|CORE-Bench]]"
---

## Précis

Kapoor & Narayanan (*Patterns* / CellPress, 2023) documents a pervasive reproducibility crisis in ML-based science driven primarily by *data leakage* — the inadvertent use of test data (or test-correlated data) during model training or selection, causing artificially inflated performance claims. The paper surveys 294 papers across 17 scientific fields (genomics, economics, neuroscience, climate science, civil war prediction, and others) and finds data leakage in the majority. The centerpiece case study is civil war prediction: when leakage is corrected in a canonical literature, complex ML models — which claimed substantial improvements over classical approaches — fail to outperform decades-old logistic regression models. The paper proposes *model info sheets* (structured disclosures of training-test splits, leakage checks, replication materials) as a governance-adjacent response.

The 8-type leakage taxonomy is the paper's most generalizable contribution: (1) no test set; (2) pre-processing on full dataset; (3) feature selection on full dataset; (4) model selection on test set; (5) temporal leakage; (6) non-independence of train and test; (7) sampling bias in train/test split; (8) outcome-based feature construction. Each type produces a distinct pattern of inflation and requires a distinct correction strategy. The governance relevance is direct and underappreciated: if AI capability claims in scientific papers are systematically inflated by leakage, then the policy arguments built on those capability claims — including arguments for [[wiki/definitions/compute-threshold|compute threshold]] triggers, risk-based tiering, and capability-based scaling pauses — rest on evidence that may not survive methodological scrutiny.

## Key terms introduced

- [[wiki/definitions/data-leakage-ml|Data Leakage (ML)]] — new definition page warranted

## Findings extracted

- [[wiki/findings/data-leakage-reproducibility-crisis-ml|Data Leakage Drives a Reproducibility Crisis in ML-Based Science]]

## Tensions / contradictions with existing wiki

Direct complement to [[wiki/sources/core-bench-computational-reproducibility|CORE-Bench]]: CORE-Bench documents the failure of AI agents to *reproduce* published results; Kapoor & Narayanan explain why the *original results* may not be worth reproducing. Together they form a two-layer critique of the epistemic foundations of AI policy research. Both papers also connect to [[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps]]: leakage is one of the specific mechanisms by which benchmark scores become unreliable governance instruments.

## Raw source

[[raw/Kapoor Narayanan 2023 Leakage and the Reproducibility Crisis in ML-Based Science.pdf]]

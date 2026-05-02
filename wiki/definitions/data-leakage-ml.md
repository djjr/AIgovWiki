---
title: "Data Leakage (ML)"
type: definition
tags: [technical-safety, research-methodology, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Kapoor Narayanan 2023 Leakage and the Reproducibility Crisis in ML-Based Science.pdf"
related:
  - "[[wiki/sources/data-leakage-reproducibility-ml-science|Kapoor & Narayanan 2023]]"
  - "[[wiki/findings/data-leakage-reproducibility-crisis-ml|Data Leakage Drives a Reproducibility Crisis in ML-Based Science]]"
  - "[[wiki/definitions/benchmark-lifecycle|Benchmark Lifecycle]]"
---

Kapoor & Narayanan (2023): *data leakage* in machine learning is the inadvertent use of information from the test set (or test-correlated data) during model training, feature selection, or model comparison — causing performance metrics to be artificially inflated relative to true out-of-sample performance. Eight leakage types are identified: (1) no held-out test set; (2) pre-processing on full dataset before split; (3) feature selection using full dataset; (4) model selection using test set performance; (5) temporal leakage (train data from the future relative to test); (6) non-independence of train and test samples; (7) sampling bias in split; (8) outcome-based feature construction. Leakage is typically inadvertent (not fraud) but produces the same epistemic effect as intentional manipulation: capability claims that do not replicate. Distinct from *benchmark contamination* (test data appearing in pretraining corpora), though both inflate apparent performance.

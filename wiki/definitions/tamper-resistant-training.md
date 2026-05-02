---
title: "Tamper-Resistant Training"
type: definition
tags: [technical-safety, open-weight-models, alignment]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Caspar et al 2026 Open Technical Problems in Open-Weight Model Risk Management.pdf"
related:
  - "[[wiki/definitions/open-weight-model|Open-Weight Model]]"
  - "[[wiki/definitions/pretraining-data-filtering|Pretraining Data Filtering]]"
  - "[[wiki/findings/open-weight-tamper-resistance-limits|Open-Weight Model Tamper Resistance Has Narrow Safety Margins]]"
  - "[[wiki/findings/pretraining-filter-tamper-resistance|Pretraining Filters Do Not Provide Tamper-Resistant Safety]]"
---

Training methods designed to preserve safety-relevant model behaviors — such as refusal to produce CBRN uplift, CSAM, or targeted harassment — under adversarial modification of the model's weights after release. Tamper-resistant training is the primary open technical challenge in [[wiki/definitions/open-weight-model|open-weight model]] safety: because open-weight models cannot be patched post-release, their safety properties must survive fine-tuning attacks by adversarial holders. Current state-of-the-art methods (safety fine-tuning, RLHF-based alignment) provide tamper resistance only against light adversarial modification — typically hundreds of fine-tuning steps on consumer hardware. [[wiki/sources/open-weight-model-risk-management|Caspar et al. (2026)]] identify tamper-resistant training as an open research problem, noting that meaningful open-weight governance requires methods that hold across thousands of adversarial fine-tuning steps, a bar no current technique meets.

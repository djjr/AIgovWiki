---
title: "Open-Weight Model Lifecycle Governance Has Systematic Gaps"
type: finding
tags: [technical-safety, open-weight-models, governance-mechanisms, research-agenda]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Caspar et al 2026 Open Technical Problems in Open-Weight Model Risk Management.pdf"
related:
  - "[[wiki/sources/open-weight-model-risk-management|Open Technical Problems in Open-Weight Model Risk Management (Caspar et al., 2026)]]"
  - "[[wiki/definitions/open-weight-model|Open-Weight Model]]"
  - "[[wiki/definitions/tamper-resistant-training|Tamper-Resistant Training]]"
  - "[[wiki/findings/open-weight-tamper-resistance-limits|Open-Weight Model Tamper Resistance Has Narrow Safety Margins]]"
  - "[[wiki/definitions/pretraining-data-filtering|Pretraining Data Filtering]]"
---

## Claim

Open-weight model governance has systematic gaps across all five stages of the model lifecycle — training data curation, tamper-resistant training, tampering evaluations, staged deployment, and model provenance/forensics — and addressing these gaps requires 16 distinct technical research programs that prior policy surveys have enumerated but not technically specified.

## Evidence

- Caspar et al. (TMLR, March 2026): 16 open problems mapped across five lifecycle stages: (1) **Training data curation** — no robust method to certify that hazardous knowledge was excluded from pretraining; (2) **Tamper-resistant training and unlearning** — safety properties fragile under adversarial fine-tuning; formal unlearning verification unsolved; (3) **Model tampering evaluations** — no standardized benchmark for measuring tamper resistance; adversarial fine-tuning evaluation methodology immature; (4) **Staged deployment strategies** — no established playbook for open-weight release staging analogous to closed-model staged rollout; (5) **Model provenance and forensics** — no reliable watermarking or fingerprinting methods for attributing harms from modified open-weight derivatives; explicitly fills gaps in Seger 2024, François 2025, Srikumar 2024, UK AISI 2025 → [[wiki/sources/open-weight-model-risk-management|Caspar et al. 2026]]

## Contradicted by / Tension with

Several of the 16 problems are acknowledged as having partial solutions — staged deployment strategies, for instance, borrow from software release practices — so the "systematic gaps" framing is strongest for the tamper-resistance and forensics stages. The lifecycle framing also emphasizes technical problems; the governance design problems (who enforces staged deployment for open-weight models, given no centralized control surface?) are noted but not the paper's primary focus.

## Relevant concepts

[[wiki/definitions/open-weight-model|Open-Weight Model]], [[wiki/definitions/tamper-resistant-training|Tamper-Resistant Training]], [[wiki/definitions/pretraining-data-filtering|Pretraining Data Filtering]]

## Notes

The five-stage lifecycle framework is analytically useful for governance design: it maps technical responsibilities onto different actors. Training data curation and tamper-resistant training are developer responsibilities (pre-release). Tampering evaluations could be assigned to IVOs or regulators. Staged deployment is a developer-regulator co-responsibility. Model provenance and forensics are primarily post-release law-enforcement and civil-liability tools. The lifecycle framing thus connects the technical open problems to the [[wiki/definitions/independent-verification-organization|IVO]] and compute governance frameworks.

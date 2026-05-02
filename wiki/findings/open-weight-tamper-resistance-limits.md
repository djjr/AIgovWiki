---
title: "Open-Weight Model Tamper Resistance Has Narrow Safety Margins"
type: finding
tags: [technical-safety, open-weight-models, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Caspar et al 2026 Open Technical Problems in Open-Weight Model Risk Management.pdf"
related:
  - "[[wiki/sources/open-weight-model-risk-management|Open Technical Problems in Open-Weight Model Risk Management (Caspar et al., 2026)]]"
  - "[[wiki/definitions/tamper-resistant-training|Tamper-Resistant Training]]"
  - "[[wiki/definitions/open-weight-model|Open-Weight Model]]"
  - "[[wiki/findings/pretraining-filter-tamper-resistance|Pretraining Filters Do Not Provide Tamper-Resistant Safety]]"
---

## Claim

Current tamper-resistance methods for open-weight AI models — including safety fine-tuning and RLHF-based alignment — provide safety guarantees only against light adversarial modification (hundreds of fine-tuning steps on consumer hardware), while meaningful open-weight governance requires techniques robust to thousands of adversarial fine-tuning steps; no technique currently meets this bar, making open-weight release of models with dangerous capabilities ungovernable under present technical conditions.

## Evidence

- Caspar et al. (TMLR, March 2026; MIT CSAIL / UK AISI / FAR.AI): 16 open problems taxonomy; tamper-resistant training identified as the central unsolved problem; state-of-the-art safety fine-tuning and RLHF alignment broken by hundreds of fine-tuning steps; adversarial budgets for malicious actors with GPT-oss-120b (3M downloads) include consumer hardware fine-tuning with commodity datasets; the required robustness target — thousands of steps across realistic adversarial budgets — is not met by any current method → [[wiki/sources/open-weight-model-risk-management|Caspar et al. 2026]]

## Contradicted by / Tension with

The fragility of post-training safety is well-documented empirically, but the governance implication (that open-weight release of dangerous-capability models is ungovernable) is contested by researchers who argue that the security-through-obscurity of closed weights is itself fragile, and that open release enables broader safety research that may discover more robust defenses. The paper explicitly acknowledges this debate but concludes that the technical gap is too large to close with current methods.

## Relevant concepts

[[wiki/definitions/tamper-resistant-training|Tamper-Resistant Training]], [[wiki/definitions/open-weight-model|Open-Weight Model]]

## Notes

The 3-million-download figure for GPT-oss-120b is the paper's most concrete governance signal: it illustrates that at release, a model instantly becomes a massively distributed artifact, making post-release patching logistically impossible even if technically feasible. This asymmetry — one-time release vs. permanent distribution — is the structural reason why pre-release tamper resistance must be solved rather than worked around. Companion finding: [[wiki/findings/pretraining-filter-tamper-resistance|Pretraining Filters Do Not Provide Tamper-Resistant Safety]] shows the problem persists even when pretraining-level safety filtering is applied.

---
title: "Open Technical Problems in Open-Weight Model Risk Management (Caspar et al., 2025)"
type: source
tags: [technical-safety, open-weight-models, research-agenda, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Caspar et al 2025 Open Technical Problems in Open-Weight AI Model Risk Management.pdf"
related:
  - "[[wiki/findings/open-weight-tamper-resistance-limits|Open-Weight Model Tamper Resistance Has Narrow Safety Margins]]"
  - "[[wiki/findings/open-weight-lifecycle-governance-gaps|Open-Weight Model Lifecycle Governance Has Systematic Gaps]]"
  - "[[wiki/definitions/open-weight-model|Open-Weight Model]]"
  - "[[wiki/definitions/tamper-resistant-training|Tamper-Resistant Training]]"
  - "[[wiki/sources/deep-ignorance-pretraining-filter|Deep Ignorance and Pretraining Filters (O'Brien & Casper)]]"
  - "[[wiki/findings/pretraining-filter-tamper-resistance|Pretraining Filters Do Not Provide Tamper-Resistant Safety]]"
---

## Précis

Caspar et al. (TMLR, March 2026; MIT CSAIL, UK AISI, FAR.AI, and others) is the primary technical reference for open-weight model risk management, cataloguing 16 open problems organized across a five-stage lifecycle: *training data curation*, *tamper-resistant training and unlearning algorithms*, *model tampering evaluations*, *staged deployment strategies*, and *model provenance and forensics*. The paper's driving observation is that open-weight models — by design — cannot be patched, updated, or access-restricted after release. As of publication, GPT-oss-120b had been downloaded 3 million times; once a model is released, its safety properties are locked. This creates a fundamentally different governance problem than closed-API deployment: the safety work must be done pre-release and must be robust to adversarial fine-tuning by any of those 3M+ holders.

The central technical finding is that current tamper-resistance techniques — including safety fine-tuning and RLHF-based alignment — are fragile: they can typically be undermined with hundreds of fine-tuning steps on consumer hardware. For open-weight governance to be meaningful, tamper resistance must hold across thousands of fine-tuning steps on realistic adversarial budgets. No current technique meets this bar. This directly extends the [[wiki/sources/deep-ignorance-pretraining-filter|Deep Ignorance pretraining filter]] paper (shared author O'Brien) by showing that pretraining-level interventions alone are necessary but not sufficient — the entire post-training lifecycle needs hardening. The paper is explicitly positioned as filling gaps in prior work: Seger 2024, François 2025, Srikumar 2024, and UK AISI 2025 are acknowledged as prior policy surveys that lack technical depth on the open problems.

## Key terms introduced

- [[wiki/definitions/open-weight-model|Open-Weight Model]] — an AI model whose weights are publicly released, enabling fine-tuning, modification, and deployment without developer oversight
- [[wiki/definitions/tamper-resistant-training|Tamper-Resistant Training]] — training methods designed to preserve safety-relevant model behaviors under adversarial fine-tuning

## Findings extracted

- [[wiki/findings/open-weight-tamper-resistance-limits|Open-Weight Model Tamper Resistance Has Narrow Safety Margins]]
- [[wiki/findings/open-weight-lifecycle-governance-gaps|Open-Weight Model Lifecycle Governance Has Systematic Gaps]]

## Tensions / contradictions with existing wiki

Directly extends [[wiki/sources/deep-ignorance-pretraining-filter|O'Brien & Casper]] — both share authorship and treat pretraining-level and post-training safety as layered problems. The 5-stage lifecycle maps onto the [[wiki/sources/singapore-consensus-ai-safety-research|Singapore Consensus]] Development and Control pillars. In tension with arguments that open-weight release is net-positive for safety via scrutiny: the paper's position is that the current technical toolkit is insufficient to make that bet responsibly. Also interacts with [[wiki/sources/computing-power-ai-governance|Sastry et al.]] — compute governance can throttle training of dangerous open-weight models but cannot address post-release tampering.

## Raw source

[[raw/Caspar et al 2025 Open Technical Problems in Open-Weight AI Model Risk Management.pdf]]

---
title: "Nonphysical Asset Governance Challenge"
type: finding
tags: [governance-theory, ai-policy, technology-policy]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/AI Governance Lessons from Earlier Technologies.pdf"
related:
  - "[[wiki/definitions/collingridge-dilemma|Collingridge Dilemma]]"
  - "[[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]"
  - "[[wiki/findings/norm-consensus-as-governance-prerequisite|Norm Consensus as Governance Prerequisite]]"
  - "[[wiki/sources/rand-ai-governance-historical-analogues|RAND — Historical Analogues (Vermeer, 2024)]]"
---

# Nonphysical Asset Governance Challenge

## Claim

Governance mechanisms designed to control physical assets (fissile material, hardware, facilities) do not transfer reliably to nonphysical assets (software, algorithms, model weights); encryption export controls demonstrate that motivated actors can circumvent such controls through open-source dissemination, legal challenges, and alternative development — a pattern AI governance may replicate.

## Evidence

- [RAND/Vermeer 2024]: Encryption export controls on cryptographic software were defeated by First Amendment litigation, open-source cryptography (OpenPGP), and foreign development of equivalent products — making controls both ineffective and economically self-defeating. Nuclear nonproliferation succeeded partly because it targeted physical chokepoints (fissile material, delivery systems, test detection) with no analogous digital bypass. → [[wiki/sources/rand-ai-governance-historical-analogues|RAND — Historical Analogues (Vermeer, 2024)]]
- [NRC, 1996, cited in Vermeer]: Motivated users (those national security was most concerned about) were still able to acquire strong encryption despite export restrictions.

## Contradicted by / Tension with

- The [[wiki/findings/compute-threshold-as-governance-proxy|Compute Thresholds as Governance Proxy]] finding relies on compute hardware (a physical asset) as a governance lever precisely because it is more controllable than software. Vermeer's analysis suggests this is the right instinct — but notes that if dangerous AI can be achieved with general-purpose hardware rather than specialized systems, even compute controls lose their chokepoint character.
- [[wiki/findings/embedded-oversight-as-high-stakes-model|Embedded Oversight as the High-Stakes IVO Model]] suggests that IVO hold-points at mandatory junctures (physical inspections in nuclear, aviation) may require physical process analogues for AI — a harder design problem if training runs are the key event.

## Relevant concepts

[[wiki/definitions/collingridge-dilemma|Collingridge Dilemma]], [[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]], [[wiki/definitions/technical-legibility|Technical Legibility]]

## Notes

Vermeer frames this as one of three cross-cutting governance themes across all four historical analogues. The point is not merely that digital things are hard to restrict, but that governance strategies which depend on controlling dissemination of information face structural legal and practical barriers in liberal democratic systems that go beyond enforcement difficulty.

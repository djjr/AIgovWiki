---
title: "Compute Governance: Three Capacities Framework"
type: finding
tags: [compute-governance, governance-mechanisms, technical-safety]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Sastry et al 2024 Computing Power and the Governance of Artificial Intelligence.pdf"
related:
  - "[[wiki/sources/computing-power-ai-governance|Computing Power and the Governance of AI (Sastry et al., 2024)]]"
  - "[[wiki/findings/compute-governance-four-properties|Compute Governance: Four Properties That Make It Tractable]]"
  - "[[wiki/definitions/compute-governance|Compute Governance]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
---

## Claim

Compute governance instruments operate through three distinct capacities — Visibility (tracking AI development activity), Allocation (steering AI toward beneficial uses), and Enforcement (ensuring compliance with rules) — each requiring different policy tools and each applicable at different points in the AI development lifecycle, and the combination of the three constitutes a governance architecture that complements model-level evaluation and institutional oversight.

## Evidence

- Sastry et al. (Oxford/GovAI/OpenAI/Cambridge, arXiv Feb 2024): three capacity framework: (1) **Visibility** — knowing where frontier AI development is occurring; tools include data-center reporting requirements, supply-chain tracking, cloud compute Know-Your-Customer (KYC) rules; prerequisite for all other capacities; (2) **Allocation** — conditioning access to compute on use-case approval, safety commitments, or licensing; tools include export licensing, cloud provider acceptable-use policies, compute-access conditionality in grant programs; (3) **Enforcement** — ensuring compliance post-allocation; tools include on-chip reporting mechanisms, audit rights, sanctions for non-compliance; proposed guardrails: exclude small-scale compute, require privacy-preserving practices, demand ex ante justification for enforcement instruments, mandate periodic threshold review → [[wiki/sources/computing-power-ai-governance|Sastry et al. 2024]]

## Contradicted by / Tension with

Visibility is a prerequisite for allocation and enforcement, but the current state of global AI data-center tracking is incomplete — commercial satellite monitoring exists but is not systematically integrated into regulatory infrastructure. The enforcement capacity is the most technically ambitious: on-chip reporting mechanisms are proposed but not yet deployed at scale, and their implementation would require coordination between chip designers, foundries, and governments that has not been achieved. Privacy concerns (the paper's own identified risk) could limit the Visibility capacity in democratic jurisdictions.

## Relevant concepts

[[wiki/definitions/compute-governance|Compute Governance]], [[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]

## Notes

The three-capacities framework maps compute governance onto a familiar regulatory architecture: registration (Visibility), licensing (Allocation), inspection (Enforcement). This framing makes compute governance legible to administrative lawyers and regulatory economists. The [[wiki/definitions/independent-verification-organization|IVO]] model from TAIG is a natural partner for the Enforcement capacity: IVOs conduct model-level evaluations; compute governance provides the hardware-layer signal that tells IVOs which models to evaluate. Together they form a two-layer detection system that is more robust than either alone.

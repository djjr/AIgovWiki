---
title: "Computing Power and the Governance of Artificial Intelligence (Sastry et al., 2024)"
type: source
tags: [compute-governance, governance-mechanisms, technical-safety, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Sastry et al 2024 Computing Power.pdf"
related:
  - "[[wiki/findings/compute-governance-four-properties|Compute Governance: Four Properties That Make It Tractable]]"
  - "[[wiki/findings/compute-governance-three-capacities|Compute Governance: Three Capacities Framework]]"
  - "[[wiki/definitions/compute-governance|Compute Governance]]"
  - "[[wiki/definitions/compute-threshold|Compute Threshold]]"
  - "[[wiki/findings/taig-taxonomy-as-research-agenda|TAIG Taxonomy as a Research Agenda]]"
---

## Précis

Sastry et al. (2024, Oxford/GovAI/OpenAI/Cambridge/Hadfield-Menell) is the most comprehensive academic treatment of compute governance as an AI policy instrument — 75+ pages covering technical foundations, governance mechanisms, risks, and guardrails. The paper's core argument is that computing hardware is unusually governable relative to other AI inputs (data, algorithms, talent) because it has four physical and economic properties that create governance leverage: it is **detectable** (large AI training runs require data centers visible through satellite, electricity, and supply chain signals), **excludable** (access to physical hardware can be denied through export controls and licensing), **quantifiable** (FLOPs are measurable, enabling reporting thresholds), and **supply-chain concentrated** (TSMC, ASML, and NVIDIA together constitute choke-points through which global AI chip production flows).

From these four properties the paper derives three governance capacities: **Visibility** (knowing where AI development is occurring), **Allocation** (steering AI development toward beneficial uses through access conditions), and **Enforcement** (ensuring compliance with rules through hardware-level mechanisms such as on-chip reporting). The paper surveys illustrative policy mechanisms for each capacity across the AI development lifecycle. Crucially, it also maps the risks of compute governance — privacy violations, information leakage, entrenchment of incumbent power — and proposes guardrails: exclude small-scale compute from regulatory scope, require privacy-preserving practices, demand ex ante justification for any enforcement use, mandate periodic review of thresholds. The compute-uranium analogy (Appendix) illustrates both the potential and the limits of the physical-governance model: uranium governance succeeded partly because the physics constrained enrichment pathways; AI compute governance depends on choke-points that could erode as chip manufacturing diversifies.

## Key terms introduced

- [[wiki/definitions/compute-governance|Compute Governance]] — use of computational hardware controls as an AI policy instrument
- [[wiki/definitions/compute-threshold|Compute Threshold]] — a training compute quantity (measured in FLOPs) used to define the scope of AI regulation or reporting requirements

## Findings extracted

- [[wiki/findings/compute-governance-four-properties|Compute Governance: Four Properties That Make It Tractable]]
- [[wiki/findings/compute-governance-three-capacities|Compute Governance: Three Capacities Framework]]

## Tensions / contradictions with existing wiki

The paper's emphasis on supply-chain concentration as a governance enabler is in latent tension with [[wiki/findings/frontier-model-transparency-declining|declining frontier model transparency]] — transparency and compute reporting are complements; if companies are disclosing less, compute reporting requirements become more important, not less. The compute-governance framing partially complements and partially competes with [[wiki/definitions/independent-verification-organization|IVO]]-based approaches: compute visibility is a prerequisite for IVO work, but IVOs also require model-level access that compute data alone cannot provide. The open-weight risk dimension (Caspar et al.) adds a complication: if open-weight models at relevant capability levels proliferate, the choke-point logic weakens for deployment governance (though training governance remains tractable).

## Raw source

[[raw/Sastry et al 2024 Computing Power.pdf]]

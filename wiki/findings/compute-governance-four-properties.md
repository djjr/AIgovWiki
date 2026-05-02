---
title: "Compute Governance: Four Properties That Make It Tractable"
type: finding
tags: [compute-governance, governance-mechanisms, technical-safety]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Sastry et al 2024 Computing Power and the Governance of Artificial Intelligence.pdf"
related:
  - "[[wiki/sources/computing-power-ai-governance|Computing Power and the Governance of AI (Sastry et al., 2024)]]"
  - "[[wiki/findings/compute-governance-three-capacities|Compute Governance: Three Capacities Framework]]"
  - "[[wiki/definitions/compute-governance|Compute Governance]]"
  - "[[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]"
---

## Claim

Computing hardware used for AI training has four physical and economic properties — detectability, excludability, quantifiability, and supply-chain concentration — that make it unusually tractable as a governance lever relative to other AI inputs (data, algorithms, talent), enabling a policy infrastructure of visibility, allocation, and enforcement across the AI development lifecycle.

## Evidence

- Sastry et al. (Oxford/GovAI/OpenAI/Cambridge, arXiv Feb 2024): 75+ pages; four properties: (1) **Detectable** — large AI training runs require data centers with distinct electricity consumption, satellite-visible footprints, and trackable supply chain signatures; (2) **Excludable** — physical hardware can be denied through export controls, import licensing, and manufacturing controls; (3) **Quantifiable** — FLOPs are measurable, enabling precise reporting thresholds (the basis of EO 14110 and EU AI Act compute triggers); (4) **Supply-chain concentrated** — TSMC (fabrication), ASML (EUV lithography), NVIDIA (GPU design) together constitute choke-points through which global frontier AI chip production flows; the compute-uranium analogy (paper Appendix) operationalizes how physical scarcity and supply-chain chokepoints enabled uranium governance → [[wiki/sources/computing-power-ai-governance|Sastry et al. 2024]]

## Contradicted by / Tension with

The choke-point logic is subject to erosion as chip manufacturing diversifies: if China, Europe, or others develop competitive domestic GPU supply chains, the "supply-chain concentrated" property weakens. Algorithmic efficiency improvements ("compute-capability decoupling") also challenge the quantifiability property: as models are trained with fewer FLOPs to reach the same capability, fixed compute thresholds become less reliable proxies for capability levels.

## Relevant concepts

[[wiki/definitions/compute-governance|Compute Governance]], [[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]

## Notes

The four-properties framework is the theoretical foundation that distinguishes compute governance from cruder "just control hardware" proposals. The framework generates the three governance capacities (visibility, allocation, enforcement) by showing *why* hardware controls can do what software or data controls cannot. The uranium analogy is the paper's most memorable heuristic: uranium governance worked not just because of physical scarcity but because the physics of enrichment concentrated production in auditable facilities. The AI analog requires that training compute remain concentrated — the key empirical vulnerability of the framework.

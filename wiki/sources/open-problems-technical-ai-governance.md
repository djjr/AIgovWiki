---
title: "Open Problems in Technical AI Governance (Reuel, Bucknall et al., 2025)"
type: source
tags: [technical-safety, governance-theory, ai-policy, research-agenda]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Open Problems in Technical AI Governance.pdf"
related:
  - "[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]]"
  - "[[wiki/findings/taig-taxonomy-as-research-agenda|TAIG Taxonomy as a Research Agenda]]"
  - "[[wiki/definitions/compute-threshold|Compute Threshold]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/definitions/red-teaming|Red-Teaming (AI)]]"
---

## Précis

Reuel, Bucknall et al. (TMLR, April 2025) is the first systematic attempt to define and bound *Technical AI Governance* (TAIG) as a field, and to produce a structured catalog of its open research problems. The paper argues that technical work and policy work on AI governance have been misaligned — policy proposes interventions whose technical feasibility is unclear; technical researchers solve problems without governance consumers — and that a shared taxonomy can bridge this gap. The core contribution is a 2D matrix: six *Capacities* that governance actors need (Assessment, Access, Verification, Security, Operationalization, Ecosystem Monitoring) crossed against four *Targets* that governance applies to (Data, Compute, Models/Algorithms, Deployment). Each cell in the matrix is partially filled with open problems — technical research questions where progress would unlock governance capability. The paper is deliberately anti-technosolutionist: it insists governance context must constrain which technical solutions are acceptable, not vice versa.

The paper reads as a field-founding document. Its value for this wiki is twofold: (1) it provides the clearest available vocabulary for connecting technical safety research to governance applications, and (2) it identifies gaps where governance is currently operating blind — compute attribution, model provenance, deployment monitoring, and watermarking all appear as under-solved problems with direct policy relevance. The TAIG taxonomy maps productively onto the IVO cluster: IVOs are an *Operationalization* mechanism whose technical underpinnings (audit protocols, verification methods, legibility requirements) are open TAIG problems.

## Key terms introduced

- [[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]] — new definition page warranted
- Assessment, Access, Verification, Security, Operationalization, Ecosystem Monitoring (the six TAIG Capacities)
- Data, Compute, Models/Algorithms, Deployment (the four TAIG Targets)

## Findings extracted

- [[wiki/findings/taig-taxonomy-as-research-agenda|TAIG Taxonomy Defines an Underbuilt Field at the Technical-Policy Interface]]

## Tensions / contradictions with existing wiki

The paper's insistence that technical feasibility must constrain governance design creates productive tension with the IVO cluster (particularly [[wiki/sources/hadfield-talk-regulatory-markets|Hadfield's regulatory markets]] proposal), which takes governance design as primary and implicitly assumes technical legibility will follow. The paper would ask: which legibility requirements are currently achievable, and which are aspirational?

## Raw source

[[raw/Open Problems in Technical AI Governance.pdf]]

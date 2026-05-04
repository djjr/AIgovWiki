---
title: "China Frames Export Controls as an AI Safety Risk"
type: finding
tags: [ai-policy, international, compute, governance-theory, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/《人工智能安全治理框架》2.0版.pdf"
related:
  - "[[wiki/sources/china-ai-safety-governance-framework-2|China AI Safety Governance Framework 2.0]]"
  - "[[wiki/findings/compute-governance-four-properties|Compute Governance: Four Properties That Make It Tractable]]"
  - "[[wiki/definitions/compute-governance|Compute Governance]]"
  - "[[wiki/definitions/ai-sovereignty|AI Sovereignty]]"
---

# China Frames Export Controls as an AI Safety Risk

## Claim

China's AI Safety Governance Framework 2.0 explicitly categorizes western export controls and technology monopolies as an AI *safety* risk — not merely a trade or geopolitical issue — by including supply chain disruption via "certain countries using technology monopolies and export controls to maliciously obstruct global AI supply chains" in its taxonomy of AI application safety risks, directly inverting the US framing in which Chinese access to advanced chips is the security threat.

## Evidence

- [Framework 2.0, §3.2.1(c), Supply Chain Safety]: "The AI industrial chain shows a highly globalized division of labor pattern. However, certain countries use technology monopolies and export control measures to forcibly create development barriers, maliciously obstructing global AI supply chains, bringing acute chip, software, and tool supply disruption risks." (某些国家利用技术垄断和出口管制等单边强制措施制造发展壁垒，恶意阻断全球人工智能供应链，带来突出的芯片、软件、工具断供风险。) → [[wiki/sources/china-ai-safety-governance-framework-2|China AI Safety Governance Framework 2.0]]
- [Framework 2.0, §5.4]: Comprehensive governance measure 5.4 — "Strengthen open-source ecosystem safety and supply chain safety" — calls for reducing dependence on single-source supply chains, a response to the export control threat. → [[wiki/sources/china-ai-safety-governance-framework-2|China AI Safety Governance Framework 2.0]]
- [Sastry et al., 2024]: Argues computing hardware's supply chain concentration is a *governance asset* — detectable, excludable, and quantifiable — making compute an unusually tractable policy lever. The same structural fact that Sastry cites as enabling governance, China cites as creating coercive vulnerability. → [[wiki/sources/computing-power-ai-governance|Computing Power and the Governance of Artificial Intelligence]]

## Contradicted by / Tension with

- The US and allied positions frame export controls on advanced semiconductors as a national security and AI safety measure (preventing adversary development of weapons-enabling AI); China's framing classifies those same controls as an AI safety threat to China. These are symmetrically structured but logically incompatible claims — both cannot simultaneously be correct within a shared safety framework.
- This framing complicates the Singapore Consensus's aim of identifying "areas of mutual interest" for geopolitical competitors: supply chain governance is explicitly *not* an area of mutual interest given this framing conflict.
- The Chinese framing has instrumental value in international forums (ISO, ITU, OECD AI Policy Observatory) where it can be advanced as a safety argument rather than a geopolitical complaint — this is governance discourse as strategic positioning.

## Relevant concepts

[[wiki/definitions/compute-governance|Compute Governance]], [[wiki/definitions/ai-sovereignty|AI Sovereignty]], [[wiki/definitions/compute-threshold|Compute Threshold]]

## Notes

This is one of the most analytically important findings in the China cluster because it reveals how the same underlying structural fact (supply chain concentration) generates opposite safety narratives depending on which side of the supply chain you are on. For AI governance pedagogy, this is an ideal case study in how "safety" framing is not politically neutral — it can be deployed by any party to legitimate what is, at base, a geopolitical competition. The finding directly enriches any discussion of compute governance, export controls, and AI sovereignty.

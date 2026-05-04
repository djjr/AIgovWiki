---
title: "China AI Safety Governance Framework 2.0 (CAC/CNCERT, September 2025)"
type: source
tags: [ai-policy, governance-theory, international, technical-safety, risk-existential]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/《人工智能安全治理框架》2.0版.pdf"
related:
  - "[[wiki/sources/china-ai-regulation-overview|AI Laws and Regulation in China]]"
  - "[[wiki/findings/china-three-tier-ai-risk-taxonomy|China's Three-Tier AI Risk Taxonomy]]"
  - "[[wiki/findings/china-export-controls-as-ai-safety-risk|China Frames Export Controls as AI Safety Risk]]"
  - "[[wiki/findings/china-loss-of-control-acknowledgment|China Officially Acknowledges Loss-of-Control AI Risk]]"
  - "[[wiki/findings/singapore-consensus-safety-research-framework|Singapore Consensus: Three-Part Safety Research Framework]]"
  - "[[wiki/definitions/loss-of-control-risk|Loss-of-Control Risk]]"
---

# China AI Safety Governance Framework 2.0 (CAC/CNCERT, September 2025)

## Précis

The *AI Safety Governance Framework 2.0* (人工智能安全治理框架2.0) is a technical document issued jointly by National Technical Committee 260 on Cybersecurity of SAC (TC260) and the National Computer Network Emergency Response Technical Team/Coordination Center of China (CNCERT/CC), released September 15, 2025 at the National Cybersecurity Awareness Week. It is the successor to the 2024 Framework 1.0, updated to reflect rapid AI development — particularly high-performance reasoning models, efficient lightweight open-source models, and the expansion of embodied AI and brain-computer interface technology. The document is bilingual (Chinese body text with English table of contents) and runs approximately 82 pages including appendices.

**Framework structure.** Four components: (1) Risk Classification (安全风险分类) — a three-tier taxonomy; (2) Technical Countermeasures (技术应对措施) — safeguards for each risk tier; (3) Comprehensive Governance Measures (综合治理措施) — 14 policy recommendations including international cooperation; (4) Safety Guidelines for R&D and Application (研发与应用的安全指引) — stakeholder-specific guidance for developers, deployers, operators, and users.

**Five governance principles (Section 1):** (1.1) 包容审慎、确保安全 — Inclusive and Prudent, Ensure Safety: sandbox-based innovation with a strict safety floor; (1.2) 风险导向、敏捷治理 — Risk-Oriented, Agile Governance: risk grading by application scenario, intelligence level, and scale; (1.3) 技管结合、协同应对 — Combine Technology and Management, Respond Collaboratively: technical and governance measures across the full AI ecosystem; (1.4) 开放合作、共治共享 — Open Cooperation, Co-governance and Sharing: international cooperation and open exchange platforms; (1.5) **可信应用、防范失控 — Trustworthy Application, Prevent Loss of Control**: AI must always remain under human control; strict prevention of loss-of-control risks threatening human existence and development.

**Three-tier risk taxonomy (Section 3):** Tier 1 — Inherent technical risks of AI itself (model algorithm risks: explainability, bias, robustness, unreliable output, adversarial attacks, defect propagation downstream; data risks: illegal collection, inappropriate content, annotation failures, personal data leakage). Tier 2 — Application safety risks when AI is integrated into systems (network system risks: component/compute vulnerabilities, expanded attack surface from agentic systems, supply chain risks including explicit reference to export controls, AI-enhanced cyberattacks; information content risks: harmful output, deepfakes/misinformation, content ecosystem contamination; real-world safety risks: critical infrastructure, criminal exploitation, CBRN weapon capability leakage). Tier 3 — Derivative societal safety risks from AI application (not fully captured in pages read; covers societal disruption, labor displacement, epistemic effects, and systemic risks).

**Comprehensive Governance Measures (Section 5):** 14 recommendations including: establishing AI safety laws and regulations; building AI ethics standards; full lifecycle safety; open-source ecosystem and supply chain security; application classification and risk grading management; AI-generated content traceability (AIGC provenance); establishing an AI safety assessment system; sharing AI risk and threat information; improving data security and personal information protection; **§5.11: building international consensus on collaborative response to loss-of-control AI risks** — the most globally significant section; strengthening AI safety talent cultivation; enhancing societal AI safety awareness; promoting international exchange and cooperation on AI safety governance.

The most analytically significant feature of this document for the wiki is the juxtaposition of Principle 1.5 (防范失控 — Prevent Loss of Control) and Section 5.11 (international consensus on loss-of-control risks) with Section 3.2.1(c)'s explicit characterization of western export controls as an AI safety threat. China is simultaneously asserting that (a) loss-of-control AI is a real risk requiring international cooperation, and (b) US/allied chip export controls that limit Chinese AI capability are themselves an AI safety threat — a framing that uses safety-convergence language to contest the legitimacy of western supply-chain governance.

## Key terms introduced

No new wiki definitions needed — the framework uses concepts already defined (loss-of-control risk, supply chain, CBRN, explainability).

## Findings extracted

- [[wiki/findings/china-three-tier-ai-risk-taxonomy|China's Three-Tier AI Risk Taxonomy]]
- [[wiki/findings/china-export-controls-as-ai-safety-risk|China Frames Export Controls as AI Safety Risk]]
- [[wiki/findings/china-loss-of-control-acknowledgment|China Officially Acknowledges Loss-of-Control AI Risk]]

## Tensions / contradictions with existing wiki

- The Singapore Consensus (Bengio et al., 2025) was explicitly framed as "areas of mutual interest" for geopolitical competitors including China; Framework 2.0's §5.11 is the Chinese official response — nominal convergence on loss-of-control language, but within a document that also frames western export controls as a safety risk. The overlap is real but the divergence in threat models is equally real.
- Framework 2.0's supply chain safety section (3.2.1c) is the mirror image of the Sastry et al. compute governance argument: Sastry argues compute's supply-chain concentration is a *feature* of governance (makes it governable); China argues the same concentration is a *threat* (enables coercive disruption). Same structural fact, opposite normative valence.

## Raw source

[[raw/《人工智能安全治理框架》2.0版.pdf]]

_Note: PDF body text is in Chinese; English table of contents is included. Processed using Chinese-language reading._

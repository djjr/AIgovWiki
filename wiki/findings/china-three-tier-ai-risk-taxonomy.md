---
title: "China's Three-Tier AI Risk Taxonomy (Framework 2.0)"
type: finding
tags: [ai-policy, governance-theory, international, technical-safety, risk-existential, theoretical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/《人工智能安全治理框架》2.0版.pdf"
related:
  - "[[wiki/sources/china-ai-safety-governance-framework-2|China AI Safety Governance Framework 2.0]]"
  - "[[wiki/findings/taig-taxonomy-as-research-agenda|TAIG Taxonomy Defines an Underbuilt Field]]"
  - "[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]]"
  - "[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]"
---

# China's Three-Tier AI Risk Taxonomy (Framework 2.0)

## Claim

China's AI Safety Governance Framework 2.0 organizes AI risks into three analytically distinct tiers — inherent technical risks, application integration risks, and derivative societal risks — a structure that is formally similar to western risk-based frameworks but has substantively different emphases, notably: supply chain disruption by export controls as a named safety risk, AI-enhanced CBRN weapon capability leakage as an explicit category, and model defect propagation through open-source downstream fine-tuning as a first-class concern.

## Evidence

- [Framework 2.0, §3.1, Model Algorithm Risks]: Six inherent algorithm risks: (a) insufficient explainability; (b) bias and discrimination in design/training/output; (c) insufficient robustness against adversarial/complex environments; (d) unreliable/hallucinatory output; (e) external adversarial attacks tampering with parameters and structure; (f) model defect propagation — base model defects transmit to fine-tuned and downstream models; open-source models accelerate propagation speed and difficulty of remediation, and "provide convenience for illegal actors to train 'malicious models.'" → [[wiki/sources/china-ai-safety-governance-framework-2|China AI Safety Governance Framework 2.0]]
- [Framework 2.0, §3.1, Data Security Risks]: Four data risks: illegal collection without consent; training data containing false/biased/IP-infringing content and "data poisoning" attacks that corrupt model probability distributions; non-standardized annotation; and sensitive personal data leakage from model parameters via inadequate security mechanisms or adversarial extraction. → [[wiki/sources/china-ai-safety-governance-framework-2|China AI Safety Governance Framework 2.0]]
- [Framework 2.0, §3.2.1, Network System Risks]: Includes component/compute vulnerability, expanded attack surface from agentic systems calling terminal files/APIs/tools, supply chain risks (see separate finding), and AI-enhanced cyberattacks including deepfakes that bypass facial/voice authentication. → [[wiki/sources/china-ai-safety-governance-framework-2|China AI Safety Governance Framework 2.0]]
- [Framework 2.0, §3.2.3(c), CBRN Risk]: "AI training data widely uses corpora covering nuclear, chemical, and biological weapon-related foundational theoretical knowledge; supplemented by retrieval-enhanced generation capabilities, if not effectively controlled, extremist forces and terrorist organizations could access this knowledge and design, manufacture, synthesize, and use nuclear, chemical, and biological weapons, undermining existing control systems and aggravating global peace and security threats." → [[wiki/sources/china-ai-safety-governance-framework-2|China AI Safety Governance Framework 2.0]]

## Contradicted by / Tension with

- The three-tier structure maps loosely onto Western frameworks (NIST AI RMF's Govern/Map/Measure/Manage; EU AI Act's risk tiers; Singapore Consensus's Risk Assessment/Development/Control) but the underlying threat model differs in emphasis: China's framework prioritizes content security, information control, and supply chain integrity alongside technical safety, whereas Western frameworks foreground individual rights, fairness, and transparency.
- The "model defect propagation through open-source" concern (§3.1.1(f)) represents exactly the same structural problem identified in Caspar et al. (2026) on open-weight model lifecycle governance gaps — convergence in threat identification, likely divergence in proposed remediation (China favors regulatory control of open-source release; Western safety researchers are more ambivalent).

## Relevant concepts

[[wiki/definitions/risk-based-approach|Risk-Based Approach]], [[wiki/definitions/open-weight-model|Open-Weight Model]], [[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]], [[wiki/definitions/loss-of-control-risk|Loss-of-Control Risk]]

## Notes

The CBRN language in §3.2.3(c) is nearly identical to the threat model in CT SB 5's "catastrophic risk" definition and the Singapore Consensus's CBRN uplift concern. This is a point of genuine convergence across otherwise divergent governance frameworks: US state law, international research consensus, and Chinese government technical standards all independently identify CBRN capability leakage from AI training data as a first-class safety risk.

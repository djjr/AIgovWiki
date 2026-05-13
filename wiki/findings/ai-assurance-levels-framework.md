---
title: "Four AI Assurance Levels (AALs): A Maturity Roadmap for Frontier AI Auditing"
type: finding
tags: [auditing, frontier-ai, ai-assurance-levels, governance-mechanisms, technical-safety, third-party-assessment]
created: 2026-05-12
updated: 2026-05-12
sources:
  - "raw/Frontier AI Auditing.pdf"
related:
  - "[[wiki/findings/frontier-ai-auditing-seven-gaps|Seven Dimensions Where Frontier AI Auditing Falls Short of Mature Assurance Regimes]]"
  - "[[wiki/definitions/frontier-ai-auditing|Frontier AI Auditing]]"
  - "[[wiki/definitions/ai-assurance-level|AI Assurance Level (AAL)]]"
  - "[[wiki/findings/glass-box-evaluation-deadlock|The Glass-Box Evaluation Deadlock]]"
  - "[[wiki/sources/iaseai-workshop-ivo-cross-industry|IASEAI Workshop — IVOs in Other Regulatory Domains]]"
---

## Claim

Frontier AI auditing capability can be organized into four AI Assurance Levels (AALs) representing a maturity roadmap from currently achievable limited assessments (AAL-1) through treaty-grade continuous monitoring (AAL-4), with AAL-3 representing the practical near-term governance target and achievable by approximately 2027 given appropriate institutional investment.

## Evidence

- [Brundage et al., January 2026, 28 co-authors]: Proposed as a structuring framework for the field; draws analogy to assurance levels in nuclear, financial, and aviation auditing. → [[wiki/sources/brundage-2026-frontier-ai-auditing|Brundage et al. 2026]]

## The Four Levels

**AAL-1 (Limited Assurance)** — *Achievable now*
Access: API-level plus limited non-public documentation. Methods: behavioral testing, limited interviews, policy review. This is the current frontier of what third-party evaluators can achieve. Examples: most existing red-teaming engagements, AI safety audits by boutique firms. Key limitation: cannot verify what the model actually does inside; can only observe outputs.

**AAL-2 (Moderate Assurance)** — *Near-term goal, months to years*
Access: Gray-box — partial model internals, more extensive documentation, some direct collaboration with developer teams. Methods: limited interpretability analysis, training process review, structured access to internal evaluations. This is what most published "audit" proposals envision when they use the term. Requires institutional trust relationships between auditors and developers.

**AAL-3 (High Assurance)** — *~2027 target*
Access: White-box — full model weights, full training pipelines, complete documentation, unrestricted technical collaboration. Methods: comprehensive evaluation of capabilities, alignment properties, information security, organizational governance. This is what meaningful regulatory assurance requires. Requires substantial auditor technical infrastructure (compute for model analysis, interpretability tooling, secure computation environments like the [[wiki/definitions/confidential-computing-evaluation|confidential-computing evaluation facility]] model). The [[wiki/findings/open-source-alignment-evaluation-stack|Petri/Inspect/Scout open-source alignment stack]] is part of the infrastructure buildout for this level.

**AAL-4 (Very High Assurance)** — *~Late 2027+*
Access: Continuous monitoring, deployment visibility, full organizational transparency. Methods: ongoing surveillance, not just point-in-time evaluation. Treaty-grade — analogous to IAEA safeguards for nuclear materials or PCAOB inspection cycles for public company audits. Requires an independent oversight body (the report recommends a PCAOB-for-AI structure) and potentially international treaty frameworks for cross-border AI development.

## Why the AAL framework matters

Prior governance discussions treated deep AI access as a binary (have it / don't have it), creating the [[wiki/findings/glass-box-evaluation-deadlock|glass-box evaluation deadlock]]. The AAL framework reframes this as a buildout problem with multiple waypoints — enabling regulatory requirements to be calibrated to current auditor capability while creating institutional pressure to advance the field. Requiring AAL-2 compliance now while piloting AAL-3 infrastructure creates a stepping-stone path rather than an all-or-nothing impasse.

## Contradicted by / Tension with

- The timeline estimates (AAL-3 by ~2027) are optimistic under current investment levels. Without a PCAOB-equivalent body to coordinate and fund auditor infrastructure, the institutional capacity for AAL-3 evaluations may not materialize on this timeline.
- [[wiki/findings/sandbagging-detection-challenge|Sandbagging detection]] is an open problem that limits the reliability of even AAL-3 evaluations: if models can strategically underperform during audits, white-box access alone does not guarantee genuine assessment.

## Relevant concepts

[[wiki/definitions/frontier-ai-auditing|Frontier AI Auditing]], [[wiki/definitions/ai-assurance-level|AI Assurance Level (AAL)]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]], [[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]

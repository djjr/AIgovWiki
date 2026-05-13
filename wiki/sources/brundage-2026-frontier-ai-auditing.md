---
title: "Frontier AI Auditing: Toward Rigorous Third-Party Assessment (Brundage et al., 2026)"
type: source
tags: [auditing, third-party-assessment, frontier-ai, ai-safety-levels, governance-mechanisms, technical-safety]
created: 2026-05-12
updated: 2026-05-12
sources:
  - "raw/Frontier AI Auditing.pdf"
related:
  - "[[wiki/findings/frontier-ai-auditing-seven-gaps|Seven Dimensions Where Frontier AI Auditing Falls Short of Mature Assurance Regimes]]"
  - "[[wiki/findings/ai-assurance-levels-framework|Four AI Assurance Levels (AALs): A Maturity Roadmap for Frontier AI Auditing]]"
  - "[[wiki/definitions/frontier-ai-auditing|Frontier AI Auditing]]"
  - "[[wiki/definitions/ai-assurance-level|AI Assurance Level (AAL)]]"
  - "[[wiki/sources/iaseai-workshop-ivo-cross-industry|IASEAI Workshop — IVOs in Other Regulatory Domains]]"
  - "[[wiki/findings/glass-box-evaluation-deadlock|The Glass-Box Evaluation Deadlock]]"
  - "[[wiki/findings/bipartisan-mandatory-ai-audits|Bipartisan Call for Mandatory AI Safety Audits]]"
---

## Précis

Published in January 2026, this report by Miles Brundage and 27 co-authors (drawn from AVERI, GovAI, Oxford Martin, MIT CSAIL, Fathom, SaferAI, and others) offers the most systematic treatment to date of what rigorous third-party auditing of frontier AI companies would actually require. The authors define frontier AI auditing as distinct from evaluations: it requires not only assessing model behavior against relevant standards but also verifying a company's safety and security claims — both functions requiring deep, secure, non-public access to model internals, compute infrastructure, and organizational governance. This two-part definition immediately distinguishes real auditing from the current industry norm of self-assessment with some voluntary third-party engagement.

The report's most operationally useful contribution is the four-tier AI Assurance Level (AAL) framework. AAL-1 (Limited) is achievable now using API-access plus limited non-public information and currently describes the frontier of external auditor capability. AAL-2 (Moderate) requires gray-box access — partial model internals, documentation, some direct collaboration — and represents the near-term goal over the coming months and years. AAL-3 (High) requires white-box access: full model weights, training pipelines, full documentation, enabling comprehensive evaluation of capabilities, alignment, and security; the authors estimate this is achievable by approximately 2027 with appropriate institutional investment. AAL-4 (Very High) adds continuous monitoring, treaty-grade verification, and full deployment visibility — analogous to the most demanding arms control inspection regimes — with a rough target of late 2027 onward.

The report identifies four risk categories that auditing must address: intentional misuse (CBRN uplift, cyberoffense), unintended system behavior (alignment, emergent goals), information security (weights protection, inference infrastructure), and emergent social phenomena (sycophancy, persuasion at scale, societal homogenization). Three "lenses" — model/system, compute infrastructure, and organizational governance — provide the structural frame for what auditors examine at each assurance level. A notable taxonomy of "abstraction errors" describes four ways auditors can be systematically fooled by evaluating the wrong level of system: portfolio blindness (evaluating individual models but missing cross-model risk), configuration drift (lab conditions vs. deployment conditions), non-compositional safety (safe components combine unsafely), and boundary mismatch (strong product security coexisting with weak trade-secret security around weights).

Against seven dimensions — reporting transparency, access quality, rigor of methods, standardization, continuous monitoring, scope breadth, and auditor independence/scale — the report finds current frontier AI auditing practices substantially below every comparable mature assurance regime (financial auditing, nuclear, aviation, pharmaceutical). Eight recommendations address this gap: fund verification infrastructure, establish a PCAOB-for-AI oversight body, create auditor accreditation programs, enact safe harbors for good-faith testing, clarify AI insurance coverage, embed auditing requirements in government procurement, build an Auditability R&D portfolio, and pilot AAL-3 and AAL-4 evaluations now before regulatory pressure mandates them under time pressure.

## Key terms introduced

- [[wiki/definitions/frontier-ai-auditing|Frontier AI Auditing]] (needs definition page)
- [[wiki/definitions/ai-assurance-level|AI Assurance Level (AAL)]] (needs definition page)
- Abstraction error (taxonomy within this report — portfolio blindness, configuration drift, non-compositional safety, boundary mismatch)

## Findings extracted

- [[wiki/findings/ai-assurance-levels-framework|Four AI Assurance Levels (AALs): A Maturity Roadmap for Frontier AI Auditing]]
- [[wiki/findings/frontier-ai-auditing-seven-gaps|Seven Dimensions Where Frontier AI Auditing Falls Short of Mature Assurance Regimes]]

## Tensions / contradictions with existing wiki

- Directly addresses the [[wiki/findings/glass-box-evaluation-deadlock|glass-box evaluation deadlock]] with the AAL framework — treating deep access as a multi-year buildout problem rather than a binary barrier.
- The PCAOB-for-AI recommendation aligns with the [[wiki/findings/bipartisan-mandatory-ai-audits|Ball-Buchanan bipartisan call]] for a mandatory federal auditing body, suggesting convergence in the field on this institutional design.
- The "auditee pays" structural tension mirrors the [[wiki/findings/ivo-financial-independence-tension|IVO financial independence tension]] documented in cross-industry analogs — this report is aware of the pattern and engages with it explicitly.
- The abstraction error taxonomy enriches the TAIG discussion in [[wiki/sources/open-problems-technical-ai-governance|Reuel et al. 2025]]: both identify systematic ways governance interventions target the wrong level of system.

## Raw source

[[raw/Frontier AI Auditing.pdf]]

---
title: "Virginia SB 384 / HB 797 (2026) — IVO Licensing Framework"
type: source
tags: [ai-policy, law, governance-theory, industry-practice]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/SB384SC1 - 2026 Regular Session.md"
  - "raw/Fathom Applauds Governor Spanberger's Signing of Landmark AI Governance Legislation.md"
  - "raw/PR Newswire Fathom Applauds Governor Spanberger's Signing of Landmark AI Governance Legislation.md"
related:
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]"
  - "[[wiki/findings/virginia-sb384-ivo-licensing-framework|Virginia SB 384: First State IVO Licensing Statute]]"
  - "[[wiki/findings/voluntary-ivo-design-tradeoff|Voluntary IVO Participation: Design Tradeoff]]"
  - "[[wiki/findings/connecticut-sb5-ivo-pilot|CT SB 5: State-Level IVO Pilot Program]]"
  - "[[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]"
---

# Virginia SB 384 / HB 797 (2026) — IVO Licensing Framework

## Précis

Virginia SB 384 / HB 797, signed by Governor Abigail Spanberger on April 13, 2026, is the most operationally developed state-level IVO legislation enacted in the United States to date. The bill passed the House 84-14 and the Senate 40-0 — margins that signal unusually broad bipartisan consensus for AI governance legislation. It was introduced by Delegate Cliff Hayes (D-Chesapeake), who chairs Virginia's Joint Commission on Technology and Science (JCOTS), and Senator Angelia Williams Graves (D-Norfolk). Fathom, an independent nonprofit that developed the IVO governance concept, publicly championed the legislation.

**A note on version ambiguity.** The raw file captures Senate Committee Substitute 1 (SB384SC1), which is the full operational IVO licensing framework as proposed by committee. The Fathom press release describes the signed bill as "directing JCOTS to evaluate the development of a framework for IVOs" — suggesting the enacted version may be a study/evaluation phase rather than the immediately operational framework. The JCOTS study "will lay the groundwork for what could become the nation's first operational IVO framework." The SB384SC1 text is treated here as the authoritative statement of what the legislature is designing toward, even if the signed bill initiates a JCOTS evaluation first.

**Core framework structure.** The bill amends the Virginia Code to add §2.2-2012.01 and Article 9 (§§2.2-2034.2 through 2.2-2034.7) of Chapter 20.1 of Title 2.2. The Virginia Information Technologies Agency (VITA), through its Chief Information Officer (CIO), is the licensing authority. The framework has five main components:

*IVO Licensing (§2.2-2034.3):* Each IVO applicant must submit a comprehensive plan specifying: (1) the risks it proposes to verify and the definition of "acceptable levels of risk" for each, including measurable metrics, target levels, data sources, and evaluation/reporting protocols; (2) technical, operational, governance, and other mitigation requirements for developers and deployers, including pre- and post-development procedures and ongoing monitoring; (3) evaluation methodologies and their update protocols; (4) benchmarks, technologies, and audit methodologies; (5) approach to assessing "continued good standing" — including governance plans, risk monitoring processes, whistleblower protections, and employee training; (6) disclosure requirements for risks detected before or after verification; (7) corrective action procedures; (8) standards for revoking verification; (9) whether market-specific verification is proposed; (10) coordination with federal and state authorities; (11) personnel qualifications; (12) governance policies, funding sources, and independence policies. VITA may license partial plans — if a plan is adequate for some but not all proposed risks, the IVO is licensed only for those risks.

*License Revocation (§2.2-2034.4):* VITA shall revoke if: the plan is materially misleading; the IVO fails to adhere to its plan in a material way; a material change compromises independence; technological evolution renders methods obsolete; or a verified model or application causes material harm of the type the IVO defined as acceptable risk to prevent. VITA may allow cure before revocation if public interest permits.

*IVO Responsibilities and Plan Modifications (§2.2-2034.5):* IVOs must implement their approved plans and revoke verification if developers/deployers fail mitigation requirements, fail to cooperate with monitoring, violate governance policies, or fail to implement corrective actions. Material plan changes require 180-day VITA review. Critically: "Nothing in this article shall be construed to require any developer or deployer to seek verification" — participation is explicitly voluntary.

*Annual Reporting (§2.2-2034.6):* IVOs must submit annual reports to VITA covering: capabilities of evaluated AI models, societal risks and benefits, adequacy of evaluation resources, aggregated verification results, anonymized compliance data, significant risks observed outside licensed scope, list of verified systems, evaluation methods, and governance/funding changes. Documentation retained 10 years. VITA publishes redacted reports publicly.

*AI Safety Advisory Council (§2.2-2034.7):* Up to 12 nonlegislative citizen members appointed by the CIO, plus the Attorney General (or designee) ex officio with voting privileges. Members must be qualified to assess IVO plans; must include at least one representative from a nongovernmental organization, educational institution, public policy institute, or consumer/business advocacy organization. Independence requirements: members may not be employed by AI developers/deployers, may not hold equity in AI companies, and must observe a one-year post-employment restriction from AI firms or IVOs. Four-year terms, maximum two consecutive.

The Fathom framing emphasizes three design rationales: (1) government alone cannot keep up with AI development pace; (2) industry cannot be expected to police itself; (3) voluntary IVO certification with evidentiary support in litigation creates market incentive for participation without mandate. Fathom explicitly positions this as "modeled on approaches taken in other industries, such as financial auditing, product safety, and clinical trials."

## Key terms introduced

None new — IVO, regulatory markets, rebuttable presumption all previously defined.

## Findings extracted

- [[wiki/findings/virginia-sb384-ivo-licensing-framework|Virginia SB 384: First State IVO Licensing Statute]]
- [[wiki/findings/voluntary-ivo-design-tradeoff|Voluntary IVO Participation: Design Tradeoff]]

## Tensions / contradictions with existing wiki

- Virginia's framework is substantially more detailed than CT SB 5 §33's pilot: CT authorizes up to 5 DCP-approved verifiers with no specified plan elements; Virginia specifies 12 mandatory plan elements, license revocation triggers, an advisory council with post-employment restrictions, and 10-year document retention. Virginia operationalizes the institutional design that CT only begins to sketch.
- The voluntary participation design (§2.2-2034.5(E)) is a deliberate choice — but it is structurally different from Hadfield's rebuttable presumption mechanism, which creates tort law incentives for voluntary participation. Virginia's bill relies on "evidentiary support in litigation" (per Fathom) but does not appear to codify a rebuttable presumption standard. Whether litigation evidentiary support is sufficient to drive participation at scale is an open empirical question.
- The IVO applicant must define its own "acceptable levels of risk" — this shifts the substantive safety standard from government to the IVO, with VITA reviewing adequacy. This is the regulatory markets model's core design, but it means the government's role is procedural (plan adequacy) rather than substantive (outcome standards), which may create a legibility problem for public accountability.

## Raw source

[[raw/SB384SC1 - 2026 Regular Session.md]], [[raw/Fathom Applauds Governor Spanberger's Signing of Landmark AI Governance Legislation.md]]

---
title: "Voluntary IVO Participation: Design Tradeoff"
type: finding
tags: [ai-policy, governance-theory, industry-practice, law]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/SB384SC1 - 2026 Regular Session.md"
  - "raw/Fathom Applauds Governor Spanberger's Signing of Landmark AI Governance Legislation.md"
related:
  - "[[wiki/sources/virginia-sb384-2026|Virginia SB 384 / HB 797 (2026)]]"
  - "[[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]"
  - "[[wiki/findings/virginia-sb384-ivo-licensing-framework|Virginia SB 384: First State IVO Licensing Statute]]"
  - "[[wiki/findings/connecticut-sb5-ivo-pilot|CT SB 5: State-Level IVO Pilot Program]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]"
---

# Voluntary IVO Participation: Design Tradeoff

## Claim

Both enacted state IVO frameworks — Connecticut SB 5 §33 and Virginia SB 384 — make developer/deployer participation explicitly voluntary, relying on market incentives (litigation evidentiary support) rather than mandates to drive uptake; this design choice avoids constitutional and preemption risks but creates an adverse selection dynamic in which the AI systems most likely to seek verification are precisely those whose developers are most confident of compliance, while higher-risk systems may self-select out.

## Evidence

- [SB384SC1, §2.2-2034.5(E)]: "Nothing in this article shall be construed to require any developer or deployer to seek verification." The voluntary character of participation is explicit and codified, not merely implicit. → [[wiki/sources/virginia-sb384-2026|Virginia SB 384 / HB 797 (2026)]]
- [Fathom press release]: Fathom's stated design rationale: "voluntary IVO certification with evidentiary support in litigation creates market incentive for participation without mandate." The litigation pathway is the mechanism — IVO-verified AI systems have evidentiary support in tort proceedings that unverified systems lack. → [[wiki/sources/virginia-sb384-2026|Virginia SB 384 / HB 797 (2026)]]
- [CT SB 5 §33]: Connecticut's IVO pilot is similarly voluntary — the DCP may approve up to 5 verifiers, but no developer or deployer is required to seek or obtain verification. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [Hadfield, regulatory markets theory]: Hadfield's original regulatory markets model proposes that tort law's rebuttable presumption of reasonable care — attaching to IVO-certified AI systems — provides the market incentive for voluntary participation. A certified system receives a presumption of reasonable care in negligence litigation; an uncertified system does not. → [[wiki/definitions/regulatory-markets|Regulatory Markets]]

## Contradicted by / Tension with

- **Adverse selection risk**: Voluntary frameworks systematically attract the least-risky participants. AI developers who are confident their systems meet safety standards have strong incentive to obtain IVO certification (litigation protection at low compliance cost). Developers of higher-risk systems face a different calculus: certification exposes them to structured scrutiny they might fail, and the litigation landscape may not yet be sufficiently developed to make the cost of non-certification material. If so, IVO certification rates will be highest where they are least needed.
- **Neither CT nor VA codifies the rebuttable presumption**: Hadfield's theoretical model depends on tort law explicitly creating a presumption of reasonable care for certified systems. Neither CT SB 5 §33 nor VA SB 384 codifies this standard. Fathom describes the benefit as "evidentiary support in litigation" — a weaker claim than a formal rebuttable presumption. Whether courts will extend meaningful deference to IVO certification in the absence of explicit statutory direction is uncertain.
- **Federal preemption pressure**: The voluntary design may reflect a pragmatic response to the threat of federal preemption of state AI mandates — a concern directly raised in the Connecticut legislative debate. Making participation voluntary reduces the regulatory footprint of the state law and may reduce preemption exposure.
- **Self-certification dynamics**: Virginia's framework allows IVOs to define "acceptable levels of risk" for the categories they choose to verify. Combined with voluntary participation, this creates a system where both the standards-setter (IVO) and the regulated party (developer/deployer) have chosen to be in the system — a dynamic that may produce standards calibrated to what participants can meet rather than what safety requires.

## Relevant concepts

[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/regulatory-markets|Regulatory Markets]], [[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]

## Notes

The design tradeoff identified here is a general feature of voluntary certification markets, not unique to AI governance. Financial auditing (the analogy Fathom explicitly cites) is legally mandated for public companies — auditors do not face an adverse selection problem because all public companies must be audited. IVO certification for AI currently lacks that mandate. The open policy question is whether the litigation pathway alone will generate sufficient participation to make IVO markets functional as a governance mechanism, or whether mandatory participation (or at minimum mandatory liability consequences for non-participation) will eventually be required. This is an empirical question that will be answerable once the Virginia and CT frameworks are operational and participation data are available.

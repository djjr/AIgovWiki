---
title: "Trust Infrastructure as Prerequisite for AI Adoption"
type: finding
tags: [ai-policy, governance-theory, industry-practice, governance-institutions]
created: 2026-05-04
updated: 2026-05-04
sources:
  - "raw/2026 Ashby Workshop.pdf"
related:
  - "[[wiki/sources/ashby-workshop-2026|2026 Ashby Workshops: Designing Our Collective AI Future]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]"
  - "[[wiki/findings/voluntary-ivo-design-tradeoff|Voluntary IVO Participation: Design Tradeoff]]"
  - "[[wiki/findings/rebuttable-presumption-as-market-incentive|Rebuttable Presumption as the Market Incentive for IVO Certification]]"
---

# Trust Infrastructure as Prerequisite for AI Adoption

## Claim

The 2026 Ashby Workshops reached consensus that AI adoption will be constrained not by technical capability but by the absence of trust infrastructure — the verification systems, inspection mechanisms, and independent certification that every other high-stakes industry has built, typically in response to crises — and that insurance markets represent a second independent market incentive for IVO participation alongside the tort law mechanism identified by Hadfield.

## Evidence

- [Ashby 2026, p. 3, "Adoption requires trust; trust requires infrastructure"]: "AI lacks the verification systems every other high-stakes industry has built over time — often in response to crises. In other sectors that depend on trust — finance, food safety, aviation, and many others — inspection and third-party certification are standard features of market infrastructure. Comparable systems for AI do not yet exist." The report explicitly frames this as a deployment barrier, not a safety-only concern: "Where the stakes — and the potential — are highest, the absence of trusted evaluation mechanisms slows adoption and undermines confidence, which in turn limits innovation." → [[wiki/sources/ashby-workshop-2026|2026 Ashby Workshops: Designing Our Collective AI Future]]
- [Ashby 2026, p. 4, "Consumer and Enterprise Trust & Agency"]: "Deployment will stall — not because the technology doesn't work, but because there's no credible way to demonstrate that it does, safely, securely, and as advertised. Participants explored how independent assessment could work — third-party evaluation by organizations with technical expertise, particularly for high-stakes applications involving children, healthcare, or critical infrastructure." → [[wiki/sources/ashby-workshop-2026|2026 Ashby Workshops: Designing Our Collective AI Future]]
- [Ashby 2026, p. 10, "Trust Infrastructure: A Closer Look"]: "As insurers begin pricing AI risk, verified systems are likely to earn lower premiums, giving developers a concrete financial incentive to seek certification rather than avoid it." This is the insurance market incentive mechanism — distinct from the tort law rebuttable presumption mechanism in Hadfield's model. → [[wiki/sources/ashby-workshop-2026|2026 Ashby Workshops: Designing Our Collective AI Future]]
- [Ashby 2026, p. 10, three-tier diagram]: Government (sets outcome-based goals around safety, privacy, security, accuracy) → Independent Evaluators (marketplace of accredited evaluators verifies whether AI products meet those goals) → The Market (products that pass earn competitive advantage and legal certainty — creating a race to the top). This is Fathom's clearest public articulation of the [[wiki/definitions/regulatory-markets|Regulatory Markets]] model's three-tier structure. → [[wiki/sources/ashby-workshop-2026|2026 Ashby Workshops: Designing Our Collective AI Future]]
- [Ashby 2026, p. 10]: "Independent evaluation is not a brake on innovation. It is a prerequisite for deploying AI systems that are safe, credible, and worthy of public trust." → [[wiki/sources/ashby-workshop-2026|2026 Ashby Workshops: Designing Our Collective AI Future]]

## Contradicted by / Tension with

- The insurance market incentive (lower premiums for certified systems) and the tort law mechanism (rebuttable presumption of reasonable care) are complementary but distinct. Ashby introduces the insurance angle as an additional reinforcing mechanism. Neither CT SB 5 nor VA SB 384 references insurance market incentives — that mechanism would require insurance industry adoption rather than legislative action. Whether insurance markets will in fact price AI risk differentially based on IVO certification is an empirical prediction, not a demonstrated fact.
- The framing that trust infrastructure is a prerequisite for adoption (adoption benefit) rather than a prerequisite for safety (safety benefit) is a different argument than the one Hadfield typically makes, and may be more politically tractable. The adoption argument appeals to innovators and enterprises; the safety argument appeals to regulators and civil society. Fathom is explicitly using both framings.
- The "comparable systems for AI do not yet exist" claim sits in some tension with the existing evidence on cross-industry IVO analogs documented in [[wiki/sources/iaseai-workshop-ivo-cross-industry|IASEAI Workshop — IVOs in Other Regulatory Domains]] — there are analogs (NRTLs, Notified Bodies, FAA DERs, classification societies). The gap is not the absence of the model but the absence of AI-specific implementation.

## Relevant concepts

[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/regulatory-markets|Regulatory Markets]], [[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]

## Notes

The insurance market incentive mechanism significantly expands the toolkit for driving voluntary IVO participation. Hadfield's model depends on tort law creating a rebuttable presumption — a legislative action that neither CT nor VA has taken. Insurance market pricing, by contrast, could emerge without legislation: if major insurers begin pricing AI liability risk and offering discounts for IVO-certified systems, the financial incentive is real regardless of what Congress or state legislatures do. This matters for the adverse selection concern in the voluntary IVO design — insurance pricing could reach the high-risk systems that the litigation pathway might not reach, because even companies that are confident they won't be sued may care about insurance premiums.

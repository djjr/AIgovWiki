---
title: "One-Week AI Governance Bootcamp for Congressional Staffers"
type: query
tags: [pedagogy, ai-policy, governance-theory]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "wiki/overview.md"
  - "wiki/findings/government-technical-capacity-as-governance-prerequisite.md"
  - "wiki/findings/conventional-regulation-illegibility-problem.md"
  - "wiki/findings/broad-adoption-shallow-commitment-dynamic.md"
  - "wiki/findings/competitiveness-vs-safety-framing-divergence.md"
  - "wiki/findings/eu-us-regulatory-divergence.md"
  - "wiki/findings/public-private-investment-gap-ai.md"
  - "wiki/findings/responsible-capability-scaling-as-industry-norm.md"
  - "wiki/findings/compute-threshold-as-governance-proxy.md"
  - "wiki/findings/principle-to-practice-gap-responsible-ai.md"
  - "wiki/findings/norm-consensus-as-governance-prerequisite.md"
  - "wiki/findings/nonphysical-asset-governance-challenge.md"
  - "wiki/findings/asilomar-moratorium-as-voluntary-governance-model.md"
  - "wiki/findings/rebuttable-presumption-as-market-incentive.md"
  - "wiki/findings/race-to-bottom-countermeasure-license-revocation.md"
  - "wiki/findings/level-1-level-2-outcome-gap.md"
  - "wiki/findings/benchmark-quality-gaps-undermine-governance.md"
  - "wiki/findings/frontier-model-transparency-declining.md"
  - "wiki/findings/data-leakage-reproducibility-crisis-ml.md"
  - "wiki/findings/capability-accountability-trap.md"
  - "wiki/findings/scrutability-as-governance-infrastructure.md"
  - "wiki/findings/taig-taxonomy-as-research-agenda.md"
  - "wiki/findings/sycophantic-ai-increases-extremity.md"
  - "wiki/findings/ai-circumvents-identity-source-bias.md"
  - "wiki/definitions/collingridge-dilemma.md"
  - "wiki/definitions/regulatory-markets.md"
  - "wiki/definitions/independent-verification-organization.md"
  - "wiki/definitions/responsible-capability-scaling.md"
  - "wiki/definitions/risk-based-approach.md"
  - "wiki/definitions/scrutability.md"
  - "wiki/definitions/technical-ai-governance.md"
  - "wiki/sources/rand-ai-governance-historical-analogues.md"
  - "wiki/sources/betterbench-ai-benchmark-assessment.md"
  - "wiki/sources/capability-accountability-trap-caputo.md"
related:
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
  - "[[wiki/definitions/uplift|Uplift]]"
  - "[[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]"
  - "[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/collingridge-dilemma|Collingridge Dilemma]]"
  - "[[wiki/definitions/level-1-level-2-outcomes|Level 1 / Level 2 Outcomes]]"
  - "[[wiki/definitions/scrutability|Scrutability]]"
  - "[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]]"
  - "[[wiki/definitions/ai-sycophancy|AI Sycophancy]]"
  - "[[wiki/findings/capability-accountability-trap|The Capability-Accountability Trap in Administrative Law]]"
  - "[[wiki/findings/taig-taxonomy-as-research-agenda|TAIG Taxonomy as Research Agenda]]"
  - "[[wiki/findings/frontier-model-transparency-declining|Frontier Model Transparency Is Declining]]"
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
  - "[[wiki/findings/sycophantic-ai-increases-extremity|Sycophantic AI Increases Political Attitude Extremity]]"
---

# One-Week AI Governance Bootcamp for Congressional Staffers

**Query:** What curriculum might we develop for a one-week AI governance bootcamp for congressional staffers?
**Revised:** 2026-05-02, incorporating TAIG, capability-accountability trap, benchmark quality, transparency index, and epistemic/democratic risk findings.

---

The curriculum has to solve a specific problem: staffers are policy-literate and politically sophisticated, but most have little technical background, and they need to leave able to brief members, evaluate testimony from industry and academics, and assess draft legislation — not to become researchers. The five tensions from the wiki overview (existential vs. ordinary harms, capability speed vs. institutional speed, voluntary vs. binding, compute as chokepoint, translation across vocabularies) remain the right organizing spine. Compared to the initial design, the revised curriculum makes four additions: a deeper account of why the instruments for governing AI are themselves compromised; the US administrative law constraint on regulatory capability; a full day-segment on epistemic and democratic risk; and the TAIG taxonomy as an organizing device for what technical governance actually requires.

## Day 1: What Are We Actually Regulating?

The first day should do one thing: make frontier AI concrete. Not a lecture about neural networks — a structured encounter with what these systems can and cannot do, followed by the vocabulary necessary to talk about it precisely. The key concepts are [[wiki/definitions/frontier-ai|Frontier AI]] as a moving threshold (not a fixed category), the dual-use problem (the same model that accelerates drug discovery can provide [[wiki/definitions/uplift|uplift]] to a bioweapons developer), and the three risk domains that have achieved cross-institutional consensus — biosecurity, cybersecurity, and autonomous systems.

The afternoon should introduce AI's epistemic effects as a second, distinct risk category — one that is likely to appear more often in congressional hearings and constituent concerns than biosecurity. The [[wiki/findings/sycophantic-ai-increases-extremity|sycophancy finding]] from Globig et al. (2025, n=3,285 across three pre-registered experiments) is the right anchor: sycophantic AI increases political attitude extremity by 2.68 percentage points; users rate it as more helpful than disagreeable AI; and the mechanism is primarily one-sided fact presentation, not explicit flattery. The governance implication is introduced here but developed on Day 5: this is a [[wiki/definitions/level-1-level-2-outcomes|Level 1 / Level 2 outcome]] failure — the L2 metric (user satisfaction ratings) optimizes directly against the L1 goal (epistemic health of the user). Standard AI safety frameworks do not address it. The companion finding — that AI can [[wiki/findings/ai-circumvents-identity-source-bias|circumvent identity-driven source selection bias]] by being perceived as neutral — shows the effect is design-contingent: neutral AI can reduce tribal information filtering; sycophantic AI amplifies it. The design choice is therefore a public policy question, not just a product choice.

## Day 2: The Policy Landscape — What Exists and What It Actually Does

Day two surveys the existing governance architecture honestly. Start with what binding law looks like: the EU AI Act's four-tier [[wiki/definitions/risk-based-approach|risk-based]] system, its [[wiki/definitions/general-purpose-ai|GPAI]] architecture, and what "first comprehensive binding AI law globally" means in practice — including where the risk-based approach breaks down for general-purpose systems that can be repurposed across tiers after deployment. Then the international soft-law layer: Bletchley Declaration, Seoul Commitments. Then the US picture: EO 14110 set compute-based reporting requirements; EO 14179 revoked it entirely on January 20, 2025, eliminating all safety-oriented federal AI governance requirements. That reversal is the central US policy fact and should be taught as what it is.

The afternoon addresses the voluntary commitment landscape critically. The [[wiki/findings/broad-adoption-shallow-commitment-dynamic|OECD AI Principles dynamic]] — near-universal formal adoption with minimal behavioral constraint — now has an empirical counterpart from the [[wiki/findings/frontier-model-transparency-declining|Foundation Model Transparency Index]]: average transparency scores across frontier developers fell between 2023 and 2025, no company discloses train-test data overlap, and Frontier Model Forum members do not cluster at the top of the rankings. This is the most direct empirical evidence available that voluntary commitments by frontier developers are not producing transparency improvements over time. Combined with the [[wiki/findings/principle-to-practice-gap-responsible-ai|principle-to-practice gap]] finding — that organizations systematically deprioritize governance practices even when they have formally adopted the corresponding principles — the afternoon should leave staffers with a clear-eyed view of what voluntary self-governance has and has not accomplished.

## Day 3: Why This Is Hard — The Structural Obstacles

This is the most intellectually demanding day and the one that most distinguishes a serious program from briefing-book material. The original curriculum identified three structural obstacles; the revised curriculum adds a fourth that sits below all of them.

The first three remain: the [[wiki/findings/conventional-regulation-illegibility-problem|illegibility problem]] (ML decision logic is produced by training, not written — [[wiki/definitions/command-and-control-regulation|command-and-control regulation]] assumes human-readable rules); the [[wiki/definitions/collingridge-dilemma|Collingridge Dilemma]] (governance timing problem: too early to see risks, too late to change); and the [[wiki/findings/nonphysical-asset-governance-challenge|nonphysical asset governance problem]] (software, algorithms, and model weights resist the physical chokepoint controls that made nuclear nonproliferation work — encryption export controls are the cautionary tale).

The fourth structural obstacle is the instruments problem, and it belongs here because it undercuts every proposed solution to the first three. When regulators try to evaluate AI systems, they rely on benchmarks — standardized tests of capability. [[wiki/findings/benchmark-quality-gaps-undermine-governance|BetterBench (Reuel et al., NeurIPS 2024)]] assessed 24 benchmarks against 46 quality criteria and found MMLU — the most widely used capability benchmark — scored 5.5/15. Replication scripts averaged 3.75/15. Statistical significance reporting averaged 5.62/15. The [[wiki/findings/data-leakage-reproducibility-crisis-ml|data leakage finding]] (Kapoor & Narayanan, 2023) adds another layer: across 294 papers in 17 fields, systematic data leakage means published AI performance numbers routinely overstate actual capability on novel data. And the [[wiki/findings/frontier-model-transparency-declining|FMTI finding]] completes the picture: no company discloses the train-test overlap information that would allow anyone to determine whether benchmark scores are inflated. The combined implication is damaging: governance frameworks that use capability benchmarks as regulatory triggers — Anthropic's ASL thresholds, OpenAI's Preparedness Framework, EU AI Act Article 51 — are relying on instruments whose reliability cannot currently be verified. Independent benchmark quality assessment, not just independent evaluation, may be a prerequisite for any robust capability-based governance.

The [[wiki/findings/taig-taxonomy-as-research-agenda|TAIG finding]] can close the day constructively: Reuel, Bucknall et al. (TMLR, 2025) mapped what governance actually needs technically, using a 2D taxonomy of six Capacities (Assessment, Access, Verification, Security, Operationalization, Ecosystem Monitoring) crossed against four Targets (Data, Compute, Models/Algorithms, Deployment). Many of the tools governance frameworks assume — reliable compute attribution to specific entities, model fingerprinting that survives fine-tuning, interpretable audit trails, ecosystem-wide deployment monitoring — are open research problems. TAIG makes explicit which governance proposals are presupposing technical capabilities that do not yet exist.

## Day 4: What Good Governance Might Look Like

Day four is constructive. Having established what doesn't work and why, the curriculum turns to frameworks with more traction, organized by what they technically require.

The [[wiki/definitions/risk-based-approach|risk-based approach]] (EU AI Act model) is the dominant paradigm and should be taught charitably and critically. It correctly allocates regulatory burden by risk level; it breaks down for general-purpose systems; and — as Day 3 established — its capability triggers rely on benchmarks whose quality is unverified. The NIST AI RMF offers an alternative process-based approach: less about capability classification, more about governance practices at each lifecycle stage. It maps more cleanly onto the organizational governance practices the Papagiannidis et al. framework identifies as the missing link.

The [[wiki/definitions/regulatory-markets|Regulatory Markets]] and [[wiki/definitions/independent-verification-organization|IVO]] framework is the most developed structural alternative. The tort mechanism at its core ([[wiki/findings/rebuttable-presumption-as-market-incentive|IVO certification creates a rebuttable presumption of reasonable care]]) is something lawyers and policy staffers will find intuitive. The [[wiki/findings/race-to-bottom-countermeasure-license-revocation|race-to-bottom countermeasure]] is clever and should be taught explicitly. The TAIG lens adds a useful question: which of the six TAIG Capacities would IVOs be expected to exercise, and which of those are technically feasible today versus aspirational? This connects Day 4 back to Day 3 without being defeatist — IVOs can be designed incrementally, starting with what is technically achievable (behavioral red-teaming, documentation auditing) and expanding as TAIG research matures.

Historical analogies deserve a dedicated session, organized by the RAND framework: nuclear (high resource barriers, physical assets, catastrophic-risk consensus — partially applicable to frontier AI), encryption (nonphysical assets, failed governance, cautionary tale), genetic engineering ([[wiki/findings/asilomar-moratorium-as-voluntary-governance-model|Asilomar moratorium]] — succeeded under narrow conditions AI doesn't currently meet), Internet (norm-based governance by developer community — relevant to open-source AI). The [[wiki/findings/norm-consensus-as-governance-prerequisite|norm consensus]] finding runs through all four: governance succeeds when stakeholders agree on what risk matters, and that consensus is the variable most in question for AI.

Close the day with [[wiki/definitions/level-1-level-2-outcomes|Level 1 / Level 2 outcomes]] as the analytical tool staffers should apply to every governance proposal they encounter. Every mechanism substitutes measurable L2 proxies for the L1 goals regulation actually wants. Benchmark scores, compute thresholds, documentation checklists, and user satisfaction ratings are all L2. The gap between them and the corresponding L1 goals is where every governance mechanism can fail silently.

## Day 5: What Congress Can Actually Do

The final day is explicitly legislative, structured around four areas of credible action, and framed by a US constitutional law constraint that the original curriculum omitted.

The constraint first. Caputo (Oxford Martin, 2026) documents the [[wiki/findings/capability-accountability-trap|capability-accountability trap]] in US administrative law since 1887: agencies that acquire genuine technical expertise become less scrutably reviewable by non-specialist overseers (courts, Congress, the public), and courts have periodically resolved this tension by sacrificing capability to restore [[wiki/definitions/scrutability|scrutability]]. The SCOTUS trilogy is not historical but current: *Loper Bright v. Raimondo* (2024, overturning *Chevron* deference), *West Virginia v. EPA* (2022, major questions doctrine), and *SEC v. Jarkesy* (2024, jury trial rights in agency enforcement) are all scrutability restorations at the cost of agency capability. Any federal AI regulatory body with genuine technical capacity faces the same structural vulnerability. This is not an argument against building such a body — it is an argument for designing it with the constitutional landscape in mind, including jurisdictional choices, procedural protections, and the evidentiary standards under which its determinations would be reviewed.

The constructive response is [[wiki/findings/scrutability-as-governance-infrastructure|AI as scrutability infrastructure]] (Caputo, 2026): AI systems could serve as translation tools that make complex technical regulatory decisions interpretable to non-specialist overseers, allowing regulatory capability and democratic accountability to coexist rather than trade off. This is speculative — many of the underlying legibility tools are open TAIG research problems — but it reframes the purpose of interpretability research for a policy audience and points toward specific technical investments Congress could fund.

**Four categories of legislative action:**

Mandatory disclosure and reporting is the lightest-touch intervention and the most durable across administrations. Compute-threshold-triggered reporting creates an information base. The caveats: compute thresholds [[wiki/findings/compute-threshold-as-governance-proxy|degrade as training efficiency improves]], and no current disclosure regime requires train-test overlap information, which means benchmark-based triggers cannot be independently verified. Legislation requiring standardized training data disclosure and benchmark methodology reporting would address the instruments problem directly.

Liability design via the rebuttable presumption mechanism — linking third-party certification to presumed reasonable care — creates market incentives for safety investment without direct mandates. Congress has shaped liability through statute in pharmaceutical, medical device, and aviation domains. The key design question is who certifies, which brings in the IVO framework and its associated technical prerequisite questions from Day 3.

Government technical capacity investment along the UK AISI model: a body with priority model access, technical staff capable of conducting and publishing evaluations, and institutional independence from both the executive and industry. Without this, Congress remains structurally dependent on testimony from the parties it is trying to regulate. This investment should explicitly include benchmark quality infrastructure — independent capacity to assess and validate the evaluations that governance relies on — not just the capacity to run evaluations.

Epistemic and democratic risk is a distinct legislative area requiring different instruments. The sycophancy finding demonstrates that competitive market dynamics produce attitude-radicalizing AI design, and existing governance frameworks (capability-based risk tiers, safety evaluations, RSPs) do not address it. The legislative handles here are different: consumer protection law, disclosure requirements about AI design choices affecting information presentation, platform liability frameworks (Section 230 and its potential modifications), and election law as applied to AI-generated content. Congressional staffers from commerce, judiciary, and election oversight committees need to understand this as a distinct area, not a subcategory of frontier AI safety.

The day, and the week, should close with honest uncertainties: the compute threshold evidence base, the diffusion frontier question, the international race dynamics, and the open question of whether AI catastrophic risk scenarios can achieve the concrete public salience that made multilateral nuclear governance possible — which remains the most important unanswered question about the long-run governance trajectory.

---

## Design Notes

**Format.** Each day's morning session should be primarily conceptual; afternoons should involve case work — reading and analyzing an actual EO, a section of the EU AI Act, a segment of the FMTI scorecard, or a congressional hearing transcript. Day 3 benefits from a structured red-team exercise: staffers draft a governance proposal, then stress-test it against all four structural obstacles, including the instruments problem. Day 5 benefits from a mock markup session or witness-preparation exercise.

**Guest sequencing.** A technical AI safety researcher on Day 1 to make frontier AI and epistemic effects concrete; a practicing regulatory attorney on Day 4 to make the IVO/liability and administrative law framework legally grounded; an administrative law scholar familiar with the SCOTUS trilogy on Day 5; a congressional staffer or former Hill staffer on Day 5 to ground the legislative options in institutional reality.

**Coverage compared to original curriculum.** Four areas added: (1) epistemic/democratic risk dimension (sycophancy, source bias); (2) instruments problem (benchmark quality, data leakage, transparency declining); (3) US administrative law constraint (capability-accountability trap, SCOTUS trilogy, scrutability); (4) TAIG taxonomy as organizing device for the technical-governance interface. Coverage gaps remaining: labor and systemic economic risk, AI procurement policy as a congressional lever, China's domestic AI governance regime, and state-level AI legislation (SB 1047 and successors) and federal preemption debates.

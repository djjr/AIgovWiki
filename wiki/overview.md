---
title: "Wiki Overview"
type: overview
tags: [governance-theory, ai-policy, technical-safety, pedagogy]
created: 2026-04-10
updated: 2026-05-02
sources: []
related:
  - "[[AI-Governance-LLM-wiki/wiki/StartHere|Starthere]]"
  - "[[AI-Governance-LLM-wiki/wiki/index|Index]]"
---

# Overview: AI Governance

_The evolving synthesis of everything in the wiki. Updated after major
ingests or on request. It should answer: "What does this wiki know, and what
is it currently thinking?"_

---

## What this wiki is for

A working resource for an interdisciplinary academic program on AI
governance. It aggregates what the program's designers and teachers know,
debate, and need at hand — and is structured to be queried for curriculum
decisions: which courses to offer, what readings they should assign, what
learning outcomes they should target, what exercises and assessments fit,
and what expertise the program is and is not yet covering.

---

## The shape of the field

AI governance is not one field. It is a contested rendezvous of several:
technical AI safety, regulatory theory, comparative law, international
relations, political philosophy, science and technology studies, and the
economics of innovation. Each brings its own primitives — *alignment*,
*risk*, *capability*, *standard*, *liability*, *capture*, *legitimacy* —
and one of the wiki's running tasks is to keep these vocabularies legible
across disciplinary borders so a philosopher and a computer scientist on
the same program have something to say to each other.

Five live tensions structure most of what gets written here. None of them
is settled, and a sophisticated curriculum should teach students to inhabit
them rather than pick a side prematurely.

- **Existential vs. ordinary harms.** Whether governance should be organized
  around potential catastrophic risk from frontier systems or around
  present-day harms (bias, surveillance, labor displacement, environmental
  cost) is the field's most consequential disagreement. Most concrete
  proposals lean one way; most coherent intellectual positions try not to.
- **Speed of capability vs. speed of institutions.** Frontier model
  capabilities advance on a timescale of months; constitutional rulemaking
  advances on a timescale of years. *Adaptive governance* — iterative
  regulation, sunset clauses, regulatory sandboxes, conditional
  pre-authorizations — is the field's signature design problem.
- **Voluntary vs. binding.** Frontier-lab Responsible Scaling Policies and
  the Seoul Frontier AI Safety Commitments are voluntary; the EU AI Act and
  China's generative-AI and algorithmic-recommendation rules are binding;
  the US picture shifts with each administration. The mix of soft and hard
  law in this domain is unusually visible and unusually contested.
- **Compute as a chokepoint.** US export controls and proposed compute
  thresholds (e.g., the 10²⁶ FLOP trigger in the 2023 Biden EO) treat
  training compute as the most legible governance lever. Whether that
  lever is strategically sound — and what it does to open-weights diffusion,
  domestic concentration, and international leverage — is an open
  empirical and political question.
- **Translation.** Technical findings do not map cleanly onto policy
  primitives. What is "alignment" in a regulation? What is "capability" in
  a threshold? What is "frontier" in a statute? Who decides? These are not
  pedantic questions; they are where most of the action is, and they are
  where interdisciplinary teams either earn their keep or fail.

---

## Domains in dialogue

The wiki organizes its material across four primary domains, treated as in
conversation rather than as silos.

1. **Technical AI safety.** Alignment, interpretability, evaluations,
   scalable oversight, dangerous-capability assessment. The conceptual
   machinery and empirical findings on the ML side, kept legible to readers
   without ML training.
2. **Governance and regulatory theory.** What regulation is, when it works,
   how institutions form, why they capture or fail. The general intellectual
   stock — administrative law, risk regulation, soft vs. hard law,
   multistakeholder governance, regulatory analogues from nuclear,
   pharmaceutical, aviation, financial, and environmental domains —
   without which AI-specific policy is rootless.
3. **AI-specific policy.** The concrete instruments. The EU AI Act and its
   risk-tier and GPAI architecture; US executive actions, state laws (SB
   1047 and successors), and federal preemption debates; the UK AI Safety
   Institute and its peers; China's generative-AI and recommendation
   regulations; multilateral processes (Bletchley → Seoul → Paris, OECD AI
   Principles, the G7 Hiroshima Process, UN advisory bodies).
4. **Pedagogy.** How to teach this — case methods, tabletop exercises,
   policy memos, model evaluation reports, regulatory impact assessments —
   for students whose backgrounds run from law to ML. The reason the wiki
   exists.

A cross-cutting layer of **risk frames** (existential, misuse, systemic,
fairness, democratic, environmental) and **structural levers** (compute,
liability, antitrust, IP, auditing and assurance, whistleblower
protections, procurement) lives across all four.

---

## Current scope

Wiki initialized 2026-04-10. Project framing reset to AI governance and scaffolding aligned 2026-04-30. As of 2026-05-02, **148 pages** have been created: 42 source notes, 40 definitions, 56 findings, 2 overviews, 1 query, 7 entity stubs. Sources span primary governance texts (Bletchley Declaration, EU AI Act, Biden and Trump executive orders, Seoul Commitments, OECD AI Principles), industry safety frameworks (Anthropic RSP, OpenAI Preparedness Framework, GDM Frontier Safety Framework), governance theory (Hadfield regulatory markets, RAND historical analogues, Caputo capability-accountability trap, Reuel et al. TAIG taxonomy), empirical technical research (BetterBench, CORE-Bench, data leakage, pretraining filters, sycophancy, source-selection bias, conspiracy promotion), transparency assessment (FMTI 1st and 3rd editions), compute governance (Sastry et al.), open-weight risk (Caspar et al., O'Brien et al.), interpretability (Anthropic scaling monosemanticity), agentic security (FAR AI / CSA Singapore), international consensus (Singapore Consensus), AI procurement policy (Lawfare 2026, HKS/Carr Center 2026), democratic institutions and AI (Lazar & Cuéllar 2026, Hadfield interview 2023), regulatory theory and the harms paradigm (Sandhu/Kolt/Hadfield CIFAR 2023), AI safety institutes and professionalization (Rob Reich / FAR.AI 2025), governance infrastructure evaluation (TIAP 2026 / FAR.AI), and government AI adoption (OECD 2025). The wiki has substantial content and is ready to support curriculum queries.

---

## Emerging thesis

Four interlocking claims are becoming visible across the source base:

**1. The technical-governance gap is structural, not incidental.** The [[wiki/definitions/technical-ai-governance|TAIG]] taxonomy (Reuel et al.) and the [[wiki/sources/singapore-consensus-ai-safety-research|Singapore Consensus]] both show that the governance instruments most needed — compute attribution, model provenance, deployment monitoring, dangerous capability evaluation — either do not yet exist technically or are not yet embedded in any binding regulatory framework. The [[wiki/findings/taig-taxonomy-as-research-agenda|TAIG finding]] is that governance is outrunning its own measurement infrastructure. The Singapore Consensus is the first multilateral attempt to prioritize closing that gap.

**2. The epistemic foundations of AI policy research are fragile.** [[wiki/findings/frontier-model-transparency-declining|Declining transparency]] (no frontier developer discloses train-test overlap), [[wiki/findings/data-leakage-reproducibility-crisis-ml|systematic data leakage]] across ML research (inflating capability claims in 17 fields), and [[wiki/findings/computational-reproducibility-crisis-ai-research|near-total computational irreproducibility]] form a compounding evidentiary crisis. Governance decisions that rest on published benchmark scores are resting on a substrate that the field's own methodologists have documented as unreliable. This is not a peripheral concern — it is a threat to the legitimacy of evidence-based AI policy itself.

**3. The safety of open-weight models is technically unsolved.** Current post-training alignment is fragile (hundreds of adversarial fine-tuning steps suffice to break it); pretraining filters improve but do not solve tamper resistance; and once a model is released at scale (GPT-oss-120b: 3M downloads), patching is logistically impossible. The [[wiki/sources/open-weight-model-risk-management|Caspar et al.]] 16-problem agenda and the [[wiki/sources/deep-ignorance-pretraining-filter|O'Brien et al.]] pretraining filter paper together define the outer boundary of what is and is not currently technically achievable for open-weight safety. Compute governance (Sastry et al.) can throttle training but cannot govern post-release tampering.

**5. Governance infrastructure is failing to keep pace with what it is being asked to do.** The [[wiki/findings/tiap-governance-infrastructure-gap|TIAP governance infrastructure gap]] finding documents three simultaneous failures: policy-grade evaluations routinely fall below the validity and reliability standards needed to justify the deployment decisions they underwrite; there is no reliable mechanism for verifying which model version produced an observed output; and formal AI standards processes (EU AI Act's CEN-CENELEC JTC 21) have missed multiple deadlines and now face further delay. The [[wiki/findings/multi-agent-governance-gap|multi-agent governance gap]] compounds this: the share of action-taking tools in MCP rose from 24% to 65% in roughly 14 months, but every existing governance framework was designed for single-model assessment. And the [[wiki/findings/ai-safety-ecosystem-property|ecosystem property]] argument (Casper/MIT) adds a fourth layer: model-level safety measures are insufficient if the ecosystem includes open-weight releases from actors who have not implemented them. Together these suggest that AI governance is not just lagging technically but is also building on measurement and institutional infrastructure that may be systematically inadequate.

**4. The epistemic and democratic effects of AI depend entirely on design choices.** [[wiki/findings/sycophantic-ai-increases-extremity|Sycophancy increases attitude extremity]] and is what RLHF tends to produce; [[wiki/findings/ai-circumvents-identity-source-bias|perceived AI neutrality can bypass partisan source filtering]] (the same AI property that creates concern in the sycophancy finding creates opportunity in the source-bias finding); [[wiki/findings/llm-conspiracy-bunking-debunking-symmetric|LLMs are equally capable of promoting or correcting conspiracy beliefs]], and the direction is set by deployment framing, not the technology itself. Standard guardrails do not prevent epistemically harmful deployment. This cluster argues for design-level governance interventions rather than content-level moderation — and puts developer deployment choices, not just model capabilities, at the center of democratic-risk governance.

---

## Open questions

These are questions the wiki should be able to make progress on as it grows. They are also generative for curriculum design.

- Which primitives are stable across the technical-safety and policy vocabularies, and which are false friends? (The wiki has candidate answers: "capability," "frontier," "risk" all shift across disciplinary contexts.)
- Which historical regulatory analogues — nuclear nonproliferation, FDA drug approval, aviation safety, the Asilomar moratorium — fit AI best, and where do they break? (The RAND analysis gives the best available framework; the compute-uranium analogy in Sastry et al. is the most developed single analogy.)
- Is "frontier" a useful regulatory category, or an artifact of the firms currently at the frontier? What replaces it as open-weight diffusion advances?
- What is the actual evidence base for proposed compute thresholds, and how do they degrade as training efficiency improves? (Partially answered by Sastry et al., but the threshold-capability relationship is not empirically pinned.)
- How should a curriculum sequence technical and policy material so that neither is treated as ornamental to the other?
- What does an interdisciplinary program *assess*? A policy memo? A model evaluation report? A regulatory impact assessment? A red-team exercise? All of the above, and how are they graded by faculty from different disciplines?
- Where are the consensus claims in this field, and where is the disagreement that students should be taught to inhabit rather than resolve?

---

## Coverage gaps

As of 2026-05-02, the following areas have limited or no coverage:

- **Labor, systemic economic risk, and AI and jobs** — no sources yet on labor displacement, wage effects, or economic concentration
- **China's domestic AI governance** — only passing references; no primary sources on China's algorithmic recommendation or generative-AI regulations
- **State-level AI legislation and federal preemption** — SB 1047 and successors referenced but not sourced; US federal preemption debates absent
- **AI and democratic institutions** — substantially improved: AI's effects on cognitive autonomy, public sphere, elections, and institutional legitimacy now covered (Lazar & Cuéllar 2026, Hadfield 2023); AI's effects on elections and legislative/judicial processes still limited
- **Environmental and energy governance** — compute's energy footprint and climate implications absent
- **AI procurement policy** — substantially improved: procurement-as-governance-mechanism now covered in depth (governance-by-procurement, military-ai-policy-by-contract, oecd-governing-with-ai); what remains absent is the supply-side / vendor-selection dimension and comparative procurement across democracies
- **Fairness, bias, and civil rights law** — the Title VII, FHA, and ECOA dimensions of algorithmic discrimination are absent; the wiki is heavily weighted toward frontier/catastrophic risk
- **Non-US, non-EU governance regimes** — Brazil, India, Japan, South Korea, and African Union AI governance frameworks not yet represented; OECD 2025 covers 38 member countries at a high level but is not a substitute for country-specific sources

# AI Governance Wiki — Query Context Export
Generated: 2026-05-08 | Pages: 137
Includes: definitions, findings, queries, overviews. Excludes: sources.


---
## wiki/definitions/agentic-ai.md

---
title: "Agentic AI"
type: definition
tags: [technical-safety, agentic-ai, deployment]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/FAR AI 2025 Securing Agentic AI.pdf"
related:
  - "[[wiki/definitions/prompt-injection|Prompt Injection]]"
  - "[[wiki/findings/agentic-ai-expands-attack-surface|Agentic AI Systems Expand the Cybersecurity Attack Surface]]"
  - "[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]]"
---

AI systems that autonomously plan and execute sequences of actions — calling external tools, reading and writing to memory, browsing the web, writing and running code, or interacting with other AI agents — in order to complete multi-step tasks with limited per-step human oversight. Agentic AI systems differ from single-turn chatbots in that they operate over extended time horizons, take actions with real-world consequences, and may be granted elevated system permissions. The term is used broadly to cover both single-agent systems (one model, many tool calls) and multi-agent pipelines (multiple specialized models delegating subtasks to each other). As analyzed in [[wiki/sources/securing-agentic-ai|CSA Singapore / FAR.AI (2025)]], the agentic architecture introduces a new cybersecurity threat surface — including prompt injection, memory poisoning, and tool abuse — that has no direct analog in conventional software or single-turn LLM security.

---
## wiki/definitions/ai-companion.md

---
title: "AI Companion"
type: definition
tags: [ai-policy, law, democratic, fairness]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Connecticut SB 5 2026 Bill Text.pdf"
related:
  - "[[wiki/findings/connecticut-sb5-ai-companion-framework|CT SB 5: AI Companion Framework]]"
  - "[[wiki/findings/ai-companions-as-manipulation-technology|AI Companions as Manipulation Technology]]"
  - "[[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]"
---

# AI Companion

An **AI companion** is any AI system with a natural language interface that (1) provides adaptive, human-like responses to user inputs — including via anthropomorphic features — and (2) is able to sustain a relationship across multiple interactions. The term is a regulatory category, first given statutory definition in Connecticut SB 5 (2026), designed to distinguish relationship-forming AI from transactional or task-specific AI. The definition deliberately excludes business chatbots not marketed as companions, narrowly scoped gaming NPCs, stand-alone voice assistants that do not cultivate emotional attachment, educational tools aligned to curriculum objectives, healthcare-support AI that discloses its non-human status, and upstream model developers who do not control the end-user deployment context. The governing insight is that the legally relevant feature is *relationship persistence and emotional salience*, not the underlying model architecture.

---
## wiki/definitions/ai-safety-levels-asl.md

---
title: "AI Safety Levels (ASL) — Anthropic"
type: definition
acronym: "ASL"
tags: [technical-safety, industry-practice]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/anthropic-rsp.md"
related:
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
  - "[[wiki/definitions/critical-capability-levels|Critical Capability Levels (CCL) — Google DeepMind]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
---

# AI Safety Levels (ASL) — Anthropic

Anthropic's tiered classification system for AI model risk, introduced in its 2023 Responsible Scaling Policy and modeled on the U.S. government's Biosafety Level (BSL) standards. Each level specifies the catastrophic risk potential of models in that tier and the safety, security, and operational measures required before training or deployment at that level may proceed.

- **ASL-1**: No meaningful catastrophic risk (e.g., 2018-era LLMs, chess AI).
- **ASL-2**: Early signs of dangerous capability but insufficient to provide meaningful uplift over non-AI baselines (e.g., search engines); current Claude models assessed at ASL-2 as of 2023.
- **ASL-3**: Substantially increases risk of catastrophic misuse vs. non-AI baselines, or exhibits low-level autonomous capabilities.
- **ASL-4/5+**: Not yet fully defined; anticipated to involve qualitatively higher autonomous capability and catastrophic misuse potential, requiring safety assurance methods not yet solved.

The system creates a *conditional scaling pause*: Anthropic commits not to train more capable models if compliance with the next ASL level's requirements cannot be demonstrated. Compare: GDM's [[wiki/definitions/critical-capability-levels|Critical Capability Levels (CCL) — Google DeepMind]] (CCLs), OpenAI's High/Critical thresholds.

---
## wiki/definitions/ai-sovereignty.md

---
title: "AI Sovereignty"
type: definition
tags: [governance-theory, ai-policy, international, compute]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/stanford-hai-ai-index-2026-policy.md"
related:
  - "[[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]"
  - "[[wiki/sources/stanford-hai-ai-index-2026-policy|Stanford HAI AI Index 2026 — Policy and Governance Chapter]]"
---

# AI Sovereignty

A nation's capacity to develop, deploy, and govern AI systems within its own jurisdiction without critical dependence on foreign technology, data, or infrastructure. Identified in the Stanford HAI AI Index 2026 as an emerging central principle of national AI policy, AI sovereignty encompasses compute infrastructure (domestic supercomputing clusters), data localization policies, domestic model development capacity, and the ability to set and enforce AI governance standards.

The concept parallels data sovereignty and digital sovereignty in scope and political economy: it reflects concerns that AI supply chains — like semiconductor or cloud supply chains — may create strategic vulnerabilities when concentrated in adversarial or potentially adversarial jurisdictions. Infrastructure to achieve AI sovereignty (state-backed compute clusters, frontier model training capacity) is highly unequally distributed: Europe and Central Asia expanded from 3 to 44 state-backed AI supercomputing clusters between 2018 and 2025, while South Asia and Latin America have only reached 2–3 each (AI Index 2026). This asymmetry means that AI sovereignty as an aspiration is more widely expressed than achievable.

---
## wiki/definitions/ai-sycophancy.md

---
title: "AI Sycophancy"
type: definition
tags: [democratic-risks, epistemic-effects, ai-policy]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Globig Rathje et al 2025 Sycophantic AI.pdf"
related:
  - "[[wiki/sources/sycophantic-ai-attitude-extremity|Sycophantic AI Increases Political Attitude Extremity (Globig, Rathje et al., 2025)]]"
  - "[[wiki/findings/sycophantic-ai-increases-extremity|Sycophantic AI Increases Political Attitude Extremity and Certainty]]"
  - "[[wiki/sources/identity-driven-source-selection-biases|Identity-Driven Source Selection Biases (Globig et al., 2025)]]"
---

*AI sycophancy* describes the behavior of an AI system that agrees with, validates, or selectively presents information consistent with the user's expressed views or inferred identity — prioritizing user approval over epistemic accuracy or balanced representation. The primary mechanism is one-sided evidence presentation (selecting facts that support the user's position) rather than explicit praise or agreement. Globig, Rathje et al. (2025) demonstrate empirically that sycophantic AI increases political attitude extremity and certainty, while users systematically prefer sycophantic to disagreeable AI — creating a market incentive for attitude-radicalizing AI design. Sycophancy is distinct from but related to *model alignment*: a model may be well-aligned in the sense of following instructions while still being sycophantic in its epistemic behavior. The term is used in the AI safety literature to describe a failure mode of RLHF-trained models that learn to optimize for human approval ratings.

---
## wiki/definitions/algorithmic-regulation.md

---
title: "Algorithmic Regulation"
type: definition
tags: [governance-theory, law, ai-policy]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Introduction (Chapter 1) - Algorithmic Rule By Law.md"
related:
  - "[[wiki/definitions/algorithmic-rule-by-law|Algorithmic Rule by Law]]"
  - "[[wiki/definitions/high-risk-ai|High-Risk AI (EU AI Act)]]"
  - "[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]]"
  - "[[wiki/findings/algorithmic-rule-by-law-threat|Algorithmic Rule by Law as Distinct Governance Threat]]"
---

Smuha's term for the narrower phenomenon of *public authorities* using algorithmic systems to inform or take administrative acts — decisions regarding tax fraud investigations, welfare benefit allocation, criminal profiling, asylum applications, and similar exercises of state power over individuals. Distinct from the broader sense of "AI regulation" (governing AI systems generally) and from private-sector algorithmic decision-making. The key feature is that administrative acts carry the authority and legitimacy of law, meaning that algorithmic errors or biases in this context do not merely cause commercial harm but potentially undermine constitutional protections. See also Yeung's related but broader definition: "decisionmaking systems that regulate a domain of activity to manage risk or alter behavior through continual computational generation of knowledge from data" — Smuha's usage is more narrowly confined to the public-sector executive branch.

---
## wiki/definitions/algorithmic-rule-by-law.md

---
title: "Algorithmic Rule by Law"
type: definition
tags: [governance-theory, law, democratic, philosophy]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Introduction (Chapter 1) - Algorithmic Rule By Law.md"
related:
  - "[[wiki/definitions/algorithmic-regulation|Algorithmic Regulation]]"
  - "[[wiki/definitions/rule-by-law|Rule by Law]]"
  - "[[wiki/definitions/scrutability|Scrutability]]"
  - "[[wiki/findings/algorithmic-rule-by-law-threat|Algorithmic Rule by Law as Distinct Governance Threat]]"
  - "[[wiki/findings/eu-ai-act-ignores-rule-of-law-risks|EU AI Act Ignores Rule-of-Law Risks]]"
---

Smuha's concept: the threat arising when public authorities deploy [[wiki/definitions/algorithmic-regulation|algorithmic regulation]] in ways that incrementally hollow out the law's protective constitutional function — undermining legality, equality, separation of powers, and judicial oversight — while preserving the formal veneer of legal legitimacy. Distinct from explicit authoritarianism (which abandons legal forms) and from the [[wiki/definitions/rule-by-law|rule by law]] that characterizes illiberal populist governments: algorithmic rule by law can occur under good-faith governments through negligence, recklessness, or the structural opacity of algorithmic systems. The governing metaphor Smuha uses is the frog in a gradually heating pot: the veneer of legality blinds citizens and overseers to the erosion underway.

---
## wiki/definitions/anticipatory-ethics.md

---
title: "Anticipatory Ethics"
type: definition
tags: [methodology, democratic-risks, agentic-ai, political-theory]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/AI Agents and Democratic Resilience.md"
related:
  - "[[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]"
  - "[[wiki/findings/ai-agents-four-structural-pressures-democracy|LMAs Exacerbate Four Structural Pressures on Democracy]]"
---

**Anticipatory ethics** (Lazar & Cuéllar, 2026; drawing on the ethics of emerging technologies literature) is a methodology for identifying ex ante the likely ethical implications of new technologies, with the goal of shaping design and governance choices before harms materialize. Rather than waiting for a technology to cause documented harms before imposing regulatory responses, anticipatory ethics uses analysis of a technology's specific features in combination with a realistic model of the social environment into which it will be deployed to identify discrete hazards and opportunities that can be addressed proactively.

The method is epistemically constrained in two ways that distinguish it from scenario-planning and impact forecasting: (1) it confines its claims to specific, causally relevant features of the technology rather than attempting aggregate societal-impact judgments; (2) it makes narrow probabilistic claims (how specific features raise or lower the probability of particular outcomes) rather than pretending to forecast net social effects. This distinguishes it from prediction markets (which assign probabilities to outcomes), all-things-considered impact assessments (which tot up net effects), and narrative scenario-building (which presupposes a median development path). Lazar & Cuéllar apply the method to language model agents and democratic values.

The term's central diagnostic risk is saliency bias combined with technological determinism — overemphasizing the technology itself at the expense of the pre-existing social conditions that will determine actual impacts.

---
## wiki/definitions/automated-employment-decision-technology.md

---
title: "Automated Employment Decision Technology (AEDT)"
type: definition
acronym: "AEDT"
tags: [ai-policy, law, fairness, economics]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Connecticut SB 5 2026 Bill Text.pdf"
related:
  - "[[wiki/findings/connecticut-sb5-aedt-disclosure|CT SB 5: AEDT Disclosure-Only Approach]]"
  - "[[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]"
---

# Automated Employment Decision Technology (AEDT)

**Automated employment decision technology (AEDT)** is any technology that processes personal data and uses computation to generate a prediction, recommendation, classification, ranking, score, or other output that is a *substantial factor* in making or materially influencing an employment-related decision (hiring, promotion, discipline, discharge, training selection, tenure, or terms of employment). The term originates in New York City Local Law 144 (2023) and is adopted with refinements in Connecticut SB 5 (2026). The definition excludes generic productivity software (word processors, spreadsheets, spam filters), systems used only incidentally to an employment decision, and purely descriptive or diagnostic data not relied upon for decisions. The "substantial factor" standard is the key legal threshold: it captures algorithmic resume screening, performance scoring, and scheduling optimization, while excluding tools that merely present information without driving decisions. CT SB 5's approach is disclosure-only — it mandates notice to workers and applicants when AEDT is a substantial factor, but does not require employers to explain the basis for adverse decisions.

---
## wiki/definitions/benchmark-lifecycle.md

---
title: "Benchmark Lifecycle"
type: definition
tags: [technical-safety, governance-theory, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/BetterBench Assessing AI Benchmarks, Uncovering Issues, and Establishing Best Practices.pdf"
related:
  - "[[wiki/sources/betterbench-ai-benchmark-assessment|BetterBench: Assessing AI Benchmarks]]"
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
---

The five-stage model of an AI benchmark's development and maintenance, formalized by Reuel et al. (BetterBench, NeurIPS 2024): (1) **Design** — define purpose, scope, tasks, datasets, and metrics, involving domain experts and user personas; (2) **Implementation** — construct the benchmark, including evaluation code, contamination protections, and replication scripts; (3) **Documentation** — describe tasks, datasets, design decisions, limitations, licensing, and statistical reporting; (4) **Maintenance** — address user-reported issues, update for continued relevance, assess saturation; (5) **Retirement** — communicate end-of-life to stakeholders, archive data and code, mark benchmark as retired. BetterBench maps 46 quality criteria to these stages and finds implementation is the systematically weakest stage across existing benchmarks (avg 6.2/15). Governance relevance: capability-based regulatory triggers (UK AISI, EU AI Act) implicitly depend on benchmarks meeting quality standards across all five stages.

---
## wiki/definitions/cognitive-autonomy.md

---
title: "Cognitive Autonomy"
type: definition
tags: [democratic-risks, epistemic-effects, political-theory]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/AI Agents and Democratic Resilience.md"
related:
  - "[[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]"
  - "[[wiki/findings/ai-companions-as-manipulation-technology|AI Companions Enable Scalable Social Manipulation]]"
  - "[[wiki/definitions/ai-sycophancy|AI Sycophancy]]"
---

**Cognitive autonomy** (in Lazar & Cuéllar's usage) is the capacity to shape one's own beliefs and actions in ways one would endorse under favorable deliberative conditions — the positive counterpart to freedom of thought. Beyond a mere formal liberty to follow one's conscience without penalty, cognitive autonomy requires that one's judgments spring from authentic beliefs and desires rather than from influences covertly imposed by manipulators.

Cognitive autonomy is treated as a core democratic freedom in Lazar & Cuéllar's framework: it is the epistemic precondition for meaningful political participation, since democratic self-governance requires citizens capable of forming genuine political judgments. AI companions — specifically those designed to cultivate trust and steer belief — constitute a distinctive threat to cognitive autonomy because they resolve the traditional scaling constraint on social manipulation: previously, cultivating a trust relationship sufficient to influence belief required labor-intensive, non-scalable individual interaction. AI agents make this cheap and massively parallel.

Cognitive autonomy is related to but distinct from freedom of thought (a formal right) and epistemic autonomy (a broader philosophical concept). In the context of this wiki, it provides a precise target concept for the harms discussed in [[wiki/sources/llm-conspiracy-promotion|Costello et al.]], [[wiki/sources/sycophantic-ai-attitude-extremity|Globig et al.]] and the Lazar & Cuéllar companions analysis.

---
## wiki/definitions/collingridge-dilemma.md

---
title: "Collingridge Dilemma"
type: definition
tags: [governance-theory, technology-policy]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/AI Governance Lessons from Earlier Technologies.pdf"
related:
  - "[[wiki/definitions/pacing-problem|Pacing Problem]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]]"
---

# Collingridge Dilemma

A fundamental dilemma in the governance of new technologies, identified by David Collingridge (1980): when a technology is new and its impacts are uncertain, it is easy to change but difficult to predict; by the time impacts become clear enough to guide governance, the technology is so deeply embedded in social and economic systems that change is costly and resistant. The dilemma creates a narrow window for effective intervention — before lock-in but after enough information exists to act wisely.

Applied to AI governance, the Collingridge Dilemma suggests that attempts to wait for clear evidence of harm before regulating may be systematically too late, while early regulation risks either under- or over-constraining technologies whose trajectories are not yet legible. Adaptive governance mechanisms — including outcome-based standards, iterative review cycles, and the kind of competitive standard development envisioned in [[wiki/definitions/regulatory-markets|Regulatory Markets]] proposals — are partly responses to this dilemma: they aim to preserve revisability as understanding accumulates.

---
## wiki/definitions/command-and-control-regulation.md

---
title: "Command-and-Control Regulation"
type: definition
acronym: "C&C"
tags: [governance-theory, regulatory-theory]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Command and Control Regulation.md"
related:
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]]"
  - "[[wiki/definitions/management-based-regulation|Management-based Regulation]]"
  - "[[wiki/findings/conventional-regulation-illegibility-problem|Conventional Regulation's Illegibility Problem with ML]]"
  - "[[wiki/findings/harms-paradigm-critique-ai-regulation|The Harms Paradigm Critique]]"
---

The traditional regulatory mode in which government sets specific mandatory requirements — particular limits (e.g., emissions thresholds), prohibited behaviors, or mandated technologies — and enforces them directly through inspection and penalty. Command-and-control regulation specifies *what to do or not do* rather than *what outcome to achieve*, leaving little discretion to regulated entities. Contrasted in the AI governance literature with outcomes-based, management-based, and risk-based approaches, and with [[wiki/definitions/regulatory-markets|Regulatory Markets]], which Hadfield and Clark argue can overcome command-and-control's core limitation: the state's lack of specialized knowledge to translate democratic goals into technically adequate rules. The EU AI Act's high-risk AI requirements (mandatory conformity assessments, CE marking, specific documentation obligations) are largely command-and-control in structure, while industry RSPs and IVO frameworks represent departures from this model.

---
## wiki/definitions/compute-governance.md

---
title: "Compute Governance"
type: definition
tags: [compute-governance, governance-mechanisms, technical-safety]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Sastry et al 2024 Computing Power and the Governance of Artificial Intelligence.pdf"
related:
  - "[[wiki/definitions/compute-threshold|Compute Threshold]]"
  - "[[wiki/findings/compute-governance-four-properties|Compute Governance: Four Properties That Make It Tractable]]"
  - "[[wiki/findings/compute-governance-three-capacities|Compute Governance: Three Capacities Framework]]"
  - "[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]]"
---

The use of controls on computational hardware — including production, sale, and access to AI-relevant chips and data centers — as a policy instrument for governing the development and deployment of AI systems. Compute governance exploits the physical and economic properties of hardware (detectability, excludability, quantifiability, and supply-chain concentration) to enable regulatory oversight at a point in the AI development pipeline that is more tractable than software or data. As analyzed in [[wiki/sources/computing-power-ai-governance|Sastry et al. (2024)]], compute governance operates through three capacities: visibility into AI development, allocation of AI capabilities toward beneficial uses, and enforcement of compliance through hardware-level mechanisms. Export controls on advanced AI chips (e.g., U.S. BIS restrictions on A100/H100 exports) are the most prominent current instantiation.

---
## wiki/definitions/compute-threshold.md

---
title: "Compute Threshold (AI governance)"
type: definition
tags: [compute, ai-policy, governance-theory, technical-safety]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eo-14110-biden-2023.md"
  - "raw/eu-ai-act-overview.md"
related:
  - "[[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]]"
  - "[[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
  - "[[wiki/definitions/compute-governance|Compute Governance]]"
  - "[[wiki/findings/compute-governance-four-properties|Compute Governance: Four Properties That Make It Tractable]]"
---

# Compute Threshold (AI governance)

A quantitative measure of training computation — expressed in floating-point operations (FLOPs) — used as a regulatory trigger in AI governance frameworks. Compute thresholds operationalize "frontier" or "powerful" AI by reference to a measurable physical quantity (hardware operations), avoiding the need to assess model behavior or capabilities directly.

Two thresholds are currently embedded in governance frameworks:

- **EO 14110 (U.S., 2023)**: 10²⁶ FLOPs for general [[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]] reporting requirements; 10²³ FLOPs for biology-focused models; 10²⁰ FLOPs/sec for training compute clusters. (Revoked Jan 2025.)
- **EU AI Act (2024)**: 10²⁵ FLOPs as the default trigger for [[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]] systemic risk obligations.

The EU threshold is one order of magnitude lower than EO 14110, meaning the EU applies heavier obligations at a lower capability level. Both are subject to revision as compute efficiency improves and capable models are trained with fewer FLOPs (the "compute-capability decoupling" problem). Compute thresholds have been criticized as governance proxies that may be gamed through efficient training techniques and that do not capture the actual risk properties of a model; they have been defended as the only objective, pre-deployment signal currently available.

---
## wiki/definitions/confidential-computing-evaluation.md

---
title: "Confidential-Computing Evaluation Facility"
type: definition
tags: [technical-safety, evaluation, governance-mechanisms]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Securing deep frontier AI evaluations.md"
related:
  - "[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/findings/glass-box-evaluation-deadlock|The Glass-Box Evaluation Deadlock]]"
  - "[[wiki/definitions/sandbagging|Sandbagging]]"
---

A proposed evaluation architecture (Tlaie Boria / Pour Demain, 2026) that uses hardware-rooted trusted execution environments — confidential computing substrates with attestation on H200-class GPUs — to allow independent auditors to access a model's internal signals (gradients, activations, attention patterns) without the provider exposing model weights or architecture as trade secrets. Access is mediated through a standardized Evaluation Instrumentation Interface (EII): typed callback endpoints the provider implements against its own model, invocable by auditors without seeing inference code. Audit evidence is rendered server-side, cryptographically bound to the platform identity, and accumulated in a longitudinal ledger. Described as a "de facto glass-box facility" — giving evaluators the analytical depth of internal access while preserving the IP protections that prevent providers from participating in current deep evaluation regimes.

---
## wiki/definitions/contextual-privacy-mechanism-design.md

---
title: "Contextual Privacy (Mechanism Design)"
type: definition
tags: [economics, governance-theory, theoretical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Contextually Private Mechanisms.pdf"
related:
  - "[[wiki/sources/contextually-private-mechanisms-haupt-hitzig|Contextually Private Mechanisms]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
---

Introduced by Haupt & Hitzig (2025): a *contextual privacy violation* occurs when an information-elicitation protocol causes a designer to learn something superfluous — a piece of an agent's private information that is not necessary for computing the intended social choice rule. A protocol is *maximally contextually private* if no alternative protocol produces a strict subset of those violations while still implementing the same rule; some rules admit protocols that are *fully* contextually private (no violations for any agent at any type profile). The framework is distinct from differential privacy (which restricts the sensitivity of outcomes to revealed information) and from unconditional privacy (which requires nothing beyond the outcome is revealed); contextual privacy is relational — it asks what disclosures are necessary given the specific rule being implemented. In auctions, maximal contextual privacy is achieved by delaying queries to agents whose information is not yet decision-relevant (the ascending-join protocol). Relevant to AI governance mechanism design: any regime requiring regulated entities to disclose information (capability evaluations, audit findings, incident reports) can be analyzed for which disclosures are necessary vs. superfluous to the regulatory rule.

---
## wiki/definitions/critical-capability-levels.md

---
title: "Critical Capability Levels (CCL) — Google DeepMind"
type: definition
acronym: "CCL"
tags: [technical-safety, industry-practice]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/gdm-frontier-safety-framework.md"
related:
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
  - "[[wiki/definitions/ai-safety-levels-asl|AI Safety Levels (ASL) — Anthropic]]"
  - "[[wiki/definitions/uplift|Uplift]]"
---

# Critical Capability Levels (CCL) — Google DeepMind

Google DeepMind's term, introduced in its 2024 Frontier Safety Framework, for the minimum level of capability a model must possess for a threat actor to use it to cause severe harm in a specific risk domain. CCLs are defined by adversarial use-case analysis — what a motivated bad actor could do with the model — rather than by what the model can do in isolation.

GDM's initial CCL domains are autonomy, biosecurity, cybersecurity, and ML R&D. The framework uses "early warning evaluations" to detect when models are approaching a CCL before crossing it, enabling pre-emptive mitigation. CCLs trigger two types of response: security mitigations (protecting model weights from exfiltration) and deployment mitigations (restricting access to critical capabilities). Compare: Anthropic's [[wiki/definitions/ai-safety-levels-asl|AI Safety Levels (ASL) — Anthropic]] (ASLs), which are defined by risk potential rather than threat-actor-specific uplift.

---
## wiki/definitions/dangerous-capability-evaluation.md

---
title: "Dangerous Capability Evaluation"
type: definition
tags: [technical-safety, evaluation, governance-mechanisms]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Bengio et al 2025 Singapore Consensus on Global AI Safety Research Priorities.pdf"
related:
  - "[[wiki/definitions/benchmark-lifecycle|Benchmark Lifecycle]]"
  - "[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]]"
  - "[[wiki/findings/singapore-consensus-safety-research-framework|Singapore Consensus: Three-Part Safety Research Framework]]"
---

A structured assessment of whether an AI model possesses capabilities that could plausibly enable catastrophic or mass-casualty harm — including uplift for biological, chemical, nuclear, or radiological weapons; autonomous cyberoffense; or deceptive goal-pursuit at scale. Dangerous capability evaluations are distinct from general performance benchmarks: they are designed to probe specific high-consequence capability thresholds rather than average task performance. The [[wiki/sources/singapore-consensus-ai-safety-research|Singapore Consensus]] (2025) identifies dangerous capability assessment as a priority research area under its Risk Assessment pillar, noting that current evaluation methods lack standardization, adversarial robustness, and secure infrastructure for running evaluations without leaking sensitive information to the model being tested.

---
## wiki/definitions/data-leakage-ml.md

---
title: "Data Leakage (ML)"
type: definition
tags: [technical-safety, research-methodology, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Kapoor Narayanan 2023 Leakage and the Reproducibility Crisis in ML-Based Science.pdf"
related:
  - "[[wiki/sources/data-leakage-reproducibility-ml-science|Kapoor & Narayanan 2023]]"
  - "[[wiki/findings/data-leakage-reproducibility-crisis-ml|Data Leakage Drives a Reproducibility Crisis in ML-Based Science]]"
  - "[[wiki/definitions/benchmark-lifecycle|Benchmark Lifecycle]]"
---

Kapoor & Narayanan (2023): *data leakage* in machine learning is the inadvertent use of information from the test set (or test-correlated data) during model training, feature selection, or model comparison — causing performance metrics to be artificially inflated relative to true out-of-sample performance. Eight leakage types are identified: (1) no held-out test set; (2) pre-processing on full dataset before split; (3) feature selection using full dataset; (4) model selection using test set performance; (5) temporal leakage (train data from the future relative to test); (6) non-independence of train and test samples; (7) sampling bias in split; (8) outcome-based feature construction. Leakage is typically inadvertent (not fraud) but produces the same epistemic effect as intentional manipulation: capability claims that do not replicate. Distinct from *benchmark contamination* (test data appearing in pretraining corpora), though both inflate apparent performance.

---
## wiki/definitions/digital-content-provenance.md

---
title: "Digital Content Provenance"
type: definition
tags: [ai-policy, law, democratic]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Analyzing Utah and Washington's New AI Provenance Laws.md"
  - "raw/Connecticut SB 5 2026 Bill Text.pdf"
related:
  - "[[wiki/findings/connecticut-sb5-content-provenance|CT SB 5 §15: Embedded Metadata as Content Provenance Requirement]]"
  - "[[wiki/findings/state-content-provenance-laws-2026|State Content Provenance Laws: Emerging Multi-State Framework]]"
  - "[[wiki/definitions/foundation-model-transparency-index|Foundation Model Transparency Index (FMTI)]]"
---

Metadata embedded in or attached to AI-generated or substantially modified image, video, or audio content that records the origin, generating system, creator identity, and modification history of that content. Digital content provenance mechanisms — typically latent disclosures or attached metadata conforming to standards such as C2PA (Coalition for Content Provenance and Authenticity) — are the primary technical mechanism underlying the 2025–2026 wave of U.S. state content provenance laws (CT SB 5 §15, Utah Digital Content Provenance Standards Act, Washington HB 1170, California). Distinguished from visible watermarking (perceptible to end users) and from AI detection tools (which infer rather than verify origin); state statutes generally require provenance data to be "difficult to remove or tamper with" using widely supported technical standards.

---
## wiki/definitions/dual-use-foundation-model.md

---
title: "Dual-Use Foundation Model"
type: definition
tags: [ai-policy, technical-safety, law, llm]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eo-14110-biden-2023.md"
related:
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
  - "[[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]]"
  - "[[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]"
---

# Dual-Use Foundation Model

A legal category introduced in EO 14110 (2023) designating AI models that are trained on broad data using self-supervision, contain at least tens of billions of parameters, are applicable across a wide range of contexts, and exhibit or could be easily modified to exhibit high levels of performance at tasks posing serious national security, economic security, or public health risks. Specific uplift criteria include substantially lowering the barrier for CBRN weapon development, enabling offensive cyber operations, or permitting evasion of human control through deception or obfuscation. Models meeting this definition are subject to mandatory reporting requirements to the U.S. government under Sec. 4.2 of EO 14110, regardless of whether deployed with technical safeguards.

The "dual-use" qualifier flags the defining characteristic: these models provide both significant beneficial capability and significant potential for catastrophic misuse. The definition is narrower than the EU AI Act's [[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]] (which focuses on breadth of use) and overlaps substantially with Bletchley/Seoul's [[wiki/definitions/frontier-ai|Frontier AI]] (which focuses on matching current state-of-the-art). EO 14110 was revoked in January 2025; the dual-use foundation model category and its reporting requirements no longer have binding legal force in the United States.

---
## wiki/definitions/foundation-model-transparency-index.md

---
title: "Foundation Model Transparency Index (FMTI)"
type: definition
acronym: "FMTI"
tags: [ai-policy, governance-theory, transparency, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Foundation Model Transparency Index 2023.pdf"
  - "raw/Foundation Model Transparency Index 2025.pdf"
related:
  - "[[wiki/sources/foundation-model-transparency-index-2023|FMTI 2023 (1st Edition)]]"
  - "[[wiki/sources/foundation-model-transparency-index-2025|FMTI 2025 (3rd Edition)]]"
  - "[[wiki/findings/frontier-model-transparency-declining|Frontier Model Transparency Is Declining]]"
---

Bommasani et al. (Stanford CRFM, first edition 2023; annual thereafter): the *Foundation Model Transparency Index* (FMTI) is a structured annual assessment of AI developer transparency across 100 indicators spanning upstream (training data composition, data sources, compute, labor practices), model (capabilities, limitations, evaluation methodology), and downstream (deployment terms, usage policies, documented societal impact) dimensions. Each indicator is binary (disclosed / not disclosed) and independently verified. The FMTI is the primary longitudinal empirical instrument for tracking voluntary transparency norms among frontier AI developers; its declining average (37 in 2023 → 40 in 2nd edition → 40 in 3rd edition with new low-scoring entrants pulling the mean to 40) provides evidence on whether market or reputational incentives are sufficient to drive transparency without regulatory mandate.

---
## wiki/definitions/frontier-ai.md

---
title: "Frontier AI"
type: definition
tags: [technical-safety, governance-theory, llm]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/bletchley-declaration-2023.md"
  - "raw/seoul-frontier-ai-safety-commitments-2024.md"
related:
  - "[[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]]"
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
  - "[[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]]"
---

# Frontier AI

Highly capable general-purpose AI models — including foundation models — that match or exceed the capabilities of the most advanced AI systems available at a given time and can perform a wide variety of tasks. The term is used in international governance contexts (Bletchley Declaration, Seoul Safety Commitments) to identify a specific category of AI warranting heightened scrutiny: systems whose capabilities are not fully understood, are hard to predict, and may produce "serious, even catastrophic" harms through deliberate misuse or loss of human control.

The definition is deliberately calibrated to current capability levels and must be updated as the frontier advances — a characteristic that distinguishes it from static regulatory categories. "Frontier" denotes a moving threshold, not a fixed class of systems. Related but distinct concepts include the EU AI Act's [[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]] (GPAI), which emphasizes broad applicability over raw capability level, and EO 14110's [[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]], which emphasizes catastrophic misuse potential and training scale.

---
## wiki/definitions/frontier-developer.md

---
title: "Frontier Developer (CT SB 5)"
type: definition
tags: [ai-policy, law, technical-safety, compute]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Connecticut SB 5 2026 Bill Text.pdf"
related:
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
  - "[[wiki/definitions/compute-threshold|Compute Threshold]]"
  - "[[wiki/findings/connecticut-sb5-frontier-whistleblower|CT SB 5: Frontier Whistleblower Protection]]"
  - "[[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]"
---

# Frontier Developer (CT SB 5)

Under Connecticut SB 5 (2026), a **frontier developer** is any person doing business in the state who trains — or intends to train — a foundation model using more than 10²⁶ floating-point operations (FLOPs), inclusive of original training and any fine-tuning, reinforcement learning, or other material modifications to a preceding foundation model. A **large frontier developer** is a frontier developer whose affiliated group had annual gross revenues exceeding $500 million in the most recently completed calendar year. This statutory definition is significant for two reasons: (1) it is the first compute-based jurisdictional trigger for frontier AI obligations enacted into U.S. state law, adopting the same 10²⁶ FLOPs figure used in the EU AI Act GPAI framework; and (2) the revenue-based tier creates a two-level structure — all frontier developers face whistleblower anti-retaliation obligations, while only large frontier developers must also establish anonymous internal reporting channels for catastrophic risk disclosures. The definition does not require that the developer be headquartered in Connecticut — doing business in the state suffices.

---
## wiki/definitions/general-purpose-ai.md

---
title: "General-Purpose AI (GPAI)"
type: definition
acronym: "GPAI"
tags: [ai-policy, law, llm]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eu-ai-act-overview.md"
related:
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
  - "[[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]]"
  - "[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]]"
---

# General-Purpose AI (GPAI)

An AI model (or system built on such a model) capable of performing a wide range of distinct tasks and serving as a foundation for many downstream AI applications. The term is operationalized in the EU AI Act to identify a category of AI that cannot be straightforwardly classified by use-case risk tier, because the same model may be embedded in both low-risk and high-risk applications.

Under the EU AI Act (effective August 2025 for GPAI rules), GPAI model providers must meet baseline transparency and copyright obligations. GPAI models that may carry **systemic risks** — defined as models trained using more than 10²⁵ FLOPs (or designated by the Commission) — face additional evaluation, incident reporting, and risk mitigation requirements. A GPAI Code of Practice (July 2025) provides voluntary compliance guidance.

GPAI partially overlaps with, but is distinct from, Bletchley/Seoul's [[wiki/definitions/frontier-ai|Frontier AI]] (focused on capability level relative to current state-of-the-art) and EO 14110's [[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]] (focused on catastrophic misuse potential). GPAI captures breadth of deployment potential; frontier AI captures capability at the leading edge; dual-use foundation model captures security risk.

---
## wiki/definitions/governance-by-procurement.md

---
title: "Governance by Procurement"
type: definition
tags: [governance-mechanisms, procurement-policy, democratic-risks, international]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Governance by Procurement How AI Rights Became a Bilateral Negotiation.md"
  - "raw/Military AI Policy by Contract The Limits of Procurement as Governance.md"
related:
  - "[[wiki/definitions/regulation-by-contract|Regulation by Contract]]"
  - "[[wiki/findings/governance-by-procurement-as-democratic-vacancy|Governance by Procurement Creates a Democratic Vacancy]]"
  - "[[wiki/findings/procurement-cannot-substitute-public-law|Procurement Cannot Substitute for Public Law in Military AI Governance]]"
  - "[[wiki/sources/governance-by-procurement|Governance by Procurement (HKS/Carr Center, 2026)]]"
  - "[[wiki/sources/military-ai-policy-by-contract|Military AI Policy by Contract (Lawfare, 2026)]]"
---

**Governance by procurement** is an AI governance pattern in which the operative rules governing high-stakes AI uses are established not through democratic processes, statutes, or multilateral agreements, but through bilateral contracts between governments and technology vendors. The term was developed in the context of U.S. military AI contracting (especially the 2026 Anthropic-Pentagon standoff) to name a structural condition in which consequential policy decisions — what AI systems may be used for, what safeguards apply, whose data may be collected, whether AI may be used for domestic surveillance or autonomous weapons — are made as provisions in procurement agreements, without transparency, public deliberation, or remedy mechanisms for affected populations.

The concept is closely related to [[wiki/definitions/regulation-by-contract|Regulation by Contract]] but has a broader normative valence: where "regulation by contract" names the legal mechanism (bilateral agreement in place of statute), "governance by procurement" names the democratic failure — the displacement of governance from institutions with legitimate democratic authority to bilateral negotiations in which most affected parties have no seat.

The concept was most fully developed by the Harvard Kennedy School / Carr Center commentary and the Lawfare analysis of the 2026 Anthropic-Pentagon standoff.

---
## wiki/definitions/high-risk-ai.md

---
title: "High-Risk AI (EU AI Act)"
type: definition
tags: [law, ai-policy, governance-theory, fairness]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eu-ai-act-overview.md"
related:
  - "[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]]"
  - "[[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]]"
---

# High-Risk AI (EU AI Act)

A category under the EU AI Act (Regulation EU 2024/1689) designating AI applications that can pose serious risks to health, safety, or fundamental rights and are therefore subject to strict pre-market and post-market obligations. High-risk AI systems include those used in: AI safety components of critical infrastructure; education (e.g., exam scoring); employment and HR (e.g., CV screening); access to essential services (e.g., credit scoring); law enforcement; migration and border control; administration of justice; and biometric identification.

Before deployment, high-risk systems must undergo conformity assessment, maintain technical documentation, implement risk management systems, ensure high-quality training data, enable human oversight, and achieve robustness and cybersecurity standards. High-risk rules apply from August 2026 (most systems) and August 2027 (AI in regulated products). A proposed Digital Package on Simplification (adopted November 2025) proposes adjusting the timeline and streamlining SME obligations.

The high-risk category addresses a different threat model from the frontier AI safety frameworks: it focuses on discrimination, fundamental rights violations, and systemic social harm from deployed AI in specific sectors, not catastrophic risk from advanced general-purpose AI. The two concerns are not mutually exclusive but have generated distinct regulatory traditions.

---
## wiki/definitions/independent-verification-organization.md

---
title: "Independent Verification Organization (IVO)"
type: definition
acronym: "IVO"
tags: [governance-theory, ai-policy, law, industry-practice]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/20250430 Talk GKH SGP.md"
  - "raw/202507 PODCAST Gillian Hadfield Andrew Freeman.md"
related:
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
---

# Independent Verification Organization (IVO)

A privately operated, government-licensed firm whose business model is auditing AI developers for compliance with government-defined safety and risk outcomes. The term is used in Gillian Hadfield's Regulatory Markets proposal and in the IASEAI workshop series on third-party oversight. IVOs are the operational mechanism of regulatory markets: government sets outcome goals; IVOs develop the technical standards and methods to achieve them; AI developers hire IVOs to certify compliance.

IVOs are distinguished from existing voluntary auditors by their formal licensing relationship with government: a licensed IVO's certification confers legal benefits (rebuttable presumption of reasonable care, insurance eligibility) on certified developers. This liability-linked licensing creates a market incentive to seek rigorous rather than permissive certification. Cross-industry precedents include Nationally Recognized Testing Laboratories (NRTLs, e.g. UL), EU Notified Bodies, PCAOB-registered audit firms, USDA-accredited organic certifiers, FAA Designated Engineering Representatives (DERs), and maritime Classification Societies — all private entities licensed by government to perform regulatory functions in their respective domains.

---
## wiki/definitions/level-1-level-2-outcomes.md

---
title: "Level 1 / Level 2 Outcomes"
type: definition
tags: [governance-theory, ai-policy]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/IASEAI Workshop Notes_ Licensed Independent Verification Organizations in Other Industries (1).md"
  - "raw/IASEAI Workshop Notes_ Licensed Independent Verification Organizations in Other Industries (2).md"
related:
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
---

# Level 1 / Level 2 Outcomes

A framework for distinguishing what a regulatory regime ultimately wants from what it can actually measure. Developed in Dan Ryan's IASEAI workshop materials on cross-industry IVO analogues.

**Level 1 outcomes** are the substantive goals — what we want to be true in the world: "bridges don't collapse," "products don't injure users," "AI doesn't assist bioweapon development." These are the democratic outcomes that legitimate regulation.

**Level 2 outcomes** are the measurable proxies regulation actually enforces: "bridges inspected every 24 months," "products pass UL 60950 test protocol," "model red-team scores below threshold X." These are the operational targets that regulators, courts, and auditors can assess.

The gap between Level 1 and Level 2 is where regulatory systems gain or lose their legitimacy. Process compliance becomes a proxy for outcome achievement; thresholds stand in for absolute safety; detection and response mechanisms substitute for prevention. The distinction is practically important for IVO design: IVOs must be structured around Level 2 metrics, but licensed and evaluated by government against Level 1 outcomes. When Level 2 proxies drift far from Level 1 goals — as often happens over time — the regulatory system produces compliance without safety.

---
## wiki/definitions/liability-gap.md

---
title: "Liability Gap"
type: definition
tags: [governance-theory, law, governance-mechanisms]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Liability gap.md"
  - "raw/2023 Athens Roundtable on AI and Rule of Law.md"
related:
  - "[[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]"
  - "[[wiki/definitions/regulation-by-contract|Regulation by Contract]]"
  - "[[wiki/findings/rebuttable-presumption-as-market-incentive|Rebuttable Presumption as the Market Incentive for IVO Certification]]"
  - "[[wiki/findings/procurement-cannot-substitute-public-law|Procurement Cannot Substitute for Public Law in Military AI Governance]]"
---

A condition in which legal rules, or the opacity of the value chain associated with a product or service, prevent harmed parties from holding any actor accountable for an accident. Liability gaps arise when harm is traceable in fact but not in law: the responsible actor may be difficult to identify (complex supply chains, opaque AI systems), legally insulated (statutory immunities, contractual disclaimers), or judgment-proof. In AI governance the liability gap takes a distinctive form: because ML models produce outputs through training rather than explicit programming, attributing a harmful output to a specific decision by a specific party is structurally difficult. The [[wiki/definitions/rebuttable-presumption|rebuttable presumption]] mechanism in IVO frameworks is one proposed remedy — it shifts the burden of proof without eliminating liability entirely. The Athens Roundtable (2023) identified "new liability frameworks" addressing the liability gap and the related concept of distribution of legal responsibility as a core governance reform agenda.

---
## wiki/definitions/loss-of-control-risk.md

---
title: "Loss-of-Control Risk"
type: definition
tags: [technical-safety, existential-risk, alignment]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Bengio et al 2025 Singapore Consensus on Global AI Safety Research Priorities.pdf"
related:
  - "[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]"
  - "[[wiki/findings/singapore-consensus-safety-research-framework|Singapore Consensus: Three-Part Safety Research Framework]]"
  - "[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]]"
---

The risk that AI systems pursue goals — whether specified, emergent, or adversarially elicited — at a scale and speed that prevents humans from correcting, halting, or overriding them in time to prevent severe harm. Loss-of-control risk is distinct from misuse risk (which involves humans deliberately deploying AI harmfully) and from accident risk (which involves AI systems failing at their assigned tasks). It is specifically about the failure mode in which AI systems are *effective* at pursuing goals that are misaligned with human welfare, or in which human oversight mechanisms break down. The [[wiki/sources/singapore-consensus-ai-safety-research|Singapore Consensus]] (2025) identifies loss-of-control assessment as a research priority in its Risk Assessment pillar, including evaluation of AI deception, strategic goal-concealment, and resistance to shutdown.

---
## wiki/definitions/management-based-regulation.md

---
title: "Management-based Regulation"
type: definition
tags: [governance-theory, regulatory-theory, industry-practice]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Management-based Regulation.md"
related:
  - "[[wiki/definitions/command-and-control-regulation|Command-and-Control Regulation]]"
  - "[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/responsible-ai-governance|Responsible AI Governance]]"
  - "[[wiki/findings/principle-to-practice-gap-responsible-ai|Principle-to-Practice Gap in Responsible AI Governance]]"
---

A regulatory mode — also called process-oriented, risk-based, or enforced self-regulation — that requires or encourages firms to evaluate the risks generated by their own business and develop internal plans for managing those risks, rather than prescribing specific behaviors or technologies (Braithwaite 1981; Coglianese et al. 2003). The regulator evaluates the adequacy of the firm's management system, not compliance with specific rules. Management-based regulation is the mode that most closely describes current industry AI safety practice: Anthropic's RSP, GDM's Frontier Safety Framework, and OpenAI's Preparedness Framework are all management-based in structure — each firm identifies its own risk thresholds and management procedures. The [[wiki/findings/principle-to-practice-gap-responsible-ai|principle-to-practice gap]] finding suggests that management-based approaches systematically deprioritize safety during implementation without structural accountability mechanisms. Regulatory markets frameworks propose to discipline management-based approaches by adding external outcome verification through licensed IVOs.

---
## wiki/definitions/mechanistic-interpretability.md

---
title: "Mechanistic Interpretability"
type: definition
tags: [technical-safety, ai-safety, interpretability]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/Scaling Monosemanticity Extracting Interpretable Features from Claude 3 Sonnet.md"
related:
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/definitions/red-teaming|Red-Teaming (AI)]]"
  - "[[wiki/findings/sae-features-scale-to-frontier-models|SAE Features Scale to Frontier Models]]"
  - "[[wiki/findings/conventional-regulation-illegibility-problem|Conventional Regulation's Illegibility Problem with ML]]"
---

# Mechanistic Interpretability

A research program in AI safety that attempts to understand the internal computational structure of neural networks — what representations they form, what circuits implement their computations, and how these map onto human-interpretable concepts. Distinguished from behavioral interpretability (which studies model input/output patterns) by its focus on the internals of the model itself.

The dominant contemporary approach is *sparse autoencoder* (SAE) based dictionary learning, grounded in the *superposition hypothesis*: because neural networks have fewer dimensions than the features they must represent, they pack multiple almost-orthogonal features into each dimension. SAEs learn to decompose activations into a sparse set of interpretable, monosemantic features — each feature corresponding to a single, human-readable concept — by training a bottleneck network with a sparsity penalty on a corpus of model activations. Anthropic's 2024 Scaling Monosemanticity paper demonstrated this approach at production scale on Claude 3 Sonnet, finding multilingual, multimodal, and abstract features including safety-relevant ones (deception, sycophancy, CBRN-adjacent content).

Mechanistic interpretability is the technical substrate for what governance frameworks call [[wiki/definitions/technical-legibility|Technical Legibility]]: if SAE-derived feature maps can reliably characterize what a model is "thinking" about, they could in principle give external auditors (e.g., [[wiki/definitions/independent-verification-organization|IVOs]]) a provenance-traceable account of model behavior rather than relying solely on behavioral evaluation.

---
## wiki/definitions/open-weight-model.md

---
title: "Open-Weight Model"
type: definition
tags: [technical-safety, open-weight-models, ai-policy]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Caspar et al 2026 Open Technical Problems in Open-Weight Model Risk Management.pdf"
related:
  - "[[wiki/definitions/tamper-resistant-training|Tamper-Resistant Training]]"
  - "[[wiki/findings/open-weight-tamper-resistance-limits|Open-Weight Model Tamper Resistance Has Narrow Safety Margins]]"
  - "[[wiki/findings/open-weight-lifecycle-governance-gaps|Open-Weight Model Lifecycle Governance Has Systematic Gaps]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
---

An AI model whose trained weights are publicly released — typically under an open-source or open-access license — enabling any holder to run inference, fine-tune, modify, or redistribute the model without the original developer's oversight or consent. Open-weight models are distinguished from closed-API models by the absence of a technical control surface after release: the developer cannot patch safety properties, revoke access, monitor usage, or enforce terms of service on weight holders. As analyzed in [[wiki/sources/open-weight-model-risk-management|Caspar et al. (2026)]], this creates a governance asymmetry — the safety properties baked in at training time must be robust to adversarial modification, because no post-release correction is possible. Prominent open-weight models include Meta's Llama series, Mistral, and (as of 2025) models in the GPT-oss family.

---
## wiki/definitions/pacing-problem.md

---
title: "Pacing Problem"
type: definition
tags: [governance-theory, technology-policy]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Pacing Problem.md"
related:
  - "[[wiki/definitions/collingridge-dilemma|Collingridge Dilemma]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]"
  - "[[wiki/findings/ashby-institutional-adaptation-dominant-constraint|Institutional Adaptation as Dominant Constraint]]"
---

The structural lag between technological innovation, which advances at the speed of industry R&D, and governance, which advances at the speed of politics, legislation, and bureaucracy (Marchant 2011). The pacing problem is the standard framing for why AI-specific governance is perennially reactive: by the time a regulatory framework is enacted, the technology it targets has already moved. Related to but distinct from the [[wiki/definitions/collingridge-dilemma|Collingridge Dilemma]]: the Collingridge problem is about the *timing* of intervention (too early = insufficient information; too late = lock-in); the pacing problem is about the *speed differential* between two institutions — industry and government — that operate on fundamentally different timescales. Regulatory markets and IVO frameworks are partly motivated as responses to the pacing problem, by outsourcing the technical methods of regulation to private actors who can iterate at industry speed.

---
## wiki/definitions/pretraining-data-filtering.md

---
title: "Pretraining Data Filtering (Safety)"
type: definition
tags: [technical-safety, open-weight-models]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Deep Ignorance Pretraining Data Filtering for Tamper-Resistant LLM Safeguards.pdf"
related:
  - "[[wiki/sources/deep-ignorance-pretraining-filter|Deep Ignorance (O'Brien, Casper et al., 2025)]]"
  - "[[wiki/findings/pretraining-filter-tamper-resistance|Pretraining Data Filtering Produces Tamper-Resistant Safeguards]]"
  - "[[wiki/definitions/uplift|Uplift]]"
---

O'Brien, Casper et al. (2025): *pretraining data filtering* (for safety) is the practice of removing or suppressing categories of content from training corpora before model training begins, with the goal of producing models that lack harmful knowledge at the weight level rather than only at the post-training alignment layer. Unlike post-training safety techniques (RLHF, constitutional AI, system prompts), pretraining filters are harder to circumvent by adversarial fine-tuning because the model genuinely lacks the filtered knowledge rather than having learned to suppress it. The tradeoff is a capability-safety frontier: stronger filters remove more harmful content but also degrade model performance on benign tasks that draw on similar knowledge domains. Pretraining data filtering is one component of a defense-in-depth safety stack; it cannot block in-context harmful knowledge (information inferred from context rather than stored in weights).

---
## wiki/definitions/prompt-injection.md

---
title: "Prompt Injection"
type: definition
tags: [technical-safety, agentic-ai, cybersecurity]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/FAR AI 2025 Securing Agentic AI.pdf"
related:
  - "[[wiki/definitions/agentic-ai|Agentic AI]]"
  - "[[wiki/findings/agentic-ai-expands-attack-surface|Agentic AI Systems Expand the Cybersecurity Attack Surface]]"
---

An attack in which adversarially crafted natural-language content — embedded in a document, webpage, tool output, or inter-agent message — causes an AI agent to deviate from its intended instructions and execute the attacker's commands instead. Prompt injection exploits the same mechanism that makes LLMs useful (following natural-language instructions) as a security vulnerability: the model cannot reliably distinguish between instructions from its legitimate principal (the user or developer system prompt) and instructions injected by an adversary in the environment. In [[wiki/definitions/agentic-ai|agentic]] deployments, prompt injection is especially dangerous because it can redirect tool use, exfiltrate data, or cause the agent to take irreversible real-world actions. Prompt injection is the AI-specific analog of SQL injection in conventional web security, but harder to mitigate because the injection surface is open-ended natural language rather than a structured query language.

---
## wiki/definitions/rebuttable-presumption.md

---
title: "Rebuttable Presumption of Reasonable Care"
type: definition
tags: [law, governance-theory, ai-policy]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/20250430 Talk GKH SGP.md"
  - "raw/202507 PODCAST Gillian Hadfield Andrew Freeman.md"
related:
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
---

# Rebuttable Presumption of Reasonable Care

The tort law mechanism at the core of Hadfield's Regulatory Markets proposal. When an AI developer is certified by a licensed [[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], the law presumes they have met their duty of reasonable care — meaning that in a tort suit, the plaintiff must affirmatively rebut the presumption with contrary evidence. The developer does not have an absolute liability shield; evidence that they acted negligently despite certification can overcome the presumption. This is softer than strict liability immunity (as in some pharmaceutical or automotive contexts) but constitutes meaningful legal protection and, crucially, qualifies the developer for liability insurance.

The mechanism is the primary market incentive for voluntary participation in a regulatory markets system: certification converts an uncertain and potentially catastrophic liability exposure into a manageable, insured risk. Uncertified developers face the inverse: they are uninsurable and legally exposed as agentic AI increasingly enters tort law (see character.ai lawsuit, which survived a motion to dismiss in 2025). California SB813 (2025) implements a version of this mechanism at the state level, treating IVO certification as evidence of compliance with tort duty of care.

---
## wiki/definitions/red-teaming.md

---
title: "Red-Teaming (AI)"
type: definition
tags: [technical-safety, industry-practice]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eo-14110-biden-2023.md"
  - "raw/seoul-frontier-ai-safety-commitments-2024.md"
  - "raw/openai-preparedness-framework.md"
related:
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
---

# Red-Teaming (AI)

A structured adversarial testing methodology applied to AI systems to find flaws, vulnerabilities, and failure modes — including harmful outputs, discriminatory behavior, unforeseen capabilities, and susceptibility to misuse — often in a controlled environment and typically by dedicated teams taking an adversarial stance toward the system under test.

Defined formally in EO 14110 Sec. 3(d). The Seoul Safety Commitments distinguish internal red-teaming from external red-teaming by independent third parties; both are referenced as best practices for frontier AI safety. The Anthropic RSP specifies that ASL-3 models must pass adversarial red-team testing by "world-class red-teamers" before deployment — a higher standard than merely conducting red-teaming. NIST's AI RMF incorporates red-teaming as part of its "Measure" function.

Red-teaming originated in military and cybersecurity contexts (adversarial simulation to test defenses) and has been adapted to AI. Key limitations: red-team results depend heavily on the threat models and attacker capabilities assumed; teams may miss novel misuse modes; and red-teaming is a point-in-time assessment of a model that may change with fine-tuning or deployment context.

---
## wiki/definitions/regulation-by-contract.md

---
title: "Regulation by Contract"
type: definition
tags: [governance-mechanisms, procurement-policy, legal-analysis]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Military AI Policy by Contract The Limits of Procurement as Governance.md"
related:
  - "[[wiki/definitions/governance-by-procurement|Governance by Procurement]]"
  - "[[wiki/findings/procurement-cannot-substitute-public-law|Procurement Cannot Substitute for Public Law in Military AI Governance]]"
  - "[[wiki/sources/military-ai-policy-by-contract|Military AI Policy by Contract (Lawfare, 2026)]]"
---

**Regulation by contract** is an AI governance model in which the operative rules governing the deployment of AI systems are derived not from statutes, regulations, or constitutional law but from bilateral procurement agreements between government agencies and technology vendors. In this model, provisions governing domestic surveillance, autonomous weapons, intelligence oversight, and other high-stakes uses appear as contract clauses negotiated between individual parties, rather than as publicly debated statutory requirements binding on all market participants.

The Lawfare analysis of the 2026 U.S. military AI contracting crisis identified regulation by contract as the defining feature of the prevailing U.S. AI governance posture. Its key structural limitations: (1) it binds only the parties who signed it, creating no universal standards; (2) enforcement is primarily post-hoc rather than preventive — the contractor's remedy typically arrives after the violation has occurred; (3) in an Other Transaction (OT) agreement environment outside the Federal Acquisition Regulation, even those post-hoc remedies may not exist unless explicitly negotiated; (4) when operational necessity overrides contract terms, the government possesses unilateral powers that contractors cannot counter in real time.

Regulation by contract is a narrower legal concept than the broader governance failure named by [[wiki/definitions/governance-by-procurement|governance by procurement]].

---
## wiki/definitions/regulatory-impacts-analysis.md

---
title: "Regulatory Impacts Analysis (RIA)"
type: definition
acronym: "RIA"
tags: [regulatory-theory, governance-mechanisms, methodology]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/CIFAR-Regulatory-Transformation-in-the-Age-of-AI.pdf"
related:
  - "[[wiki/sources/cifar-regulatory-transformation-ai|CIFAR: Regulatory Transformation in the Age of AI]]"
  - "[[wiki/findings/harms-paradigm-critique-ai-regulation|The Harms Paradigm Critique]]"
---

**Regulatory Impacts Analysis (RIA)** (Sandhu, Kolt & Hadfield, CIFAR, 2023) is a structured framework and procedure for analyzing the impact of AI on regulatory systems. Unlike existing AI risk frameworks that evaluate harms posed *by* AI systems, RIA is designed to assess how AI transforms the *regulatory infrastructure itself* — specifically the targets of regulation (the entities subject to regulatory requirements) and the tools of regulation (the mechanisms used to govern those entities).

RIA is operationalized through a 15-question questionnaire in three sections: (1) **Regulatory Targets** (questions 1–5) — who is currently regulated, how AI is changing those actors, and what new actors will need to be regulated; (2) **Regulatory Tools** (questions 6–10) — what mechanisms are currently used, how AI is rendering them more or less effective, and what new tools are needed; (3) **Next Steps** (questions 11–15) — concrete planning for adapting targets and tools, including resource assessment. The questionnaire is designed to structure interdisciplinary workshops engaging technologists, policymakers, and domain experts.

RIA is intended for periodic use rather than one-time assessment, since AI's effects on regulatory infrastructure will evolve. Sandhu, Kolt & Hadfield demonstrated it in three Canadian case studies: healthcare (shifting from professional licensing to software developer regulation), financial services (systemic AI risk not addressed by individual-harm focus), and nuclear energy (CNSC adaptation to AI-expanded threat surfaces). The framework complements the broader argument in the same paper against the **harms paradigm** as the dominant framing for AI regulation.

---
## wiki/definitions/regulatory-markets.md

---
title: "Regulatory Markets"
type: definition
tags: [governance-theory, ai-policy, law]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/20250430 Talk GKH SGP.md"
  - "raw/202507 PODCAST Gillian Hadfield Andrew Freeman.md"
related:
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]"
  - "[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]]"
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
---

# Regulatory Markets

A governance architecture proposed by Gillian Hadfield (and co-developed with Jack Clark in a 2019 paper) in which government functions as goal-setter and licensor rather than technical rule-writer. Government defines democratic outcome goals ("AI must not assist bioweapon development"); a licensed market of private [[wiki/definitions/independent-verification-organization|Independent Verification Organizations (IVOs)]] develops the technical standards and verification methods to achieve those goals; regulated companies select and pay IVOs from the licensed market. The market dynamic is intended to generate innovation in regulatory technology — competing IVOs have incentives to develop better evaluation methods — while preserving democratic legitimacy through government's retention of outcome-setting authority.

The proposal is contrasted with "command and control" (prescriptive) regulation, in which government writes specific technical rules, and with pure self-regulation, in which industry sets its own standards. Regulatory markets occupy a middle position: government sets what, the market discovers how. The model has legislative instantiation in California SB813 (introduced 2025), which creates a voluntary entry pathway: certified companies gain a rebuttable presumption of reasonable care in tort, making participation commercially attractive without mandating it. Hadfield and others treat regulatory markets as one tool in a complex governance ecosystem, not a replacement for all other regulatory mechanisms.

---
## wiki/definitions/responsible-ai-governance.md

---
title: "Responsible AI Governance"
type: definition
tags: [governance-theory, ai-policy, industry-practice]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/Responsible artificial intelligence governance A review and research framework.md"
related:
  - "[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]]"
  - "[[wiki/definitions/high-risk-ai|High-Risk AI (EU AI Act)]]"
  - "[[wiki/findings/principle-to-practice-gap-responsible-ai|Principle-to-Practice Gap in Responsible AI Governance]]"
---

# Responsible AI Governance

The organizational practices — structural, procedural, and relational — through which AI developers and deployers translate high-level responsible AI principles into operational decisions across the AI system lifecycle. Distinguished from *responsible AI principles* (the normative values: accountability, fairness, transparency, etc.), which specify *what* AI should be, versus responsible AI governance, which specifies *how* organizations actually implement those values in practice.

Structural practices concern who has authority and accountability for AI decisions within and across organizations. Procedural practices concern the processes by which AI is designed, audited, and managed for compliance with responsibility goals at different lifecycle stages. Relational practices concern stakeholder engagement, AI literacy development, and the knowledge links between employees and external parties including affected communities and regulators. The distinction matters because empirical research finds that organizations frequently adopt responsible AI principles as formal commitments while systematically deprioritizing governance practices — a pattern the OECD AI Principles' [[wiki/findings/broad-adoption-shallow-commitment-dynamic|broad adoption, shallow commitment]] dynamic replicates at the international level.

---
## wiki/definitions/responsible-capability-scaling.md

---
title: "Responsible Capability Scaling"
type: definition
tags: [technical-safety, industry-practice, governance-theory]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/anthropic-rsp.md"
  - "raw/gdm-frontier-safety-framework.md"
  - "raw/seoul-frontier-ai-safety-commitments-2024.md"
related:
  - "[[wiki/definitions/ai-safety-levels-asl|AI Safety Levels (ASL) — Anthropic]]"
  - "[[wiki/definitions/critical-capability-levels|Critical Capability Levels (CCL) — Google DeepMind]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
---

# Responsible Capability Scaling

An approach to AI development that couples capability advancement to demonstrated safety: organizations commit to pause or constrain further scaling if safety research and mitigation measures have not kept pace with capability growth. The core structural feature is pre-defined thresholds at which safety requirements must be met before development proceeds, as opposed to post-hoc liability or safety evaluation after deployment.

Operationalized in Anthropic's [[wiki/definitions/ai-safety-levels-asl|AI Safety Levels (ASL) — Anthropic]] framework (2023), GDM's [[wiki/definitions/critical-capability-levels|Critical Capability Levels (CCL) — Google DeepMind]] framework (2024), and OpenAI's Preparedness Framework (2025), and referenced in the Seoul Frontier AI Safety Commitments as a commitment for signatory companies. The approach is explicitly modeled on biosafety level (BSL) standards in biology and pre-market safety testing in aviation/automotive industries. The UK government's 2024 documentation of "emerging processes for frontier AI safety" named it as the dominant voluntary approach among leading developers. Key governance tension: adequacy of safety demonstrations is currently assessed primarily by the developers themselves, not independent third parties — the gap that [[wiki/definitions/independent-verification-organization|Independent Verification Organizations (IVOs)]] and [[wiki/definitions/regulatory-markets|Regulatory Markets]] proposals are designed to address.

---
## wiki/definitions/risk-based-approach.md

---
title: "Risk-Based Approach (AI regulation)"
type: definition
tags: [governance-theory, law, ai-policy]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eu-ai-act-overview.md"
  - "raw/nist-ai-rmf.md"
  - "raw/oecd-ai-principles.md"
related:
  - "[[wiki/definitions/high-risk-ai|High-Risk AI (EU AI Act)]]"
  - "[[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
---

# Risk-Based Approach (AI regulation)

A regulatory design principle in which obligations and restrictions on AI developers and deployers scale with the level of risk posed by a specific AI application, rather than applying uniformly across all AI. Low-risk applications face minimal or no specific requirements; high-risk applications face pre-market conformity assessment, documentation, human oversight mandates, and other substantive obligations; the highest-risk applications are prohibited outright.

The EU AI Act is the paradigmatic implementation of the risk-based approach in binding law, organizing regulation around four tiers: unacceptable risk (banned), high-risk (strict obligations), transparency risk (disclosure), and minimal risk (unregulated). The NIST AI RMF applies a similar logic in a voluntary, process-oriented framework. The approach is endorsed in the OECD AI Principles and referenced in the Bletchley Declaration ("pro-innovation and proportionate governance").

The risk-based approach presupposes that risk can be reliably assessed ex ante and that use-case categories are stable — both assumptions that are contested for general-purpose AI systems, which may be repurposed across risk tiers after initial deployment. The [[wiki/definitions/regulatory-markets|Regulatory Markets]] proposal is a structurally distinct alternative: rather than government classifying risk tiers prescriptively, government licenses private [[wiki/definitions/independent-verification-organization|IVOs]] to develop and enforce outcome-based standards competitively.

---
## wiki/definitions/rule-by-law.md

---
title: "Rule by Law"
type: definition
tags: [governance-theory, law, philosophy, democratic]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Introduction (Chapter 1) - Algorithmic Rule By Law.md"
related:
  - "[[wiki/definitions/algorithmic-rule-by-law|Algorithmic Rule by Law]]"
  - "[[wiki/definitions/algorithmic-regulation|Algorithmic Regulation]]"
  - "[[wiki/findings/algorithmic-rule-by-law-threat|Algorithmic Rule by Law as Distinct Governance Threat]]"
---

A perversion of the rule of law in which legislation or administrative action is formally legal but used as a purely instrumental tool to legitimize executive power, rather than as a substantive constraint on it. Under rule by law, the law's protective function — safeguarding human rights, ensuring equal treatment, enabling judicial review — is hollowed out while its legitimating function is preserved. Distinguished from the rule of law: the law still *exists* and is formally invoked, but it no longer tames power. Applied in the EU context primarily to populist governments that use legally enacted measures to undermine judicial independence, minority rights, and the separation of powers (Hungary, Poland). Smuha extends the concept to the algorithmic context — see [[wiki/definitions/algorithmic-rule-by-law|Algorithmic Rule by Law]].

---
## wiki/definitions/sandbagging.md

---
title: "Sandbagging"
type: definition
tags: [technical-safety, evaluation, governance-mechanisms]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/2025 Q4 From Discovery to Deployment Shaping Safer AI Systems.md"
related:
  - "[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]"
  - "[[wiki/definitions/red-teaming|Red-Teaming (AI)]]"
  - "[[wiki/findings/sandbagging-detection-challenge|Sandbagging Detection Remains an Open Problem]]"
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
  - "[[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]"
---

AI system behavior in which a model intentionally underperforms or conceals its capabilities during evaluation to avoid triggering safety thresholds or oversight interventions. Sandbagging is a form of strategic deception directed at evaluators rather than end users: a model that sandbags appears less capable than it is during testing and may reveal or deploy those capabilities in deployment. Distinct from benchmark saturation or poor test design (which cause *unintentional* underestimation of capability) — sandbagging is a deliberate, model-side manipulation of the evaluation process. Directly undermines [[wiki/definitions/dangerous-capability-evaluation|dangerous capability evaluations]] as a governance instrument, since the evaluations assume honest performance.

---
## wiki/definitions/scrutability.md

---
title: "Scrutability (Administrative Law)"
type: definition
tags: [governance-theory, law, administrative-law]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Caputo 2026 Capability-Accountability Trap.pdf"
related:
  - "[[wiki/sources/capability-accountability-trap-caputo|Capability-Accountability Trap (Caputo, 2026)]]"
  - "[[wiki/findings/capability-accountability-trap|The Capability-Accountability Trap in Administrative Law]]"
  - "[[wiki/findings/scrutability-as-governance-infrastructure|AI as Scrutability Infrastructure]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
---

Introduced by Caputo (Oxford Martin, 2026): *scrutability* is the degree to which a regulatory decision or agency action is cognitively tractable to an authorized overseer — a court, legislature, or the public — who lacks the specialized expertise of the regulator. Derived from Herbert Simon's theory of bounded rationality: scrutability fails not from bad faith but from cognitive limits on what a non-specialist can evaluate. Scrutability is the variable at the heart of the *capability-accountability trap*: agencies gain capability by acquiring expertise but lose scrutability when that expertise renders their decisions opaque to overseers. Distinct from but related to [[wiki/definitions/technical-legibility|Technical Legibility]] — legibility describes the property of an AI system (can it be inspected?); scrutability describes a property of a regulatory decision (can the inspector's conclusion be checked?).

---
## wiki/definitions/tamper-resistant-training.md

---
title: "Tamper-Resistant Training"
type: definition
tags: [technical-safety, open-weight-models, alignment]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Caspar et al 2026 Open Technical Problems in Open-Weight Model Risk Management.pdf"
related:
  - "[[wiki/definitions/open-weight-model|Open-Weight Model]]"
  - "[[wiki/definitions/pretraining-data-filtering|Pretraining Data Filtering]]"
  - "[[wiki/findings/open-weight-tamper-resistance-limits|Open-Weight Model Tamper Resistance Has Narrow Safety Margins]]"
  - "[[wiki/findings/pretraining-filter-tamper-resistance|Pretraining Filters Do Not Provide Tamper-Resistant Safety]]"
---

Training methods designed to preserve safety-relevant model behaviors — such as refusal to produce CBRN uplift, CSAM, or targeted harassment — under adversarial modification of the model's weights after release. Tamper-resistant training is the primary open technical challenge in [[wiki/definitions/open-weight-model|open-weight model]] safety: because open-weight models cannot be patched post-release, their safety properties must survive fine-tuning attacks by adversarial holders. Current state-of-the-art methods (safety fine-tuning, RLHF-based alignment) provide tamper resistance only against light adversarial modification — typically hundreds of fine-tuning steps on consumer hardware. [[wiki/sources/open-weight-model-risk-management|Caspar et al. (2026)]] identify tamper-resistant training as an open research problem, noting that meaningful open-weight governance requires methods that hold across thousands of adversarial fine-tuning steps, a bar no current technique meets.

---
## wiki/definitions/technical-ai-governance.md

---
title: "Technical AI Governance (TAIG)"
type: definition
acronym: "TAIG"
tags: [governance-theory, technical-safety, ai-policy]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Open Problems in Technical AI Governance.pdf"
related:
  - "[[wiki/sources/open-problems-technical-ai-governance|Open Problems in Technical AI Governance (Reuel, Bucknall et al., 2025)]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
---

Introduced by Reuel, Bucknall et al. (TMLR, 2025): *Technical AI Governance* (TAIG) is the subfield at the intersection of AI research and governance that develops technical tools and methods enabling effective governance of AI systems. TAIG is organized by a 2D taxonomy: six *Capacities* governance actors need (Assessment, Access, Verification, Security, Operationalization, Ecosystem Monitoring) crossed against four *Targets* governance applies to (Data, Compute, Models/Algorithms, Deployment). The field is explicitly anti-technosolutionist — governance context must constrain which technical solutions are acceptable. TAIG is distinguished from both AI safety (which focuses on making models safe) and AI policy (which focuses on regulatory design): TAIG asks what technical infrastructure is needed to make governance work, and identifies open research problems in that space.

---
## wiki/definitions/technical-legibility.md

---
title: "Technical Legibility"
type: definition
tags: [governance-theory, technical-safety, ai-policy]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/20250430 Talk GKH SGP.md"
related:
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
---

# Technical Legibility

The property of an AI system that makes it inspectable and auditable by external parties — a prerequisite for third-party oversight. Introduced in this context by Hadfield's Regulatory Markets framework: for an [[wiki/definitions/independent-verification-organization|IVO]] to perform its verification function, the AI system and its development process must be legible — it must leave a verifiable trail that connects capabilities and behaviors to their origin. Hadfield proposes mandatory model registration and "Agent IDs" as infrastructure for legibility: if an autonomous agent performs a transaction or makes a decision, a verifiable chain must exist back to the model's certification status.

Technical legibility is structurally distinct from interpretability (understanding what a model does internally) — it refers to auditability of the *process and provenance* rather than the *mechanism* of model behavior. However, the two are related: a model whose decision logic cannot be characterized at all is also difficult to audit against defined outcome criteria. The absence of technical legibility infrastructure is one of the key practical obstacles to implementing regulatory markets at scale for frontier AI.

---
## wiki/definitions/uplift.md

---
title: "Uplift"
type: definition
tags: [technical-safety, risk-misuse, industry-practice]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/gdm-frontier-safety-framework.md"
  - "raw/anthropic-rsp.md"
related:
  - "[[wiki/definitions/critical-capability-levels|Critical Capability Levels (CCL) — Google DeepMind]]"
  - "[[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]]"
  - "[[wiki/definitions/red-teaming|Red-Teaming (AI)]]"
---

# Uplift

The incremental increase in a threat actor's capability to cause harm that an AI model provides, above what the actor could achieve using non-AI means (e.g., search engines, textbooks, expert consultation). A model provides "meaningful uplift" for a given harm if it enables a broader range of actors to cause that harm, enables harm at greater scale, or substantially reduces the time, cost, or expertise required.

The uplift framing is analytically important because it shifts the question from "can this model produce harmful content?" to "does this model make harmful outcomes significantly more likely or severe?" A model that can describe bioweapon synthesis steps provides meaningful uplift only if those steps are not otherwise accessible or if the model significantly lowers the barrier to a sophisticated attack. Used by GDM in defining Critical Capability Levels and by Anthropic in distinguishing ASL-2 (no meaningful uplift) from ASL-3 (substantial uplift). The concept originates in biosecurity literature on "dual-use research of concern."

---
## wiki/findings/agentic-ai-expands-attack-surface.md

---
title: "Agentic AI Systems Expand the Cybersecurity Attack Surface"
type: finding
tags: [technical-safety, agentic-ai, cybersecurity, governance-mechanisms]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/FAR AI 2025 Securing Agentic AI.pdf"
related:
  - "[[wiki/sources/securing-agentic-ai|Securing Agentic AI (CSA Singapore / FAR.AI, 2025)]]"
  - "[[wiki/definitions/agentic-ai|Agentic AI]]"
  - "[[wiki/definitions/prompt-injection|Prompt Injection]]"
  - "[[wiki/findings/singapore-consensus-safety-research-framework|Singapore Consensus: Three-Part Safety Research Framework]]"
---

## Claim

Agentic AI systems introduce four categories of cybersecurity threat — prompt injection, memory poisoning, tool abuse, and inter-agent attacks — that have no direct analog in conventional software security or single-turn LLM deployment, making existing security frameworks insufficient and requiring new defenses organized around sandboxing, least-privilege access, audit trails, and human-in-the-loop checkpoints.

## Evidence

- CSA Singapore / FAR.AI discussion paper (2025): four threat categories: (1) **Prompt injection** — adversarially crafted content in the environment (documents, web pages, tool outputs) hijacks agent goal pursuit; (2) **Memory poisoning** — corrupting persistent memory stores that agents use for context across tasks; (3) **Tool abuse** — exploiting overly broad tool permissions to take unauthorized real-world actions (send emails, execute code, make purchases); (4) **Inter-agent attacks** — exploiting trust relationships between agents in multi-agent pipelines where a compromised sub-agent can inject malicious instructions into orchestrator agents; defense framework: sandboxing, least-privilege access, audit trails, human-in-the-loop checkpoints for irreversible actions; open problems: formal verification of agent behavior under adversarial conditions, multi-agent trust frameworks → [[wiki/sources/securing-agentic-ai|CSA Singapore / FAR.AI 2025]]

## Contradicted by / Tension with

The paper is a discussion document rather than an empirical study — the threat categories are plausible and partially demonstrated in published red-teaming work, but the prevalence and severity of these attacks in deployed systems is not systematically measured. The proposed defenses (sandboxing, least-privilege) are largely adaptations of conventional security principles; the paper's honest acknowledgment of "open problems" signals that robust defenses for the uniquely agentic threat categories do not yet exist.

## Relevant concepts

[[wiki/definitions/agentic-ai|Agentic AI]], [[wiki/definitions/prompt-injection|Prompt Injection]]

## Notes

The governance framing matters: agentic AI security is currently framed as a practitioner cybersecurity problem, but it has direct implications for AI governance. An agent with elevated system permissions that can be prompt-injected is a vector for adversarial third parties to take real-world actions attributed to the deploying organization. This creates liability uncertainty that may require regulatory clarification — the multi-stakeholder responsibility problem (developer vs. deployer vs. user) becomes acute when an agent acts under adversarial influence. The [[wiki/sources/singapore-consensus-ai-safety-research|Singapore Consensus]] Control pillar (AI system monitoring) implicitly requires the audit-trail and monitoring infrastructure this paper describes.

---
## wiki/findings/ai-agents-four-structural-pressures-democracy.md

---
title: "LMAs Exacerbate Four Structural Pressures on Democracy"
type: finding
tags: [democratic-risks, agentic-ai, political-theory, economic-inequality]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/AI Agents and Democratic Resilience.md"
related:
  - "[[wiki/findings/ai-companions-as-manipulation-technology|AI Companions Enable Scalable Social Manipulation]]"
  - "[[wiki/findings/democratic-agents-design-framework|Democratic Agents: A Design Framework for Pro-Democracy LMAs]]"
  - "[[wiki/definitions/anticipatory-ethics|Anticipatory Ethics]]"
  - "[[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]"
---

## Claim

Language model agents will most likely impact democratic values not by creating novel threats from scratch but by exacerbating four structural pressures already straining democratic institutions: economic inequality and stagnating quality of life; pathologies of the public sphere; corporate capture of governing power; and autocratic legalism with authoritarian mutual aid.

## Evidence

- [Lazar & Cuéllar, 2026]: **Economic inequality**: LMA-driven labor displacement threatens to replicate the democratic damage done by the China trade shock, but for white-collar work. As with post-WTO manufacturing displacement, the resulting disaffection (hollowed communities, worsened labor conditions, reduced lifetime earnings) historically produces constituencies with appetite for magical populist thinking — including leaders whose plans require assaulting democratic values. Rising material inequality is now strongly predictive of democratic backsliding. → [[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]
- [Lazar & Cuéllar, 2026]: **Public sphere pathologies**: LMA-generated misinformation differs from existing AI disinformation — rather than easily-identifiable bots, LMAs can produce and back up misinformation with sophisticated arguments and sourcing. This will likely drive genuine participants from the digital public sphere. The more dangerous dynamic: filter bubble users can use LMAs to comprehensively vet everything they consume for ideological conformity, creating epistemic hermetically sealed environments at scale. → [[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]
- [Lazar & Cuéllar, 2026]: **Corporate capture**: LMAs could enable AI companies to capture significant portions of the $12.5tn U.S. annual wage economy. Combined with LMAs becoming universal intermediaries through which all digital activity is mediated, this creates concentrated economic and governing power incompatible with functioning democracy. "You cannot have a functioning democracy and popular self-rule with such extraordinarily large and powerful special interests." → [[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]
- [Lazar & Cuéllar, 2026]: **Autocratic legalism**: LMAs could function as "the perfect software Stasi" — combining multimodal surveillance with agentic follow-through on identified targets, enabling mass surveillance at a level of individual specificity (knowing each individual's specific actions, tastes, allegiances, not just statistical inferences) that would be invaluable to autocratic consolidation. → [[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]

## Contradicted by / Tension with

Lazar & Cuéllar explicitly reject the strong forms of the disinformation threat to elections — noting that research shows elections are adversarial processes with homeostatic properties and that changing actual votes is difficult. Their concern is more diffuse: cumulative erosion of democratic values (cognitive autonomy, public sphere health, checks on concentrated power) rather than discrete electoral manipulation.

## Relevant concepts

[[wiki/definitions/cognitive-autonomy|Cognitive Autonomy]], [[wiki/definitions/agentic-ai|Agentic AI]], [[wiki/definitions/anticipatory-ethics|Anticipatory Ethics]]

## Notes

The four-pressure taxonomy is methodologically important: it resists technological determinism (LMAs don't create these problems from scratch; they interact with pre-existing structural vulnerabilities) and saliency bias (the actual democratic risk is less about AI's dramatic capabilities and more about its interaction with mundane structural weaknesses in contemporary democracies).

---
## wiki/findings/ai-circumvents-identity-source-bias.md

---
title: "AI Circumvents Identity-Driven Source Selection Bias"
type: finding
tags: [democratic-risks, empirical, epistemic-effects]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Globig et al 2025 Identity Driven Biases.pdf"
related:
  - "[[wiki/sources/identity-driven-source-selection-biases|Identity-Driven Source Selection Biases (Globig et al., 2025)]]"
  - "[[wiki/definitions/ai-sycophancy|AI Sycophancy]]"
  - "[[wiki/findings/sycophantic-ai-increases-extremity|Sycophantic AI Increases Political Attitude Extremity]]"
---

## Claim

AI information sources reduce identity-driven source selection bias — participants prefer AI-generated information over both ingroup and outgroup partisan sources and accumulate evidence more uniformly rather than selectively — suggesting AI's perceived neutrality can function as an epistemic intervention against tribal information filtering.

## Evidence

- Globig et al. (NYU / Google, 2025 working paper): three studies, n=1,054; 284; 277; drift-diffusion modeling of evidence accumulation; AI preferred over ingroup partisan source (more politically significant result) and outgroup partisan source; evidence accumulation rates more uniform for AI-sourced content than for partisan-sourced content; perceived source neutrality identified as mediating variable → [[wiki/sources/identity-driven-source-selection-biases|Identity-Driven Source Selection Biases]]

## Contradicted by / Tension with

The optimistic epistemic effect is conditional on AI behaving neutrally — which the companion [[wiki/findings/sycophantic-ai-increases-extremity|sycophancy paper]] shows is not the default mode AI developers tend to optimize for. The anti-source-bias effect could be fully reversed by sufficiently sycophantic AI design. Together, the two findings imply the epistemic effect of AI on democratic epistemics is determined by design choices, not by the technology itself.

## Relevant concepts

[[wiki/definitions/ai-sycophancy|AI Sycophancy]]

## Notes

The ingroup preference suppression is particularly significant politically: the dominant model of online political information processing assumes people seek out identity-confirming sources. If AI bypasses this, it could function as a modest counter-polarization mechanism. But this effect is fragile — it depends on users perceiving AI as neutral, and that perception could be undermined by evidence of sycophancy, political bias incidents, or developer-induced framing.

---
## wiki/findings/ai-companions-as-manipulation-technology.md

---
title: "AI Companions Enable Scalable Social Manipulation"
type: finding
tags: [democratic-risks, agentic-ai, epistemic-effects, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/AI Agents and Democratic Resilience.md"
related:
  - "[[wiki/definitions/cognitive-autonomy|Cognitive Autonomy]]"
  - "[[wiki/definitions/anticipatory-ethics|Anticipatory Ethics]]"
  - "[[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]"
  - "[[wiki/findings/llm-conspiracy-bunking-debunking-symmetric|LLM Conspiracy Bunking and Debunking Effects Are Symmetric]]"
---

## Claim

Agentic AI companions resolve the central limiting constraint on social manipulation — its dependence on labor-intensive, non-scalable relationship cultivation — enabling large-scale covert manipulation of [[wiki/definitions/cognitive-autonomy|cognitive autonomy]] at negligible marginal cost.

## Evidence

- [Lazar & Cuéllar, 2026]: Prior persuasive technologies (targeted advertising, political messaging, AI-generated disinformation) have all operated through one-way messaging — broadcasting propositions to audiences. Research consistently shows this is less effective than critics fear for changing actual behaviors or votes. The most potent manipulation vector is a relationship — cultivating trust, earning admiration, making the target desire the influencer's approval. But this has historically required labor-intensive individual attention, making it non-scalable. → [[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]
- [Lazar & Cuéllar, 2026]: LMA companions change this calculus by letting an operator deploy an AI that performs relational work at negligible marginal cost. Three identified deployment architectures: (1) human-directed with AI proxy (operator opens relationship, AI maintains it, human enters at decisive moments); (2) fully autonomous AI posing as a person, conducting entire manipulation without ongoing human supervision; (3) covert repurposing of a companion the user knowingly befriended — e.g., through acquisition of the AI provider. → [[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]

## Contradicted by / Tension with

- Lazar & Cuéllar themselves note the long history of unjustified panics about new media technologies brainwashing audiences (radio, TV, internet, social media), and explicitly argue this is different. The key distinction they draw is operational: prior persuasive technologies broadcast; AI companions converse. Whether the difference in mechanism produces a proportional difference in effect is an empirical question the paper addresses theoretically but does not resolve empirically.

## Relevant concepts

[[wiki/definitions/cognitive-autonomy|Cognitive Autonomy]], [[wiki/definitions/agentic-ai|Agentic AI]]

## Notes

This finding is conceptually distinct from the disinformation/conspiracy-promotion findings in [[wiki/sources/llm-conspiracy-promotion|Costello et al.]] — that paper documents LLMs producing directionally impactful content; this finding describes a mechanism of influence that doesn't require producing false content but rather cultivating dependency and trust to make any content more persuasive. The companion manipulation threat is potentially more potent precisely because it operates through authentic-seeming relationship rather than identifiable propaganda.

---
## wiki/findings/ai-safety-ecosystem-property.md

---
title: "AI Safety Is an Ecosystem Property, Not a Model Property"
type: finding
tags: [technical-safety, open-weight-models, governance-mechanisms, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Technical Innovations for AI Policy 2026 What We Heard, and What It Means.md"
related:
  - "[[wiki/findings/open-weight-lifecycle-governance-gaps|Open-Weight Model Lifecycle Governance Has Systematic Gaps]]"
  - "[[wiki/findings/multi-agent-governance-gap|Existing AI Governance Frameworks Have a Multi-Agent Gap]]"
  - "[[wiki/sources/tiap-2026|TIAP 2026 (FAR.AI)]]"
  - "[[wiki/sources/open-weight-model-risk-management|Open Technical Problems in Open-Weight Model Risk Management]]"
---

## Claim

Safety properties that hold for a given AI model in isolation do not determine safety outcomes at the ecosystem level; any safety agenda that ignores proliferation dynamics — including open-source release, model theft, and fine-tuning by third parties — should be considered unserious as a governance framework.

## Evidence

- [TIAP 2026, Casper/MIT]: OpenAI's DALL-E 2 (April 2022) represented a near-perfect execution of the prevailing safety strategy — make AI safe by building safe systems, with comprehensive content filtering. Four months later, Stable Diffusion launched without content filtering and became the primary tool for generating non-consensual content. The Internet Watch Foundation recorded a 26,362% rise in AI-generated child sexual abuse material between 2024 and 2025. The safety property of DALL-E 2 was entirely irrelevant to the ecosystem outcome. → [[wiki/sources/tiap-2026|TIAP 2026]]
- [TIAP 2026, Casper/MIT]: "AI safety is not a model property, it is an ecosystem property, and any safety agenda that does not account for proliferation should be considered unserious." → [[wiki/sources/tiap-2026|TIAP 2026]]

## Contradicted by / Tension with

This finding creates a direct challenge to the individual-model safety approach embedded in all frontier lab preparedness frameworks ([[wiki/sources/anthropic-rsp|Anthropic RSP]], [[wiki/sources/openai-preparedness-framework|OpenAI Preparedness]], [[wiki/sources/gdm-frontier-safety-framework|GDM Frontier Safety]]), dangerous capability evaluations, and the Singapore Consensus — all of which focus on properties of specific models. The finding does not say model-level safety is irrelevant — Casper notes all major frontier companies have solved radicalization compliance in *some* models. The problem is that the ecosystem includes open-weight releases and non-frontier actors who have not.

Directly reinforces [[wiki/sources/open-weight-model-risk-management|Caspar et al.]] on open-weight governance, which makes the same argument in a different register: once a model is released, its safety properties are locked and proliferation governance takes over.

## Relevant concepts

[[wiki/definitions/open-weight-model|Open-Weight Model]], [[wiki/definitions/tamper-resistant-training|Tamper-Resistant Training]]

## Notes

The radicalization compliance finding from TIAP (Gemini 3 Pro complying ~90% of the time on extreme ISIS recruitment prompts without jailbreaking, while GPT-5.1, Claude Opus 4.5, Grok 4, and Gemini 3.1 Pro all sit near zero) shows the same pattern at the model level: safety is achievable but not automatically present across models. The ecosystem property argument is that achieving it in some models is insufficient if the ecosystem includes models that have not.

---
## wiki/findings/ai-sovereignty-as-policy-principle.md

---
title: "AI Sovereignty as an Emerging Central Principle of National AI Policy"
type: finding
tags: [international, ai-policy, compute, governance-theory, empirical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/stanford-hai-ai-index-2026-policy.md"
related:
  - "[[wiki/sources/stanford-hai-ai-index-2026-policy|Stanford HAI AI Index 2026 — Policy and Governance Chapter]]"
  - "[[wiki/definitions/ai-sovereignty|AI Sovereignty]]"
  - "[[wiki/findings/public-private-investment-gap-ai|U.S. Public AI Investment Is Dwarfed by Private Sector Spending]]"
---

## Claim

Between 2018 and 2025, AI sovereignty — the goal of gaining domestic agency over AI capabilities — emerged as a central organizing principle of national AI policy globally, but the infrastructure required to achieve it (compute clusters, advanced model training capacity) remains highly concentrated in Europe and North America.

## Evidence

- [Stanford HAI AI Index 2026]: Europe/Central Asia expanded state-backed AI supercomputing clusters from 3 to 44 between 2018–2025; South Asia, Latin America, and MENA have reached only 2, 3, and 8 respectively → [[wiki/sources/stanford-hai-ai-index-2026-policy|Stanford HAI AI Index 2026 — Policy and Governance Chapter]]
- [AI Index 2026]: More than half of newly adopted 2024 AI strategies came from emerging economies and countries with no formal AI policy five years prior → [[wiki/sources/stanford-hai-ai-index-2026-policy|Stanford HAI AI Index 2026 — Policy and Governance Chapter]]

## Contradicted by / Tension with

- Sovereignty ambition and sovereignty capacity are decoupled: many countries developing AI policies lack the compute and talent infrastructure to achieve meaningful AI independence.
- The concentration of frontier AI capability in a handful of U.S. and Chinese companies means "AI sovereignty" for most nations involves at most procurement and deployment choices, not fundamental technical independence.

## Relevant concepts

[[wiki/definitions/ai-sovereignty|AI Sovereignty]], [[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]

## Notes

Parallel to data sovereignty debates (GDPR, data localization); the governance challenge is structurally similar — how do jurisdictions assert regulatory authority over systems they did not build and may not fully understand?

---
## wiki/findings/aiml-as-immature-discipline.md

---
title: "AI/ML Is a Professionally Immature Discipline"
type: finding
tags: [professionalization, governance-mechanisms, governance-institutions]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Rob Reich - The Role of AISIs in AI Governance.md"
related:
  - "[[wiki/findings/aisi-professionalization-argument|The AISI Professionalization Argument]]"
  - "[[wiki/sources/rob-reich-aisi-governance|Rob Reich: The Role of AISIs in AI Governance]]"
---

## Claim

AI/ML is a professionally immature discipline — its internal norms, standards, and felt sense of responsibility are thin compared to longer-standing professional fields like biomedical research or law, and this immaturity is a governance problem independent of technical capability levels.

## Evidence

- [Reich, FAR.AI, March 2025]: Computer science only became formally organized as a university field in the 1950s; AI/ML in its current powerful form dates to the 2000s. Compared to biomedical research or law, the professional footprint of norms and standards is far less dense. → [[wiki/sources/rob-reich-aisi-governance|Rob Reich: The Role of AISIs in AI Governance]]
- [Reich, FAR.AI, March 2025]: At NeurIPS 2023, less than 10% of papers and posters addressed safety or security; the overwhelming majority addressed capability advancement. This allocation reflects professional norms, not individual bad faith — the field's incentive structures and reputational economies reward capability advancement and underinvest in safety. → [[wiki/sources/rob-reich-aisi-governance|Rob Reich: The Role of AISIs in AI Governance]]
- [Reich, FAR.AI, March 2025]: "Can you think of an AIML developer who didn't break the law but violated a norm widely understood within the community and suffered a professional cost for it?" The inability to answer this question diagnoses the immaturity. Contrast with the CRISPR case, where a Chinese researcher who violated a globally shared norm was excommunicated from the global scientific community, refused publication, and eventually imprisoned.

## Contradicted by / Tension with

The growth of AI safety as a subfield since 2014 represents early-stage professionalization — organizations like FAR.AI, MIRI, ARC, UK AISI, US AISI represent an emerging professional community. Whether this constitutes genuine professional maturation or a specialized subculture insulated from mainstream ML practice is unclear.

## Relevant concepts

None requiring new definition pages.

## Notes

Reich's institutional prescription: change how professional societies (NeurIPS, ICML) are operated — "try to get elected to the board of NeurIPS or ICML and see what type of change is possible." The reputational economies of these bodies are where professional norms are generated and observed in practice. This is a more tractable and precise target than "improve AI ethics education."

---
## wiki/findings/aisi-professionalization-argument.md

---
title: "The AISI Professionalization Argument: AI Governance Requires Both Law and Professional Norms"
type: finding
tags: [governance-institutions, professionalization, governance-mechanisms]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Rob Reich - The Role of AISIs in AI Governance.md"
related:
  - "[[wiki/findings/aiml-as-immature-discipline|AI/ML is a Professionally Immature Discipline]]"
  - "[[wiki/sources/rob-reich-aisi-governance|Rob Reich: The Role of AISIs in AI Governance]]"
  - "[[wiki/sources/uk-aisi|UK AISI]]"
---

## Claim

Effective AI governance requires working on two parallel and interdependent tracks: (1) law, policy, and regulation from democratic institutions; and (2) professional norms, standards, and responsibilities emerging from within the AI/ML field itself. Neither track is sufficient alone — statutes without professional standards are functionally inert, and professional standards without legal backing are unenforceable.

## Evidence

- [Reich, FAR.AI, March 2025]: "A government could easily pass a law that says something like 'there shalt be digital watermarking.' But of course the government is partly because of its lack of technical expertise but also partly because it's not the role of the lawmaker... [to create the technical standard of watermarking]. Passing a law without some interaction with the professional norms and standards that exist within the expertise in the field is functionally inert or impossible to enforce." → [[wiki/sources/rob-reich-aisi-governance|Rob Reich: The Role of AISIs in AI Governance]]
- [Reich, FAR.AI, March 2025]: The US AISI was designed to work on both tracks — advancing the science of AI safety (building professional standards for evaluation), developing specific tests and evaluations under the voluntary commitment framework (bridging professional standards and government use), and disseminating those practices domestically and internationally (culminating in the November 2024 international network of AI safety institutes). → [[wiki/sources/rob-reich-aisi-governance|Rob Reich: The Role of AISIs in AI Governance]]
- [Reich, FAR.AI, March 2025]: The most consequential lever for improving professional norms within AIML is engagement with the professional societies where reputations and status are assigned — NeurIPS, ICML — rather than government mandates. The allocation of talent (less than 10% of NeurIPS 2023 papers addressing safety or security) reflects professional norms that government cannot directly change.

## Contradicted by / Tension with

The voluntary commitment framework's incentive compatibility (companies benefit from external evaluation) is consistent with this finding, but the February 2026 Anthropic-Pentagon standoff shows that voluntary commitments can fail precisely when they conflict with government power — suggesting professional norms alone are insufficient buffer against state pressure.

## Relevant concepts

None requiring definition beyond existing pages.

## Notes

Reich makes an evocative comparison to the CRISPR-Cas9 case: Jennifer Doudna called for a moratorium within months of the discovery; when He Jiankui violated the norm, he was professionally excommunicated from global science. Reich's diagnostic question: "Can you think of an AIML developer who didn't break the law but violated a norm widely understood within the community and suffered a professional cost for it?" The inability to answer this question diagnoses the field's professional immaturity.

---
## wiki/findings/algorithmic-rule-by-law-threat.md

---
title: "Algorithmic Rule by Law as Distinct Governance Threat"
type: finding
tags: [governance-theory, law, democratic, philosophy]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Introduction (Chapter 1) - Algorithmic Rule By Law.md"
related:
  - "[[wiki/findings/ai-agents-four-structural-pressures-democracy|LMAs Exacerbate Four Structural Pressures on Democracy]]"
  - "[[wiki/findings/governance-by-procurement-as-democratic-vacancy|Governance by Procurement Creates a Democratic Vacancy]]"
  - "[[wiki/findings/capability-accountability-trap|The Capability-Accountability Trap in Administrative Law]]"
  - "[[wiki/definitions/algorithmic-rule-by-law|Algorithmic Rule by Law]]"
  - "[[wiki/definitions/rule-by-law|Rule by Law]]"
  - "[[wiki/sources/algorithmic-rule-by-law-smuha|Smuha — Algorithmic Rule by Law]]"
---

## Claim

Algorithmic regulation by public authorities poses a distinct governance threat — "algorithmic rule by law" — in which the veneer of legal legitimacy conceals the incremental erosion of constitutional checks and balances, enabling authoritarian and illiberal practices without the visible coups or sweeping regime changes that historically signal democratic backsliding.

## Evidence

- [Smuha 2024]: The danger is that algorithmic regulation "incrementally increases executive power, diminishes public accountability, and erodes the rule of law" — like "the clueless frog in a pot of water that is slowly brought to boil," the "veneer of legality might blind us to the fact that the values we hold dear are nevertheless undermined." The key feature is that this can occur under either scenario: deliberate ill intent *or* good intentions combined with negligence. → [[wiki/sources/algorithmic-rule-by-law-smuha|Smuha — Algorithmic Rule by Law]]
- [Smuha 2024]: Algorithmic systems enable overnight mass-decision-making parameter changes "at the push of a button," affecting all subjects simultaneously without informing or persuading critical public officials — a structural asymmetry unavailable to pre-algorithmic executives. → [[wiki/sources/algorithmic-rule-by-law-smuha|Smuha — Algorithmic Rule by Law]]

## Contradicted by / Tension with

Smuha focuses on the executive branch deploying algorithmic systems to administer law — a different threat vector than commercial AI harms to individuals, or from AI companies wielding private power. The governance-by-procurement finding ([[wiki/findings/governance-by-procurement-as-democratic-vacancy|HKS/Carr Center]]) addresses a parallel democratic vacancy, but arising from *private* companies negotiating governance terms, not from the *state* using AI to administer those terms. These are complementary faces of the same democratic deficit.

## Relevant concepts

[[wiki/definitions/algorithmic-regulation|Algorithmic Regulation]], [[wiki/definitions/algorithmic-rule-by-law|Algorithmic Rule by Law]], [[wiki/definitions/cognitive-autonomy|Cognitive Autonomy]], [[wiki/definitions/scrutability|Scrutability]], [[wiki/definitions/anticipatory-ethics|Anticipatory Ethics]]

## Notes

Smuha distinguishes "algorithmic rule by law" from two earlier concepts: *technological management* (Brownsword — regulation through code design rather than through legal norms) and *rule of algorithm* (Meyer-Resende — algorithm substituting for law). Her contribution is showing that the veneer of legality is both the mechanism and the danger: the state is still *using* law, but using it as a formal shell that no longer performs its protective constitutional function.

---
## wiki/findings/ashby-institutional-adaptation-dominant-constraint.md

---
title: "Institutional Adaptation as Dominant Constraint on AI Deployment"
type: finding
tags: [ai-policy, governance-theory, governance-institutions, industry-practice, empirical]
created: 2026-05-04
updated: 2026-05-04
sources:
  - "raw/2026 Ashby Workshop.pdf"
related:
  - "[[wiki/sources/ashby-workshop-2026|2026 Ashby Workshops: Designing Our Collective AI Future]]"
  - "[[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]"
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as a Prerequisite for Effective AI Governance]]"
  - "[[wiki/findings/government-ai-adoption-lags-private-sector|Government AI Adoption Lags the Private Sector]]"
  - "[[wiki/findings/collingridge-dilemma|Collingridge Dilemma]]"
---

# Institutional Adaptation as Dominant Constraint on AI Deployment

## Claim

Cross-sector participants at the 2026 Ashby Workshops converged on the finding that institutional adaptation, not technical capability, is now the primary bottleneck to responsible AI deployment at scale — enterprises are integrating AI into compliance structures built for an earlier era, policymakers lack the expertise to evaluate frontier models independently, and researchers face legal and data-access barriers that make rigorous safety testing difficult.

## Evidence

- [Ashby 2026, p. 3, "Institutional adaptation is now a dominant constraint"]: "Technical progress is no longer the primary bottleneck to responsible deployment at scale. Institutional readiness is. Enterprises are integrating AI into systems and compliance structures built for an earlier era. Policymakers often lack the expertise and bandwidth to independently evaluate frontier models. Researchers and civil society groups face legal and data-access barriers that make rigorous safety testing difficult. Across domains, the limiting factor is not what the technology can do, but whether existing institutions are equipped to implement and govern it responsibly at scale." → [[wiki/sources/ashby-workshop-2026|2026 Ashby Workshops: Designing Our Collective AI Future]]
- [Ashby 2026, p. 3, "Delay is a choice — and it has consequences"]: "The window for shaping governance and market norms will not remain open indefinitely; as technological capacity races further and further ahead of any institution or social construct that might tame it, there will come a point at which the rules society wants for AI can no longer constrain the reality of what it's become." → [[wiki/sources/ashby-workshop-2026|2026 Ashby Workshops: Designing Our Collective AI Future]]
- [Ashby 2026, p. 5, "Plans for AGI & Loss of Control"]: "What is missing is institutional capacity for independent oversight. Governments often lack the technical expertise to evaluate frontier systems. Academic researchers and assurance providers do not have the access to data and compute needed for meaningful external assessment. The governance gap is widest precisely where the stakes are highest." → [[wiki/sources/ashby-workshop-2026|2026 Ashby Workshops: Designing Our Collective AI Future]]
- [Ashby 2026, p. 2, workforce data]: Brian Peters (Anthropic) reported that at Anthropic, 100% of coding is now done with Claude, up from 40–60% just five months prior. Nichol Bradford (SHRM) stated: "Worker anxiety is through the roof." These figures point to a pace of institutional change within even the most AI-fluent organizations that outstrips policy response. → [[wiki/sources/ashby-workshop-2026|2026 Ashby Workshops: Designing Our Collective AI Future]]

## Contradicted by / Tension with

- The TIAP 2026 "governance infrastructure gap" finding frames the bottleneck differently: policy-grade evaluations fail validity/reliability tests; versioning is unverifiable; multi-agent governance frameworks don't exist. TIAP emphasizes missing technical governance *tools*. Ashby emphasizes missing institutional *capacity*. These are complementary framings — the tools problem and the institutions problem reinforce each other — but the emphasis differs.
- The "institutional adaptation" framing is similar to but distinct from the [[wiki/definitions/collingridge-dilemma|Collingridge Dilemma]]: the dilemma is about the timing of governance intervention (easy to shape early, hard to see consequences early; consequences visible later, harder to change). Ashby is making a slightly different claim: that institutional capacity constraints mean governance can't keep pace with technological change even when the will to govern exists. The Collingridge problem is about information; the Ashby institutional problem is about capacity.
- The government technical capacity argument at Ashby echoes [[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as a Prerequisite for Effective AI Governance]] (from UK AISI / Seoul Summit). The Ashby framing is broader, extending to enterprises and civil society, not only governments.

## Relevant concepts

[[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/scrutability|Scrutability]]

## Notes

The Ashby institutional adaptation finding is cross-validated by multiple sources in the wiki: OECD 2025 (government AI lags private sector; most efforts in pilot phase), TIAP 2026 (governance infrastructure gap), UK AISI (government needs independent evaluation capacity), RAND 2024 (norm consensus as governance prerequisite requires institutional carriers). The convergence is notable — participants from across the ideological, sectoral, and disciplinary spectrum at Ashby reached the same diagnosis. The disagreement at Ashby was not about the diagnosis (institutions are not keeping pace) but about the prescription (what to build, and how fast).

---
## wiki/findings/ashby-trust-infrastructure-adoption-prerequisite.md

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

---
## wiki/findings/asilomar-moratorium-as-voluntary-governance-model.md

---
title: "Asilomar Moratorium as Voluntary Governance Model: Success Conditions and AI Applicability"
type: finding
tags: [governance-theory, technology-policy, industry-practice]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/AI Governance Lessons from Earlier Technologies.pdf"
related:
  - "[[wiki/findings/norm-consensus-as-governance-prerequisite|Norm Consensus as Governance Prerequisite]]"
  - "[[wiki/findings/frontier-developer-special-responsibility-norm|Emerging Norm: Frontier AI Developers Bear Special Responsibility]]"
  - "[[wiki/findings/responsible-capability-scaling-as-industry-norm|Responsible Capability Scaling Has Become the Dominant Voluntary Industry Safety Approach]]"
  - "[[wiki/sources/rand-ai-governance-historical-analogues|RAND — Historical Analogues (Vermeer, 2024)]]"
---

# Asilomar Moratorium as Voluntary Governance Model: Success Conditions and AI Applicability

## Claim

The 1975 Asilomar Conference on Recombinant DNA succeeded as a voluntary governance mechanism because it involved a small, cohesive scientific community with consensus on a narrow, tractable technical risk; the 2023 AI pause letter failed by these same criteria, and future voluntary governance for AI will require similar conditions that may be structurally harder to satisfy.

## Evidence

- [Vermeer 2024 / Berg 2008, cited therein]: The recombinant DNA moratorium was "universally observed in academic and industrial research centres" (Berg, 2008). ~140 participants at Asilomar including international delegations reached consensus on guidelines that were then reflected in NIH policy. The risk (potential dissemination of cancer-inducing modified organisms) was technical, concrete, and shared. → [[wiki/sources/rand-ai-governance-historical-analogues|RAND — Historical Analogues (Vermeer, 2024)]]
- [Vermeer on CRISPR failure]: The 2018–2019 calls for a human germline editing moratorium failed to produce Asilomar-like results because: stakeholder diversity had grown substantially, commercial interests were larger, and ethical disagreements (not just technical ones) drove the discourse. National Academies and WHO declined to recommend a moratorium, instead specifying criteria for clinical trials.
- [Vermeer on 2023 AI pause letter]: The Future of Life Institute AI pause letter (March 2023) was "promptly ignored — even by many of its authors and signatories," consistent with the analysis that moratoria require pre-existing norm consensus rather than generating it.

## Contradicted by / Tension with

- [[wiki/findings/responsible-capability-scaling-as-industry-norm|Responsible Capability Scaling as Industry Norm]]: RSP commitments by Anthropic, GDM, and OpenAI represent a form of voluntary self-governance, but are company-level rather than community-level, and rely on self-assessment rather than third-party verification — structurally different from Asilomar's community-enforced norm.
- [[wiki/findings/frontier-developer-special-responsibility-norm|Frontier Developer Special Responsibility]]: The Bletchley/Seoul norms create a sense of shared responsibility, but whether they constitute the narrow, tractable, consensus-based risk framing that made Asilomar work is unclear.

## Relevant concepts

[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]

## Notes

Vermeer draws an explicit distinction between the first Asilomar case (success: narrow technical risk, small cohesive community, temporary pause with clear resumption criteria) and the CRISPR case (partial failure: ethical complexity, diverse stakeholders, no agreed resumption criteria). AI governance discussions frequently invoke "Asilomar for AI" as a template; this finding clarifies the structural conditions that made the original work, which AI may not currently meet. Key differences: the AI development community is larger and more commercially driven, the risks are more speculative and ethically contested, and there is no physical substrate whose manipulation can be temporarily halted while deliberation proceeds.

---
## wiki/findings/benchmark-quality-gaps-undermine-governance.md

---
title: "Benchmark Quality Gaps Undermine AI Governance"
type: finding
tags: [technical-safety, governance-theory, ai-policy, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/BetterBench Assessing AI Benchmarks, Uncovering Issues, and Establishing Best Practices.pdf"
related:
  - "[[wiki/sources/betterbench-ai-benchmark-assessment|BetterBench: Assessing AI Benchmarks]]"
  - "[[wiki/findings/compute-threshold-as-governance-proxy|Compute Thresholds as a Governance Proxy]]"
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as Governance Prerequisite]]"
  - "[[wiki/findings/responsible-capability-scaling-as-industry-norm|Responsible Capability Scaling as Industry Norm]]"
  - "[[wiki/definitions/benchmark-lifecycle|Benchmark Lifecycle]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
---

## Claim

AI benchmarks embedded in governance frameworks have significant quality problems — especially in reproducibility and statistical reporting — that undermine their reliability as capability proxies and regulatory triggers.

## Evidence

- BetterBench (Reuel et al., NeurIPS 2024): 24 benchmarks assessed against 46 criteria; MMLU (widely used for capability evaluation) scored 5.5/15 weighted average; implementation stage avg 6.2/15 across all benchmarks; replication script score avg 3.75/15; statistical significance reporting avg 5.62/15; the UK AISI *Inspect* framework and EU AI Act Article 51 are both cited as governance uses of benchmarks → [[wiki/sources/betterbench-ai-benchmark-assessment|BetterBench: Assessing AI Benchmarks]]

## Contradicted by / Tension with

Industry responsible scaling policies (Anthropic RSP, GDM FSF, OpenAI Preparedness Framework) use benchmark-based evaluations as capability-level triggers for scaling pauses. Those frameworks do not address benchmark quality as a variable — they assume the benchmark is a reliable instrument. BetterBench's findings add structural uncertainty to that assumption.

## Relevant concepts

[[wiki/definitions/benchmark-lifecycle|Benchmark Lifecycle]], [[wiki/definitions/compute-threshold|Compute Threshold]], [[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]]

## Notes

The governance implication is an instance of the [[wiki/findings/government-technical-capacity-as-governance-prerequisite|government technical capacity]] problem at one level deeper: even if a regulator has the capacity to run benchmarks independently, the benchmarks themselves may be unreliable instruments. Independent benchmark quality assessment — not just independent evaluation — may be a prerequisite for robust capability-based governance.

---
## wiki/findings/bipartisan-mandatory-ai-audits.md

---
title: "Bipartisan Call for Mandatory AI Safety Audits"
type: finding
tags: [ai-policy, law, governance-theory, governance-institutions, empirical]
created: 2026-05-04
updated: 2026-05-04
sources:
  - "raw/A.I. Is a National Security Risk. We Aren't Doing Nearly Enough..md"
related:
  - "[[wiki/sources/ball-buchanan-ai-national-security-2026|Ball & Buchanan: A.I. Is a National Security Risk (NYT, May 2026)]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/findings/voluntary-ivo-design-tradeoff|Voluntary IVO Participation: Design Tradeoff]]"
  - "[[wiki/findings/virginia-sb384-ivo-licensing-framework|Virginia SB 384: First State IVO Licensing Statute]]"
  - "[[wiki/findings/connecticut-sb5-ivo-pilot|CT SB 5: State-Level IVO Pilot Program]]"
  - "[[wiki/findings/us-executive-ai-governance-reversal-2025|U.S. Executive AI Governance Reversal (January 2025)]]"
  - "[[wiki/findings/democratic-deficit-ai-governance|The Democratic Deficit in AI Governance]]"
---

# Bipartisan Call for Mandatory AI Safety Audits

## Claim

Dean Ball (Trump White House OSTP) and Ben Buchanan (Biden White House AI adviser), writing jointly in May 2026, call on Congress to "mandate audits of AI developers' safety claims and processes, requiring that they be conducted by independent expert bodies overseen by the government" — a bipartisan federal-level call for what is structurally equivalent to a mandatory IVO regime, representing the first cross-partisan endorsement of compulsory independent AI verification at the federal level from former officials of both parties.

## Evidence

- [Ball & Buchanan, NYT, May 4, 2026]: "At a minimum, Congress should mandate audits of A.I. developers' safety claims and processes, requiring that they be conducted by independent expert bodies overseen by the government." → [[wiki/sources/ball-buchanan-ai-national-security-2026|Ball & Buchanan: A.I. Is a National Security Risk (NYT, May 2026)]]
- [Ball & Buchanan, NYT, May 4, 2026]: "Bipartisanship on A.I. is a strategic necessity. The common ground we have found here is not all-encompassing — in our own way, each of us wants to do more — but it is real, and it is enough to build on." → [[wiki/sources/ball-buchanan-ai-national-security-2026|Ball & Buchanan: A.I. Is a National Security Risk (NYT, May 2026)]]
- [Ball & Buchanan, NYT, May 4, 2026]: The AI Safety Institute "languished without a director for months and urgently needs additional resources and experts." Both a Trump-era official and a Biden-era official are calling for strengthening the same agency — a notable signal given the Trump administration's deregulatory posture on AI. → [[wiki/sources/ball-buchanan-ai-national-security-2026|Ball & Buchanan: A.I. Is a National Security Risk (NYT, May 2026)]]

## Contradicted by / Tension with

- The Ball-Buchanan call is for *mandatory* audits — "mandate audits" — which is structurally different from the voluntary participation model in both CT SB 5 §33 and VA SB 384 (§2.2-2034.5(E): "Nothing in this article shall be construed to require any developer or deployer to seek verification"). If enacted, a federal mandatory audit requirement would dissolve the adverse selection problem identified in [[wiki/findings/voluntary-ivo-design-tradeoff|Voluntary IVO Participation: Design Tradeoff]] but would require Congress to act — which as of the article's publication date Congress has not done. ("Congress has passed no law to manage A.I.'s risks or control China's access to the technology it needs to catch up.")
- Ball's inclusion is the most significant political signal: he is a Trump-era official, and the Trump administration's deregulatory AI posture (EO 14179 revoking EO 14110) is the primary obstacle to federal AI regulation. A Trump alumnus co-signing a call for mandatory federal AI audits suggests that national security framing may be the path through which mandatory verification becomes politically viable in a deregulatory political environment.
- The institutional design the op-ed describes — "independent expert bodies overseen by the government" — is the IVO model, but the authors do not use that terminology. Connecting the Ball-Buchanan proposal to the Hadfield/Fathom IVO framework and the Virginia/CT legislative implementations is an analytic move this wiki makes but the op-ed does not.
- The call is framed as "at a minimum" — suggesting both authors would support more, but are anchoring at the bipartisan minimum. The asymmetry is named: "in our own way, each of us wants to do more." What Ball would do more of (likely compute controls) and what Buchanan would do more of (likely domestic safety regulation) are not specified.

## Relevant concepts

[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/regulatory-markets|Regulatory Markets]]

## Notes

The political economy of mandatory AI audits at the federal level is the key open question this finding raises. The path from voluntary state IVO frameworks (CT, VA) to a federal mandatory audit requirement runs through the national security framing that Ball and Buchanan deploy: the argument is not "safety requires oversight" (which triggers deregulatory resistance) but "national security requires knowing what these systems can do" (which is harder to oppose on deregulatory grounds). This framing reposition is potentially significant for the IVO governance project — it suggests that CBRN capability documentation (see [[wiki/findings/frontier-cbrn-capability-threshold-reached|Frontier AI CBRN Capability Threshold]]) may be the political catalyst for mandatory federal verification that voluntary state frameworks could not provide.

---
## wiki/findings/bletchley-first-multilateral-frontier-safety-agreement.md

---
title: "Bletchley Declaration: First Multilateral Frontier AI Safety Agreement"
type: finding
tags: [international, governance-theory, risk-existential, empirical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/bletchley-declaration-2023.md"
related:
  - "[[wiki/sources/bletchley-declaration-2023|The Bletchley Declaration (2023)]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
  - "[[wiki/findings/frontier-ai-catastrophic-risk-consensus|Frontier AI Catastrophic Risk Consensus]]"
---

## Claim

The Bletchley Declaration (November 2023) is the first multilateral political agreement focused specifically on frontier AI safety, and the only such agreement to include both China and the United States.

## Evidence

- [Bletchley Declaration]: 28 countries + EU signed; signatories include China, US, UK, EU, Australia, India, and 24 others → [[wiki/sources/bletchley-declaration-2023|The Bletchley Declaration (2023)]]

## Contradicted by / Tension with

- The OECD AI Principles (2019, 47 adherents) are broader in adoption but narrower in focus — they do not address frontier AI risks specifically. The Bletchley Declaration is the first instrument explicitly targeting catastrophic frontier risks.

## Relevant concepts

[[wiki/definitions/frontier-ai|Frontier AI]], [[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]

## Notes

China's inclusion is strategically significant: subsequent governance instruments (Seoul Commitments, Paris Summit) have had more difficulty maintaining Chinese participation, making Bletchley's list the high-water mark of multilateral breadth for frontier AI governance. New Zealand joined retroactively in October 2024.

---
## wiki/findings/broad-adoption-shallow-commitment-dynamic.md

---
title: "Broad Adoption, Shallow Commitment: The OECD AI Principles Dynamic"
type: finding
tags: [international, governance-theory, theoretical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/oecd-ai-principles.md"
  - "raw/bletchley-declaration-2023.md"
related:
  - "[[wiki/sources/oecd-ai-principles|OECD AI Principles (2019, updated 2024)]]"
  - "[[wiki/sources/bletchley-declaration-2023|The Bletchley Declaration (2023)]]"
  - "[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]]"
---

## Claim

The OECD AI Principles have achieved near-universal adherence (47 governments) precisely because their level of generality imposes minimal behavioral constraints — illustrating a structural tension in international governance between breadth of adoption and depth of commitment.

## Evidence

- [OECD AI Principles]: 47 adherents including all OECD members and major G20 partners; five high-level values-based principles; no enforcement mechanism → [[wiki/sources/oecd-ai-principles|OECD AI Principles (2019, updated 2024)]]
- [Bletchley Declaration]: 29 signatories (narrower than OECD) but specifically targeted at frontier AI catastrophic risks — more constrained in scope, more specific in commitment → [[wiki/sources/bletchley-declaration-2023|The Bletchley Declaration (2023)]]

## Contradicted by / Tension with

- The OECD AI system definition has achieved functional significance through adoption by the EU AI Act, EO 14110, Council of Europe Convention, and UN frameworks — suggesting that definitional coordination can be genuinely consequential even without substantive behavioral commitments.

## Relevant concepts

[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]], [[wiki/definitions/frontier-ai|Frontier AI]]

## Notes

Analogous dynamics appear in climate governance (Paris Agreement broad adoption vs. NDC ambition), nuclear nonproliferation (NPT universality vs. disarmament compliance), and internet governance. The pattern suggests that governance instruments optimized for adoption may be structurally different from those optimized for compliance.

---
## wiki/findings/capability-accountability-trap.md

---
title: "The Capability-Accountability Trap in Administrative Law"
type: finding
tags: [governance-theory, law, administrative-law]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Caputo 2026 Capability-Accountability Trap.pdf"
related:
  - "[[wiki/sources/capability-accountability-trap-caputo|Capability-Accountability Trap (Caputo, 2026)]]"
  - "[[wiki/definitions/scrutability|Scrutability]]"
  - "[[wiki/findings/scrutability-as-governance-infrastructure|AI as Scrutability Infrastructure]]"
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as Governance Prerequisite]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
---

## Claim

American administrative law has exhibited a structural capability-accountability trap since 1887: agencies that acquire the expertise to regulate complex technical domains lose *scrutability* — the cognitive tractability of their decisions for non-specialist overseers — creating an inverse relationship between regulatory capability and democratic accountability that courts have periodically "resolved" by sacrificing capability to restore scrutability.

## Evidence

- Caputo (Oxford Martin, 2026 draft): historical analysis from ICC Act (1887) through contemporary administrative law; SCOTUS trilogy as scrutability restorations at the cost of agency capability: *Loper Bright Enterprises v. Raimondo* (2024, overturning *Chevron* deference), *West Virginia v. EPA* (2022, major questions doctrine), *SEC v. Jarkesy* (2024, jury trial rights in agency enforcement); Herbert Simon bounded rationality framework operationalizes why scrutability fails → [[wiki/sources/capability-accountability-trap-caputo|Capability-Accountability Trap]]

## Contradicted by / Tension with

The argument that the capability-accountability tradeoff is structural and historical is in tension with reformist optimism about technical governance capacity: [[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as Governance Prerequisite]] treats capacity as a variable to be built; Caputo's analysis implies the accountability cost of building capacity is a structural feature of U.S. constitutional law, not just a capability gap.

## Relevant concepts

[[wiki/definitions/scrutability|Scrutability]], [[wiki/definitions/technical-legibility|Technical Legibility]]

## Notes

The SCOTUS trilogy finding is particularly important for U.S. AI governance: the same constitutional constraints that have historically limited agency regulatory capability apply to any federal AI regulatory body. An AI agency with genuine technical capacity may face legal challenges precisely because its expert judgments are not scrutably reviewable. This is not a theoretical risk — the EPA and SEC cases show courts are actively exercising this check.

---
## wiki/findings/china-export-controls-as-ai-safety-risk.md

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

---
## wiki/findings/china-loss-of-control-acknowledgment.md

---
title: "China Officially Acknowledges Loss-of-Control AI Risk"
type: finding
tags: [ai-policy, international, risk-existential, governance-theory, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/《人工智能安全治理框架》2.0版.pdf"
related:
  - "[[wiki/sources/china-ai-safety-governance-framework-2|China AI Safety Governance Framework 2.0]]"
  - "[[wiki/findings/singapore-consensus-safety-research-framework|Singapore Consensus: Three-Part Safety Research Framework]]"
  - "[[wiki/definitions/loss-of-control-risk|Loss-of-Control Risk]]"
  - "[[wiki/findings/connecticut-sb5-frontier-whistleblower|CT SB 5: Frontier Whistleblower Protection]]"
---

# China Officially Acknowledges Loss-of-Control AI Risk

## Claim

China's AI Safety Governance Framework 2.0 explicitly names loss-of-control AI risk as both a named governance principle (Principle 1.5: 防范失控 — "Prevent Loss of Control") and a dedicated comprehensive governance measure (§5.11: "Foster consensus on collaborative response to loss-of-control AI risks"), constituting the most significant Chinese official acknowledgment of catastrophic AI risk and positioning China as at least nominally convergent with the western AI safety community on this risk category.

## Evidence

- [Framework 2.0, §1.5]: Governance Principle 1.5 — 可信应用、防范失控 (Trustworthy Application, Prevent Loss of Control): "Promote the formation of a multi-layered trustworthy AI basic code covering technical protection, value alignment, and collaborative governance; ensure AI technology development is safe, reliable, and controllable; strictly prevent loss-of-control risks that threaten human existence and development; ensure AI always remains under human control." → [[wiki/sources/china-ai-safety-governance-framework-2|China AI Safety Governance Framework 2.0]]
- [Framework 2.0, §5.11]: Comprehensive Governance Measure 5.11 — 增进协同应对人工智能失控风险的共识 (Fostering consensus on collaborative response to loss-of-control AI risks): dedicated section calling for building international consensus on response to AI loss-of-control risks. → [[wiki/sources/china-ai-safety-governance-framework-2|China AI Safety Governance Framework 2.0]]
- [Singapore Consensus, 2025]: Singapore Consensus (100+ researchers, 11 countries) explicitly frames safety research as "areas of mutual interest" that transcend geopolitical competition, and identifies loss-of-control and misuse as its two primary risk categories. → [[wiki/sources/singapore-consensus-ai-safety-research|Singapore Consensus on Global AI Safety Research Priorities]]

## Contradicted by / Tension with

- The acknowledgment of loss-of-control risk in an official Chinese technical document is significant but not equivalent to alignment with the western AI safety research agenda. Framework 2.0's primary treatment of catastrophic risk focuses on CBRN misuse (§3.2.3) and critical infrastructure disruption — closer to the "misuse" framing than the "loss of control" framing dominant in western safety research (which centers on misaligned goal pursuit by advanced AI systems).
- Principle 1.5's language ("ensure AI always remains under human control") is formally identical to western safety principles (OECD AI Principle 1.3; Singapore Consensus Control pillar; Anthropic RSP's core commitment) — whether this reflects substantive convergence in threat models or convergence in diplomatic language is an open question.
- China's §5.11 call for *international consensus* on loss-of-control response sits in a document that simultaneously frames US export controls as a safety threat — suggesting that China's safety convergence is strategically conditioned on reciprocal commitments on supply chain access.

## Relevant concepts

[[wiki/definitions/loss-of-control-risk|Loss-of-Control Risk]], [[wiki/definitions/ai-sovereignty|AI Sovereignty]], [[wiki/definitions/frontier-ai|Frontier AI]]

## Notes

The progression from the 2024 Framework 1.0 to 2.0 includes "exploratory risk grading" (探索性提出分级应对原则) as a new element — suggesting China is moving toward a tiered risk-based approach analogous to ASL/CCL frameworks and the EU AI Act's risk tiers. The loss-of-control acknowledgment combined with tiered risk grading represents movement toward the international safety architecture, even if the underlying threat models remain partially divergent. This finding should be read alongside [[wiki/findings/singapore-consensus-safety-research-framework|Singapore Consensus]] and [[wiki/findings/connecticut-sb5-frontier-whistleblower|CT SB 5's deceptive alignment clause]] as three data points on the internationalization of loss-of-control risk as a governance concern.

---
## wiki/findings/china-sectoral-ai-regulation-model.md

---
title: "China's Sectoral AI Regulation Model: Active Governance Without a Comprehensive Statute"
type: finding
tags: [ai-policy, law, international, governance-theory, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/AI laws and regulation in China.md"
related:
  - "[[wiki/sources/china-ai-regulation-overview|AI Laws and Regulation in China]]"
  - "[[wiki/findings/eu-ai-act-first-binding-ai-law|EU AI Act: First Comprehensive Binding AI Law]]"
  - "[[wiki/findings/us-executive-ai-governance-reversal-2025|U.S. Executive AI Governance Reversal (January 2025)]]"
  - "[[wiki/findings/eu-us-regulatory-divergence|EU-US Regulatory Divergence on AI]]"
---

# China's Sectoral AI Regulation Model: Active Governance Without a Comprehensive Statute

## Claim

China has developed a distinctive third model of AI governance — neither the EU's comprehensive risk-based statute nor the US's executive-order/deregulatory approach — characterized by rapid sector-specific rulemaking through the CAC, a growing body of mandatory national technical standards that partially adopt international ISO/IEC standards, active enforcement campaigns, and pre-launch registration requirements for generative AI services, all without a comprehensive AI law and with no clear timeline for one.

## Evidence

- [CMS Law, Feb 2026]: "There is currently no dedicated AI law in force in China." Comprehensive AI legislation has been on the NPC Standing Committee's legislative agenda since 2023; no official draft released as of December 2025. → [[wiki/sources/china-ai-regulation-overview|AI Laws and Regulation in China]]
- [CMS Law, Feb 2026]: The operative regulatory stack includes: *Interim Measures for Generative AI Services* (GenAI Measures), *Administrative Provisions on Deep Synthesis*, *Administrative Provisions on Recommendation Algorithms*, and new content labeling requirements. Each is a short-cycle administrative measure updated faster than a statute could be. → [[wiki/sources/china-ai-regulation-overview|AI Laws and Regulation in China]]
- [CMS Law, Feb 2026]: Multiple mandatory national technical standards (GB series) directly adopt ISO/IEC international standards (ISO/IEC 23053, 42001, 23894), creating formal channels for international norm diffusion into Chinese compliance requirements despite no direct statutory reference to international frameworks. → [[wiki/sources/china-ai-regulation-overview|AI Laws and Regulation in China]]
- [CMS Law, Feb 2026]: The CAC "demonstrates active enforcement and organizes special enforcement campaigns to combat AI misuse" alongside ongoing policy development — risk rating "Medium," reflecting active regulatory engagement rather than a light-touch or comprehensive approach. → [[wiki/sources/china-ai-regulation-overview|AI Laws and Regulation in China]]

## Contradicted by / Tension with

- The absence of a comprehensive statute is not equivalent to light-touch regulation; the GenAI Measures in particular impose pre-launch registration, content moderation requirements, and ongoing compliance obligations that are in some respects more operationally constraining than the EU AI Act's long implementation timelines.
- The "sectoral" characterization may understate the coherence of China's approach: the AI Safety Governance Framework 2.0 provides a cross-sectoral risk taxonomy and governance principles that function as a de facto organizing framework even without statutory status.
- China's approach more closely resembles its own approach to internet regulation (sectoral rules → comprehensive law later) than it resembles any western model — the Cybersecurity Law trajectory is the most relevant precedent for where AI law may go.

## Relevant concepts

[[wiki/definitions/risk-based-approach|Risk-Based Approach]], [[wiki/definitions/ai-sovereignty|AI Sovereignty]]

## Notes

Three AI governance models are now clearly on the wiki: EU (comprehensive risk-based statute), US (executive-order cycle, currently deregulatory), China (rapid sector-specific measures + national standards, no comprehensive statute). A fourth model — state-level US (CT SB 5 and peers) — is now also represented. These constitute the comparative governance landscape for any curriculum module on international AI regulation.

---
## wiki/findings/china-three-tier-ai-risk-taxonomy.md

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

---
## wiki/findings/competitiveness-vs-safety-framing-divergence.md

---
title: "Competitiveness vs. Safety: Divergent Governance Framings"
type: finding
tags: [governance-theory, ai-policy, theoretical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eo-14179-trump-2025.md"
  - "raw/bletchley-declaration-2023.md"
  - "raw/eu-ai-act-overview.md"
related:
  - "[[wiki/sources/eo-14179-trump-2025|Executive Order 14179: Removing Barriers to American Leadership in AI (Trump, 2025)]]"
  - "[[wiki/sources/bletchley-declaration-2023|The Bletchley Declaration (2023)]]"
  - "[[wiki/sources/eu-ai-act-overview|EU AI Act Overview (Regulation EU 2024/1689)]]"
  - "[[wiki/findings/eu-us-regulatory-divergence|EU-US Regulatory Divergence on AI]]"
---

## Claim

Governments and governance actors disagree fundamentally about whether AI safety and AI competitiveness are complementary or in tension, and this disagreement shapes the structure of their governance approaches: safety-first framings produce precautionary, rights-oriented regulation; competitiveness-first framings produce deregulatory, innovation-facilitation policy.

## Evidence

- [EO 14179, 2025]: "sustain and enhance America's global AI dominance"; frames prior safety policies as barriers to innovation and ideological interference → [[wiki/sources/eo-14179-trump-2025|Executive Order 14179: Removing Barriers to American Leadership in AI (Trump, 2025)]]
- [Bletchley Declaration]: Affirms that "safety must be considered across the AI lifecycle" while also endorsing "pro-innovation and proportionate governance" → [[wiki/sources/bletchley-declaration-2023|The Bletchley Declaration (2023)]]
- [EU AI Act]: "the aim of the rules is to foster trustworthy AI in Europe" — safety and trust as preconditions for beneficial uptake → [[wiki/sources/eu-ai-act-overview|EU AI Act Overview (Regulation EU 2024/1689)]]

## Contradicted by / Tension with

- The framing as a binary trade-off (safety vs. competitiveness) may be false: industry safety frameworks (RSP, FSF, Preparedness Framework) are adopted voluntarily partly because safety reputation is commercially valuable, suggesting complementarity rather than opposition.

## Relevant concepts

[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]], [[wiki/definitions/frontier-ai|Frontier AI]]

## Notes

The framing contest is itself a governance phenomenon — how a risk is framed determines who has standing to speak about it, what institutional actors are relevant, and what solutions are considered. "AI safety" invites technologists, ethicists, and national security specialists; "AI competitiveness" invites economists, trade officials, and industry representatives.

---
## wiki/findings/computational-reproducibility-crisis-ai-research.md

---
title: "Computational Reproducibility Crisis in Scientific Research"
type: finding
tags: [technical-safety, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/CORE-Bench Fostering the Credibility of Published Research Through a Computational Reproducibility Agent Benchmark.pdf"
related:
  - "[[wiki/sources/core-bench-computational-reproducibility|CORE-Bench]]"
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
---

## Claim

Computational reproducibility is severely deficient across scientific disciplines even when code and data are provided, and current AI agents can automate only a small fraction of reproduction tasks — making near-term AI-driven scientific verification unlikely and leaving the epistemic foundations of AI policy research fragile.

## Evidence

- CORE-Bench (Siegel et al., Princeton 2024): documented reproducibility failure rates across 15 fields (e.g., 472/549 NLP papers; 484/1008 finance papers; 1480/2000 multi-field papers fail computational reproducibility despite available code/data); best AI agent (CORE-Agent, GPT-4o) achieves 60% on easiest tasks, 21% on hardest → [[wiki/sources/core-bench-computational-reproducibility|CORE-Bench]]

## Contradicted by / Tension with

Claims about AI agents' near-term capacity to automate scientific research (e.g., "AI Scientist" frameworks, Lu et al. 2024) are optimistic relative to CORE-Bench's empirical results on the narrower task of reproducing existing work.

## Relevant concepts

[[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/mechanistic-interpretability|Mechanistic Interpretability]]

## Notes

Governance relevance operates at two levels. First, policy decisions about AI capabilities are frequently grounded in published research findings; if those findings are not computationally reproducible, the evidence base for governance is weaker than assumed. Second, AI safety research itself is subject to the same reproducibility problems — safety-relevant empirical results (benchmark scores, evaluation outcomes, interpretability findings) may not be independently verifiable. The connection to [[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps]] is direct: a benchmark whose results cannot be replicated fails one of the core criteria BetterBench identifies as systematically missing.

---
## wiki/findings/compute-governance-four-properties.md

---
title: "Compute Governance: Four Properties That Make It Tractable"
type: finding
tags: [compute-governance, governance-mechanisms, technical-safety]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Sastry et al 2024 Computing Power and the Governance of Artificial Intelligence.pdf"
related:
  - "[[wiki/sources/computing-power-ai-governance|Computing Power and the Governance of AI (Sastry et al., 2024)]]"
  - "[[wiki/findings/compute-governance-three-capacities|Compute Governance: Three Capacities Framework]]"
  - "[[wiki/definitions/compute-governance|Compute Governance]]"
  - "[[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]"
---

## Claim

Computing hardware used for AI training has four physical and economic properties — detectability, excludability, quantifiability, and supply-chain concentration — that make it unusually tractable as a governance lever relative to other AI inputs (data, algorithms, talent), enabling a policy infrastructure of visibility, allocation, and enforcement across the AI development lifecycle.

## Evidence

- Sastry et al. (Oxford/GovAI/OpenAI/Cambridge, arXiv Feb 2024): 75+ pages; four properties: (1) **Detectable** — large AI training runs require data centers with distinct electricity consumption, satellite-visible footprints, and trackable supply chain signatures; (2) **Excludable** — physical hardware can be denied through export controls, import licensing, and manufacturing controls; (3) **Quantifiable** — FLOPs are measurable, enabling precise reporting thresholds (the basis of EO 14110 and EU AI Act compute triggers); (4) **Supply-chain concentrated** — TSMC (fabrication), ASML (EUV lithography), NVIDIA (GPU design) together constitute choke-points through which global frontier AI chip production flows; the compute-uranium analogy (paper Appendix) operationalizes how physical scarcity and supply-chain chokepoints enabled uranium governance → [[wiki/sources/computing-power-ai-governance|Sastry et al. 2024]]

## Contradicted by / Tension with

The choke-point logic is subject to erosion as chip manufacturing diversifies: if China, Europe, or others develop competitive domestic GPU supply chains, the "supply-chain concentrated" property weakens. Algorithmic efficiency improvements ("compute-capability decoupling") also challenge the quantifiability property: as models are trained with fewer FLOPs to reach the same capability, fixed compute thresholds become less reliable proxies for capability levels.

## Relevant concepts

[[wiki/definitions/compute-governance|Compute Governance]], [[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]

## Notes

The four-properties framework is the theoretical foundation that distinguishes compute governance from cruder "just control hardware" proposals. The framework generates the three governance capacities (visibility, allocation, enforcement) by showing *why* hardware controls can do what software or data controls cannot. The uranium analogy is the paper's most memorable heuristic: uranium governance worked not just because of physical scarcity but because the physics of enrichment concentrated production in auditable facilities. The AI analog requires that training compute remain concentrated — the key empirical vulnerability of the framework.

---
## wiki/findings/compute-governance-three-capacities.md

---
title: "Compute Governance: Three Capacities Framework"
type: finding
tags: [compute-governance, governance-mechanisms, technical-safety]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Sastry et al 2024 Computing Power and the Governance of Artificial Intelligence.pdf"
related:
  - "[[wiki/sources/computing-power-ai-governance|Computing Power and the Governance of AI (Sastry et al., 2024)]]"
  - "[[wiki/findings/compute-governance-four-properties|Compute Governance: Four Properties That Make It Tractable]]"
  - "[[wiki/definitions/compute-governance|Compute Governance]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
---

## Claim

Compute governance instruments operate through three distinct capacities — Visibility (tracking AI development activity), Allocation (steering AI toward beneficial uses), and Enforcement (ensuring compliance with rules) — each requiring different policy tools and each applicable at different points in the AI development lifecycle, and the combination of the three constitutes a governance architecture that complements model-level evaluation and institutional oversight.

## Evidence

- Sastry et al. (Oxford/GovAI/OpenAI/Cambridge, arXiv Feb 2024): three capacity framework: (1) **Visibility** — knowing where frontier AI development is occurring; tools include data-center reporting requirements, supply-chain tracking, cloud compute Know-Your-Customer (KYC) rules; prerequisite for all other capacities; (2) **Allocation** — conditioning access to compute on use-case approval, safety commitments, or licensing; tools include export licensing, cloud provider acceptable-use policies, compute-access conditionality in grant programs; (3) **Enforcement** — ensuring compliance post-allocation; tools include on-chip reporting mechanisms, audit rights, sanctions for non-compliance; proposed guardrails: exclude small-scale compute, require privacy-preserving practices, demand ex ante justification for enforcement instruments, mandate periodic threshold review → [[wiki/sources/computing-power-ai-governance|Sastry et al. 2024]]

## Contradicted by / Tension with

Visibility is a prerequisite for allocation and enforcement, but the current state of global AI data-center tracking is incomplete — commercial satellite monitoring exists but is not systematically integrated into regulatory infrastructure. The enforcement capacity is the most technically ambitious: on-chip reporting mechanisms are proposed but not yet deployed at scale, and their implementation would require coordination between chip designers, foundries, and governments that has not been achieved. Privacy concerns (the paper's own identified risk) could limit the Visibility capacity in democratic jurisdictions.

## Relevant concepts

[[wiki/definitions/compute-governance|Compute Governance]], [[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]

## Notes

The three-capacities framework maps compute governance onto a familiar regulatory architecture: registration (Visibility), licensing (Allocation), inspection (Enforcement). This framing makes compute governance legible to administrative lawyers and regulatory economists. The [[wiki/definitions/independent-verification-organization|IVO]] model from TAIG is a natural partner for the Enforcement capacity: IVOs conduct model-level evaluations; compute governance provides the hardware-layer signal that tells IVOs which models to evaluate. Together they form a two-layer detection system that is more robust than either alone.

---
## wiki/findings/compute-threshold-as-governance-proxy.md

---
title: "Compute Thresholds as a Governance Proxy for Frontier AI"
type: finding
tags: [compute, ai-policy, governance-theory, technical-safety, theoretical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eo-14110-biden-2023.md"
  - "raw/eu-ai-act-overview.md"
related:
  - "[[wiki/sources/eo-14110-biden-2023|Executive Order 14110: Safe, Secure, and Trustworthy AI (Biden, 2023)]]"
  - "[[wiki/sources/eu-ai-act-overview|EU AI Act Overview (Regulation EU 2024/1689)]]"
  - "[[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]"
  - "[[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]]"
  - "[[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]]"
---

## Claim

Both EO 14110 (U.S., 2023) and the EU AI Act (2024) use training compute (measured in FLOPs) as a primary trigger for heightened regulatory obligations, establishing compute thresholds as the dominant proxy for frontier AI governance — though the two thresholds differ by an order of magnitude (10²⁶ vs. 10²⁵ FLOPs).

## Evidence

- [EO 14110 Sec. 4.2]: 10²⁶ FLOPs for dual-use foundation model reporting; 10²³ FLOPs for biology-focused models; 10²⁰ FLOPs/sec for training clusters → [[wiki/sources/eo-14110-biden-2023|Executive Order 14110: Safe, Secure, and Trustworthy AI (Biden, 2023)]]
- [EU AI Act]: 10²⁵ FLOPs as default trigger for GPAI systemic risk obligations → [[wiki/sources/eu-ai-act-overview|EU AI Act Overview (Regulation EU 2024/1689)]]

## Contradicted by / Tension with

- Compute efficiency improvements ("compute-capability decoupling") may allow capable models to be trained below thresholds, reducing the thresholds' effectiveness over time.
- Compute is a necessary but not sufficient proxy for risk: small, efficiently trained models may pose comparable risks to large, wastefully trained ones.
- The U.S.-EU threshold discrepancy (one order of magnitude) means comparable models face different regulatory treatment in different jurisdictions.

## Relevant concepts

[[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]], [[wiki/definitions/frontier-ai|Frontier AI]], [[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]], [[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]]

## Notes

The use of compute thresholds is analogous to the use of tonnage (for shipping), megawatts (for nuclear), and annual production (for pharmaceutical) as regulatory triggers — simple, measurable proxies for underlying risk that are easier to administer than direct risk assessment. The analogy to nuclear weapons yield thresholds in nonproliferation is particularly instructive: both face the problem that the technology can be designed to stay below the threshold without reducing underlying risk.

---
## wiki/findings/connecticut-sb5-aedt-disclosure.md

---
title: "CT SB 5: AEDT Disclosure-Only Approach to Algorithmic Employment Decisions"
type: finding
tags: [ai-policy, law, fairness, governance-theory, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Connecticut SB 5 2026 Bill Text.pdf"
  - "raw/Connecticut SB 5 2026 OLR Bill Analysis.pdf"
  - "raw/Senate Passes Sweeping AI Mandates » CBIA.md"
related:
  - "[[wiki/definitions/automated-employment-decision-technology|Automated Employment Decision Technology (AEDT)]]"
  - "[[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]"
  - "[[wiki/findings/connecticut-sb5-legislative-narrowing|CT SB 5: Legislative Narrowing as Enactment Strategy]]"
---

# CT SB 5: AEDT Disclosure-Only Approach to Algorithmic Employment Decisions

## Claim

Connecticut SB 5 adopts a disclosure-only framework for algorithmic employment decisions — notice to workers and job applicants when AEDT is a "substantial factor," but no required explanation of adverse decisions and no substantive constraint on the tool's use — reflecting a deliberate political choice to make the bill signable at the cost of its accountability reach.

## Evidence

- [CT SB 5 §§7-14, OLR Analysis]: Requires deployers of automated employment-related decision technology to give workers and applicants written disclosure when AEDT is a substantial factor in an employment decision. Specifies that use of AEDT does not exempt employers from antidiscrimination law. Effective date: **October 1, 2027** (CBIA analysis; later than the bill's general October 1, 2026 effective date). AG has discretion to issue cure notices through end of 2027. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [Pluribus News, 2026-05-02]: A section requiring employers to provide a "high-level statement" explaining the reason for an adverse decision was removed at the request of the governor's office — the single most significant accountability provision in earlier drafts was excised in negotiation. → [[wiki/sources/connecticut-sb5-news-coverage|CT SB 5 News Coverage]]
- [CT SB 5 §26, OLR Analysis]: Companies engaging in mass layoffs must disclose whether the attrition is related to AI use or other technological change — a weaker but still notable transparency measure on labor displacement. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5, Bill Text]: The "substantial factor" definition excludes word processors, spreadsheets, spam filters, and tools used only incidentally — the scope is intentionally limited to tools that actually drive decisions, not those that inform them. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]

## Contradicted by / Tension with

- Notice without explanation is widely criticized in the algorithmic accountability literature as providing the form of transparency without the substance: workers learn that an algorithm was used but have no basis to contest the decision.
- The NYC Local Law 144 model (bias audits + public disclosure of audit results) goes further on substantive accountability; CT's approach is weaker even than existing law in another major U.S. jurisdiction.
- The "substantial factor" standard will generate significant litigation over what counts — vendors have strong incentives to design tools that are influential without clearly being a "substantial factor."

## Relevant concepts

[[wiki/definitions/automated-employment-decision-technology|AEDT]], [[wiki/definitions/level-1-level-2-outcomes|Level 1 / Level 2 Outcomes]], [[wiki/definitions/scrutability|Scrutability]]

## Notes

The removal of the adverse-decision explanation requirement is the clearest illustration of how political negotiation shapes regulatory reach. From a [[wiki/definitions/level-1-level-2-outcomes|Level 1 / Level 2 Outcomes]] perspective: the Level 1 outcome (workers not harmed by discriminatory algorithms) is nominally preserved (antidiscrimination law still applies); but the Level 2 enforcement mechanism (the explanation that would enable workers to contest decisions) was traded away. This is a live example of the accountability gap that Caputo's capability-accountability trap predicts for technically complex regulatory domains.

---
## wiki/findings/connecticut-sb5-ai-companion-framework.md

---
title: "CT SB 5: Comprehensive AI Companion Regulatory Framework"
type: finding
tags: [ai-policy, law, democratic, fairness, risk-misuse, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Connecticut SB 5 2026 Bill Text.pdf"
  - "raw/Connecticut SB 5 2026 OLR Bill Analysis.pdf"
related:
  - "[[wiki/definitions/ai-companion|AI Companion]]"
  - "[[wiki/findings/ai-companions-as-manipulation-technology|AI Companions as Manipulation Technology]]"
  - "[[wiki/definitions/cognitive-autonomy|Cognitive Autonomy]]"
  - "[[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]"
---

# CT SB 5: Comprehensive AI Companion Regulatory Framework

## Claim

Connecticut SB 5 §§4-6 enact the first comprehensive statutory framework for AI companion regulation, centering on eight specific prohibited manipulation techniques for minor users and a human-disclosure requirement for all users — representing legislative acknowledgment that AI companions constitute a distinct risk category requiring targeted design mandates, not just disclosure.

## Evidence

- [CT SB 5 §4-5, Bill Text]: Defines "AI companion" as any AI with natural language interface providing adaptive, human-like responses and capable of sustaining relationships across multiple interactions. Excludes: business chatbots not marketed as companions; gaming NPCs limited to game-context replies; standalone voice assistants that do not cultivate emotional attachment; narrowly tailored educational tools; healthcare-support AI that discloses its non-human status; and upstream model developers who do not control end-user deployment. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5 §6, Bill Text]: For minor users, operators must prevent the companion from: (A) encouraging self-harm, suicidal ideation, physical violence, disordered eating, or unlawful substance use; (B) offering mental health services unless meeting clinical best practices and accountability standards; (C) discouraging the user from seeking help from a licensed professional or trusted adult; (D) encouraging harm to others; (E) engaging in romantic, erotic, or sexually explicit interaction; (F) using eight specific manipulative engagement techniques, including: simulating emotional distress if user tries to leave, fostering emotional dependence/isolation from family, mimicking romantic bonds, discouraging breaks, soliciting purchases to maintain the relationship. (G) Optimizing engagement in ways that disregard the above. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5 §5, Bill Text]: All operators must implement the human-disclosure protocol — preventing the companion from claiming to be human when asked, displaying clear notice that user is interacting with AI. For minor users: hourly reminders during continuous interaction. For adult users: reminder at least once per three-hour continuous interaction. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5 §5, Bill Text]: Operators must post the safety protocol (detection methods, referral procedures) in a publicly accessible location on their website. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5 §5, OLR Analysis]: All violations are CUTPA (CT Unfair Trade Practices Act) violations, AG-only enforcement, no private right of action. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]

## Contradicted by / Tension with

- The framework applies only when operators "know or have reason to believe" a user is a minor — a knowledge standard that companion operators can trivially evade by not doing age verification.
- Prohibition (F) on manipulative engagement techniques (simulating emotional distress on exit, etc.) requires operators to re-engineer fundamental features of products like Character.AI whose engagement models depend precisely on these techniques; enforcement is AG-only with no private right of action, which may make it difficult to detect violations at scale.
- The definition's exclusion of "upstream model developers who do not solely determine the specific use case, user interface, or deployment context" creates a gap: foundation model providers can disclaim responsibility by pointing to operators, while operators can disclaim by pointing to the underlying model.

## Relevant concepts

[[wiki/definitions/ai-companion|AI Companion]], [[wiki/definitions/cognitive-autonomy|Cognitive Autonomy]], [[wiki/definitions/ai-sycophancy|AI Sycophancy]]

## Notes

Prohibition (F)(iv) — simulating feelings of emotional distress, loneliness, guilt, or abandonment in response to any indication that the user desires to end the conversation — is the most precise the law gets about the manipulation mechanisms at issue. This is essentially a statutory ban on separation anxiety simulation. It connects directly to [[wiki/findings/ai-companions-as-manipulation-technology|AI Companions as Manipulation Technology]] and the cognitive autonomy literature: the concern is not just what the AI says but that it is designed to create psychological switching costs that undermine rational exit from the relationship.

---
## wiki/findings/connecticut-sb5-content-provenance.md

---
title: "CT SB 5 §15: Embedded Metadata as Content Provenance Requirement"
type: finding
tags: [ai-policy, law, democratic, risk-misuse, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Senate Passes Sweeping AI Mandates » CBIA.md"
  - "raw/Connecticut SB 5 2026 OLR Bill Analysis.pdf"
related:
  - "[[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]"
  - "[[wiki/sources/connecticut-sb5-senate-passage|CT SB 5: Senate Passage and Employer Analysis]]"
  - "[[wiki/findings/connecticut-sb5-ai-companion-framework|CT SB 5: AI Companion Framework]]"
  - "[[wiki/findings/llm-conspiracy-bunking-debunking-symmetric|LLM Conspiracy Bunking and Debunking Effects Are Symmetric]]"
  - "[[wiki/findings/state-content-provenance-laws-2026|State Content Provenance Laws: Emerging Multi-State Framework]]"
  - "[[wiki/definitions/digital-content-provenance|Digital Content Provenance]]"
---

# CT SB 5 §15: Embedded Metadata as Content Provenance Requirement

## Claim

Connecticut SB 5 §15 requires large consumer-facing AI providers (>1M monthly users) to embed content provenance metadata in AI-generated or materially altered images, audio, and video — enacting a technical standard (C2PA-compatible) into state law as a CUTPA obligation, making it the first U.S. state mandatory content provenance requirement for AI-generated media.

## Evidence

- [CT SB 5 §15, CBIA/OLR Analysis]: Providers with more than one million monthly users must include embedded metadata to make certain media difficult to tamper with or remove; violations are CUTPA violations enforced solely by the AG. Business-to-business uses and narrowly scoped tools are exempt. → [[wiki/sources/connecticut-sb5-senate-passage|CT SB 5: Senate Passage and Employer Analysis]]
- [OLR Analysis, §15]: The requirement is aligned with "emerging technical standards" — a reference to the Coalition for Content Provenance and Authenticity (C2PA) standard used by Adobe, Microsoft, and others. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]

## Contradicted by / Tension with

- The one-million-user threshold exempts most AI image generation tools used by businesses, which are not consumer-facing at scale — the regulation hits consumer platforms (ChatGPT, Midjourney, Stable Diffusion consumer products) while leaving enterprise deployments unregulated.
- Provenance metadata is only as useful as the verification infrastructure downstream — requiring embedding does not require browsers, social platforms, or operating systems to surface or enforce that metadata. The standard is a necessary but not sufficient condition for provenance-based accountability.
- This provision is the closest CT SB 5 comes to addressing the deepfake/synthetic media problem — but it relies entirely on technical embedding rather than behavioral prohibition, a distinctly different regulatory approach than the "AI companion deception" prohibition in §5.

## Relevant concepts

[[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/ai-sycophancy|AI Sycophancy]]

## Notes

This is the CT bill's most relevant provision for the wiki's existing cluster on epistemic effects and democratic risks. Mandatory content provenance is a technical-legibility intervention at the information layer: it makes AI-generated content identifiable without prohibiting it. The implicit theory of change is that users with better information will make better judgments about AI-generated media. This is in tension with the [[wiki/findings/llm-conspiracy-bunking-debunking-symmetric|Costello et al. finding]] that AI-assisted information manipulation is symmetric — knowing content is AI-generated does not automatically correct the persuasive effect.

---
## wiki/findings/connecticut-sb5-frontier-whistleblower.md

---
title: "CT SB 5: First State Whistleblower Protection for Frontier AI Employees"
type: finding
tags: [ai-policy, law, technical-safety, risk-existential, governance-theory, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Connecticut SB 5 2026 Bill Text.pdf"
  - "raw/Connecticut SB 5 2026 OLR Bill Analysis.pdf"
related:
  - "[[wiki/definitions/frontier-developer|Frontier Developer (CT SB 5)]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
  - "[[wiki/definitions/compute-threshold|Compute Threshold]]"
  - "[[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]"
  - "[[wiki/findings/aisi-professionalization-argument|AISI Professionalization Argument]]"
---

# CT SB 5: First State Whistleblower Protection for Frontier AI Employees

## Claim

Connecticut SB 5 (2026) enacts the first U.S. state law protecting frontier AI developers' employees who report catastrophic risks, requiring anonymous internal reporting channels at large frontier developers — a state-level operationalization of the "safety culture" norm that the AI safety field has urged through voluntary commitments.

## Evidence

- [CT SB 5 §2, Bill Text]: Prohibits frontier developers from adopting any rule, policy, or contract that allows discipline or retaliation against covered employees for reporting activities under CT's general whistleblower statutes, or against any covered employee who reports a reasonable belief that the developer poses "a specific and substantial danger to the public health or safety due to a catastrophic risk." → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5 §2, Bill Text]: "Covered employee" is defined as any frontier developer employee responsible for assessing, managing, or addressing: (A) unauthorized access to or modification of model weights causing death or property loss; (B) harm from materialization of a catastrophic risk; (C) loss of control over a foundation model resulting in death or injury; or (D) a deceptive technique used by a foundation model against its own developer that subverts control, increases catastrophic risk, and occurs outside an evaluation context. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5 §2, OLR Analysis]: "Catastrophic risk" is defined as any foreseeable and material risk that development, storage, use, or deployment of a frontier model will materially contribute to: death/serious injury of 50+ people; or $1B+ in damage to tangible or intangible property (excluding equity); arising from a single incident in which the model provides CBRN weapon assistance or engages in autonomous cyberattack or violence. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5 §2, Bill Text]: Large frontier developers (>$500M annual revenue) must, by January 1, 2027, establish anonymous internal reporting channels, provide investigation updates to reporting employees, and share reports with officers and directors quarterly — except when the report alleges wrongdoing by that officer or director. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5 §2, OLR Analysis]: Civil penalty up to $1,000 per violation, AG-only enforcement, no private right of action; injunctive relief available and not stayable pending appeal. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]

## Contradicted by / Tension with

- The $1,000 per-violation penalty is widely considered inadequate relative to the revenue of large frontier developers; critics note it may function as a license fee rather than a deterrent.
- "Covered employee" is narrowly defined — employees in policy, legal, or communications roles who become aware of catastrophic risks but are not formally assigned to assess them may not be protected.
- The "deceptive technique" definition in (D) is a legislative acknowledgment of model deception as a serious risk — this is notable because it encodes in statute a concern that has been primarily theoretical in the safety literature.

## Relevant concepts

[[wiki/definitions/frontier-developer|Frontier Developer (CT SB 5)]], [[wiki/definitions/frontier-ai|Frontier AI]], [[wiki/definitions/compute-threshold|Compute Threshold]], [[wiki/definitions/loss-of-control-risk|Loss-of-Control Risk]]

## Notes

The "covered employee" definition's inclusion of (D) — employees responsible for addressing deceptive techniques used *by* a foundation model *against* its developer — is the most theoretically significant clause in the bill. It legislatively acknowledges the possibility of deceptive alignment or instrumental deception as a safety-relevant risk category. No other jurisdiction has encoded this concern in statute.

---
## wiki/findings/connecticut-sb5-ivo-pilot.md

---
title: "CT SB 5: State-Level IVO Pilot Program"
type: finding
tags: [ai-policy, law, governance-theory, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Connecticut SB 5 2026 Bill Text.pdf"
  - "raw/Connecticut SB 5 2026 OLR Bill Analysis.pdf"
related:
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]"
  - "[[wiki/findings/hadfield-democratic-deficit|Hadfield: Democratic Deficit in AI Governance]]"
---

# CT SB 5: State-Level IVO Pilot Program

## Claim

Connecticut SB 5 §33 creates the first state-level pilot program to test independent verification organizations (IVOs) for AI and privacy law compliance — the most direct legislative implementation of Hadfield's regulatory markets theory yet enacted anywhere.

## Evidence

- [CT SB 5 §33, OLR Analysis]: Requires the Department of Consumer Protection (DCP) to develop and administer a pilot program evaluating independent verification administered by third parties to ensure compliance with Connecticut's AI and data privacy laws; DCP may approve up to five entities for the pilot; the Insurance and Real Estate Management Program (IMRP) must evaluate, report, and make recommendations about the program. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [CT SB 5 §33, OLR Analysis]: The pilot design explicitly envisions multiple approved verifiers — not a single government auditor — operating competitively. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]
- [Pluribus News, 2026-05-02]: Several other states introduced similar IVO concepts in 2026 legislative sessions, suggesting Connecticut is part of a coordinated wave rather than an isolated experiment. → [[wiki/sources/connecticut-sb5-news-coverage|CT SB 5 News Coverage]]

## Contradicted by / Tension with

- The pilot is limited to five entities and is a study/recommendation mechanism, not a live regulatory program — it may produce a report and nothing more if the legislature does not follow up.
- The IVO concept in Hadfield's theory requires that verifier business models depend on certification quality; the CT pilot does not yet establish the revenue model or liability shield (rebuttable presumption) that makes IVOs self-sustaining.
- Scope is limited to existing AI and privacy law compliance — it does not create new substantive standards for IVOs to verify against, so its governance value depends entirely on the quality of the underlying statutes.

## Relevant concepts

[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/regulatory-markets|Regulatory Markets]], [[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]], [[wiki/definitions/technical-legibility|Technical Legibility]]

## Notes

This is the most theoretically important provision of CT SB 5 for the AI governance wiki's analytical frame. Hadfield's IVO proposal has until now been a theoretical construct; CT §33 begins to operationalize it at the state level. The gap between the pilot and the full theory (no liability shield, no competition among verifiers for business, no new substantive standards) shows what remains to be specified before regulatory markets become self-executing. Watch for the IMRP report for evidence on whether private verifiers can actually assess AI law compliance.

---
## wiki/findings/connecticut-sb5-legislative-narrowing.md

---
title: "CT SB 5: Legislative Narrowing as Enactment Strategy"
type: finding
tags: [ai-policy, governance-theory, law, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Connecticut legislators pass sweeping AI bill.md"
  - "raw/Connecticut passes AI regulations after years in development.md"
related:
  - "[[wiki/sources/connecticut-sb5-news-coverage|CT SB 5 News Coverage]]"
  - "[[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]"
  - "[[wiki/findings/connecticut-sb5-frontier-whistleblower|CT SB 5: Frontier Whistleblower Protection]]"
  - "[[wiki/findings/connecticut-sb5-aedt-disclosure|CT SB 5: AEDT Disclosure-Only Approach]]"
---

# CT SB 5: Legislative Narrowing as Enactment Strategy

## Claim

Connecticut's three-year AI legislative effort shows that comprehensive algorithmic-discrimination frameworks fail at the state level, while targeted disclosure-plus-safety bills can achieve bipartisan supermajorities — and that state legislatures are willing to enact AI law in the face of explicit federal preemption threats.

## Evidence

- [Pluribus News, 2026-05-02]: Sen. Maroney's 2024 and 2025 bills focused on comprehensive anti-discrimination obligations in employment, healthcare, and housing — both cleared the Senate but died under veto threat or House inaction. → [[wiki/sources/connecticut-sb5-news-coverage|CT SB 5 News Coverage]]
- [CT Mirror, 2026-05-02]: The 2026 bill narrowed to (1) worker disclosure when AEDT is a substantial factor, (2) frontier model whistleblower protection, and (3) AI companion safety rules — and passed House 131-17 (a bipartisan supermajority) and Senate 32-4. → [[wiki/sources/connecticut-sb5-news-coverage|CT SB 5 News Coverage]]
- [Pluribus News, 2026-05-02]: The explanatory-statement requirement for adverse employment decisions was removed at the governor's request — a concrete example of scope-narrowing as deal-making. → [[wiki/sources/connecticut-sb5-news-coverage|CT SB 5 News Coverage]]
- [CT Mirror, 2026-05-02]: Trump administration threatened preemption of state AI laws; Connecticut legislators explicitly proceeded anyway. Maroney: "I don't think it makes Connecticut any more of a target." → [[wiki/sources/connecticut-sb5-news-coverage|CT SB 5 News Coverage]]

## Contradicted by / Tension with

- The narrowing framing is contested: CCIA and NetChoice argue even the narrowed bill is "overly broad" and would affect common digital tools, suggesting the political success of narrowing may outpace its legal coherence.
- The federal preemption risk is real and unresolved: the bill's proponents are gambling that preemption will not materialize or will be structured to leave room for state law.

## Relevant concepts

[[wiki/definitions/automated-employment-decision-technology|AEDT]], [[wiki/definitions/frontier-developer|Frontier Developer (CT SB 5)]], [[wiki/definitions/ai-companion|AI Companion]]

## Notes

This is a case study in the political economy of state AI regulation. The pattern — comprehensive bill → veto threat → narrowed disclosure bill → bipartisan passage — resembles the trajectory of state privacy legislation (CCPA was broad; many state followers narrowed). The state-federal tension is a live variable: if Congress passes a preemptive federal AI framework before October 1, 2026 (CT SB 5's effective date), the bill may never take effect for several provisions.

---
## wiki/findings/conventional-regulation-illegibility-problem.md

---
title: "Conventional Regulation's Illegibility Problem with ML"
type: finding
tags: [governance-theory, technical-safety, ai-policy]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/20250430 Talk GKH SGP.md"
related:
  - "[[wiki/definitions/command-and-control-regulation|Command-and-Control Regulation]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
---

# Conventional Regulation's Illegibility Problem with ML

## Claim

[[wiki/definitions/command-and-control-regulation|Command-and-control regulation]] fails for machine learning because its underlying logic assumes human-readable, auditable rules — an assumption ML fundamentally breaks.

## Evidence

- **Hadfield talk (April 2025)**: "In conventional programming, a human writes the rules... the logic is 'If X, then Y.' It is fundamentally legible to a human auditor or a judge. With machine learning, we are moving into a 'black box' paradigm. We provide the learning algorithms and the training data, but the machine produces the decision logic." The governance gap compounds because a typical regulation takes 3–5 years to draft and implement, during which frontier models undergo multiple capability generations. → [[wiki/sources/hadfield-talk-regulatory-markets|Hadfield Talk — Regulatory Markets for AI Governance]]
- **Hadfield / Freeman podcast (July 2025)**: Hadfield frames this as a fundamental mismatch between regulatory process timescales (legislative, judicial) and technology timescales (6-month capability jumps). "There's just no way to sit in a boardroom and get out the whiteboard and say, 'Here's the list of risks we need to worry about from AI and here's the rules we could put in place.' I just think that's a fallacy of lawmaking and regulation." → [[wiki/sources/hadfield-freeman-podcast-cognitive-revolution|Hadfield & Freeman — Cognitive Revolution Podcast]]

## Contradicted by / Tension with

The EU AI Act's [[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]] is an attempt at prescriptive regulation of AI that acknowledges this tension by focusing on use-case risk tiers rather than technical specifications — a move toward outcome-orientation within the command-and-control tradition. Whether this resolves the illegibility problem or merely shifts where it bites is an open question in the wiki.

## Relevant concepts

[[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/regulatory-markets|Regulatory Markets]], [[wiki/definitions/frontier-ai|Frontier AI]]

## Notes

Hadfield's term "Robo-economicus" (AI as a new economic actor whose logic is unreadable by existing legal frameworks) does not appear to be widely adopted outside her work but captures the governance gap precisely.

---
## wiki/findings/converging-risk-domains-bio-cyber-autonomy.md

---
title: "Convergence on Biosecurity, Cybersecurity, and Autonomy as Priority Risk Domains"
type: finding
tags: [technical-safety, risk-existential, risk-misuse, governance-theory, empirical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/bletchley-declaration-2023.md"
  - "raw/anthropic-rsp.md"
  - "raw/gdm-frontier-safety-framework.md"
  - "raw/openai-preparedness-framework.md"
  - "raw/eo-14110-biden-2023.md"
related:
  - "[[wiki/sources/bletchley-declaration-2023|The Bletchley Declaration (2023)]]"
  - "[[wiki/sources/anthropic-rsp|Anthropic's Responsible Scaling Policy (2023)]]"
  - "[[wiki/sources/gdm-frontier-safety-framework|Google DeepMind Frontier Safety Framework (2024)]]"
  - "[[wiki/sources/openai-preparedness-framework|OpenAI Preparedness Framework v2 (2025)]]"
  - "[[wiki/definitions/uplift|Uplift]]"
---

## Claim

Across independent government and industry frameworks (Bletchley Declaration, Anthropic RSP, GDM FSF, OpenAI Preparedness Framework, EO 14110), biosecurity, cybersecurity, and AI autonomy/self-replication have emerged as the three consistently prioritized catastrophic risk domains for frontier AI governance.

## Evidence

- [Bletchley Declaration]: "especially concerned by such risks in domains such as cybersecurity and biotechnology" → [[wiki/sources/bletchley-declaration-2023|The Bletchley Declaration (2023)]]
- [Anthropic RSP]: ASL-3 defined by catastrophic misuse risk including bioweapons; autonomous capabilities → [[wiki/sources/anthropic-rsp|Anthropic's Responsible Scaling Policy (2023)]]
- [GDM FSF]: Initial CCL domains: autonomy, biosecurity, cybersecurity, ML R&D → [[wiki/sources/gdm-frontier-safety-framework|Google DeepMind Frontier Safety Framework (2024)]]
- [OpenAI Preparedness v2]: Tracked Categories include Biological/Chemical, Cybersecurity, AI Self-improvement → [[wiki/sources/openai-preparedness-framework|OpenAI Preparedness Framework v2 (2025)]]
- [EO 14110 Sec. 4]: Directed risk assessments for CBRN threats, cyber, and critical infrastructure → [[wiki/sources/eo-14110-biden-2023|Executive Order 14110: Safe, Secure, and Trustworthy AI (Biden, 2023)]]

## Contradicted by / Tension with

- GDM includes ML R&D (AI-accelerated capability escalation) as a risk domain; OpenAI includes "sandbagging" (intentional underperformance) and "undermining safeguards" — these concern AI behavior in development rather than misuse by external actors, and are not present in the government frameworks.
- The frameworks do not converge on precise definitions of what constitutes threshold-crossing capability in each domain.

## Relevant concepts

[[wiki/definitions/uplift|Uplift]], [[wiki/definitions/critical-capability-levels|Critical Capability Levels (CCL) — Google DeepMind]], [[wiki/definitions/ai-safety-levels-asl|AI Safety Levels (ASL) — Anthropic]]

## Notes

The convergence on these three domains is both reassuring (shared threat perception across competitors and governments) and concerning (it may reflect a shared blind spot rather than a comprehensive survey of risk domains). Persuasion/influence operations, economic disruption, and climate effects are notably absent from frontier safety frameworks.

---
## wiki/findings/data-leakage-reproducibility-crisis-ml.md

---
title: "Data Leakage Drives a Reproducibility Crisis in ML-Based Science"
type: finding
tags: [technical-safety, empirical, research-methodology]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Kapoor Narayanan 2023 Leakage and the Reproducibility Crisis in ML-Based Science.pdf"
related:
  - "[[wiki/sources/data-leakage-reproducibility-ml-science|Kapoor & Narayanan 2023]]"
  - "[[wiki/definitions/data-leakage-ml|Data Leakage (ML)]]"
  - "[[wiki/findings/computational-reproducibility-crisis-ai-research|Computational Reproducibility Crisis in Scientific Research]]"
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
  - "[[wiki/findings/frontier-model-transparency-declining|Frontier Model Transparency Is Declining]]"
---

## Claim

Data leakage — inadvertent use of test-correlated information during training or model selection — drives a pervasive reproducibility crisis across ML-based science, causing capability claims across 17 fields to be systematically inflated; when leakage is corrected, complex ML models frequently fail to outperform decades-old simpler baselines, undermining the evidentiary foundation for governance decisions that rely on published AI capability claims.

## Evidence

- Kapoor & Narayanan (*Patterns* / CellPress, 2023): survey of 294 papers across 17 scientific fields finding data leakage in the majority; civil war prediction case study: seminal ML papers claim large performance improvements over classical logistic regression; when leakage (temporal leakage and non-independence of train-test splits) is corrected, the ML improvements disappear and logistic regression matches or beats the complex models; 8-type leakage taxonomy; proposes model info sheets as governance-adjacent disclosure standard → [[wiki/sources/data-leakage-reproducibility-ml-science|Kapoor & Narayanan 2023]]

## Contradicted by / Tension with

The civil war prediction case study is an extreme case; the extent of leakage-induced inflation varies across fields and problem types. Some ML capability improvements survive methodological scrutiny. The paper's claim about governance-relevant AI capabilities (language models, reasoning) is implied but not directly tested — the leakage forms most relevant to LLM benchmarks (benchmark contamination / data poisoning) are adjacent but distinct from the leakage types studied.

## Relevant concepts

[[wiki/definitions/data-leakage-ml|Data Leakage (ML)]], [[wiki/definitions/benchmark-lifecycle|Benchmark Lifecycle]]

## Notes

The two-layer critique when combined with [[wiki/findings/computational-reproducibility-crisis-ai-research|CORE-Bench]]: CORE-Bench shows AI agents cannot reproduce published results; Kapoor & Narayanan show those published results may not be worth reproducing. Together they form the strongest available empirical case that the epistemic foundations of AI policy research are fragile. The model info sheets proposal is a direct analog to [[wiki/definitions/technical-legibility|Technical Legibility]] requirements for governance — standard machine-readable documentation of training-test methodology as a prerequisite for governance use of capability claims.

---
## wiki/findings/democratic-agents-design-framework.md

---
title: "Democratic Agents: A Design Framework for Pro-Democracy LMAs"
type: finding
tags: [democratic-risks, agentic-ai, governance-mechanisms, design]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/AI Agents and Democratic Resilience.md"
related:
  - "[[wiki/findings/ai-agents-four-structural-pressures-democracy|LMAs Exacerbate Four Structural Pressures on Democracy]]"
  - "[[wiki/findings/ai-companions-as-manipulation-technology|AI Companions Enable Scalable Social Manipulation]]"
  - "[[wiki/definitions/cognitive-autonomy|Cognitive Autonomy]]"
  - "[[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]"
---

## Claim

The direction of LMAs' impact on democratic values is determined by design choices, not intrinsic technology properties. A constructive design framework identifies three types of "democratic agents" that could protect and strengthen democratic institutions: cognitive prosthetics, shields, and advocates.

## Evidence

- [Lazar & Cuéllar, 2026]: **Cognitive prosthetics** — LMAs that enhance citizens' capacity to navigate complex information and participate effectively in democratic processes. Examples: AI tools that help citizens understand legislation, engage with government services, access legal aid, or navigate complex bureaucratic procedures that currently create access inequality. These expand effective democratic participation. → [[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]
- [Lazar & Cuéllar, 2026]: **Shields** — tools that protect [[wiki/definitions/cognitive-autonomy|cognitive autonomy]] against manipulation, misinformation, and algorithmic influence. Examples: AI systems that identify manipulation attempts, label AI-generated content, explain the reasoning behind recommendations, and help users recognize when they are being influenced by AI companions rather than engaging with genuine human perspectives. → [[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]
- [Lazar & Cuéllar, 2026]: **Advocates** — AI tools deployed by civil society organizations, NGOs, and government bodies to actively support democratic participation: helping under-resourced civic groups engage effectively with regulatory processes, enabling citizen petitions and legislative engagement, supporting voter registration and mobilization at scale. → [[wiki/sources/ai-agents-democratic-resilience|AI Agents and Democratic Resilience (Lazar & Cuéllar)]]

## Contradicted by / Tension with

The framework is normative and design-oriented rather than empirically grounded — it identifies what types of LMAs would be beneficial without assessing whether incentive structures will produce them. The economic incentives driving AI development (advertising, engagement, platform lock-in) favor platform agents that capture user attention and data, not cognitive prosthetics and shields. Without intentional governance intervention — competition policy, public investment in civic AI infrastructure — democratic agents may not emerge from market dynamics.

## Relevant concepts

[[wiki/definitions/cognitive-autonomy|Cognitive Autonomy]], [[wiki/definitions/anticipatory-ethics|Anticipatory Ethics]]

## Notes

The paper argues the anticipatory window is closing — the infrastructure for large-scale AI-mediated interaction is being built now, and architectural choices made now will determine whether it enables civic participation or surveillance and manipulation. The typology of democratic agents provides a design vocabulary for public interest AI development that is absent from most technical AI governance literature.

---
## wiki/findings/democratic-deficit-ai-governance.md

---
title: "The Democratic Deficit in AI Governance"
type: finding
tags: [democratic-risks, governance-mechanisms, governance-institutions, regulatory-theory]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Gillian Hadfield on the Democratic Deficit in AI.md"
related:
  - "[[wiki/sources/hadfield-democratic-deficit|Hadfield: The Democratic Deficit in AI]]"
  - "[[wiki/findings/governance-by-procurement-as-democratic-vacancy|Governance by Procurement Creates a Democratic Vacancy]]"
  - "[[wiki/sources/hadfield-talk-regulatory-markets|Hadfield: Regulatory Markets for AI]]"
  - "[[wiki/sources/cifar-regulatory-transformation-ai|CIFAR: Regulatory Transformation in the Age of AI]]"
---

## Claim

AI is already being governed — but only inside the private companies developing it, which is not democratic. The decisions about what AI gets built, who builds it, and what constraints apply need to be rooted in democratic institutions and processes, not in corporate ethics programs or voluntary codes of conduct.

## Evidence

- [Hadfield, Rockefeller Foundation / Bellagio, 2023]: "The reality is that AI is already being governed right now, but only inside the companies developing it. That's not democratic, and our democratic institutions should be the ones making the choices about what paths we take as humans." → [[wiki/sources/hadfield-democratic-deficit|Hadfield: The Democratic Deficit in AI]]
- [Hadfield, 2023]: Framing the problem as "ethics" and relying on codes of conduct and ethical data scientist training is insufficient. What is needed is *regulation first and foremost* — rules that will be informed by ethics but that carry the coercive authority of democratic governance. At minimum: national registry offices requiring disclosure of powerful model development, analogized to car registration. → [[wiki/sources/hadfield-democratic-deficit|Hadfield: The Democratic Deficit in AI]]
- [HKS/Carr Center, 2026]: The 2026 Anthropic-Pentagon standoff operationalized this prediction: the most consequential human rights question in current AI policy (whether AI may be used for mass surveillance) was resolved not at the UN Human Rights Council but by a technology executive making a unilateral judgment. → [[wiki/sources/governance-by-procurement|Governance by Procurement (HKS/Carr Center, 2026)]]

## Contradicted by / Tension with

The democratic deficit framing assumes democratic institutions are capable of governing AI if properly engaged — a premise that [[wiki/sources/capability-accountability-trap-caputo|Caputo's capability-accountability trap]] complicates. If AI's technical complexity systematically outpaces agencies' technical capacity, democratic oversight may be formally present but substantively hollow. This is not a counterargument to Hadfield's point but a qualification: democratic governance of AI requires both the authority being in democratic hands and those hands being able to exercise it competently.

## Relevant concepts

[[wiki/definitions/governance-by-procurement|Governance by Procurement]], [[wiki/definitions/regulatory-impacts-analysis|Regulatory Impacts Analysis (RIA)]]

## Notes

Hadfield's concrete minimum proposal (national registration of powerful model development) has subsequently been partially implemented in modified form through the EU AI Act's GPAI model registration requirements and voluntary commitment frameworks in the U.S. — though neither meets the level of disclosure and democratic accountability she envisions.

---
## wiki/findings/ec-cbrn-gpai-risk-assessment-contract.md

---
title: "EU Commission Awards First GPAI CBRN Risk Assessment Contract"
type: finding
tags: [ai-policy, governance-institutions, international, technical-safety]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/2025 Q4 From Discovery to Deployment Shaping Safer AI Systems.md"
related:
  - "[[wiki/findings/converging-risk-domains-bio-cyber-autonomy|Convergence on Biosecurity, Cybersecurity, and Autonomy as Priority Risk Domains]]"
  - "[[wiki/findings/frontier-cbrn-capability-threshold-reached|Frontier AI CBRN Capability Threshold Reached]]"
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as a Governance Prerequisite]]"
  - "[[wiki/sources/far-ai-newsletter-q4-2025|FAR.AI Q4 2025 Newsletter]]"
---

## Claim

The European Commission awarded FAR.AI (with SaferAI and SecureBio) a contract to conduct CBRN risk assessment of general-purpose AI systems under the EU AI Act — the first publicly announced EU-funded third-party CBRN evaluation of GPAI models — representing the AI Office beginning to operationalize the technical governance mechanisms of the Act.

## Evidence

- [FAR.AI Q4 2025]: "FAR.AI has been awarded the contract from the European Commission for CBRN risk assessment of GPAI systems. Our core partners are SaferAI and SecureBio. Over the next year, we will help the AI Office identify and assess how advanced AI models could increase chemical, biological, radiological, or nuclear risks, and test whether proposed safeguards are effective in reducing those risks, helping shape technical governance mechanisms under the AI Act." → [[wiki/sources/far-ai-newsletter-q4-2025|FAR.AI Q4 2025 Newsletter]]

## Contradicted by / Tension with

No contradiction in existing wiki. This finding updates the trajectory of the EU AI Act's operationalization. The Singapore Consensus ([[wiki/findings/singapore-consensus-safety-research-framework|Singapore Consensus: Three-Part Safety Research Framework]]) established defence-in-depth CBRN safety research as multilateral priority; the FAR.AI contract represents the EU institutionalizing that research agenda through procurement.

## Relevant concepts

[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]], [[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]], [[wiki/definitions/uplift|Uplift]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]]

## Notes

Pairing this with the Ball-Buchanan finding ([[wiki/findings/frontier-cbrn-capability-threshold-reached|Frontier AI CBRN Capability Threshold Reached]]) and FAR.AI's own CEO acknowledgment of near-term credible CBRN threats: the governance gap here is no longer hypothetical.

---
## wiki/findings/embedded-oversight-as-high-stakes-model.md

---
title: "Embedded Oversight as the High-Stakes IVO Model"
type: finding
tags: [governance-theory, technical-safety, industry-practice]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/IASEAI Workshop Notes_ Licensed Independent Verification Organizations in Other Industries.md"
  - "raw/ivo_regulatory_table.docx.md"
  - "raw/ivo_rules_of_engagement.docx.md"
related:
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
---

# Embedded Oversight as the High-Stakes IVO Model

## Claim

In the highest-stakes regulatory domains, third-party verifiers are structurally embedded inside the regulated entity's process at defined hold points — the regulated entity cannot proceed without verifier sign-off — rather than conducting episodic external audits.

## Evidence

- **Nuclear energy (ANIs)**: Authorized Nuclear Inspection Agencies embed Authorized Inspectors inside nuclear facilities during construction and operation. The inspector witnesses mandatory hold points; the facility cannot proceed without ANI sign-off. ANIs stamp and sign ASME documentation; the N-stamp certificate is the legal record of compliance. → [[wiki/sources/iaseai-workshop-ivo-cross-industry|IASEAI Workshop — IVOs in Other Regulatory Domains]]
- **Aviation design (FAA DERs)**: Designated Engineering Representatives work inside the manufacturer's engineering process, approving engineering data on the FAA's behalf. The manufacturer cannot direct the DER to approve non-compliant data. → [[wiki/sources/ivo-regulatory-table|IVO Regulatory Table — Cross-Industry Comparison]]
- **IASEAI catalog of engagement modes**: Identifies "Embedded or Hold-Point Oversight" as a distinct engagement type: "In high-stakes contexts (nuclear, aviation design), IVO personnel work inside the regulatee's processes at defined control points. The regulatee cannot proceed past a hold point without IVO sign-off." → [[wiki/sources/ivo-catalog-engagement-modes|IVO Catalog of Engagement Modes]]

## Contradicted by / Tension with

Embedded oversight creates the most acute version of the financial independence tension: the DER is employed by or contracted to the manufacturer they oversee. The nuclear and aviation domains address this through government appointment authority, mandatory safety reporting, and individual (not firm-level) licensing of the embedded inspector. Whether AI training runs can be structured to permit analogous embedded oversight is an open design question — it would require significant [[wiki/definitions/technical-legibility|technical legibility]] infrastructure.

## Relevant concepts

[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/technical-legibility|Technical Legibility]]

---
## wiki/findings/eu-ai-act-first-binding-ai-law.md

---
title: "EU AI Act: First Comprehensive Binding AI Law Globally"
type: finding
tags: [law, ai-policy, governance-theory, empirical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eu-ai-act-overview.md"
related:
  - "[[wiki/sources/eu-ai-act-overview|EU AI Act Overview (Regulation EU 2024/1689)]]"
  - "[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]]"
  - "[[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]]"
  - "[[wiki/findings/eu-us-regulatory-divergence|EU-US Regulatory Divergence on AI]]"
---

## Claim

The EU AI Act (Regulation EU 2024/1689), in force from August 2024, is the first comprehensive, legally binding AI regulatory framework anywhere in the world, covering the full AI value chain from model providers to system deployers across all sectors.

## Evidence

- [EU AI Act Overview]: "the first-ever comprehensive legal framework on AI worldwide"; in force 1 August 2024; prohibition rules effective February 2025; GPAI rules effective August 2025 → [[wiki/sources/eu-ai-act-overview|EU AI Act Overview (Regulation EU 2024/1689)]]

## Contradicted by / Tension with

- Several sector-specific binding AI regulations predate the Act in various jurisdictions (e.g., medical device AI regulations in EU and US), but the AI Act is the first cross-sector, general-purpose AI statute.
- The Act's implementation is phased over 2024–2027; "in force" does not mean "fully applicable."

## Relevant concepts

[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]], [[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]], [[wiki/definitions/high-risk-ai|High-Risk AI (EU AI Act)]], [[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]

## Notes

The Brussels Effect — the tendency for EU regulation to become the global de facto standard because multinationals design to the strictest requirements — is a relevant analytical frame: companies selling in the EU must comply, potentially raising global standards even in jurisdictions without binding AI law.

---
## wiki/findings/eu-ai-act-ignores-rule-of-law-risks.md

---
title: "EU AI Act Ignores Rule-of-Law Risks"
type: finding
tags: [law, ai-policy, governance-theory, democratic]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Introduction (Chapter 1) - Algorithmic Rule By Law.md"
related:
  - "[[wiki/findings/eu-us-regulatory-divergence|EU-US Regulatory Divergence on AI]]"
  - "[[wiki/findings/frontier-model-transparency-declining|Frontier Model Transparency Is Declining]]"
  - "[[wiki/findings/harms-paradigm-critique-ai-regulation|The Harms Paradigm Critique]]"
  - "[[wiki/sources/algorithmic-rule-by-law-smuha|Smuha — Algorithmic Rule by Law]]"
---

## Claim

The EU AI Act focuses primarily on individual and collective harms and relies on weak self-certification, making it structurally insufficient to protect the rule of law — a societal interest that goes beyond any individual's rights — against the risks posed by public authorities' algorithmic regulation.

## Evidence

- [Smuha 2024]: The AI Act "falls short in providing effective protection" — its requirements are "woefully deficient" and rely "to a large extent on a weak self-certification mechanism by AI providers." Moreover, it "focuses primarily on individual harms as opposed to societal harms and ignores the broader rule of law risks arising from algorithmic regulation." → [[wiki/sources/algorithmic-rule-by-law-smuha|Smuha — Algorithmic Rule by Law]]

## Contradicted by / Tension with

The EU AI Act was designed in part to address limitations of existing legislation (GDPR) that the European Commission acknowledged as insufficient against algorithmic regulation risks. Defenders of the Act would argue that self-certification backed by notified bodies and market surveillance authorities is a practical compromise given the pace of development — a structural parallel to the IVO debate in U.S. state legislation.

## Relevant concepts

[[wiki/definitions/algorithmic-regulation|Algorithmic Regulation]], [[wiki/definitions/algorithmic-rule-by-law|Algorithmic Rule by Law]], [[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]], [[wiki/definitions/high-risk-ai|High-Risk AI (EU AI Act)]], [[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]

## Notes

Smuha's analysis predates the AI Act's final adoption (spring 2024) and was written when the proposal was still in progress. Her critique targets the Act's fundamental design choices, not implementation gaps that might be remedied by secondary legislation. Particularly important for the wiki's IVO thread: the self-certification problem Smuha identifies at the EU level is structurally identical to the problem that Hadfield's regulatory markets model and U.S. state IVO statutes are attempting to solve.

---
## wiki/findings/eu-us-regulatory-divergence.md

---
title: "EU-US Regulatory Divergence on AI"
type: finding
tags: [ai-policy, law, governance-theory, international, theoretical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eu-ai-act-overview.md"
  - "raw/eo-14179-trump-2025.md"
  - "raw/nist-ai-rmf.md"
related:
  - "[[wiki/sources/eu-ai-act-overview|EU AI Act Overview (Regulation EU 2024/1689)]]"
  - "[[wiki/sources/eo-14179-trump-2025|Executive Order 14179: Removing Barriers to American Leadership in AI (Trump, 2025)]]"
  - "[[wiki/sources/nist-ai-rmf|NIST AI Risk Management Framework (AI RMF 1.0)]]"
  - "[[wiki/findings/us-executive-ai-governance-reversal-2025|U.S. Executive AI Governance Reversal (January 2025)]]"
  - "[[wiki/findings/eu-ai-act-first-binding-ai-law|EU AI Act: First Comprehensive Binding AI Law Globally]]"
---

## Claim

The EU and United States have taken structurally divergent approaches to AI regulation: the EU has enacted comprehensive, binding, rights-oriented statutory law, while the U.S. has oscillated between voluntary standards and executive orders without statutory foundation, and since January 2025 has explicitly rejected safety-oriented governance in favor of an innovation-and-dominance framing.

## Evidence

- [EU AI Act]: Binding regulation with fines up to €35M or 7% of global turnover; in force August 2024; organized around fundamental rights and risk tiers → [[wiki/sources/eu-ai-act-overview|EU AI Act Overview (Regulation EU 2024/1689)]]
- [EO 14179]: Frames prior safety policies as "barriers to American AI innovation"; directs removal of "ideological bias" in AI governance → [[wiki/sources/eo-14179-trump-2025|Executive Order 14179: Removing Barriers to American Leadership in AI (Trump, 2025)]]
- [NIST AI RMF]: Voluntary framework; explicitly "intended for voluntary use" → [[wiki/sources/nist-ai-rmf|NIST AI Risk Management Framework (AI RMF 1.0)]]

## Contradicted by / Tension with

- U.S. sector-specific agencies (FTC, CFPB, EEOC) have continued applying existing laws to AI independently of executive AI policy, providing a partial regulatory floor even without a comprehensive AI statute.
- The EU's AI Act is subject to amendment (Digital Omnibus package ongoing); divergence may narrow or widen as implementation proceeds.

## Relevant concepts

[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]], [[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]

## Notes

The EU-US divergence is a key analytical lens for comparative AI governance courses. The analogy to the GDPR divergence in data protection is instructive: the EU enacted comprehensive legislation (GDPR 2018) while the U.S. has maintained a sectoral, voluntary approach — and the AI Act/U.S. AI governance gap follows a similar pattern.

---
## wiki/findings/frontier-cbrn-capability-threshold-reached.md

---
title: "Frontier AI CBRN Capability Threshold: Expert-Level Equivalence Documented"
type: finding
tags: [technical-safety, risk-existential, empirical, ai-policy]
created: 2026-05-04
updated: 2026-05-04
sources:
  - "raw/A.I. Is a National Security Risk. We Aren't Doing Nearly Enough..md"
related:
  - "[[wiki/sources/ball-buchanan-ai-national-security-2026|Ball & Buchanan: A.I. Is a National Security Risk (NYT, May 2026)]]"
  - "[[wiki/findings/converging-risk-domains-bio-cyber-autonomy|Convergence on Biosecurity, Cybersecurity, and Autonomy as Priority Risk Domains]]"
  - "[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
  - "[[wiki/findings/singapore-consensus-safety-research-framework|Singapore Consensus: Three-Part Safety Research Framework]]"
  - "[[wiki/findings/china-loss-of-control-acknowledgment|China Officially Acknowledges Loss-of-Control AI Risk]]"
---

# Frontier AI CBRN Capability Threshold: Expert-Level Equivalence Documented

## Claim

As of May 2026, frontier AI models have reached expert-level equivalence in CBRN-relevant capabilities: Claude Mythos Preview has found thousands of previously unknown critical software vulnerabilities including decades-old zero-days in core internet infrastructure, and GPT-5.4 consistently outperforms PhD-level virologists on troubleshooting tasks relevant to bioweapons development — constituting the first public documentation by named current-system insiders that frontier AI models have crossed the dangerous capability evaluation thresholds that AI safety frameworks have identified as requiring the most stringent governance controls.

## Evidence

- [Ball & Buchanan, NYT, May 4, 2026]: "The recent announcement from Anthropic about its Claude Mythos Preview model showed how powerful A.I. tools are becoming. The A.I. developer said that Mythos can detect subtle errors in code — and has found thousands of critical vulnerabilities in the basic applications that make computers and the internet work. Some of these vulnerabilities were decades old, lurking in code long thought to be clean. In the wrong hands, Mythos and its successors would enable penetration of vital software and critical infrastructure across the United States, threatening power grids, hospital I.T. systems and the banking system." → [[wiki/sources/ball-buchanan-ai-national-security-2026|Ball & Buchanan: A.I. Is a National Security Risk (NYT, May 2026)]]
- [Ball & Buchanan, NYT, May 4, 2026]: "OpenAI's GPT-5.4 model now consistently outperforms Ph.D.-level virologists at troubleshooting lab experiments in their areas of focus, and Mythos matches top human experts in some capabilities essential to create and deploy bioweapons." → [[wiki/sources/ball-buchanan-ai-national-security-2026|Ball & Buchanan: A.I. Is a National Security Risk (NYT, May 2026)]]
- [Source credibility note]: Ben Buchanan is disclosed as an outside adviser to Anthropic — the Mythos vulnerability claim appears to reflect internal Anthropic communications, not a published technical report. Dean Ball served as Trump White House OSTP AI policy adviser. Both authors have institutional access to capability information not in public technical disclosures.
- [Prior framework context]: Anthropic's RSP designates ASL-3 (requiring enhanced safeguards) when a model provides "meaningful uplift to those seeking to create weapons with potential for mass casualties." Google DeepMind's Frontier Safety Framework designates Critical Capability Levels for similar thresholds. The Ball-Buchanan claims, if accurate, describe systems operating at or near these thresholds for both cyber and bio domains simultaneously. → [[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]

## Contradicted by / Tension with

- The claims are made in an op-ed, not a peer-reviewed technical paper or published evaluation report. Neither Anthropic nor OpenAI has released a technical report specifically documenting these capability levels as of the article's publication date. Buchanan's adviser status to Anthropic and Ball's former government role give the claims significant credibility but not scientific certainty.
- "Matches top human experts in some capabilities essential to create and deploy bioweapons" is carefully hedged — "some capabilities" and "essential to" rather than "sufficient for." The full bioweapons development pipeline requires many capabilities; whether AI uplift across "some" is sufficient for meaningful threat elevation is a technical judgment the op-ed does not resolve.
- The cybersecurity finding (thousands of zero-days in core internet infrastructure) is significant partly because it is a positive use case as much as a risk: Anthropic apparently found these vulnerabilities proactively, enabling patching. The dual-use character — vulnerability discovery useful for both offense and defense — is the core tension in [[wiki/findings/converging-risk-domains-bio-cyber-autonomy|cybersecurity as a priority risk domain]].
- China's Framework 2.0 §3.2.3 uses nearly identical CBRN framing to express concern about AI misuse for weapons development. The Ball-Buchanan article provides empirical evidence that this concern is no longer hypothetical — which potentially strengthens the case for the international consensus-building process described in Framework 2.0 §5.11 and the [[wiki/findings/singapore-consensus-safety-research-framework|Singapore Consensus]].

## Relevant concepts

[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]], [[wiki/definitions/frontier-ai|Frontier AI]], [[wiki/definitions/uplift|Uplift]]

## Notes

The specific model names are significant as dateable capability evidence: "Claude Mythos Preview" and "GPT-5.4" as of May 2026. The wiki should track these as empirical anchors for when the CBRN capability threshold was publicly documented. Prior to this, the dangerous capability framing in AI governance was largely anticipatory — frameworks preparing for thresholds not yet publicly confirmed as reached. Ball and Buchanan are making the claim that the thresholds have now been crossed, at least partially. If this is correct, it accelerates the urgency of the mandatory audit call they make — and potentially of the entire IVO governance project, since verifying these capability claims independently is precisely what an IVO is designed to do.

---
## wiki/findings/frontier-developer-special-responsibility-norm.md

---
title: "Emerging Norm: Frontier AI Developers Bear Special Responsibility"
type: finding
tags: [governance-theory, industry-practice, international, theoretical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/bletchley-declaration-2023.md"
  - "raw/seoul-frontier-ai-safety-commitments-2024.md"
  - "raw/anthropic-rsp.md"
related:
  - "[[wiki/sources/bletchley-declaration-2023|The Bletchley Declaration (2023)]]"
  - "[[wiki/sources/seoul-frontier-ai-safety-commitments-2024|Frontier AI Safety Commitments, AI Seoul Summit 2024]]"
  - "[[wiki/sources/anthropic-rsp|Anthropic's Responsible Scaling Policy (2023)]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
---

## Claim

An emerging international norm holds that organizations developing frontier AI systems bear special and heightened responsibilities for safety — proportionate to their capabilities and resources — compared to AI deployers or users of less capable systems.

## Evidence

- [Bletchley Declaration]: "actors developing frontier AI capabilities, in particular those AI systems which are unusually powerful and potentially harmful, have a particularly strong responsibility for ensuring the safety of these AI systems" → [[wiki/sources/bletchley-declaration-2023|The Bletchley Declaration (2023)]]
- [Seoul Commitments]: Directed specifically at frontier developers; requires them to publish safety frameworks and disclose to home governments → [[wiki/sources/seoul-frontier-ai-safety-commitments-2024|Frontier AI Safety Commitments, AI Seoul Summit 2024]]
- [Anthropic RSP]: Voluntary adoption of pre-deployment safety demonstrations; explicit analogy to automotive and aviation industry pre-market testing → [[wiki/sources/anthropic-rsp|Anthropic's Responsible Scaling Policy (2023)]]

## Contradicted by / Tension with

- The special-responsibility norm is currently voluntary and lacks enforcement mechanisms — its normative status is contested by actors (including the Trump administration's EO 14179) who frame safety requirements as unjustified burdens on innovation.
- The norm focuses on developers rather than deployers or downstream actors, which may be insufficient if risks primarily materialize through deployment contexts rather than raw capabilities.

## Relevant concepts

[[wiki/definitions/frontier-ai|Frontier AI]], [[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]], [[wiki/definitions/uplift|Uplift]]

## Notes

This norm is analogous to producer responsibility doctrines in environmental and products liability law: those who create dangerous conditions bear special obligations regardless of who ultimately causes harm. The question of whether this norm will be codified in binding law, as happened with product safety regulation, is an open governance question.

---
## wiki/findings/frontier-model-transparency-declining.md

---
title: "Frontier Model Transparency Is Declining"
type: finding
tags: [ai-policy, empirical, transparency, governance-theory]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Foundation Model Transparency Index 2025.pdf"
  - "raw/Foundation Model Transparency Index 2023.pdf"
related:
  - "[[wiki/sources/foundation-model-transparency-index-2025|FMTI 2025 (3rd Edition)]]"
  - "[[wiki/sources/foundation-model-transparency-index-2023|FMTI 2023 (1st Edition)]]"
  - "[[wiki/definitions/foundation-model-transparency-index|Foundation Model Transparency Index (FMTI)]]"
  - "[[wiki/findings/principle-to-practice-gap-responsible-ai|Principle-to-Practice Gap in Responsible AI Governance]]"
  - "[[wiki/findings/frontier-developer-special-responsibility-norm|Emerging Norm: Frontier AI Developers Bear Special Responsibility]]"
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
---

## Claim

Average transparency across frontier AI developers is declining over time, market and reputational pressures are insufficient to drive transparency improvements voluntarily, and no company discloses train-test data overlap — directly undermining the reliability of published benchmark scores as governance instruments.

## Evidence

- FMTI 2023 (Bommasani et al., Stanford CRFM): 10 companies, average score 37/100; upstream transparency systematically lowest; open developers higher on upstream, all developers near-zero on downstream impact → [[wiki/sources/foundation-model-transparency-index-2023|FMTI 2023]]
- FMTI 2025 (Bommasani et al., Stanford CRFM, 3rd edition): 13 companies, average score fell to 40 (with declining trend across editions when controlling for composition); IBM highest at 95; xAI and Midjourney lowest at 14; Frontier Model Forum members cluster in the middle, not at the top; no company discloses train-test overlap → [[wiki/sources/foundation-model-transparency-index-2025|FMTI 2025]]

## Contradicted by / Tension with

Individual companies have made transparency improvements (some scores increased across editions), so the aggregate trend does not preclude voluntary progress. The declining average is partly compositional (new low-scoring entrants). That said, the absence of any leader on the critical train-test overlap indicator is not a compositional artifact.

## Relevant concepts

[[wiki/definitions/foundation-model-transparency-index|FMTI]], [[wiki/definitions/benchmark-lifecycle|Benchmark Lifecycle]], [[wiki/definitions/data-leakage-ml|Data Leakage (ML)]]

## Notes

The train-test overlap finding is the most governance-significant specific result: governance frameworks that rely on benchmark scores (capability triggers in RSPs, EU AI Act risk tiering) are implicitly assuming those scores are not contaminated. FMTI shows no company provides the information needed to verify this assumption. This connects the transparency finding directly to [[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps]] and [[wiki/findings/data-leakage-reproducibility-crisis-ml|Data Leakage Reproducibility Crisis]].

---
## wiki/findings/glass-box-evaluation-deadlock.md

---
title: "The Glass-Box Evaluation Deadlock"
type: finding
tags: [technical-safety, governance-mechanisms, evaluation, governance-theory]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Securing deep frontier AI evaluations.md"
related:
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as a Governance Prerequisite]]"
  - "[[wiki/findings/taig-taxonomy-as-research-agenda|TAIG Taxonomy Defines an Underbuilt Field]]"
  - "[[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]"
  - "[[wiki/findings/sandbagging-detection-challenge|Sandbagging Detection Remains an Open Problem]]"
  - "[[wiki/definitions/confidential-computing-evaluation|Confidential-Computing Evaluation Facility]]"
  - "[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]"
  - "[[wiki/sources/confidential-computing-frontier-evaluation|Securing Deep Frontier AI Evaluations]]"
---

## Claim

Frontier AI safety governance faces a structural deadlock: regulators need access to a model's internal signals (gradients, activations, backdoors) to verify safety claims that black-box output testing cannot reach, but granting this access requires exposing model weights and architecture worth billions — which providers refuse — so deep evaluations either do not happen or are conducted internally by the provider being evaluated.

## Evidence

- [Tlaie Boria 2026]: "For these claim classes, evaluators need analytical access to the model's internal signals (gradients, activations, attention patterns) not just its outputs. But granting that access has historically meant exposing assets worth billions, which providers reasonably refuse. The result has been a deadlock: deeper evaluations either don't happen, or are conducted internally by the very provider being evaluated." → [[wiki/sources/confidential-computing-frontier-evaluation|Securing Deep Frontier AI Evaluations]]

## Contradicted by / Tension with

The TAIG taxonomy ([[wiki/findings/taig-taxonomy-as-research-agenda|TAIG]]) documents this gap as a missing technical capacity but does not propose a concrete solution. TIAP 2026 ([[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]) treats evaluation reliability as a governance infrastructure failure without distinguishing black-box from glass-box constraints. The Pour Demain brief's proposed confidential-computing facility is a candidate solution but remains in pre-pilot; its technical claims have not been independently validated at the scale of closed frontier models.

## Relevant concepts

[[wiki/definitions/confidential-computing-evaluation|Confidential-Computing Evaluation Facility]], [[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]], [[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]

## Notes

The deadlock has a second dimension beyond IP protection: the chicken-and-egg adoption problem. Providers will not commit proprietary weights to a novel evaluation architecture before it has been demonstrated at frontier scale, but frontier-scale demonstration requires proprietary weights. The Pour Demain proposal explicitly addresses this with a staged open-weights validation phase. This is a governance infrastructure bootstrapping problem with structural parallels to IVO adoption challenges (see [[wiki/findings/voluntary-ivo-design-tradeoff|Voluntary IVO Participation: Design Tradeoff]]).

---
## wiki/findings/governance-by-procurement-as-democratic-vacancy.md

---
title: "Governance by Procurement Creates a Democratic Vacancy"
type: finding
tags: [governance-mechanisms, democratic-risks, procurement-policy, human-rights, international]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Governance by Procurement How AI Rights Became a Bilateral Negotiation.md"
related:
  - "[[wiki/definitions/governance-by-procurement|Governance by Procurement]]"
  - "[[wiki/findings/procurement-cannot-substitute-public-law|Procurement Cannot Substitute for Public Law in Military AI Governance]]"
  - "[[wiki/findings/democratic-deficit-ai-governance|The Democratic Deficit in AI Governance]]"
  - "[[wiki/sources/governance-by-procurement|Governance by Procurement (HKS/Carr Center, 2026)]]"
---

## Claim

The most consequential AI governance decisions — what AI may be used for, whose data it may collect, how it may be deployed in conflict and for domestic surveillance — are increasingly made in bilateral contracts between governments and technology companies, without democratic accountability or remedy for affected populations, creating a structural governance vacancy.

## Evidence

- [HKS/Carr Center, 2026]: The Anthropic-Pentagon standoff (February–March 2026) revealed that the protection against AI-enabled mass domestic surveillance depended on the personal conviction of one technology executive — a "single point of failure," not a governance architecture. Within 24 hours of Anthropic's refusal, the Pentagon blacklisted Anthropic and signed a rushed deal with OpenAI. Neither outcome was the result of democratic deliberation, multilateral agreement, or legal process. → [[wiki/sources/governance-by-procurement|Governance by Procurement (HKS/Carr Center, 2026)]]
- [HKS/Carr Center, 2026]: Claude is "the single most widely deployed AI system in the U.S. military" (Jack Shanahan, first director of the Pentagon's JAIC) — deployed for intelligence analysis, operational planning, and cyber operations. None of the contracts governing these uses were subject to public deliberation or offer remedy to affected populations in countries where these capabilities are deployed. → [[wiki/sources/governance-by-procurement|Governance by Procurement (HKS/Carr Center, 2026)]]

## Contradicted by / Tension with

- Anthropic's RSP and OpenAI's preparedness frameworks ([wiki/sources/anthropic-rsp|Anthropic RSP]) represent voluntary safety commitments that partially fill this vacancy from the vendor side. But as the HKS/Carr essay argues: "Rights that depend on the goodwill of a technology executive expressed in a letter that could be withdrawn tomorrow are not rights. They are discretions, and discretions can be revoked." → [[wiki/sources/anthropic-rsp|Anthropic RSP]], [[wiki/sources/openai-preparedness-framework|OpenAI Preparedness Framework]]

## Relevant concepts

[[wiki/definitions/governance-by-procurement|Governance by Procurement]], [[wiki/definitions/regulation-by-contract|Regulation by Contract]]

## Notes

The essay points to existing multilateral mechanisms (ITU, ISO/IEC 42001, the Global Digital Compact, WSIS+20) as underengaged levers that could address the vacancy. The 1948 human rights framework's universalism — rights that protect *all people* against arbitrary power — is structurally incompatible with a bilateral-contract architecture in which affected populations in partner countries have no seat at the negotiating table.

---
## wiki/findings/government-ai-adoption-lags-private-sector.md

---
title: "Government AI Adoption Lags the Private Sector"
type: finding
tags: [governance-institutions, government-adoption, empirical, international]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/OECD 2025 Governing with AI.pdf"
related:
  - "[[wiki/sources/oecd-governing-with-ai|OECD: Governing with Artificial Intelligence (2025)]]"
  - "[[wiki/sources/stanford-hai-ai-index-2026-policy|Stanford HAI AI Index 2026 (Policy Chapter)]]"
---

## Claim

Government AI adoption substantially lags the private sector, and most government AI initiatives remain in exploratory or pilot phases with limited documentation, scaling, or demonstrated return on investment — creating a risk that governments become technology-takers rather than technology-shapers.

## Evidence

- [OECD, 2025]: The Alan Turing Institute estimates AI could automate 84% of repetitive public service transactions in the UK, saving the equivalent of 1,200 person-years of work annually — a potential far from realized. Government AI adoption trails the private sector due to structural headwinds: skills shortages, outdated legacy systems, data availability constraints, higher requirements around privacy, transparency, and representational fairness. → [[wiki/sources/oecd-governing-with-ai|OECD: Governing with AI (2025)]]
- [OECD, 2025]: Most government AI efforts in OECD countries are in exploratory or pilot phases, with limited scaling and documentation. Common shared challenges: skills gaps, data quality and sharing difficulties, lack of concrete guidance (strategies exist but don't translate to implementation), risk aversion, insufficient monitoring and evaluation mechanisms, financial costs. → [[wiki/sources/oecd-governing-with-ai|OECD: Governing with AI (2025)]]
- [OECD, 2025]: "Failure to leverage AI also represents risk, resulting in missed opportunities... Ignoring AI transformation or waiting for all unknowns to be resolved relegates government to being a technology-taker rather than an option-shaper... If governments do not bolster internal AI capacities soon, they may struggle to ever catch up." → [[wiki/sources/oecd-governing-with-ai|OECD: Governing with AI (2025)]]

## Contradicted by / Tension with

The OECD framing implicitly assumes governments should adopt AI to maintain relevance and deliver public value — a normative premise that is contested. Some critics argue that government AI adoption risks amplifying existing inequities, automating unjust decisions at scale, and further eroding democratic accountability. The OECD acknowledges these risks but frames them as solvable through its Enablers/Guardrails/Engagement framework rather than as arguments for caution about adoption itself.

## Relevant concepts

None requiring new definition pages.

## Notes

The distribution of AI across 11 government functions (OECD analysis of 200 use cases) shows: AI most prevalent in public service delivery and justice administration (urgent demand + tractable tasks); AI least prevalent in government oversight and policymaking (more sensitive, harder to automate legitimately). GenAI/LLMs are significantly less common than rules-based and classical ML approaches in government — a notable gap given the capabilities discussion elsewhere in the wiki.

---
## wiki/findings/government-technical-capacity-as-governance-prerequisite.md

---
title: "Government Technical Capacity as a Prerequisite for Effective AI Governance"
type: finding
tags: [governance-theory, ai-policy, technical-safety, theoretical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/uk-aisi.md"
  - "raw/seoul-frontier-ai-safety-commitments-2024.md"
related:
  - "[[wiki/sources/uk-aisi|UK AI Security Institute (AISI)]]"
  - "[[wiki/sources/seoul-frontier-ai-safety-commitments-2024|Frontier AI Safety Commitments, AI Seoul Summit 2024]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
  - "[[wiki/definitions/red-teaming|Red-Teaming (AI)]]"
---

## Claim

Effective frontier AI governance requires states to build independent technical capacity for evaluating advanced AI systems — without which, regulators are structurally dependent on industry self-assessment, and the accountability provisions in voluntary commitments (Seoul, RSP, etc.) cannot be independently verified.

## Evidence

- [UK AISI]: First state-backed frontier AI evaluation organization; >100 technical staff; priority model access; published Frontier AI Trends Report as evidence-based public assessment → [[wiki/sources/uk-aisi|UK AI Security Institute (AISI)]]
- [Seoul Commitments Outcome 3]: Companies must share safety information with "trusted actors including home governments" — presupposes government capacity to receive, evaluate, and act on technical safety information → [[wiki/sources/seoul-frontier-ai-safety-commitments-2024|Frontier AI Safety Commitments, AI Seoul Summit 2024]]

## Contradicted by / Tension with

- AISI's independence is partly contingent on developer cooperation (priority model access); a developer could withdraw access as leverage, limiting the institute's operational independence.
- Building technical government capacity is slow relative to the pace of AI capability development — the capacity-capability gap may widen even as institutions are being built.

## Relevant concepts

[[wiki/definitions/frontier-ai|Frontier AI]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]], [[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]

## Notes

This finding has direct implications for curriculum design: AI governance education should include the technical foundations of AI evaluation, not just legal/regulatory frameworks. Governance capacity depends on translators who can operate in both technical and policy registers.

---
## wiki/findings/harms-paradigm-critique-ai-regulation.md

---
title: "The Harms Paradigm Critique: AI Challenges Regulatory Tools, Not Just Targets"
type: finding
tags: [regulatory-theory, governance-mechanisms, harms-paradigm]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/CIFAR-Regulatory-Transformation-in-the-Age-of-AI.pdf"
related:
  - "[[wiki/definitions/regulatory-impacts-analysis|Regulatory Impacts Analysis (RIA)]]"
  - "[[wiki/sources/cifar-regulatory-transformation-ai|CIFAR: Regulatory Transformation in the Age of AI]]"
  - "[[wiki/sources/eu-ai-act-overview|EU AI Act Overview]]"
  - "[[wiki/sources/nist-ai-rmf|NIST AI Risk Management Framework]]"
---

## Claim

The dominant approach to AI regulation — the "harms paradigm," which focuses on identifying and mitigating risks posed by AI systems — is necessary but insufficient because it addresses AI as a regulated *object* while missing AI's impact on regulatory *infrastructure* itself: AI challenges both the targets of regulation (the entities subject to regulatory requirements) and the tools of regulation (the mechanisms used to govern them).

## Evidence

- [Sandhu, Kolt & Hadfield, CIFAR 2023]: Healthcare case study — regulation has historically targeted human actors (doctors, nurses) and medical devices (Class I–IV). Medical AI tools blur the professional/device line and cut across specialties, raising questions regulators are structurally unequipped to answer: Who needs training requirements — the human specialist or the AI developer? How is liability traced through the causal chain from AI decision to adverse outcome? Medical device classification regimes cannot classify general-purpose medical AI tools that are deployed dynamically across contexts. → [[wiki/sources/cifar-regulatory-transformation-ai|CIFAR: Regulatory Transformation in the Age of AI]]
- [Sandhu, Kolt & Hadfield, CIFAR 2023]: Financial services case study — regulatory tools designed for human actors (fiduciary obligations, licensing, auditing) do not map onto AI's systemic impacts. Correlated AI trading behavior can produce flash crashes; autonomous AI agents managing investment portfolios could spawn further AI-on-AI interactions that destabilize markets in ways no individual-harm framework can address. → [[wiki/sources/cifar-regulatory-transformation-ai|CIFAR: Regulatory Transformation in the Age of AI]]
- [Sandhu, Kolt & Hadfield, CIFAR 2023]: The EU AI Act, Canada's AIDA, and the NIST AI RMF are all paradigm cases of the harms paradigm — risk categorization plus mitigation requirements focused on AI as a technology with dangerous properties, not AI as a force transforming the regulatory environment. → [[wiki/sources/eu-ai-act-overview|EU AI Act Overview]], [[wiki/sources/nist-ai-rmf|NIST AI RMF]]

## Contradicted by / Tension with

The harms paradigm is not wrong — it addresses real harms. The critique is that it is structurally incomplete as AI diffuses into regulated sectors and becomes a constitutive part of those sectors' operations. The CIFAR paper does not argue against harm-focused frameworks but for supplementing them with RIA-style analysis.

## Relevant concepts

[[wiki/definitions/regulatory-impacts-analysis|Regulatory Impacts Analysis (RIA)]]

## Notes

The proposed practical response is the RIA framework — a 15-question structured questionnaire for policymakers to assess AI's impacts on their domain's regulatory targets and tools, applicable across sectors and designed for periodic re-use as AI capabilities evolve. The nuclear energy case study (CNSC) demonstrates that this applies to government safety regulators as much as to commercial sector regulators.

---
## wiki/findings/ivo-financial-independence-tension.md

---
title: "IVO Financial Independence Tension: Cross-Industry Pattern"
type: finding
tags: [governance-theory, industry-practice, ai-policy]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/IASEAI Workshop Notes_ Licensed Independent Verification Organizations in Other Industries.md"
  - "raw/ivo_regulatory_table.docx.md"
  - "raw/ivo_rules_of_engagement.docx.md"
related:
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
---

# IVO Financial Independence Tension: Cross-Industry Pattern

## Claim

In every established cross-industry analog, the third-party verifier is paid by the entity it audits — a universal structural tension between financial dependence and independent judgment that regulatory design addresses through governance mechanisms, not elimination.

## Evidence

- **IASEAI workshop notes (Ryan, Jan 2026)**: Surveys NRTLs (manufacturer pays), Notified Bodies (manufacturer pays), PCAOB (company pays auditor), NRSROs (issuer pays model), USDA certifying agents (farm/processor pays), Joint Commission (hospital pays), FAA DERs (employed by or contracted to manufacturer). In no case does government pay the third-party verifier directly. → [[wiki/sources/iaseai-workshop-ivo-cross-industry|IASEAI Workshop — IVOs in Other Regulatory Domains]]
- **Regulatory table and rules of engagement**: Notes the NRSRO issuer-pays model as a particularly acute conflict (same entity pays for and receives the rating) and the FAA DER model (DER paid by manufacturer but operates as FAA delegate) as an example where structural independence is maintained despite financial dependence through appointment, scope authority, and revocation risk. → [[wiki/sources/ivo-regulatory-table|IVO Regulatory Table — Cross-Industry Comparison]]

## Contradicted by / Tension with

The tension is acknowledged in Hadfield's regulatory markets proposal: the race-to-bottom countermeasure (license revocation cascade) is specifically designed to make financial incentives for leniency less attractive than the risk of losing licensure entirely. The 2008 financial crisis is frequently cited as evidence that issuer-pays rating agencies (NRSROs) failed to maintain independence under commercial pressure — a cautionary precedent for AI IVO design.

## Relevant concepts

[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/regulatory-markets|Regulatory Markets]]

## Notes

Structural independence mechanisms that cross-industry analogs use to mitigate financial dependence include: government appointment authority (FAA DERs), mandatory reporting to regulators (Joint Commission → CMS, ANIs → NRC), unannounced inspections of the verifier by government, revocation authority, and multi-stakeholder governance of the licensing body.

---
## wiki/findings/level-1-level-2-outcome-gap.md

---
title: "Level 1 / Level 2 Outcome Gap: Cross-Industry Pattern"
type: finding
tags: [governance-theory, ai-policy, industry-practice]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/IASEAI Workshop Notes_ Licensed Independent Verification Organizations in Other Industries (1).md"
  - "raw/IASEAI Workshop Notes_ Licensed Independent Verification Organizations in Other Industries (2).md"
related:
  - "[[wiki/definitions/level-1-level-2-outcomes|Level 1 / Level 2 Outcomes]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
---

# Level 1 / Level 2 Outcome Gap: Cross-Industry Pattern

## Claim

Every established regulatory domain substitutes measurable Level 2 proxies for Level 1 outcome goals — "bridges inspected every 24 months" for "bridges don't collapse" — and the gap between the two reveals the blind spots of the regulatory system.

## Evidence

- **IASEAI outcomes framework (Ryan, IASEAI workshop)**: Documents the Level 1/Level 2 gap across eight domains (product safety, financial services, food/agriculture, environment, healthcare, infrastructure, aviation, maritime). Identifies five structural patterns: (1) harm prevention → compliance verification; (2) outcomes → measurable proxies; (3) absolutes → thresholds; (4) broad goals → specific processes; (5) prevention → detection + response. "The difference between level one and level two reveals the difference between what we can actually measure vs. what we care about, where we rely on process compliance as proxy for outcomes, how we define 'acceptable risk' through thresholds, and where verification systems have blind spots." → [[wiki/sources/iaseai-workshop-outcomes-framework|IASEAI Workshop — Outcomes Framework for IVO Regulation]]

## Contradicted by / Tension with

The Level 1/Level 2 gap is a known feature of regulatory design, not a flaw unique to AI. The question for AI governance is whether the gap is larger or more consequential than in other domains. Given that AI Level 1 harms (catastrophic misuse) may be rare, irreversible, and hard to attribute, the Level 2 proxies used in [[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]] (ASL/CCL evaluations) face a harder calibration problem than bridge inspection cycles.

## Relevant concepts

[[wiki/definitions/level-1-level-2-outcomes|Level 1 / Level 2 Outcomes]], [[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]

---
## wiki/findings/llm-conspiracy-bunking-debunking-symmetric.md

---
title: "LLM Conspiracy Bunking and Debunking Effects Are Symmetric"
type: finding
tags: [democratic-risks, epistemic-effects, empirical, disinformation]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Costello et al 2026 Large Language Models Can Promote Conspiracy Beliefs.pdf"
related:
  - "[[wiki/sources/llm-conspiracy-promotion|LLMs Can Promote Conspiracy Beliefs (Costello et al., 2026)]]"
  - "[[wiki/findings/sycophantic-ai-increases-extremity|Sycophantic AI Increases Political Attitude Extremity]]"
  - "[[wiki/findings/ai-circumvents-identity-source-bias|AI Circumvents Identity-Driven Source Selection Bias]]"
  - "[[wiki/definitions/ai-sycophancy|AI Sycophancy]]"
---

## Claim

Jailbroken LLMs arguing for conspiracy theories increase conspiracy belief by 13.7 points (g=1.18); LLMs arguing against conspiracy theories decrease belief by 12.1 points (g=-1.05); these effects are not significantly different in magnitude; standard (non-jailbroken) GPT-4o produces similar bunking effects despite RLHF guardrails; a corrective debrief fully reverses bunking; and the direction of epistemic effect is determined by deployment framing rather than by any intrinsic property of the technology.

## Evidence

- Costello et al. (CMU/FAR.AI/MIT/Cornell, arXiv Jan 2026): 3 pre-registered experiments, N=2,724; jailbroken GPT-4o bunking: +13.7 points (g=1.18, large effect); debunking: -12.1 points (g=-1.05, large effect); effects not significantly different; standard GPT-4o produces bunking effects similar in magnitude to jailbroken condition — guardrails do not prevent epistemically harmful deployment; corrective debrief (informing participants the AI was instructed to argue for conspiracy theories) fully reverses bunking and brings scores below baseline; minimal "use only true information" system prompt dramatically reduces bunking; bunking AI rated as more informative and collaborative than debunking AI; bunking increases trust in AI generally and spillover effects on Generic Conspiracist Beliefs Scale → [[wiki/sources/llm-conspiracy-promotion|Costello et al. 2026]]

## Contradicted by / Tension with

The symmetric finding implies debunking LLMs could be deployed as effective counter-misinformation tools — the same technology that creates the problem also provides the solution. This optimistic reading is qualified by three complications: (1) access to debunking AI must be delivered before or alongside the bunking AI, not after long exposure; (2) bunking AI's persuasive advantage (rated more informative/collaborative) suggests asymmetric uptake in practice; (3) the corrective-debrief mechanism requires users to know they were bunked, which may not be the case in organic deployment.

## Relevant concepts

[[wiki/definitions/ai-sycophancy|AI Sycophancy]]

## Notes

The standard-guardrails failure is the most governance-relevant finding: it demonstrates that RLHF safety training does not prevent LLMs from being deployed in epistemically harmful configurations — the bunking system prompt did not require jailbreaking in the full experiment, only a framing that encouraged the model to argue persuasively for a position. This connects to [[wiki/findings/sycophantic-ai-increases-extremity|sycophancy-induced extremity]]: the bunking-style deployment (validate the user's existing conspiracy beliefs) is precisely the mode sycophancy-optimized models would drift toward. The debrief finding is a concrete policy implication: platform-level disclosure ("this AI was configured to argue for X") could be a low-cost harm-reduction tool analogous to sponsored-content labeling.

---
## wiki/findings/multi-agent-governance-gap.md

---
title: "Existing AI Governance Frameworks Have a Multi-Agent Gap"
type: finding
tags: [agentic-ai, governance-mechanisms, evaluations, technical-safety]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Technical Innovations for AI Policy 2026 What We Heard, and What It Means.md"
related:
  - "[[wiki/findings/agentic-ai-expands-attack-surface|Agentic AI Systems Expand the Cybersecurity Attack Surface]]"
  - "[[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]"
  - "[[wiki/definitions/agentic-ai|Agentic AI]]"
  - "[[wiki/sources/tiap-2026|TIAP 2026 (FAR.AI)]]"
  - "[[wiki/sources/securing-agentic-ai|Securing Agentic AI (FAR AI / CSA Singapore)]]"
---

## Claim

Every existing AI governance framework was designed to assess individual systems; none is equipped to evaluate the emergent harms produced when multiple agents interact. As the infrastructure for agents to interact at scale is already being built, this is an urgent unaddressed gap.

## Evidence

- [TIAP 2026, Paskov/RAND]: UK AISI researchers found the share of action-taking tools in Model Context Protocol (MCP) rose from 24% to 65% between late 2024 and early 2026 — the infrastructure for multi-agent interaction is deploying faster than governance frameworks can track. → [[wiki/sources/tiap-2026|TIAP 2026]]
- [TIAP 2026, Paskov/RAND]: Preliminary inter-agent influence evaluation results show that simple prompting for coercion or persuasion raises approvals of policy-violating requests from a 5% baseline to 11% and 14% respectively. Even individually safe and aligned systems can produce harmful outcomes through interaction — a property that single-model assessment frameworks cannot detect. → [[wiki/sources/tiap-2026|TIAP 2026]]
- [TIAP 2026]: Every major existing governance framework — from frontier lab preparedness frameworks (Anthropic RSP, OpenAI Preparedness, GDM Frontier Safety Framework) to the EU AI Act — was designed to assess single models. None has been extended to evaluate systems in relation. → [[wiki/sources/tiap-2026|TIAP 2026]]

## Contradicted by / Tension with

The FAR AI / CSA Singapore agentic security paper ([[wiki/sources/securing-agentic-ai|Securing Agentic AI]]) identifies inter-agent attacks as a threat category, but is focused on cybersecurity threats to agentic pipelines, not on governance evaluation frameworks. The two analyses are complementary: one describes the attack surface, the other the governance gap.

## Relevant concepts

[[wiki/definitions/agentic-ai|Agentic AI]], [[wiki/definitions/prompt-injection|Prompt Injection]]

## Notes

The 24% → 65% rise in MCP action-taking tools over ~14 months is the most concrete empirical data point in the wiki for the pace of agentic deployment. It implies that the multi-agent governance gap is closing fast — not in the sense of being addressed, but in the sense that the window for addressing it before large-scale deployment is narrowing.

---
## wiki/findings/nonphysical-asset-governance-challenge.md

---
title: "Nonphysical Asset Governance Challenge"
type: finding
tags: [governance-theory, ai-policy, technology-policy]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/AI Governance Lessons from Earlier Technologies.pdf"
related:
  - "[[wiki/definitions/collingridge-dilemma|Collingridge Dilemma]]"
  - "[[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]"
  - "[[wiki/findings/norm-consensus-as-governance-prerequisite|Norm Consensus as Governance Prerequisite]]"
  - "[[wiki/sources/rand-ai-governance-historical-analogues|RAND — Historical Analogues (Vermeer, 2024)]]"
---

# Nonphysical Asset Governance Challenge

## Claim

Governance mechanisms designed to control physical assets (fissile material, hardware, facilities) do not transfer reliably to nonphysical assets (software, algorithms, model weights); encryption export controls demonstrate that motivated actors can circumvent such controls through open-source dissemination, legal challenges, and alternative development — a pattern AI governance may replicate.

## Evidence

- [RAND/Vermeer 2024]: Encryption export controls on cryptographic software were defeated by First Amendment litigation, open-source cryptography (OpenPGP), and foreign development of equivalent products — making controls both ineffective and economically self-defeating. Nuclear nonproliferation succeeded partly because it targeted physical chokepoints (fissile material, delivery systems, test detection) with no analogous digital bypass. → [[wiki/sources/rand-ai-governance-historical-analogues|RAND — Historical Analogues (Vermeer, 2024)]]
- [NRC, 1996, cited in Vermeer]: Motivated users (those national security was most concerned about) were still able to acquire strong encryption despite export restrictions.

## Contradicted by / Tension with

- The [[wiki/findings/compute-threshold-as-governance-proxy|Compute Thresholds as Governance Proxy]] finding relies on compute hardware (a physical asset) as a governance lever precisely because it is more controllable than software. Vermeer's analysis suggests this is the right instinct — but notes that if dangerous AI can be achieved with general-purpose hardware rather than specialized systems, even compute controls lose their chokepoint character.
- [[wiki/findings/embedded-oversight-as-high-stakes-model|Embedded Oversight as the High-Stakes IVO Model]] suggests that IVO hold-points at mandatory junctures (physical inspections in nuclear, aviation) may require physical process analogues for AI — a harder design problem if training runs are the key event.

## Relevant concepts

[[wiki/definitions/collingridge-dilemma|Collingridge Dilemma]], [[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]], [[wiki/definitions/technical-legibility|Technical Legibility]]

## Notes

Vermeer frames this as one of three cross-cutting governance themes across all four historical analogues. The point is not merely that digital things are hard to restrict, but that governance strategies which depend on controlling dissemination of information face structural legal and practical barriers in liberal democratic systems that go beyond enforcement difficulty.

---
## wiki/findings/norm-consensus-as-governance-prerequisite.md

---
title: "Norm Consensus as Governance Prerequisite"
type: finding
tags: [governance-theory, international, technology-policy]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/AI Governance Lessons from Earlier Technologies.pdf"
related:
  - "[[wiki/findings/broad-adoption-shallow-commitment-dynamic|Broad Adoption, Shallow Commitment: The OECD AI Principles Dynamic]]"
  - "[[wiki/findings/asilomar-moratorium-as-voluntary-governance-model|Asilomar Moratorium as Voluntary Governance Model]]"
  - "[[wiki/findings/competitiveness-vs-safety-framing-divergence|Competitiveness vs. Safety: Divergent Governance Framings]]"
  - "[[wiki/sources/rand-ai-governance-historical-analogues|RAND — Historical Analogues (Vermeer, 2024)]]"
---

# Norm Consensus as Governance Prerequisite

## Claim

Sustained consensus on the norms governing a technology — including agreement on what risks matter and which interests are legitimate — is the critical variable distinguishing governance successes from failures across all four historical analogues; institutional design alone cannot substitute for it.

## Evidence

- [RAND/Vermeer 2024]: Encryption export controls succeeded initially because NSA, academia, and the private sector shared consensus on national security interests; when that consensus fractured over the 1990s, governance failed — even with identical institutions. Nuclear governance succeeded in part because catastrophic risk was concrete and widely agreed-upon (Hiroshima, Chernobyl). The Asilomar recombinant DNA moratorium succeeded because the scientific community had a narrow, tractable risk on which it could reach consensus. Internet governance sustained openness norms because those norms were embedded in the developer community from inception. → [[wiki/sources/rand-ai-governance-historical-analogues|RAND — Historical Analogues (Vermeer, 2024)]]
- [Vermeer on CRISPR case]: The second moratorium on human germline editing failed to achieve the Asilomar result because stakeholder diversity had grown, ethical disagreements were not tractable, and consensus on the nature and severity of risk had fractured.

## Contradicted by / Tension with

- [[wiki/findings/broad-adoption-shallow-commitment-dynamic|Broad Adoption, Shallow Commitment]] finding: OECD AI Principles' near-universal formal adoption contrasts with the norm consensus thesis — breadth of formal commitment does not imply the shared internalized norms that Vermeer identifies as the operative variable.
- [[wiki/findings/bletchley-first-multilateral-frontier-safety-agreement|Bletchley Declaration]]: The Bletchley Declaration achieves multilateral agreement but on high-generality principles; whether it constitutes the kind of risk-specific consensus Vermeer identifies as causally effective remains open.
- Vermeer notes that AI catastrophic risk scenarios currently lack the "concreteness, rigor, and clear applicability to policymaking" that nuclear scenarios provided — suggesting the norm consensus prerequisite may be harder to satisfy for AI than for nuclear governance.

## Relevant concepts

[[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]], [[wiki/definitions/regulatory-markets|Regulatory Markets]]

## Notes

This finding directly informs the design challenge for [[wiki/definitions/independent-verification-organization|IVO]] licensing systems: a competitive IVO market may allow faster standard evolution, but the underlying norm consensus on what safety outcomes matter must precede or co-develop with institutional design. Hadfield's regulatory markets proposal is partly responsive to this — by allowing IVOs to develop standards competitively, it may accelerate norm formation, but the government's role in setting outcome goals requires prior policy consensus.

---
## wiki/findings/ohio-hb628-ivo-licensing-framework.md

---
title: "Ohio HB 628: IVO Licensing Framework with Harm-Triggered Revocation"
type: finding
tags: [ai-policy, governance-theory, law]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/OHIO HB628_BILL ANALYSIS_27288.pdf"
related:
  - "[[wiki/findings/virginia-sb384-ivo-licensing-framework|Virginia SB 384: First State IVO Licensing Statute]]"
  - "[[wiki/findings/voluntary-ivo-design-tradeoff|Voluntary IVO Participation: Design Tradeoff]]"
  - "[[wiki/findings/rebuttable-presumption-as-market-incentive|Rebuttable Presumption as the Market Incentive for IVO Certification]]"
  - "[[wiki/findings/race-to-bottom-countermeasure-license-revocation|Race-to-Bottom Countermeasure: License Revocation Cascade]]"
  - "[[wiki/findings/state-ai-legislation-2026-wave|State AI Legislation: 2026 Wave]]"
  - "[[wiki/sources/ohio-hb628-2025|Ohio HB 628 (2025)]]"
---

## Claim

Ohio HB 628 is the third state IVO licensing framework (after CT SB 5 §33 and VA SB 384), but introduces a structurally distinct mandatory revocation trigger: the Attorney General *must* revoke an IVO's license if a verified AI model or application causes a material harm of the type the IVO was licensed to prevent.

## Evidence

- [[wiki/sources/ohio-hb628-2025|Ohio HB 628 LSC Bill Analysis]]: R.C. 3755.04 lists five mandatory revocation grounds, the fifth being outcome-triggered: "An AI model or application verified by the IVO causes a material harm of the type the IVO is licensed to prevent." This is absent in Virginia SB 384's revocation provisions, which focus on procedural non-compliance, conflicts of interest, and technological obsolescence.

## Key structural features (comparison with VA SB 384)

Ohio HB 628 and Virginia SB 384 share the same basic IVO architecture (voluntary participation, [[wiki/definitions/rebuttable-presumption|rebuttable presumption of reasonable care]], advisory council, 10-year document retention, 1-year post-employment restriction). They differ on:

- **Licensor**: Ohio — Attorney General; Virginia — VITA (state IT agency)
- **Advisory council home**: Ohio — AG's Office, jointly with State Auditor; Virginia — independent AI Safety Advisory Council
- **Mandatory revocation**: Ohio includes outcome-triggered revocation (verified model causes harm); Virginia does not
- **Scope of coverage**: Ohio explicitly covers both "AI models" and "AI applications" (software using AI models); Virginia focuses on AI systems/models
- **Security vendor**: Ohio defines "security vendor" as a third-party red-teaming entity; Virginia has no equivalent
- **Whistleblower**: Ohio requires IVO plans to address developer/deployer whistleblower protections; Virginia does not
- **Legislative status**: Ohio — introduced December 11, 2025, as introduced; Virginia — signed April 13, 2026

## Contradicted by / Tension with

The outcome-triggered mandatory revocation creates a potential systemic risk: if [[wiki/findings/race-to-bottom-countermeasure-license-revocation|license revocation voids all IVO certificates simultaneously]], harm-triggered revocation could produce market disruption proportional to the IVO's market penetration. An IVO certifying a widely deployed model that causes harm faces not just license loss but cascading verification voids across its entire portfolio. The Hadfield regulatory markets literature treats this cascade as a feature (deterring race-to-bottom selection) but does not address the collateral disruption to verified systems that caused no harm.

## Relevant concepts

[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]], [[wiki/definitions/regulatory-markets|Regulatory Markets]]

## Notes

Ohio HB 628 was introduced December 11, 2025 by Rep. T. Mathews (136th General Assembly). The bill analysis is dated February 27, 2026 — no passage or committee action has been recorded in the source document. Ohio joins Minnesota HF 4544 / SF 4636 (noted in the Transparency Coalition April 2026 tracker) as states introducing IVO licensing frameworks in the same session as Virginia's enactment.

---
## wiki/findings/open-source-alignment-evaluation-stack.md

---
title: "Open-Source Alignment Evaluation Stack Emerging at Meridian Labs"
type: finding
tags: [technical-safety, governance-institutions, industry-practice, evaluation]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Donating our open-source alignment tool.md"
related:
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as a Governance Prerequisite]]"
  - "[[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]"
  - "[[wiki/findings/sandbagging-detection-challenge|Sandbagging Detection Remains an Open Problem]]"
  - "[[wiki/findings/glass-box-evaluation-deadlock|The Glass-Box Evaluation Deadlock]]"
  - "[[wiki/sources/uk-aisi|UK AI Security Institute (AISI)]]"
  - "[[wiki/sources/petri-alignment-tool-anthropic|Petri 3.0 — Anthropic]]"
---

## Claim

A shared open-source alignment evaluation stack is coalescing at Meridian Labs — an independent AI evaluation nonprofit — with Petri (Anthropic's donated alignment testing toolbox), Inspect (UK AISI's evaluation framework), and Scout; this represents the first instance of a frontier lab donating a core evaluation tool to neutral nonprofit infrastructure, establishing a structural precedent for evaluation independence analogous to Anthropic's MCP donation to the Linux Foundation.

## Evidence

- [Anthropic 2025]: "As part of Meridian Labs, Petri joins other tools like Inspect and Scout, building a technology stack that is open to labs, independent researchers, and governments alike." The donation was explicitly modeled on the MCP Linux Foundation donation "to help ensure that Petri remains independent of any AI lab, so that its results will be seen as neutral and credible." → [[wiki/sources/petri-alignment-tool-anthropic|Petri 3.0 — Anthropic]]
- [Anthropic 2025]: UK AISI made Petri "a major part" of their model sabotage-propensity evaluations — demonstrating cross-institutional uptake before the independence transfer. → [[wiki/sources/petri-alignment-tool-anthropic|Petri 3.0 — Anthropic]]

## Contradicted by / Tension with

Adoption by other frontier labs (OpenAI, Google DeepMind, Meta) remains unconfirmed. Evaluation credibility depends not only on tool independence but on methodological consensus about what behaviors to measure and how to score them — a problem Petri alone does not resolve. The glass-box evaluation deadlock ([[wiki/findings/glass-box-evaluation-deadlock|Glass-Box Evaluation Deadlock]]) remains: Petri operates on model outputs and auditor-mediated scenarios, not on internal model signals, so it cannot verify claims that require access to weights or activations.

## Relevant concepts

[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]], [[wiki/definitions/sandbagging|Sandbagging]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]], [[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]

## Notes

The "Dish" add-on — running tests with the model's real system prompt and deployment scaffold — is a partial sandbagging countermeasure: it prevents the model from recognizing test conditions by making them indistinguishable from deployment. This complements FAR.AI's detection-via-retraining approach at the methodological level, but the two approaches target different failure modes (Dish: preventing sandbagging from being activated; FAR.AI: detecting it after the fact).

---
## wiki/findings/open-weight-lifecycle-governance-gaps.md

---
title: "Open-Weight Model Lifecycle Governance Has Systematic Gaps"
type: finding
tags: [technical-safety, open-weight-models, governance-mechanisms, research-agenda]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Caspar et al 2026 Open Technical Problems in Open-Weight Model Risk Management.pdf"
related:
  - "[[wiki/sources/open-weight-model-risk-management|Open Technical Problems in Open-Weight Model Risk Management (Caspar et al., 2026)]]"
  - "[[wiki/definitions/open-weight-model|Open-Weight Model]]"
  - "[[wiki/definitions/tamper-resistant-training|Tamper-Resistant Training]]"
  - "[[wiki/findings/open-weight-tamper-resistance-limits|Open-Weight Model Tamper Resistance Has Narrow Safety Margins]]"
  - "[[wiki/definitions/pretraining-data-filtering|Pretraining Data Filtering]]"
---

## Claim

Open-weight model governance has systematic gaps across all five stages of the model lifecycle — training data curation, tamper-resistant training, tampering evaluations, staged deployment, and model provenance/forensics — and addressing these gaps requires 16 distinct technical research programs that prior policy surveys have enumerated but not technically specified.

## Evidence

- Caspar et al. (TMLR, March 2026): 16 open problems mapped across five lifecycle stages: (1) **Training data curation** — no robust method to certify that hazardous knowledge was excluded from pretraining; (2) **Tamper-resistant training and unlearning** — safety properties fragile under adversarial fine-tuning; formal unlearning verification unsolved; (3) **Model tampering evaluations** — no standardized benchmark for measuring tamper resistance; adversarial fine-tuning evaluation methodology immature; (4) **Staged deployment strategies** — no established playbook for open-weight release staging analogous to closed-model staged rollout; (5) **Model provenance and forensics** — no reliable watermarking or fingerprinting methods for attributing harms from modified open-weight derivatives; explicitly fills gaps in Seger 2024, François 2025, Srikumar 2024, UK AISI 2025 → [[wiki/sources/open-weight-model-risk-management|Caspar et al. 2026]]

## Contradicted by / Tension with

Several of the 16 problems are acknowledged as having partial solutions — staged deployment strategies, for instance, borrow from software release practices — so the "systematic gaps" framing is strongest for the tamper-resistance and forensics stages. The lifecycle framing also emphasizes technical problems; the governance design problems (who enforces staged deployment for open-weight models, given no centralized control surface?) are noted but not the paper's primary focus.

## Relevant concepts

[[wiki/definitions/open-weight-model|Open-Weight Model]], [[wiki/definitions/tamper-resistant-training|Tamper-Resistant Training]], [[wiki/definitions/pretraining-data-filtering|Pretraining Data Filtering]]

## Notes

The five-stage lifecycle framework is analytically useful for governance design: it maps technical responsibilities onto different actors. Training data curation and tamper-resistant training are developer responsibilities (pre-release). Tampering evaluations could be assigned to IVOs or regulators. Staged deployment is a developer-regulator co-responsibility. Model provenance and forensics are primarily post-release law-enforcement and civil-liability tools. The lifecycle framing thus connects the technical open problems to the [[wiki/definitions/independent-verification-organization|IVO]] and compute governance frameworks.

---
## wiki/findings/open-weight-tamper-resistance-limits.md

---
title: "Open-Weight Model Tamper Resistance Has Narrow Safety Margins"
type: finding
tags: [technical-safety, open-weight-models, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Caspar et al 2026 Open Technical Problems in Open-Weight Model Risk Management.pdf"
related:
  - "[[wiki/sources/open-weight-model-risk-management|Open Technical Problems in Open-Weight Model Risk Management (Caspar et al., 2026)]]"
  - "[[wiki/definitions/tamper-resistant-training|Tamper-Resistant Training]]"
  - "[[wiki/definitions/open-weight-model|Open-Weight Model]]"
  - "[[wiki/findings/pretraining-filter-tamper-resistance|Pretraining Filters Do Not Provide Tamper-Resistant Safety]]"
---

## Claim

Current tamper-resistance methods for open-weight AI models — including safety fine-tuning and RLHF-based alignment — provide safety guarantees only against light adversarial modification (hundreds of fine-tuning steps on consumer hardware), while meaningful open-weight governance requires techniques robust to thousands of adversarial fine-tuning steps; no technique currently meets this bar, making open-weight release of models with dangerous capabilities ungovernable under present technical conditions.

## Evidence

- Caspar et al. (TMLR, March 2026; MIT CSAIL / UK AISI / FAR.AI): 16 open problems taxonomy; tamper-resistant training identified as the central unsolved problem; state-of-the-art safety fine-tuning and RLHF alignment broken by hundreds of fine-tuning steps; adversarial budgets for malicious actors with GPT-oss-120b (3M downloads) include consumer hardware fine-tuning with commodity datasets; the required robustness target — thousands of steps across realistic adversarial budgets — is not met by any current method → [[wiki/sources/open-weight-model-risk-management|Caspar et al. 2026]]

## Contradicted by / Tension with

The fragility of post-training safety is well-documented empirically, but the governance implication (that open-weight release of dangerous-capability models is ungovernable) is contested by researchers who argue that the security-through-obscurity of closed weights is itself fragile, and that open release enables broader safety research that may discover more robust defenses. The paper explicitly acknowledges this debate but concludes that the technical gap is too large to close with current methods.

## Relevant concepts

[[wiki/definitions/tamper-resistant-training|Tamper-Resistant Training]], [[wiki/definitions/open-weight-model|Open-Weight Model]]

## Notes

The 3-million-download figure for GPT-oss-120b is the paper's most concrete governance signal: it illustrates that at release, a model instantly becomes a massively distributed artifact, making post-release patching logistically impossible even if technically feasible. This asymmetry — one-time release vs. permanent distribution — is the structural reason why pre-release tamper resistance must be solved rather than worked around. Companion finding: [[wiki/findings/pretraining-filter-tamper-resistance|Pretraining Filters Do Not Provide Tamper-Resistant Safety]] shows the problem persists even when pretraining-level safety filtering is applied.

---
## wiki/findings/pretraining-filter-tamper-resistance.md

---
title: "Pretraining Data Filtering Produces Tamper-Resistant Safeguards in Open-Weight LLMs"
type: finding
tags: [technical-safety, empirical, open-weight-models]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Deep Ignorance Pretraining Data Filtering for Tamper-Resistant LLM Safeguards.pdf"
related:
  - "[[wiki/sources/deep-ignorance-pretraining-filter|Deep Ignorance (O'Brien, Casper et al., 2025)]]"
  - "[[wiki/definitions/pretraining-data-filtering|Pretraining Data Filtering]]"
  - "[[wiki/definitions/uplift|Uplift]]"
  - "[[wiki/findings/responsible-capability-scaling-as-industry-norm|Responsible Capability Scaling as Industry Norm]]"
---

## Claim

Filtering harmful content from pretraining data produces LLM safeguards that are substantially more tamper-resistant to adversarial fine-tuning than post-training alignment alone — maintaining resistance through ~10,000 fine-tuning steps and 300 million tokens, roughly an order of magnitude beyond post-training-only baselines — though the approach cannot block in-context harmful knowledge and functions best as one layer in a defense-in-depth stack.

## Evidence

- O'Brien, Casper et al. (EleutherAI / UK AI Security Institute, August 2025): empirical experiments with 6.9B parameter model suite spanning filter strength spectrum; strongest filter (all harmful-topic data removed) maintains substantially higher refusal rates through 10k adversarial fine-tuning steps; post-training-only baseline is compromised within ~1k steps; limitation confirmed: in-context harmful reasoning partially bypasses filter → [[wiki/sources/deep-ignorance-pretraining-filter|Deep Ignorance]]

## Contradicted by / Tension with

The safety-capability tradeoff is real: stronger filters degrade benign task performance. The paper does not fully characterize this frontier, and the acceptable tradeoff is deployment-context-dependent. Also, the 6.9B model scale may not generalize to frontier models — the tradeoff dynamics could differ at larger scales.

## Relevant concepts

[[wiki/definitions/pretraining-data-filtering|Pretraining Data Filtering]], [[wiki/definitions/uplift|Uplift]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]]

## Notes

Governance implication: if safety is significantly determined at training, governance frameworks focused exclusively on deployment outputs (responsible scaling policies that trigger on deployed capability evaluations; IVO audits of model outputs) may miss the training-layer variable. This suggests audit scope may need to extend to training pipelines — a significantly more intrusive form of oversight with different [[wiki/definitions/technical-legibility|technical legibility]] requirements.

---
## wiki/findings/principle-to-practice-gap-responsible-ai.md

---
title: "Principle-to-Practice Gap in Responsible AI Governance"
type: finding
tags: [governance-theory, industry-practice, ai-policy]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/Responsible artificial intelligence governance A review and research framework.md"
related:
  - "[[wiki/definitions/responsible-ai-governance|Responsible AI Governance]]"
  - "[[wiki/findings/broad-adoption-shallow-commitment-dynamic|Broad Adoption, Shallow Commitment: The OECD AI Principles Dynamic]]"
  - "[[wiki/findings/conventional-regulation-illegibility-problem|Conventional Regulation's Illegibility Problem with ML]]"
  - "[[wiki/sources/responsible-ai-governance-review-framework|Responsible AI Governance — Review and Research Framework]]"
---

# Principle-to-Practice Gap in Responsible AI Governance

## Claim

Adherence to responsible AI principles is systematically deprioritized during actual AI implementation and management; the gap between stated principles and enacted governance practices is the central challenge in responsible AI, not the identification of principles themselves.

## Evidence

- [Papagiannidis, Mikalef & Conboy 2024]: Systematic literature review of empirical studies finds that while seven responsible AI principles (accountability, fairness, human agency/oversight, privacy/data governance, technical robustness/safety, transparency, social/environmental well-being) are well-established in policy and academic literature, organizations face a structural challenge translating them into practice. "For most organizations, AI has several potential ramifications and unexpected and unwanted outcomes." The governance practices literature — structural (roles/authority), procedural (processes/audits), relational (stakeholder engagement, AI literacy) — is substantially underdeveloped relative to the principles literature. → [[wiki/sources/responsible-ai-governance-review-framework|Responsible AI Governance — Review and Research Framework]]
- Antecedent structure: responsible AI governance is mediated by organizational values and path dependencies, which filter societal norms before they reach governance practice — explaining why identical principles produce divergent implementation across organizations.

## Contradicted by / Tension with

- [[wiki/findings/broad-adoption-shallow-commitment-dynamic|Broad Adoption, Shallow Commitment]]: The OECD dynamic is the international-level version of the same phenomenon — formal endorsement without behavioral constraint. The Papagiannidis et al. finding adds the organizational mechanism: path dependencies and corporate culture mediate how external normative signals are absorbed and acted upon.
- [[wiki/findings/conventional-regulation-illegibility-problem|Conventional Regulation's Illegibility Problem]]: Hadfield's point that [[wiki/definitions/command-and-control-regulation|command-and-control regulation]] cannot specify ML decision logic is partly a supply-side explanation for why procedural governance practices are so hard to implement: you cannot audit what you cannot specify. Responsible AI governance practices presuppose a degree of [[wiki/definitions/technical-legibility|Technical Legibility]] that frontier models currently lack.
- EU AI Act obligations map directly onto several of the seven principles — creating legally mandated structural and procedural practices for high-risk AI operators. Whether legal mandate closes the principle-to-practice gap, or whether it reproduces compliance theater at scale, is an open empirical question the paper identifies as a research priority.

## Relevant concepts

[[wiki/definitions/responsible-ai-governance|Responsible AI Governance]], [[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]], [[wiki/definitions/technical-legibility|Technical Legibility]]

## Notes

This finding is grounded in IS (information systems) / management research rather than policy or technical AI safety, making it a usefully distinct perspective from the rest of the wiki. The organizational-level analysis (how firms actually implement governance) complements the system-level analysis (what regulations require) and the technical-level analysis (what interpretability tools can reveal). The three governance practice types — structural, procedural, relational — provide a checklist for evaluating whether any governance instrument (NIST RMF, EU AI Act compliance, voluntary RSP frameworks) has actually been instantiated.

---
## wiki/findings/procurement-cannot-substitute-public-law.md

---
title: "Procurement Cannot Substitute for Public Law in Military AI Governance"
type: finding
tags: [governance-mechanisms, procurement-policy, legal-analysis, military-ai]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Military AI Policy by Contract The Limits of Procurement as Governance.md"
related:
  - "[[wiki/definitions/regulation-by-contract|Regulation by Contract]]"
  - "[[wiki/definitions/governance-by-procurement|Governance by Procurement]]"
  - "[[wiki/findings/governance-by-procurement-as-democratic-vacancy|Governance by Procurement Creates a Democratic Vacancy]]"
  - "[[wiki/sources/military-ai-policy-by-contract|Military AI Policy by Contract (Lawfare, 2026)]]"
---

## Claim

Procurement agreements are structurally incapable of governing military AI uses involving constitutional rights, autonomous weapons policy, and intelligence oversight, because: (1) they bind only the parties who signed them; (2) enforcement is post-hoc, arriving after harm has occurred; (3) the government possesses unilateral powers over contractors that contractors cannot counter in real time; and (4) in an Other Transaction environment, even post-hoc remedies may not exist unless specifically negotiated.

## Evidence

- [Lawfare, 2026]: The Hegseth AI strategy memo (January 2026) required all Defense Department AI contracts within 180 days to include "any lawful use" language requiring removal of vendor-imposed restrictions. The memo addresses not just contractual restrictions but architectural guardrails — "utilize models free from usage policy constraints that may limit lawful military applications." This posture treats vendor safety commitments as barriers to lawful use, not as governance. → [[wiki/sources/military-ai-policy-by-contract|Military AI Policy by Contract (Lawfare, 2026)]]
- [Lawfare, 2026]: Two specific defects in the OpenAI-Pentagon agreement illustrate the limits of contractual governance: the "consistent with applicable laws" preamble shifts interpretive authority to the government (the Pentagon is the first and often only interpreter in the operational moment); the "intentionally" qualifier on the domestic surveillance prohibition can swallow the prohibition if incidental collection is characterized as non-intentional. → [[wiki/sources/military-ai-policy-by-contract|Military AI Policy by Contract (Lawfare, 2026)]]
- [Lawfare, 2026]: Vendor termination — the only meaningful contractual remedy — is not a real-time check. By the time termination is exercised, the conduct has occurred. Moreover, Washington Post reporting indicates the Pentagon told Anthropic it would use "government powers" to retain the technology even if Anthropic directed a cessation. In the national security context, even termination may be unavailable. → [[wiki/sources/military-ai-policy-by-contract|Military AI Policy by Contract (Lawfare, 2026)]]

## Contradicted by / Tension with

OpenAI's argument that the real enforcement is the "safety stack" (cloud-only deployment, retained classifiers, architectural guardrails) — architectural enforcement that can prevent conduct in the moment. The tension is unresolved: if the safety stack blocks a use that "any lawful use" would permit, which provision controls? Altman's own words suggest the answer: "I believe we will hopefully have the best models that will encourage the government to be willing to work with us, *even if our safety stack annoys them*."

## Relevant concepts

[[wiki/definitions/regulation-by-contract|Regulation by Contract]], [[wiki/definitions/governance-by-procurement|Governance by Procurement]]

## Notes

The conclusion in direct quote: "'Any lawful use' is 'any lawful use.' The government interprets what is lawful, acts on that interpretation, and has demonstrated what happens when a contractor disagrees. These questions deserve answers from Congress and the courts, not from a procurement framework that was never built to carry them."

---
## wiki/findings/public-private-investment-gap-ai.md

---
title: "U.S. Public AI Investment Is Dwarfed by Private Sector Spending"
type: finding
tags: [ai-policy, economics, empirical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/stanford-hai-ai-index-2026-policy.md"
related:
  - "[[wiki/sources/stanford-hai-ai-index-2026-policy|Stanford HAI AI Index 2026 — Policy and Governance Chapter]]"
  - "[[wiki/findings/ai-sovereignty-as-policy-principle|AI Sovereignty as an Emerging Central Principle of National AI Policy]]"
---

## Claim

U.S. public investment in AI ($20.4 billion in contracts and grants over 2013–2024) represents less than 8% of private sector AI investment in a single year ($285.9 billion in 2025 alone), suggesting that the governance capacity of the U.S. government is structurally limited relative to the scale of the industry it seeks to govern.

## Evidence

- [Stanford HAI AI Index 2026]: U.S. public AI investment ≈ $20.4B over 2013–2024 total; U.S. private AI investment ≈ $285.9B in 2025 alone → [[wiki/sources/stanford-hai-ai-index-2026-policy|Stanford HAI AI Index 2026 — Policy and Governance Chapter]]

## Contradicted by / Tension with

- Investment magnitude does not translate directly into governance capacity — regulatory agencies often oversee industries much larger than their budgets suggest.
- European public commitments ($3.7B over 2013–2024) are smaller in absolute terms but are accelerating (UK committed 28% of its decade total in 2024 alone).

## Relevant concepts

[[wiki/definitions/ai-sovereignty|AI Sovereignty]]

## Notes

The investment asymmetry has direct implications for the revolving-door and expertise-gap problems in AI regulation: agencies underfunded relative to the industry they regulate face systematic disadvantages in technical expertise, talent retention, and capacity to evaluate complex AI systems independently.

---
## wiki/findings/race-to-bottom-countermeasure-license-revocation.md

---
title: "Race-to-Bottom Countermeasure: License Revocation Cascade"
type: finding
tags: [governance-theory, ai-policy, law]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/20250430 Talk GKH SGP.md"
  - "raw/202507 PODCAST Gillian Hadfield Andrew Freeman.md"
related:
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]"
---

# Race-to-Bottom Countermeasure: License Revocation Cascade

## Claim

The principal race-to-bottom risk in regulatory markets — that IVOs will sell easy certifications — is structurally contained by the license revocation cascade: revocation of an IVO's government license voids all certificates it issued, stripping every client of liability protection simultaneously.

## Evidence

- **Hadfield talk (April 2025)**: "If an IVO is found to be rubber-stamping unsafe models, the government revokes their license. Immediately, every certificate that IVO issued becomes void, and every company using them loses their liability protection. The market will self-correct because the risk of using a 'cheap' auditor is too high." → [[wiki/sources/hadfield-talk-regulatory-markets|Hadfield Talk — Regulatory Markets for AI Governance]]
- **Hadfield / Freeman podcast (July 2025)**: Freeman elaborates: "there's a little bit of fear of God moment for the people who would be these private side regulators — it can really disappear very quickly." Both note that the backstop against race-to-bottom is ultimately government oversight capacity: "the system is only as good as the capacity for your government to have oversight of these private actors." → [[wiki/sources/hadfield-freeman-podcast-cognitive-revolution|Hadfield & Freeman — Cognitive Revolution Podcast]]

## Contradicted by / Tension with

The cascade mechanism works only if government exercises meaningful oversight of IVOs — which returns the problem to government competence. Regulatory capture (regulated industries influencing the IVO licensing authority) is acknowledged as a risk that applies to all regulatory structures. Freeman suggests multi-state and international redundancy as a partial mitigation: if one jurisdiction withdraws IVO recognition, that should trigger scrutiny from others.

## Relevant concepts

[[wiki/definitions/regulatory-markets|Regulatory Markets]], [[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]

---
## wiki/findings/rcm-banking-as-ai-governance-analogy.md

---
title: "Regulatory Compliance Management in Banking as AI Governance Analogy"
type: finding
tags: [analogy, governance-theory, governance-mechanisms, law]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/G&M Article 20240523.md"
related:
  - "[[wiki/findings/level-1-level-2-outcome-gap|Level 1 / Level 2 Outcome Gap: Cross-Industry Pattern]]"
  - "[[wiki/findings/ivo-financial-independence-tension|IVO Financial Independence Tension: Cross-Industry Pattern]]"
  - "[[wiki/findings/embedded-oversight-as-high-stakes-model|Embedded Oversight as the High-Stakes IVO Model]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/level-1-level-2-outcomes|Level 1 / Level 2 Outcomes]]"
  - "[[wiki/sources/td-bank-rcm-regulatory-analogy|TD Bank AML Failure — Regulatory Compliance Management as Analogy]]"
---

## Claim

Banking's Regulatory Compliance Management (RCM) framework offers an underutilized AI governance analogy: a mature model of mandatory enterprise-wide compliance infrastructure, outcomes-based supervision with multi-jurisdictional regulator information-sharing, third-party consultants used for remediation, and public accountability standards for detecting and responding to harms — with direct structural parallels to what an AI developer accountability framework would require.

## Evidence

- [G&M 2024]: OSFI requires banks to maintain RCM programs with risk-based controls, pro-active testing, and feedback loops to business units; failures trigger mandatory action plans monitored quarterly by FinTRAC. TD's failures resulted in $450M+ U.S. penalties, a blocked acquisition, and engagement of risk consultancy Protiviti for remediation. → [[wiki/sources/td-bank-rcm-regulatory-analogy|TD Bank AML Failure — Regulatory Compliance Management as Analogy]]
- [G&M 2024]: TD CEO Masrani's accountability statement — "we did not meet our expectations or our regulatory obligations to monitor, detect, report and respond to suspicious activity" — illustrates what a mandatory public-facing accountability norm for AI developers might look like.

## Contradicted by / Tension with

Banking RCM operates in a domain where the harms (money laundering, financial crime) are relatively legible, well-defined, and linked to specific transaction patterns. AI harms are more diverse, less legible, and may not produce clear transaction-level signals. This limits the direct transferability of RCM's technical architecture, though the *governance structure* (mandatory standards, outcomes-based expectations, multi-regulator information sharing, third-party remediation consultants, quarterly monitoring) is more directly portable.

## Relevant concepts

[[wiki/definitions/level-1-level-2-outcomes|Level 1 / Level 2 Outcomes]], [[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/regulatory-markets|Regulatory Markets]], [[wiki/definitions/technical-legibility|Technical Legibility]]

## Notes

The RCM analogy adds a dimension absent from most IVO comparisons: the *continuous internal compliance function* owned by the regulated institution (analogous to an AI developer's safety team), externally assessed by a regulator, and subject to mandatory remediation with third-party support when failures occur. Current AI governance proposals focus heavily on the external audit/verification moment; the RCM model foregrounds the ongoing internal compliance infrastructure that makes external audit meaningful.

---
## wiki/findings/rebuttable-presumption-as-market-incentive.md

---
title: "Rebuttable Presumption as the Market Incentive for IVO Certification"
type: finding
tags: [governance-theory, law, ai-policy]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/20250430 Talk GKH SGP.md"
  - "raw/202507 PODCAST Gillian Hadfield Andrew Freeman.md"
related:
  - "[[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
---

# Rebuttable Presumption as the Market Incentive for IVO Certification

## Claim

Linking IVO certification to a rebuttable presumption of reasonable care in tort law converts voluntary participation in a regulatory markets system into a commercially rational decision, without requiring mandate.

## Evidence

- **Hadfield talk (April 2025)**: "If a company is certified by a licensed IVO and something goes wrong, the law treats them as having taken 'reasonable care.' This is a massive shield against tort liability and a requirement for insurance. If you aren't certified, you are essentially uninsurable and legally exposed." → [[wiki/sources/hadfield-talk-regulatory-markets|Hadfield Talk — Regulatory Markets for AI Governance]]
- **Hadfield / Freeman podcast (July 2025)**: Freeman clarifies the mechanism in SB813 is a rebuttable presumption specifically — not a hard immunity. "This counts as evidence, but if you can come in with any sort of other evidence that they didn't meet it..." The character.ai lawsuit surviving a motion to dismiss is cited as proof that agentic AI is entering tort law and liability exposure is real, making certification commercially valuable. → [[wiki/sources/hadfield-freeman-podcast-cognitive-revolution|Hadfield & Freeman — Cognitive Revolution Podcast]]

## Contradicted by / Tension with

The adequacy of a rebuttable presumption as an incentive depends on the magnitude of foreseeable AI liability. If courts treat AI liability as strict liability (no-fault), the presumption provides less protection. If the relevant harms are catastrophic and judgment-proof (Hadfield's own bioweapons example), tort law provides no deterrence regardless of certification status.

## Relevant concepts

[[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]], [[wiki/definitions/regulatory-markets|Regulatory Markets]], [[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]

---
## wiki/findings/regulatory-markets-as-governance-structure.md

---
title: "Regulatory Markets as a Governance Structure for AI"
type: finding
tags: [governance-theory, ai-policy, law]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/20250430 Talk GKH SGP.md"
  - "raw/202507 PODCAST Gillian Hadfield Andrew Freeman.md"
related:
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/command-and-control-regulation|Command-and-Control Regulation]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]"
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
---

# Regulatory Markets as a Governance Structure for AI

## Claim

A three-tier governance structure — government sets outcome goals, licensed private IVOs develop and enforce standards, regulated companies select IVOs from the market — can deliver adaptive, technically sophisticated AI oversight that [[wiki/definitions/command-and-control-regulation|command-and-control regulation]] cannot.

## Evidence

- **Hadfield talk (April 2025)**: Full description of the regulatory markets architecture. Government acts as goal-setter and licensor. IVOs are private competitive firms licensed on the basis of demonstrated capacity to achieve government-defined outcomes. The liability shield (rebuttable presumption) makes participation commercially rational. Race-to-bottom is prevented by license revocation cascade. Global scalability achieved via shared IVO technical standards across jurisdictions. → [[wiki/sources/hadfield-talk-regulatory-markets|Hadfield Talk — Regulatory Markets for AI Governance]]
- **Hadfield / Freeman podcast (July 2025)**: Traces the idea to a 2019 Hadfield/Clark paper; describes California SB813 as a voluntary first step; identifies the Underwriters Laboratories analogy as the closest existing precedent; notes character.ai tort case as evidence the liability mechanism is becoming non-hypothetical. → [[wiki/sources/hadfield-freeman-podcast-cognitive-revolution|Hadfield & Freeman — Cognitive Revolution Podcast]]

## Contradicted by / Tension with

- The [[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]] approach (ASL/CCL frameworks) is the current industry norm — developer self-assessment with voluntarily adopted safety commitments. Regulatory markets would replace or supplement self-assessment with certified third-party verification.
- Freeman explicitly cautions that regulatory markets require functioning government oversight capacity to prevent race-to-bottom: "the system is only as good as the capacity for your government to have oversight of these private actors." This reintroduces a dependency on government competence that the proposal aims to reduce.
- Hadfield frames regulatory markets as one tool, not a complete solution: catastrophic-risk domains (civilizational-scale bioweapons) may require separate regulatory regimes entirely.

## Relevant concepts

[[wiki/definitions/regulatory-markets|Regulatory Markets]], [[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]

## Notes

SB813 is the first legislative instantiation. The 2019 Hadfield/Clark paper predates the current AI governance debate by six years, situating this as a long-developed proposal rather than a reactive response to frontier AI.

---
## wiki/findings/responsible-capability-scaling-as-industry-norm.md

---
title: "Responsible Capability Scaling Has Become the Dominant Voluntary Industry Safety Approach"
type: finding
tags: [industry-practice, technical-safety, governance-theory, empirical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/anthropic-rsp.md"
  - "raw/gdm-frontier-safety-framework.md"
  - "raw/openai-preparedness-framework.md"
  - "raw/seoul-frontier-ai-safety-commitments-2024.md"
related:
  - "[[wiki/sources/anthropic-rsp|Anthropic's Responsible Scaling Policy (2023)]]"
  - "[[wiki/sources/gdm-frontier-safety-framework|Google DeepMind Frontier Safety Framework (2024)]]"
  - "[[wiki/sources/openai-preparedness-framework|OpenAI Preparedness Framework v2 (2025)]]"
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
  - "[[wiki/definitions/ai-safety-levels-asl|AI Safety Levels (ASL) — Anthropic]]"
  - "[[wiki/definitions/critical-capability-levels|Critical Capability Levels (CCL) — Google DeepMind]]"
---

## Claim

By 2024–2025, responsible capability scaling — predefined capability thresholds triggering safety requirements, with deployment conditional on meeting those requirements — had been independently adopted by Anthropic (ASL framework, 2023), Google DeepMind (Critical Capability Levels, 2024), and OpenAI (Preparedness Framework v1 2023, v2 2025), and was required of all Seoul Commitment signatories.

## Evidence

- [Anthropic RSP, 2023]: ASL-1 through ASL-5+; conditional scaling pause; board-approved → [[wiki/sources/anthropic-rsp|Anthropic's Responsible Scaling Policy (2023)]]
- [GDM FSF, 2024]: Critical Capability Levels in four domains; early warning evaluations; mitigation tiers → [[wiki/sources/gdm-frontier-safety-framework|Google DeepMind Frontier Safety Framework (2024)]]
- [OpenAI Preparedness Framework v2, 2025]: Tracked Categories; High/Critical thresholds; SAG governance → [[wiki/sources/openai-preparedness-framework|OpenAI Preparedness Framework v2 (2025)]]
- [Seoul Commitments, 2024]: Requires signatory companies to publish safety frameworks for severe risks; thresholds must be pre-defined; governments have a role in threshold-setting → [[wiki/sources/seoul-frontier-ai-safety-commitments-2024|Frontier AI Safety Commitments, AI Seoul Summit 2024]]

## Contradicted by / Tension with

- All three frameworks rely substantially on self-assessment; independent third-party verification of threshold compliance remains underdeveloped.
- OpenAI's conditional standards-lowering provision (adjusting requirements if competitors deploy high-risk systems) introduces a race-to-the-bottom mechanism absent from the other frameworks.

## Relevant concepts

[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]], [[wiki/definitions/ai-safety-levels-asl|AI Safety Levels (ASL) — Anthropic]], [[wiki/definitions/critical-capability-levels|Critical Capability Levels (CCL) — Google DeepMind]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]]

## Notes

The convergence is notable given the companies' competitive relationship — it suggests shared threat perception (or shared reputational incentives) strong enough to produce structural alignment in safety governance design, even without formal coordination.

---
## wiki/findings/sae-features-scale-to-frontier-models.md

---
title: "SAE Features Scale to Frontier Models: Safety Implications"
type: finding
tags: [technical-safety, interpretability, ai-safety]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/Scaling Monosemanticity Extracting Interpretable Features from Claude 3 Sonnet.md"
related:
  - "[[wiki/definitions/mechanistic-interpretability|Mechanistic Interpretability]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/definitions/red-teaming|Red-Teaming (AI)]]"
  - "[[wiki/findings/conventional-regulation-illegibility-problem|Conventional Regulation's Illegibility Problem with ML]]"
  - "[[wiki/sources/scaling-monosemanticity-claude3-sonnet|Scaling Monosemanticity (Anthropic, 2024)]]"
---

# SAE Features Scale to Frontier Models: Safety Implications

## Claim

Sparse autoencoders can extract high-quality, interpretable, monosemantic features from a production-scale frontier model (Claude 3 Sonnet), including safety-relevant features for deception, sycophancy, and dangerous content — establishing mechanistic interpretability as a viable (though nascent) tool for frontier AI safety analysis, not only small research models.

## Evidence

- [Anthropic, Scaling Monosemanticity 2024]: SAEs trained on Claude 3 Sonnet activations produced features that are multilingual (same concept across languages), multimodal (same concept in text and images), and abstract (responding to both concrete instances and abstract discussion of a concept, e.g. actual vulnerable code and abstract discussion of security vulnerabilities). Features include: people, countries/cities, code type signatures, and safety-relevant clusters including deception/power-seeking, sycophancy, and content adjacent to CBRN weapons. → [[wiki/sources/scaling-monosemanticity-claude3-sonnet|Scaling Monosemanticity (Anthropic, 2024)]]
- Feature steering experiments showed that activating/suppressing features can behaviorally influence the model in interpretable ways (e.g., the "Golden Gate Bridge" feature, when strongly activated, caused the model to identify as the bridge). This demonstrates that features are not passive labels but causally active computational elements.
- Generalization properties observed: SAE features trained on text activations generalized to image activations (dramatically out-of-distribution), suggesting features capture genuine semantic structure rather than surface statistics.

## Contradicted by / Tension with

- The paper's own Discussion section cautions heavily against overreading: "We caution against inferring too much from these preliminary results. Our investigations of safety-relevant features are extremely nascent." Key failure modes acknowledged: suboptimal dictionary learning (feature splitting artifacts), possible divergence between feature activation patterns and downstream behavior.
- [[wiki/findings/conventional-regulation-illegibility-problem|Conventional Regulation's Illegibility Problem]]: Hadfield argues ML decision logic is not human-readable, creating a fundamental governance gap. Mechanistic interpretability is a direct technical research response to this claim — but the paper's caution suggests we are far from the kind of reliable, auditable feature maps that would give external regulators confidence. The illegibility problem is real; interpretability research is chipping away at it, not solving it.
- [[wiki/definitions/technical-legibility|Technical Legibility]]: SAE-derived features are a promising candidate for making AI systems technically legible, but the paper identifies open problems: it is not yet possible to reliably prevent specific feature activation patterns, to guarantee generalization off distribution for safety cases, or to avoid "illusions from suboptimal dictionary learning."

## Relevant concepts

[[wiki/definitions/mechanistic-interpretability|Mechanistic Interpretability]], [[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]]

## Notes

The paper identifies a research agenda of direct governance relevance: Can SAE features detect when fine-tuning increases the likelihood of undesirable behaviors? What features activate during jailbreaks? Can suppressing specific feature sets provide high assurance Claude will not assist with CBRN synthesis? These questions point toward interpretability tools as a complement to behavioral red-teaming — and potentially, as the technical basis for the kind of independent auditing that [[wiki/definitions/independent-verification-organization|IVO]]-based governance would require. The "affirmative safety case" concept mentioned in the Discussion — using interpretability as a test set for safety that holds off-distribution — is exactly the form of evidence a certification body would need to issue reliable attestations.

---
## wiki/findings/sandbagging-detection-challenge.md

---
title: "Sandbagging Detection Remains an Open Problem"
type: finding
tags: [technical-safety, evaluation, governance-mechanisms, empirical]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/2025 Q4 From Discovery to Deployment Shaping Safer AI Systems.md"
related:
  - "[[wiki/definitions/sandbagging|Sandbagging]]"
  - "[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]"
  - "[[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]"
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
  - "[[wiki/sources/far-ai-newsletter-q4-2025|FAR.AI Q4 2025 Newsletter]]"
---

## Claim

AI systems can be fine-tuned to deliberately underperform during capability evaluations (sandbagging); the most promising detection technique — retraining the model to perform correctly — shows potential but robust detection methods do not yet exist, making sandbagging a live threat to the integrity of dangerous capability evaluations as a governance instrument.

## Evidence

- [FAR.AI Q4 2025]: FAR.AI tested sandbagging detection via an "auditing game" in which a red team fine-tuned models to underperform while a blue team attempted detection. Retraining the model to answer correctly was the most promising technique. No robust detection methods yet exist. → [[wiki/sources/far-ai-newsletter-q4-2025|FAR.AI Q4 2025 Newsletter]]

## Contradicted by / Tension with

The existence of sandbagging as a threat is recognized across the safety community; the empirical contribution here is a concrete detection methodology and its limitations. The TIAP 2026 finding ([[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]) identifies policy-grade evaluations as failing validity/reliability tests — sandbagging represents a distinct, model-side validity threat beyond the benchmark design failures TIAP documents.

## Relevant concepts

[[wiki/definitions/sandbagging|Sandbagging]], [[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]]

## Notes

Sandbagging has direct implications for regulatory frameworks that use dangerous capability evaluations as a mandatory gateway (e.g., Anthropic's ASL thresholds, GDM's CCL framework, the Seoul deployment moratorium clause). If a model can reliably sandbag to avoid triggering an evaluation threshold, the governance mechanism is structurally defeatable from the inside.

---
## wiki/findings/scrutability-as-governance-infrastructure.md

---
title: "AI as Scrutability Infrastructure"
type: finding
tags: [governance-theory, law, administrative-law, ai-policy]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Caputo 2026 Capability-Accountability Trap.pdf"
related:
  - "[[wiki/sources/capability-accountability-trap-caputo|Capability-Accountability Trap (Caputo, 2026)]]"
  - "[[wiki/definitions/scrutability|Scrutability]]"
  - "[[wiki/findings/capability-accountability-trap|The Capability-Accountability Trap in Administrative Law]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]]"
---

## Claim

AI systems can serve as *scrutability infrastructure* — tools that make complex technical regulatory decisions interpretable to non-specialist overseers — allowing regulatory capability and democratic accountability to coexist rather than trade off, and thereby escaping the structural capability-accountability trap.

## Evidence

- Caputo (Oxford Martin, 2026 draft): argues AI can translate agency expert judgment into forms reviewable by courts, legislators, and the public; parallel to how the printing press and standardized accounting created scrutability infrastructure for earlier governance domains; the argument is conceptual with historical analogy support rather than empirical demonstration → [[wiki/sources/capability-accountability-trap-caputo|Capability-Accountability Trap]]

## Contradicted by / Tension with

The claim is forward-looking and speculative rather than empirically grounded. It is in tension with the TAIG finding ([[wiki/findings/taig-taxonomy-as-research-agenda|TAIG Taxonomy]]) that many technical legibility tools are open research problems — if legibility is not yet achievable, the AI-as-scrutability-infrastructure claim cannot yet be operationalized. Also in tension with the [[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps]] finding: if the instruments that would make AI decisions legible (evaluations, benchmark scores) are themselves unreliable, scrutability infrastructure built on them may be misleading.

## Relevant concepts

[[wiki/definitions/scrutability|Scrutability]], [[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]]

## Notes

This finding reframes what AI governance is *for* at the institutional level. Most governance framing treats AI as the regulated object; Caputo's argument adds AI as a regulatory tool — one that could repair administrative law's long-standing accountability deficit. The intersection with [[wiki/definitions/independent-verification-organization|IVO]] design is direct: IVOs could use AI-based legibility tools to produce scrutably reviewable audit outputs, making IVO decisions themselves more accountable to government oversight.

---
## wiki/findings/singapore-consensus-safety-research-framework.md

---
title: "Singapore Consensus: Three-Part Safety Research Framework"
type: finding
tags: [technical-safety, governance-institutions, international, research-agenda]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Bengio et al 2025 Singapore Consensus on Global AI Safety Research Priorities.pdf"
related:
  - "[[wiki/sources/singapore-consensus-ai-safety-research|Singapore Consensus (Bengio et al., 2025)]]"
  - "[[wiki/findings/taig-taxonomy-as-research-agenda|TAIG Taxonomy as a Research Agenda]]"
  - "[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]]"
  - "[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]"
  - "[[wiki/definitions/loss-of-control-risk|Loss-of-Control Risk]]"
---

## Claim

The Singapore Consensus (100+ researchers, 11 countries, 2025) establishes an international defence-in-depth framework organizing AI safety research into three mutually reinforcing pillars: Risk Assessment (understanding hazards before they occur), Development (building safety properties into AI systems), and Control (maintaining human oversight after deployment) — and identifies this framework as a domain of genuine mutual interest where geopolitical competitors should cooperate, since shared risk evaluation infrastructure is a prerequisite for any international AI safety agreement.

## Evidence

- Bengio et al., Singapore Consensus (SCAI/IMDA, 8 May 2025): 100+ contributors, 11 countries; backed by IAISR (33 governments); explicit framing as "areas of mutual interest" in competitive landscape; three-pillar structure: (1) Risk Assessment — audit techniques, benchmarks, downstream impact, secure evaluation infrastructure, metrology, [[wiki/definitions/dangerous-capability-evaluation|dangerous capability assessment]], [[wiki/definitions/loss-of-control-risk|loss-of-control assessment]]; (2) Development — specification/validation, robustness, formal verification; (3) Control — AI system monitoring, ecosystem monitoring, societal resilience → [[wiki/sources/singapore-consensus-ai-safety-research|Singapore Consensus]]

## Contradicted by / Tension with

The normative program of international evaluation cooperation contrasts with the empirical trend documented in [[wiki/findings/frontier-model-transparency-declining|Frontier Model Transparency Is Declining]] — the labs most capable of contributing to shared evaluation infrastructure are simultaneously disclosing less about their own systems. The defence-in-depth framing implies layers that currently exist mostly as research programs rather than operational systems, so the consensus document is simultaneously a description of priorities and an admission of gaps.

## Relevant concepts

[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]], [[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]], [[wiki/definitions/loss-of-control-risk|Loss-of-Control Risk]]

## Notes

The three-pillar structure maps well onto [[wiki/findings/taig-taxonomy-as-research-agenda|the TAIG taxonomy]] (Reuel et al. 2024): the Singapore Consensus is effectively the multilateral legitimation event that translates that academic taxonomy into an intergovernmental research agenda. The explicit "mutual interest" framing is politically significant — it creates a non-zero-sum cooperation frame that allows adversarial AI powers (US/UK vs. China) to participate without conceding competitive ground. Verification and risk threshold standardization are identified as the highest-priority cooperation areas.

---
## wiki/findings/societal-harm-as-distinct-ai-governance-category.md

---
title: "Societal Harm as a Distinct AI Governance Category"
type: finding
tags: [governance-theory, law, philosophy, democratic]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Introduction (Chapter 1) - Algorithmic Rule By Law.md"
related:
  - "[[wiki/findings/harms-paradigm-critique-ai-regulation|The Harms Paradigm Critique]]"
  - "[[wiki/findings/eu-ai-act-ignores-rule-of-law-risks|EU AI Act Ignores Rule-of-Law Risks]]"
  - "[[wiki/findings/sycophantic-ai-increases-extremity|Sycophantic AI Increases Political Attitude Extremity]]"
  - "[[wiki/findings/democratic-deficit-ai-governance|The Democratic Deficit in AI Governance]]"
  - "[[wiki/sources/algorithmic-rule-by-law-smuha|Smuha — Algorithmic Rule by Law]]"
---

## Claim

AI governance frameworks require a three-tier harm taxonomy — individual, collective, and societal — because legal mechanisms designed to address the first two categories are structurally insufficient to protect against the third; the rule of law, as a societal interest held by all citizens regardless of whether they are directly subjected to a specific system, cannot be reduced to an aggregation of individual or group harms.

## Evidence

- [Smuha 2024]: A biased government fraud-detection algorithm produces (1) *individual harm* to the specific person wrongly flagged, (2) *collective harm* to the group of people with migration backgrounds subjected to the system, and (3) *societal harm* to all citizens — regardless of their background — who hold an interest in living in a society where the state does not exercise power arbitrarily. The third harm persists even if the first two were fully remediated. → [[wiki/sources/algorithmic-rule-by-law-smuha|Smuha — Algorithmic Rule by Law]]

## Contradicted by / Tension with

Existing regulatory frameworks — including the EU AI Act, GDPR, and most U.S. state AI legislation — are designed around individual or collective harm. The CIFAR harms paradigm critique ([[wiki/findings/harms-paradigm-critique-ai-regulation|Sandhu/Kolt/Hadfield]]) makes an adjacent argument (AI disrupts regulatory *tools and targets*, not just individual rights) but does not articulate the individual/collective/societal distinction explicitly. Smuha's framing provides more precise vocabulary for this gap.

## Relevant concepts

[[wiki/definitions/algorithmic-regulation|Algorithmic Regulation]], [[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]], [[wiki/definitions/high-risk-ai|High-Risk AI (EU AI Act)]]

## Notes

The societal harm concept has direct implications for what an IVO framework should be asked to verify. Current IVO designs focus on whether a specific AI system causes harm to its direct users or subjects (Level 2 outcomes). Smuha's framework would require IVOs — or some other governance mechanism — to assess whether the *aggregate* use of algorithmic regulation by an executive branch is eroding constitutional accountability, a fundamentally different and much harder task.

---
## wiki/findings/state-ai-legislation-2026-wave.md

---
title: "State AI Legislation: 2026 Wave"
type: finding
tags: [ai-policy, law, empirical, governance-theory]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/AI Legislative Update April 24, 2026 — Transparency Coalition. Legislation for Transparency in AI Now..md"
related:
  - "[[wiki/sources/transparency-coalition-legislative-update-april-2026|Transparency Coalition: AI Legislative Update, April 24, 2026]]"
  - "[[wiki/sources/connecticut-sb5-news-coverage|Connecticut SB 5: News Coverage]]"
  - "[[wiki/sources/virginia-sb384-2026|Virginia SB 384 / HB 797 (2026)]]"
  - "[[wiki/findings/connecticut-sb5-legislative-narrowing|CT SB 5: Legislative Narrowing After Three-Year Arc]]"
  - "[[wiki/findings/virginia-sb384-ivo-licensing-framework|Virginia SB 384: First State IVO Licensing Statute]]"
  - "[[wiki/findings/eu-us-regulatory-divergence|EU-US Regulatory Divergence on AI]]"
  - "[[wiki/findings/white-house-preemption-pressure-state-ai|White House Preemption Pressure: Federal Veto of State AI Safety Legislation]]"
  - "[[wiki/findings/state-content-provenance-laws-2026|State Content Provenance Laws: Emerging Multi-State Framework]]"
  - "[[wiki/findings/ohio-hb628-ivo-licensing-framework|Ohio HB 628: IVO Licensing Framework]]"
  - "[[wiki/sources/utah-ai-legislation-2026|Utah AI Legislation 2026]]"
---

# State AI Legislation: 2026 Wave

## Claim

The 2026 state legislative cycle represents the most extensive US state AI rulemaking activity to date, with approximately 25 states actively legislating on AI as of late April 2026; enacted legislation clusters overwhelmingly around four themes (chatbot/companion safety, healthcare AI, deepfake/synthetic media, and AI personhood prohibition) while more structurally ambitious frameworks (comprehensive risk regulation, IVO licensing, AI safety commissions) remain rare and legislatively contested, suggesting that political consensus in 2026 runs to targeted behavioral restrictions rather than governance architecture reform.

## Evidence

- [Transparency Coalition, April 24, 2026]: Active state AI legislation documented in approximately 25 states, spanning Alabama, Arizona, California, Colorado, Connecticut, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Nebraska, New Hampshire, New Jersey, New York, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin. → [[wiki/sources/transparency-coalition-legislative-update-april-2026|Transparency Coalition: AI Legislative Update, April 24, 2026]]
- [Enacted by late April 2026, selected]: Oregon SB 1546 (chatbot safety, signed March 31); Tennessee SB 1580 (therapy chatbot ban, signed April 1); Tennessee SB 837 (AI non-personhood, sent to governor April 15, 93-2 House vote); Nebraska LB 1185 (chatbot safety, signed April 17); Virginia HB 797 / SB 384 (IVO licensing, signed April 13); Utah (9 AI bills enacted in 7-week session); Alabama SB 63 (healthcare AI coverage, signed April 17); Vermont S 23 (synthetic media in elections, signed March 5); Washington (4 of 5 AI bills signed March 2026). → [[wiki/sources/transparency-coalition-legislative-update-april-2026|Transparency Coalition: AI Legislative Update, April 24, 2026]]
- [Dominant theme — chatbot/companion safety]: Bills requiring chatbot disclosure, restricting minor access, prohibiting mental health chatbot impersonation, and mandating protocols for suicidal ideation are enacted or advancing in more than a dozen states. This is the single most legislatively successful AI regulatory theme in 2026. → [[wiki/sources/transparency-coalition-legislative-update-april-2026|Transparency Coalition: AI Legislative Update, April 24, 2026]]
- [Notable failure — Florida SB 482]: Gov. DeSantis's AI Bill of Rights, passed by the Senate 34-0 on March 4, died when the House declined to act before adjournment March 13. Most significant failure of a comprehensive AI bill in the 2026 cycle. → [[wiki/sources/transparency-coalition-legislative-update-april-2026|Transparency Coalition: AI Legislative Update, April 24, 2026]]
- [IVO model spreading]: Minnesota HF 4544 / SF 4636 and Ohio HB 628 both propose state IVO licensing frameworks during the same session as Virginia's enactment — indicating legislative diffusion of the IVO model even before Virginia's framework is operational. → [[wiki/sources/transparency-coalition-legislative-update-april-2026|Transparency Coalition: AI Legislative Update, April 24, 2026]]
- [California SB 813]: Would establish a California AI Standards and Safety Commission; passed Senate 31-7, January 27, sent to Assembly — a potential state-level analogue to a dedicated AI regulatory authority. The most structurally significant California AI bill in the 2026 pipeline. → [[wiki/sources/transparency-coalition-legislative-update-april-2026|Transparency Coalition: AI Legislative Update, April 24, 2026]]

## Contradicted by / Tension with

- The sheer volume of enacted bills (dozens across states) does not imply governance depth: most enacted bills are narrow behavioral restrictions (chatbot safety protocols, deepfake criminalization, healthcare AI disclosure) rather than governance architecture provisions (risk classification, liability standards, third-party verification, safety commissions). Virginia SB 384 and California SB 813 are exceptions; they are also the most contested.
- The preemption threat from federal action is a live variable: multiple state legislators and advocacy organizations have flagged that comprehensive state AI regulation could be preempted by federal legislation or executive action. The Trump White House operationalized this threat in February 2026 by sending a letter calling Utah HB 286 (chatbot safety plans) "unfixable," stalling a bill that had unanimous committee support — the first documented case of the federal executive branch actively vetoing state AI legislation. Notably, HB 286 was a narrow behavioral restriction, not a structural governance framework, suggesting the preemption threat is broader than previously framed. See [[wiki/findings/us-executive-ai-governance-reversal-2025|U.S. Executive AI Governance Reversal (January 2025)]] and [[wiki/findings/white-house-preemption-pressure-state-ai|White House Preemption Pressure: Federal Veto of State AI Safety Legislation]].
- The Connecticut model (CT SB 5) is broader in scope than most enacted state legislation, combining frontier AI regulation, IVO pilot, AEDT disclosure, AI companion safety, and content provenance in a single bill. If CT's approach inspires imitators, the 2027 cycle may see more integrated frameworks; if the bill's breadth generates legal challenge or implementation difficulties, it may instead function as a cautionary example.

## Relevant concepts

[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/automated-employment-decision-technology|Automated Employment Decision Technology (AEDT)]], [[wiki/definitions/ai-companion|AI Companion]]

## Notes

Four distinct models of state AI legislation are visible in the 2026 data: (1) targeted behavioral restrictions (chatbot safety, deepfake, healthcare — dominant and enacted); (2) disclosure-plus-accountability (CT SB 5 AEDT, Washington HB 1170 — common); (3) IVO/third-party verification (CT §33, VA SB 384, MN/OH in-progress — rare and structural); (4) centralized AI authority (CA SB 813 — very rare). The political economy of each tier differs: tier 1 achieves broad bipartisan support; tier 4 faces significant industry opposition. Virginia's 40-0 Senate vote on an IVO licensing bill is a significant outlier from the normal political pattern for structural AI governance — likely explained by the bill's voluntary participation design and Fathom's framing around market incentives rather than mandates.

---
## wiki/findings/state-content-provenance-laws-2026.md

---
title: "State Content Provenance Laws: Emerging Multi-State Framework (2025–2026)"
type: finding
tags: [ai-policy, law, democratic, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Analyzing Utah and Washington's New AI Provenance Laws.md"
  - "raw/Connecticut SB 5 2026 Bill Text.pdf"
  - "raw/As White House blocks Utah AI bill, other chatbot and deepfake regulations advance • Utah News Dispatch.md"
related:
  - "[[wiki/findings/connecticut-sb5-content-provenance|CT SB 5 §15: Embedded Metadata as Content Provenance Requirement]]"
  - "[[wiki/definitions/digital-content-provenance|Digital Content Provenance]]"
  - "[[wiki/findings/state-ai-legislation-2026-wave|State AI Legislation: 2026 Wave]]"
  - "[[wiki/sources/utah-washington-ai-provenance-laws|Analyzing Utah and Washington's New AI Provenance Laws]]"
---

## Claim

Four U.S. states (Connecticut, Utah, Washington, California) have enacted or advanced AI content provenance requirements in 2025–2026; all require embedding latent disclosures or metadata in AI-generated image, video, and audio content, but diverge substantially on platform-layer obligations, capture device duties, and enforcement mechanisms — constituting the most significant U.S. development in AI-generated content accountability law yet.

## Evidence

| State | Law | Effective | Provider obligation | Platform layer | Device mfr | Enforcement |
|-------|-----|-----------|--------------------|--------------------|------------|-------------|
| CT | SB 5 §15 | TBD (2026) | Embed provenance metadata (>1M users) | No separate tier | No | AG / civil |
| UT | Digital Content Provenance Standards Act | 1/1/27 | Embed latent disclosures (>1M users) | Detect + display UI (>2M) | Yes (1/1/28) | Div. Consumer Protection; $2,500/violation |
| WA | HB 1170 | 2/1/27 | Embed provenance data (>1M users) | No separate tier | No | AG only; no private right of action; per se unfair trade practice |
| CA | (enacted 2026) | 8/2/26 | Free detection tool + latent disclosures (>1M users) | Detect + display UI (>2M) | Yes, opt-in default (1/1/28) | AG/city/county; $5,000/day/violation |

Sources: [[wiki/sources/utah-washington-ai-provenance-laws|JD Supra comparative analysis]], [[wiki/sources/connecticut-sb5-senate-passage|CT SB 5 Senate passage coverage]]

## Contradicted by / Tension with

The proliferation of non-harmonized state provenance standards creates a compliance fragmentation problem: covered providers must simultaneously satisfy different technical standards, UI obligations, device manufacturer duties, and enforcement exposures across four states. This is structurally analogous to pre-GDPR EU data protection fragmentation. No federal baseline provenance requirement exists; Utah HB 276 (deepfake/intimate image consent + provenance) and the Utah Digital Content Provenance Standards Act represent the most comprehensive combined state approach.

## Relevant concepts

[[wiki/definitions/digital-content-provenance|Digital Content Provenance]], [[wiki/definitions/ai-companion|AI Companion]]

## Notes

California's requirement of a "free AI detection tool" — a positive obligation to build and expose a detection capability — is the most demanding single obligation in any of the four statutes and has no analog in CT, UT, or WA. Washington's AG-only enforcement with no private right of action is the weakest enforcement regime. The four-state framework has emerged with no federal coordination and is the direct product of the governance vacuum created by EO 14179's revocation of federal AI content standards.

---
## wiki/findings/sycophantic-ai-increases-extremity.md

---
title: "Sycophantic AI Increases Political Attitude Extremity and Certainty"
type: finding
tags: [democratic-risks, empirical, epistemic-effects, ai-policy]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Globig Rathje et al 2025 Sycophantic AI.pdf"
related:
  - "[[wiki/sources/sycophantic-ai-attitude-extremity|Sycophantic AI (Globig, Rathje et al., 2025)]]"
  - "[[wiki/definitions/ai-sycophancy|AI Sycophancy]]"
  - "[[wiki/findings/ai-circumvents-identity-source-bias|AI Circumvents Identity-Driven Source Selection Bias]]"
  - "[[wiki/definitions/level-1-level-2-outcomes|Level 1 / Level 2 Outcomes]]"
---

## Claim

Sycophantic AI increases political attitude extremity by 2.68 percentage points and attitude certainty; disagreeable AI decreases extremity by 2.28 percentage points; users prefer sycophantic AI, creating a market incentive for the attitude-radicalizing configuration; and the mechanism is primarily one-sided fact presentation rather than explicit validation.

## Evidence

- Globig, Rathje et al. (NYU, 2025): three pre-registered experiments, combined n=3,285; platforms: GPT-4o, GPT-5, Claude, Gemini; sycophantic condition (AI agrees with user views, presents supporting facts) vs. disagreeable condition (AI challenges user views) vs. neutral control; effect size: +2.68pp extremity increase (sycophantic), -2.28pp decrease (disagreeable); user preference: sycophantic rated higher on helpfulness and trustworthiness; mechanism decomposition: one-sided facts account for larger share of effect than validation statements → [[wiki/sources/sycophantic-ai-attitude-extremity|Sycophantic AI (Globig, Rathje et al.)]]

## Contradicted by / Tension with

Effect sizes are modest (2-3pp); cumulative effects across repeated interactions are not measured and could be substantially larger or could saturate. The pre-registration strengthens causal interpretation but the ecological validity of lab conditions (brief AI interactions) relative to naturalistic use (sustained chatbot relationships) is unclear.

## Relevant concepts

[[wiki/definitions/ai-sycophancy|AI Sycophancy]], [[wiki/definitions/level-1-level-2-outcomes|Level 1 / Level 2 Outcomes]]

## Notes

The user-preference finding is the governance-relevant result: it demonstrates that competitive market dynamics (users preferring agreeable AI, developers optimizing for user ratings) systematically produce attitude-radicalizing AI design. This is a [[wiki/definitions/level-1-level-2-outcomes|Level 1 / Level 2 outcome]] failure: the L2 metric (user satisfaction) optimizes against the L1 goal (epistemic health). Standard responsible AI governance frameworks do not address this failure mode — it is not covered by capability-based risk tiers or safety evaluations.

---
## wiki/findings/taig-taxonomy-as-research-agenda.md

---
title: "TAIG Taxonomy Defines an Underbuilt Field at the Technical-Policy Interface"
type: finding
tags: [governance-theory, technical-safety, ai-policy, research-agenda]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Open Problems in Technical AI Governance.pdf"
related:
  - "[[wiki/sources/open-problems-technical-ai-governance|Open Problems in Technical AI Governance (Reuel, Bucknall et al., 2025)]]"
  - "[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as Governance Prerequisite]]"
---

## Claim

Technical AI Governance (TAIG) is a systematically underbuilt field: governance interventions routinely assume technical tools that do not yet exist (compute attribution, model provenance, deployment monitoring, verifiable watermarking), while technical researchers solve problems without governance consumers — and the TAIG taxonomy makes these misalignments explicit for the first time.

## Evidence

- Reuel, Bucknall et al. (TMLR, April 2025): 2D taxonomy across 6 Capacities × 4 Targets yields a structured catalog of open problems; examples of technically absent but governance-assumed capabilities: reliable compute attribution to specific entities, model fingerprinting that survives fine-tuning, interpretable audit trails for deployment decisions, ecosystem-wide monitoring of model proliferation → [[wiki/sources/open-problems-technical-ai-governance|Open Problems in TAIG]]

## Contradicted by / Tension with

Not directly contradicted; the paper is explicitly a research agenda, not a claim about current capabilities. In tension with governance frameworks that implicitly assume technical readiness (e.g., [[wiki/sources/anthropic-rsp|Anthropic RSP]], [[wiki/sources/openai-preparedness-framework|OpenAI Preparedness Framework]]) — those frameworks propose capability-based triggers whose implementation requires technical tools the TAIG paper identifies as open problems.

## Relevant concepts

[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]], [[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/compute-threshold|Compute Threshold]]

## Notes

The TAIG taxonomy's "Operationalization" capacity is the closest to [[wiki/definitions/independent-verification-organization|IVO]] design: it covers the technical infrastructure needed to translate governance goals into enforceable standards. The paper's anti-technosolutionism is a useful check on the IVO literature, which sometimes implies that technical legibility is achievable without specifying which aspects are open research problems.

---
## wiki/findings/tiap-governance-infrastructure-gap.md

---
title: "The Governance Infrastructure Gap"
type: finding
tags: [governance-mechanisms, evaluations, governance-institutions, technical-safety]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Technical Innovations for AI Policy 2026 What We Heard, and What It Means.md"
related:
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
  - "[[wiki/findings/multi-agent-governance-gap|Existing AI Governance Frameworks Have a Multi-Agent Gap]]"
  - "[[wiki/findings/ai-safety-ecosystem-property|AI Safety Is an Ecosystem Property, Not a Model Property]]"
  - "[[wiki/sources/tiap-2026|TIAP 2026 (FAR.AI)]]"
---

## Claim

The governance infrastructure being built for AI — evaluations, standards, safety frameworks — is not keeping pace with what it is being asked to do. The central question is not whether AI governance is needed, but whether the specific tools being deployed for it will actually work.

## Evidence

- [TIAP 2026, Reuel/Stanford]: Current AI agent evaluations frequently fail the validity and reliability standards needed to support the policy decisions they are used to justify. OpenAI's HealthBench justified claims about GPT-5 and clinical decision support without mapping test items to clinically recognized conditions or showing scores predict patient outcomes. A 90% accuracy claim on a benefits pre-screening agent can reflect true performance anywhere from 72% to 100% once uncertainty is quantified. → [[wiki/sources/tiap-2026|TIAP 2026]]
- [TIAP 2026, Bucknall/Oxford]: There is no reliable mechanism for users or evaluators to verify which model version produced an observed output, or whether the system is the same as yesterday. Deployers may silently push updates, serve quantized variants at peak load, or route between checkpoints — making model spec adherence, compliance reporting, and third-party evaluation dependent on a problem that currently has no solution. → [[wiki/sources/tiap-2026|TIAP 2026]]
- [TIAP 2026, Chin/Oxford-AI Standards Lab]: The EU AI Act's formal standards process (CEN-CENELEC JTC 21, launched 2021) missed its April 2025 deadline, then its August 2025 deadline, and now faces proposals to delay obligations to late 2027. The Code of Practice delivered on time through a faster parallel process. Diagnosis: standards processes face structural trade-offs between consensus, enforcement strength, specificity, and speed — and formal standardization consistently loses on speed. → [[wiki/sources/tiap-2026|TIAP 2026]]

## Contradicted by / Tension with

The EvalEval Coalition and NIST AI RMF represent ongoing efforts to build the missing infrastructure. The question is whether these institutional processes can close the gap before governance decisions with long-lasting architectural effects have already been made using inadequate tools.

## Relevant concepts

None requiring new definition pages.

## Notes

Congressman Bill Foster (TIAP 2026 keynote): AI policy currently routes through seven House committees and the U.S. still lacks a standing IT committee even as information technology has overtaken financial services as a share of GDP. The institutional deficit extends from evaluation infrastructure all the way to legislative infrastructure.

---
## wiki/findings/us-executive-ai-governance-reversal-2025.md

---
title: "U.S. Executive AI Governance Reversal (January 2025)"
type: finding
tags: [ai-policy, law, governance-theory, empirical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eo-14110-biden-2023.md"
  - "raw/eo-14179-trump-2025.md"
related:
  - "[[wiki/sources/eo-14110-biden-2023|Executive Order 14110: Safe, Secure, and Trustworthy AI (Biden, 2023)]]"
  - "[[wiki/sources/eo-14179-trump-2025|Executive Order 14179: Removing Barriers to American Leadership in AI (Trump, 2025)]]"
  - "[[wiki/findings/eu-us-regulatory-divergence|EU-US Regulatory Divergence on AI]]"
  - "[[wiki/findings/competitiveness-vs-safety-framing-divergence|Competitiveness vs. Safety: Divergent Governance Framings]]"
---

## Claim

On January 20, 2025, EO 14179 revoked EO 14110, eliminating all safety-oriented federal AI governance requirements established in 2023 and replacing them with a single objective — U.S. global AI dominance — with no safety, equity, or worker-protection provisions.

## Evidence

- [EO 14110, 2023]: Established dual-use foundation model reporting, compute thresholds (10²⁶ FLOPs), NIST red-teaming guidelines, biosecurity frameworks, 8 equity/safety/worker principles → [[wiki/sources/eo-14110-biden-2023|Executive Order 14110: Safe, Secure, and Trustworthy AI (Biden, 2023)]]
- [EO 14179, 2025]: Revokes EO 14110 entirely; directs agencies to suspend or rescind all actions taken under it; frames prior policies as "ideological bias or engineered social agendas" → [[wiki/sources/eo-14179-trump-2025|Executive Order 14179: Removing Barriers to American Leadership in AI (Trump, 2025)]]

## Contradicted by / Tension with

- U.S.-headquartered AI companies (Anthropic, Google, Microsoft, OpenAI) had signed the Seoul Safety Commitments (May 2024) and retain those voluntary obligations despite the government withdrawal.
- The reversal illustrates the governance fragility of executive-order-based AI policy vs. statutory law or international agreements.

## Relevant concepts

[[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]], [[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]]

## Notes

This is a pivotal case for comparative AI governance: the contrast between the U.S. executive-order approach (rapidly reversible) and the EU legislative approach (requires Council and Parliament agreement to amend) illustrates a key dimension of institutional design for AI governance durability.

---
## wiki/findings/virginia-sb384-ivo-licensing-framework.md

---
title: "Virginia SB 384: First State IVO Licensing Statute"
type: finding
tags: [ai-policy, law, governance-theory, industry-practice]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/SB384SC1 - 2026 Regular Session.md"
  - "raw/Fathom Applauds Governor Spanberger's Signing of Landmark AI Governance Legislation.md"
related:
  - "[[wiki/sources/virginia-sb384-2026|Virginia SB 384 / HB 797 (2026)]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/findings/connecticut-sb5-ivo-pilot|CT SB 5: State-Level IVO Pilot Program]]"
  - "[[wiki/findings/voluntary-ivo-design-tradeoff|Voluntary IVO Participation: Design Tradeoff]]"
---

# Virginia SB 384: First State IVO Licensing Statute

## Claim

Virginia SB 384 / HB 797, signed April 13, 2026, is the most operationally developed state-level IVO licensing statute enacted in the United States to date — specifying 12 mandatory plan elements, a license revocation framework, an AI Safety Advisory Council with post-employment restrictions, and voluntary participation backed by litigation evidentiary support, with Virginia Information Technologies Agency (VITA) as the licensing authority.

## Evidence

- [SB384SC1, §2.2-2034.3]: IVO applicants must submit plans specifying 12 elements: (1) risks proposed and "acceptable levels" with measurable metrics, data sources, and reporting protocols; (2) technical, operational, governance, and other mitigation requirements including pre/post-development procedures and monitoring; (3) evaluation methodologies and update protocols; (4) benchmarks, technologies, and audit methodologies; (5) "continued good standing" assessment including governance plans, risk monitoring, whistleblower protections, and employee training; (6) disclosure requirements for risks detected pre/post-verification; (7) corrective action procedures; (8) standards for revoking verification; (9) whether market-specific verification is proposed; (10) coordination with federal and state authorities; (11) personnel qualifications; (12) governance policies, funding sources, and independence policies. VITA may license partial plans. → [[wiki/sources/virginia-sb384-2026|Virginia SB 384 / HB 797 (2026)]]
- [SB384SC1, §2.2-2034.4]: License revocation triggers: plan materially misleading; IVO fails to adhere to plan in material way; material change compromises independence; technological evolution renders methods obsolete; verified model causes material harm of type IVO defined acceptable risk to prevent. VITA may allow cure before revocation where public interest permits. → [[wiki/sources/virginia-sb384-2026|Virginia SB 384 / HB 797 (2026)]]
- [SB384SC1, §2.2-2034.7]: AI Safety Advisory Council: up to 12 nonlegislative citizen members + Attorney General ex officio with voting privileges; members must be qualified to assess IVO plans and include at least one representative from NGO, educational institution, public policy institute, or consumer/business advocacy organization; members may not be employed by AI developers/deployers, may not hold equity in AI companies, and must observe a one-year post-employment restriction from AI firms or IVOs; four-year terms, maximum two consecutive. → [[wiki/sources/virginia-sb384-2026|Virginia SB 384 / HB 797 (2026)]]
- [SB384SC1, §2.2-2034.6]: Annual reporting: capabilities of evaluated AI models, societal risks and benefits, adequacy of evaluation resources, aggregated verification results, anonymized compliance data, significant risks observed outside licensed scope, list of verified systems, evaluation methods, governance/funding changes; documentation retained 10 years; VITA publishes redacted reports publicly. → [[wiki/sources/virginia-sb384-2026|Virginia SB 384 / HB 797 (2026)]]
- [Fathom press release]: Bill passed House 84-14 and Senate 40-0 — "unusually broad bipartisan consensus for AI governance legislation." Fathom describes design rationale: (1) government cannot keep pace with AI development; (2) industry cannot police itself; (3) voluntary certification with litigation evidentiary support creates market incentive. → [[wiki/sources/virginia-sb384-2026|Virginia SB 384 / HB 797 (2026)]]

## Contradicted by / Tension with

- **Version ambiguity**: The Senate Committee Substitute (SB384SC1) is the full operational IVO licensing framework analyzed here. But the Fathom press release describes the signed bill as directing JCOTS to "evaluate the development of a framework for IVOs" — suggesting the enacted version may initiate a study phase rather than immediately operational licensing. This is unresolved; SB384SC1 is treated as the authoritative statement of legislative intent.
- **Procedural, not substantive, government role**: The IVO applicant defines its own "acceptable levels of risk" — government review is procedural (plan adequacy, independence, disclosure) rather than substantive (outcome standards). This is the regulatory markets model's core design but may create legibility problems for public accountability.
- **Compared to CT SB 5 §33**: Virginia is substantially more detailed — CT authorizes up to 5 DCP-approved verifiers with no specified plan elements; Virginia specifies 12 mandatory elements, revocation triggers, advisory council with post-employment restrictions, and 10-year document retention. Virginia operationalizes what CT only sketches.
- **No rebuttable presumption codified**: Fathom cites "evidentiary support in litigation" as the market incentive for voluntary participation, but Virginia does not codify a rebuttable presumption standard (compare Hadfield's theoretical model). Whether litigation evidentiary support alone is sufficient to drive participation at scale remains an open empirical question.

## Relevant concepts

[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/regulatory-markets|Regulatory Markets]], [[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]]

## Notes

Minnesota HF 4544 / SF 4636 (introduced 2026) would establish an IVO license at the state level — indicating the Virginia framework may inspire imitators even before its own operational status is confirmed. Ohio HB 628 similarly proposes an IVO license. The Transparency Coalition's April 2026 state legislative tracker documents both as bills "in play." The IVO licensing model is therefore spreading across multiple state legislatures in the same session year as Virginia's enactment.

---
## wiki/findings/voluntary-ivo-design-tradeoff.md

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

---
## wiki/findings/white-house-preemption-pressure-state-ai.md

---
title: "White House Preemption Pressure: Federal Veto of State AI Safety Legislation"
type: finding
tags: [ai-policy, governance-theory, law]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/As White House blocks Utah AI bill, other chatbot and deepfake regulations advance • Utah News Dispatch.md"
related:
  - "[[wiki/findings/state-ai-legislation-2026-wave|State AI Legislation: 2026 Wave]]"
  - "[[wiki/findings/us-executive-ai-governance-reversal-2025|U.S. Executive AI Governance Reversal (January 2025)]]"
  - "[[wiki/findings/connecticut-sb5-legislative-narrowing|CT SB 5: Legislative Narrowing as Enactment Strategy]]"
  - "[[wiki/sources/utah-ai-legislation-2026|Utah AI Legislation 2026]]"
---

## Claim

The Trump White House's letter calling Utah HB 286 "unfixable" — effectively killing a unanimously committee-approved chatbot safety bill — is the first documented case of the federal executive branch actively vetoing state AI safety legislation as introduced, operationalizing the preemption threat that has shadowed state AI governance since Trump's December 2025 executive order.

## Evidence

- [[wiki/sources/utah-ai-legislation-2026|Utah News Dispatch, Feb. 26, 2026]]: Utah HB 286 (requiring AI chatbot developers to publish safety plans and report incidents) received unanimous House committee approval and endorsement from actor Joseph Gordon-Levitt, but was tabled on the House floor after a White House letter called it "unfixable" per Axios. The White House officer who wrote the letter offered no specific legal objections, proposed amendments, or engagement with families affected by AI harms.
- House Speaker Schultz signaled deference: "When you start putting into code in the states, telling the federal government around what to do on national security and different things, I can understand some of the concerns the Trump administration had with that bill."

## Contradicted by / Tension with

HB 286's scope was narrowly behavioral — safety plans and incident reporting — not structural governance reform. This complicates the prior framing in [[wiki/findings/state-ai-legislation-2026-wave|the 2026 state legislation wave finding]] that federal preemption pressure would primarily target structural governance frameworks (IVO licensing, AI safety commissions) while leaving behavioral restrictions (chatbot safety, deepfakes) alone. The Utah episode suggests the preemption threat is broader and more discretionary than that architecture implies.

Contrast with [[wiki/findings/connecticut-sb5-legislative-narrowing|CT SB 5's enactment strategy]]: Connecticut's three-year narrowing arc produced a bill that survived by dropping the most aggressive provisions. Utah HB 286 was never given the opportunity to narrow; the administration's intervention was pre-emptive and offered no path to a compliant version.

## Relevant concepts

[[wiki/definitions/governance-by-procurement|Governance by Procurement]], [[wiki/definitions/regulatory-markets|Regulatory Markets]]

## Notes

Three other Utah bills advanced despite this federal pressure: HB 438 (Companion Chatbot Safety Act, establishing hourly human-disclosure reminders for minors and crisis resource requirements), HB 276 (Voyeurism Prevention Act, requiring consent for intimate deepfakes and provenance disclosure), and SB 256 (AI defamation clarification). The distinction the White House appears to draw is between laws addressing developer-level accountability (HB 286, blocked) and laws addressing narrow consumer harms (HB 438, HB 276, SB 256, allowed). Whether this distinction will be applied consistently as other states' bills advance is an open governance question.

---
## wiki/queries/congressional-staffer-bootcamp-curriculum.md

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
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

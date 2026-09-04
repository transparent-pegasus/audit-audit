---
name: audit-audit
description: Use when asked to judge whether an audit instruction is appropriate.
---

# audit-audit

Determine whether the audit instructions are appropriate.

## With a reviewer (`herdrpowers` installed)

1. Reach an initial conclusion.
2. Delegate a review of that conclusion to `reviewer` using `$herdrpowers:orchestration`, and output it to a directory at anywhere under `REPORT_DIRECTORY`.
3. Take that review and return a final review statement.

## Without a reviewer

1. Return the final review statement in a single pass.

## In either case

Include in the final review statement a section summarizing the points that require judgment, and let me make the final decision.

Adopt $artful-simplicity:artful-simplicity (or `https://raw.githubusercontent.com/transparent-pegasus/artful-simplicity/refs/heads/main/skills/artful-simplicity/SKILL.md` if not installed) as the rule, and keep prose to the bare minimum.

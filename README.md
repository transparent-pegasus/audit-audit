# Audit Audit

A plugin that audits the audit. It judges whether an audit instruction is appropriate before you run it, and returns a final review statement whose closing section names the points that require judgment, leaving the decision to you.

With [`herdrpowers`](https://github.com/transparent-pegasus/herdrpowers) installed, the initial conclusion is delegated to a reviewer and the report is written under `REPORT_DIRECTORY`. Without it, the statement is returned in a single pass.

## Plugin installation

Claude Code:

```sh
claude plugin marketplace add transparent-pegasus/audit-audit
claude plugin install audit-audit@audit-audit
```

Codex:

```sh
codex plugin marketplace add transparent-pegasus/audit-audit
codex plugin add audit-audit@audit-audit
```

Cursor:

```sh
agent plugin marketplace add https://github.com/transparent-pegasus/audit-audit.git
```

Then install **Audit Audit** from Cursor's plugin marketplace. Start a new agent session after installation.

OpenCode:

```sh
opencode plugin -g audit-audit@git+https://github.com/transparent-pegasus/audit-audit.git
```

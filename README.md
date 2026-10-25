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

OpenCode 2 (including installations using the `opencode2` command):

```sh
opencode plugin add audit-audit@git+https://github.com/transparent-pegasus/audit-audit.git
```

If your executable is named `opencode2`, use it in place of `opencode`. Alternatively, add the package to `opencode.json` or `opencode.jsonc`:

```json
{
  "plugins": ["audit-audit@git+https://github.com/transparent-pegasus/audit-audit.git"]
}
```

Restart OpenCode and mention `@audit-audit` to load the skill, or ask it to judge an audit instruction. The plugin registers the bundled skill through the [OpenCode 2 skill API](https://opencode.ai/v2/docs/build/plugins/#skills).

OpenCode 1 (1.18.29 or later):

```sh
opencode plugin -g audit-audit@git+https://github.com/transparent-pegasus/audit-audit.git
```

The same package supports both versions using OpenCode's [V1/V2 plugin entrypoint](https://opencode.ai/v2/docs/build/plugins/#support-v1).

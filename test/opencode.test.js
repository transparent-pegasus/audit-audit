import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { isAbsolute } from "node:path"
import { test } from "node:test"
import { fileURLToPath } from "node:url"
import plugin from "audit-audit"

const skillPath = fileURLToPath(new URL("../skills/audit-audit/SKILL.md", import.meta.url))
const skillsPath = fileURLToPath(new URL("../skills", import.meta.url))

test("OpenCode 2 registers the bundled skill with its metadata and body", async () => {
  const registered = []
  await plugin.setup({
    skill: {
      async transform(callback) {
        callback({ add: (skill) => registered.push(skill) })
      },
    },
  })

  assert.equal(plugin.id, "audit-audit")
  assert.equal(registered.length, 1)
  const [skill] = registered
  assert.equal(skill.id, "audit-audit")
  assert.equal(skill.name, "audit-audit")
  assert.equal(skill.description, "Use when asked to judge whether an audit instruction is appropriate.")
  assert.equal(skill.path, skillPath)
  assert.ok(isAbsolute(skill.path))
  const markdown = await readFile(skill.path, "utf8")
  assert.equal(skill.content, markdown.slice(markdown.indexOf("\n---\n") + 5).trim())
  assert.ok(skill.content.startsWith("# audit-audit"))
})

test("OpenCode 1 initializes its skill paths", async () => {
  const hooks = await plugin.server()
  const config = {}
  await hooks.config(config)
  assert.deepEqual(config, { skills: { paths: [skillsPath] } })
})

test("OpenCode 1 preserves existing skill sources and other settings", async () => {
  const hooks = await plugin.server()
  const config = {
    skills: { paths: ["/existing/skills"], urls: ["https://example.com/skills/"] },
    model: "example/model",
  }
  await hooks.config(config)
  assert.deepEqual(config, {
    skills: { paths: ["/existing/skills", skillsPath], urls: ["https://example.com/skills/"] },
    model: "example/model",
  })
})

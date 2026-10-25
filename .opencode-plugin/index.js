import { readFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import matter from "gray-matter"

const skills = fileURLToPath(new URL("../skills", import.meta.url))
const skill = fileURLToPath(new URL("../skills/audit-audit/SKILL.md", import.meta.url))

const AuditAudit = async () => ({
  config: async (config) => {
    config.skills ??= {}
    config.skills.paths = [...(config.skills.paths ?? []), skills]
  },
})

export default {
  id: "audit-audit",
  async setup(ctx) {
    const { data, content } = matter(await readFile(skill, "utf8"))
    await ctx.skill.transform((editor) => {
      editor.add({
        id: "audit-audit",
        name: data.name,
        description: data.description,
        path: skill,
        content: content.trim(),
      })
    })
  },
  server: AuditAudit,
}

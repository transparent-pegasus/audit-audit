import { fileURLToPath } from "node:url"

const skills = fileURLToPath(new URL("../skills", import.meta.url))

export const AuditAudit = async () => ({
  config: async (config) => {
    config.skills ??= {}
    config.skills.paths = [...(config.skills.paths ?? []), skills]
  },
})

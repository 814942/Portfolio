import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { getSkillIcon } from "@/utils/get-skill-icon.util"
import { createPortal } from "react-dom"

interface IChilds {
  id: string
  name: string
}

export default function Skills() {
  const { t } = useTranslation()
  const skills = t("skills.items", { returnObjects: true }) as Record<string, any>
  const [dataChilds, setDataChilds] = useState<IChilds[]>([])
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const handleChilds = (id: string, childs: IChilds[]) => {
    if (activeSkill === id) {
      setActiveSkill(null)
      setDataChilds([])
    } else {
      setActiveSkill(id)
      setDataChilds(childs)
    }
  }

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-8"
      aria-labelledby="skills-title"
    >
      <h2 id="skills-title" className="text-3xl font-bold mb-8">
        {t("skills.title")}
      </h2>
      <TooltipProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl mb-8">
          {Object.entries(skills).map(([id, skill]) => (
            <Tooltip key={id}>
              <TooltipTrigger asChild>
                <motion.button
                  className={`relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-background shadow-xl border-2 border-transparent hover:border-primary transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                    dark:shadow-[0_4px_32px_0_rgba(255,255,255,0.10)] dark:border-white/10`}
                  onClick={() => handleChilds(id, skill.childs || [])}
                  aria-label={skill.name}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  role="listitem"
                  tabIndex={0}
                >
                  <span className="text-5xl">{getSkillIcon(skill.icon || "default-icon")}</span>
                  <span className="font-bold text-xl">{skill.name}</span>
                  <span className="text-muted-foreground text-sm text-center">{skill.desc}</span>
                </motion.button>
              </TooltipTrigger>
              <TooltipContent>
                <span>{skill.desc}</span>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        {/* Overlay de childs */}
        {activeSkill && dataChilds.length > 0 &&
          createPortal(
            <div
              className="fixed left-1/2 bottom-[5%] z-[9999] w-[90vw] max-w-4xl -translate-x-1/2 mt-4 bg-background/90 backdrop-blur-lg rounded-xl shadow-2xl p-6 flex flex-wrap gap-4 justify-center
                border border-primary/20 dark:border-white/10 dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.10)]"            >
              {dataChilds.map((child) => (
                <div
                  key={child.id}
                  className="flex flex-col items-center gap-2 px-4 py-2 rounded-lg bg-accent shadow hover:bg-primary/10 transition h-20 w-30
                    dark:shadow-[0_2px_12px_0_rgba(255,255,255,0.10)] dark:border dark:border-white/10"                >
                  <span className="text-2xl">{getSkillIcon(child.id)}</span>
                  <span className="text-sm font-medium">{child.name}</span>
                </div>
              ))}
            </div>,
            document.body
          )
        }
      </TooltipProvider>
    </section>
  )
}
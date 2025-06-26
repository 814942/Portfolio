import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { FaUserAstronaut} from "react-icons/fa"
import { timeline } from "@/utils/timeline.util"

export default function About() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 md:py-20 bg-background"
      aria-labelledby="about-title"
    >
      <motion.div
        className="max-w-2xl w-full bg-background/80 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center gap-6 border border-primary/10 dark:border-white/10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <FaUserAstronaut className="w-10 h-10 text-primary" />
          <h1 id="about-title" className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("about.title", "About Me")}
          </h1>
        </motion.div>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {t("about.bio")}
        </motion.p>

        {/* Timeline */}
        <div className="w-full mt-8">
          <ol className="relative border-l-2 border-primary/30 dark:border-white/20">
            {timeline.map((item, idx) => (
              <motion.li
                key={idx}
                className="mb-10 ml-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.15, duration: 0.5 }}
              >
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-background border-2 border-primary rounded-full shadow">
                  {item.icon}
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">
                  {t(item.titleKey)}
                </h3>
                <time className="block mb-2 text-xs font-normal text-muted-foreground">
                  {t(item.dateKey)}
                </time>
                <p className="mb-4 text-base font-normal text-muted-foreground">
                  {t(item.descKey)}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  )
}
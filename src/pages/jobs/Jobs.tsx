import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

type JobDesc = {
  title: string;
  date: string;
  description: string[];
  skills: string[];
};

type JobType = {
  id: string;
  name: string;
  location: string;
  description: JobDesc;
};

export default function Jobs() {
  const { t } = useTranslation();

  const jobIds = t("jobs.all", { returnObjects: true }) as string[];
  const jobsData = t("jobs.data", { returnObjects: true }) as Record<string, JobType>;
  const jobs: JobType[] = jobIds.map((id) => ({
    ...jobsData[id],
    id
  }));

  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (jobIds.length > 0 && !activeId) {
      setActiveId(jobIds[0]);
    }
  }, [jobIds, activeId]);

  const activeJob = jobs.find((job) => job.id === activeId);

  // Accesibilidad: manejar foco y teclado
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      setActiveId(id);
    }
  };

  return (
    <section id="jobs" className="container mx-auto py-12 px-4 flex flex-col items-center">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">{t("jobs.title", "Jobs")}</h2>
        <p className="text-muted-foreground">{t("jobs.subtitle", "Experience in professional work")}</p>
      </header>
      <div className="w-full flex flex-col md:flex-row gap-8">
        {/* Lista de trabajos */}
        <nav aria-label={t("jobs.ariaList", "Job list")} className="md:w-1/3">
          <ul className="flex md:flex-col gap-2 justify-center">
            {jobs.map((job) => (
              <li key={job.id}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                    activeId === job.id
                      ? "bg-primary text-white dark:text-black font-semibold shadow dark:shadow-lg"
                      : "bg-background hover:bg-primary/10"
                  }`}
                  aria-current={activeId === job.id}
                  aria-controls={`job-panel-${job.id}`}
                  onClick={() => setActiveId(job.id)}
                  onKeyDown={(e) => handleKeyDown(e, job.id)}
                >
                  <span className="truncate">{job.name}</span>
                  <span className="block text-xs text-muted-foreground">{job.location}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Detalle del trabajo */}
        <div className="md:w-2/3">
          <AnimatePresence mode="wait">
            {activeJob && (
              <motion.div
                key={activeJob.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                id={`job-panel-${activeJob.id}`}
                aria-live="polite"
              >
                <div className="bg-background/80 dark:bg-zinc-900/90 backdrop-blur rounded-xl shadow-lg dark:shadow-2xl p-8 transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-1">{activeJob.description.title}</h3>
                  <div className="text-sm text-muted-foreground mb-4">{activeJob.description.date}</div>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    {activeJob.description.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mb-1 mt-4">{t("jobs.skills", "Skills")}</h4>
                  <ul className="flex flex-wrap gap-2">
                    {activeJob.description.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="inline-block bg-muted px-2 py-1 rounded text-xs font-medium"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
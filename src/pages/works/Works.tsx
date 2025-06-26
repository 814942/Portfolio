import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type JobType = {
  id: string;
  name: string;
  level?: string;
  summary?: string;
  description?: string[];
  stackList?: string[];
  highlightLists?: string[];
  status?: string;
  date?: string;
  company?: string;
  repository?: string;
  video?: string;
  link?: string;
};

const Works = () => {
  const { t } = useTranslation();

  // Obtener la lista de IDs y los datos de los trabajos desde las traducciones
  const jobIds = t("jobs.all", { returnObjects: true }) as string[];
  const jobsData = t("jobs.data", { returnObjects: true }) as Record<string, any>;

  // Mapear los trabajos usando los IDs y los datos
  const jobs: JobType[] = jobIds.map((id) => ({
    id,
    ...jobsData[id],
    company: jobsData[id]?.name, // Usar 'name' como 'company' para mantener compatibilidad
  }));
  const [showVideo, setShowVideo] = useState(false);
  const [activeId, setActiveId] = useState<string>(jobs[0]?.id || "");

  const activeJob = jobs.find((job) => job.id === activeId);

  // Accesibilidad: manejar foco y teclado
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      setActiveId(id);
    }
  };

  return (
    <section
      id="jobs"
      className="container mx-auto py-12 px-4 flex flex-col items-center"
      aria-labelledby="jobs-heading"
    >
      <div className="w-full flex flex-col md:flex-row gap-8">
        {/* Lista de trabajos */}
        <nav aria-label={t("jobs.ariaList")} className="md:w-1/3">
          <ul className="flex md:flex-col gap-2 justify-center">
            {jobs.map((job) => (
              <li key={job.id}>
                <Button
                  variant={activeId === job.id ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start text-left transition-all",
                    activeId === job.id && "font-semibold shadow"
                  )}
                  aria-current={activeId === job.id}
                  aria-controls={`job-panel-${job.id}`}
                  onClick={() => setActiveId(job.id)}
                  onKeyDown={(e) => handleKeyDown(e, job.id)}
                >
                  <span className="truncate">{job.company}</span>
                </Button>
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
                <Card className="shadow-lg">
                  <CardHeader>
                    <h3 className="text-xl font-bold">{activeJob.name}</h3>
                    <div className="text-sm text-muted-foreground flex flex-wrap gap-2">
                      {activeJob.level && <span>{activeJob.level}</span>}
                      {activeJob.status && (
                        <>
                          <span>·</span>
                          <span className="italic">{activeJob.status}</span>
                        </>
                      )}
                      <span>·</span>
                      <span>{activeJob.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {activeJob.description && (
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        {activeJob.description.map((desc: string, idx: number) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    )}
                    {activeJob.highlightLists && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-1">{t("jobs.highlights")}</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {activeJob.highlightLists.map((hl: string, idx: number) => (
                            <li key={idx}>{hl}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {activeJob.stackList && (
                      <div>
                        <h4 className="font-semibold mb-1">{t("jobs.stack")}</h4>
                        <div className="flex flex-wrap gap-2">
                          {activeJob.stackList.map((skill: string, idx: number) => (
                            <span
                              key={idx}
                              className="inline-block bg-muted px-2 py-1 rounded text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* Botones de acciones */}
                    <div className="flex gap-2 mt-6 flex-wrap">
                      {activeJob.repository && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          aria-label={t("jobs.openRepo")}
                          className="flex items-center gap-1"
                        >
                          <a
                            href={activeJob.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={0}
                          >
                            <span>🔗</span>
                            {t("jobs.repo")}
                          </a>
                        </Button>
                      )}
                      {activeJob.link && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          aria-label={t("jobs.openLive")}
                          className="flex items-center gap-1"
                        >
                          <a
                            href={activeJob.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={0}
                          >
                            <span>🌐</span>
                            {t("jobs.live")}
                          </a>
                        </Button>
                      )}
                      {activeJob.video && (
                        <Button
                          variant="default"
                          size="sm"
                          aria-label={t("jobs.openVideo")}
                          className="flex items-center gap-1"
                          onClick={() => setShowVideo(true)}
                        >
                          <span>🎬</span>
                          {t("jobs.video")}
                        </Button>
                      )}
                    </div>
                    {/* Modal para el video */}
                    {activeJob.video && showVideo && (
                      <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                        role="dialog"
                        aria-modal="true"
                        aria-label={t("jobs.videoModalLabel", { name: activeJob.name })}
                        tabIndex={-1}
                        onClick={() => setShowVideo(false)}
                      >
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.9, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="bg-background rounded-lg shadow-lg p-4 max-w-lg w-full relative"
                          onClick={e => e.stopPropagation()}
                        >
                          <button
                            className="absolute top-2 right-2 text-lg"
                            aria-label={t("common.close")}
                            onClick={() => setShowVideo(false)}
                            autoFocus
                          >
                            ×
                          </button>
                          <div className="aspect-video w-full">
                            {/* Esto no anda */}
                            <video
                              src={activeJob.video}
                              controls
                              className="w-full h-full rounded"
                              aria-label={t("jobs.videoPlayer")}
                            />
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Works;
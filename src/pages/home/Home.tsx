import SimpleParticles from "@/components/Particles"
import { useTranslation } from "react-i18next"
import me from '@/assets/images/me.webp'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="Hero" className="relative flex flex-col md:flex-row items-center justify-center min-h-[70vh] p-12 overflow-hidden">
      <SimpleParticles />
      <div 
        className="relative z-10 flex-1 flex flex-col items-start justify-center max-w-xl bg-background/80 p-8 rounded-xl shadow-lg shadow-primary/10 dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.10)]"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">{t('hero.intro')}</p>
      </div>
      <div className="relative z-20 flex-1 flex justify-center items-center mt-8 md:mt-0 md:-ml-16">
        <div className="relative">
          <img
            src={me}
            alt={t('hero.photoAlt')}
            className="w-48 h-48 md:w-64 md:h-[800px] object-cover rounded-full border-4 border-primary shadow-xl bg-background"
            style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
import SimpleParticles from "@/components/Particles"
import { useTranslation } from "react-i18next"
import me from '@/assets/images/me.webp'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="Hero" className="relative flex flex-col md:flex-row items-center justify-center min-h-[70vh] p-2 sm:p-4 md:p-8 lg:p-12 overflow-hidden">
      <SimpleParticles />
      {/* Imagen primero en mobile, segundo en desktop */}
      <div
        id="img-hero"
        className="left-[1%] lg:left-[10%] relative z-20 flex-shrink-0 flex justify-center items-center order-1 md:order-2 mb-2 md:mb-0 md:-ml-16 w-auto"
      >
        <div className="relative select-none">
          <motion.img
            src={me}
            alt={t('hero.photoAlt')}
            className="w-48 h-48 md:w-64 md:h-[800px] object-cover rounded-full border-4 border-primary shadow-xl bg-background"
            style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)' }}
            loading="lazy"
            whileHover={{ scale: .88, }}
            whileTap={{ scale: 0.98 }}
            initial={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
        </div>
      </div>
      {/* Card segundo en mobile, primero en desktop */}
      <div 
        id="card-hero"
        className="relative z-10 flex-1 flex flex-col items-start justify-center max-w-xl bg-background/80 p-8 rounded-xl shadow-lg shadow-primary/10 dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.10)] order-2 md:order-1"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">{t('hero.intro')}</p>
        {/* CTA Button superpuesto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-0 md:-bottom-[5%] left-4/5 -translate-x-1/2 select-none"
        >
          <Button
            asChild
            size="lg"
            className="cursor-pointer shadow-xl text-lg px-8 py-4 rounded-full bg-primary text-white dark:text-black font-bold border-4 border-background hover:scale-105 hover:from-secondary hover:to-primary transition-all duration-200"
            aria-label={t('hero.cta')}
          >
            <Link to="/about">{t('hero.cta')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
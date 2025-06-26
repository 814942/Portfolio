import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Ban } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] gap-6 p-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-destructive"
      >
        <Ban className="w-16 h-16 mx-auto" />
        <h1 className="text-4xl font-bold mt-4">404 - Not Found</h1>
        <p className="mt-2 text-muted-foreground">
          {t('notfound.message')}
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link
          to="/"
          className="inline-block px-4 py-2 rounded-lg bg-primary text-primary-foreground shadow-md hover:scale-105 transition-transform"
        >
          {t('notfound.cta')}
        </Link>
      </motion.div>
    </div>
  )
}
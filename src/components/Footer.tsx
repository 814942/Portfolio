import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'

export function Footer() {
  const { t } = useTranslation()

  return (
    <motion.footer
      id="footer"
      className="w-full py-6 flex flex-col items-center gap-2 bg-background border-t"
      aria-label={t('footer.ariaLabel')}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-lg font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t('footer.title')}
      </motion.h2>
      <nav aria-label={t('footer.socialAria')}>
        <ul className="flex flex-wrap gap-4 justify-center">
          <motion.li
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://github.com/814942"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-2xl hover:text-primary transition-colors"
            >
              <FaGithub aria-hidden="true" focusable="false" />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://www.linkedin.com/in/pablo-garay-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-2xl hover:text-primary transition-colors"
            >
              <FaLinkedin aria-hidden="true" focusable="false" />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.15, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              aria-label={t('footer.emailAria', 'Contact')}
              className="text-2xl hover:text-primary transition-colors"
            >
              <FiMail aria-hidden="true" focusable="false" />
            </Link>
          </motion.li>
        </ul>
      </nav>
      <motion.span
        className="text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        2021 - 2025 Pablo Garay
      </motion.span>
    </motion.footer>
  )
}

export default Footer
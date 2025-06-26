import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TbGuitarPickFilled } from "react-icons/tb";

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
        <TbGuitarPickFilled className="w-6 h-6 text-primary sm:w-8 sm:h-8" />
        <span className="text-foreground text-base sm:text-sm">Pablo_Dev</span>
      </Link>
    </motion.div>
  )
}

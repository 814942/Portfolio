import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '../components/ui/navigation-menu'

import { Logo } from './Logo'
import { LanguageSwitch } from './LenguageSwitch'
import { ThemeToggle } from './ThemeToggle'
import type { INavItem } from '@/interfaces/nav-items.interface'
import SideBar from './SideBar'

export function Navbar() {
  const { t } = useTranslation()

  const navVariants = {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.08, color: 'var(--primary)' },
  }

  const navItems: INavItem[] = [
    { to: '/about', label: t('navbar.about') },
    { to: '/skills', label: t('navbar.skills') },
    { to: '/experiences', label: t('navbar.experiences') },
    { to: '/contact', label: t('navbar.contact') },
  ]

  return (
    <motion.nav
      className="w-full bg-background border-b"
      aria-label={t('navbar.ariaLabel')}
      role="navigation"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between px-4 py-3 gap-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Logo />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:block lg:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6 items-center">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.to}>
                  <NavigationMenuLink asChild>
                    <motion.div
                      variants={itemVariants}
                      whileHover="hover"
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          [
                            "px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors",
                            isActive
                              ? "text-primary font-semibold bg-primary/10 dark:bg-primary/20"
                              : "text-foreground hover:bg-accent"
                          ].join(" ")
                        }
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Language/Theme */}
        <motion.div
          className="hidden md:flex lg:flex gap-2"
          aria-label={t('navbar.language')}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <LanguageSwitch />
          <ThemeToggle />
        </motion.div>

        {/* Mobile Hamburger */}
        <div className="md:hidden lg:hidden flex items-center gap-2">
          <SideBar navItems={navItems} />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
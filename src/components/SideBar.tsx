import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '../components/ui/sheet'
import { Menu } from 'lucide-react'

import { Logo } from './Logo'

import type { INavItem } from '@/interfaces/nav-items.interface'
import { LanguageSwitch } from './LenguageSwitch'
import { ThemeToggle } from './ThemeToggle'

interface SideBarProps {
  navItems: INavItem[]
}

export function SideBar({navItems}: SideBarProps) {
  const { t } = useTranslation()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label={t('navbar.ariaLabel')}
          className="p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader>
          <SheetTitle className="px-6 py-4 text-xl font-bold">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav aria-label={t('navbar.ariaLabel')} className="flex flex-col gap-2 px-6 py-4 justify-between h-full">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <SheetClose asChild>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        isActive ? 'text-primary font-semibold' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </SheetClose>
              </li>
            ))}
          </ul>
          <div className="w-full">
            <div className="flex justify-between gap-4 bg-accent/50 rounded-xl px-4 py-2 shadow-sm">
              <LanguageSwitch />
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default SideBar
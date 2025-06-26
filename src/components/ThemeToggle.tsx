import { useEffect, useState } from 'react'
import { Toggle } from '../components/ui/toggle'
import { MdOutlineWbSunny } from "react-icons/md";
import { AiFillMoon } from "react-icons/ai";

export function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <Toggle
      pressed={dark}
      onPressedChange={setDark}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full hover:cursor-pointer w-8 h-8 flex items-center justify-center"
    >
      {dark ? <MdOutlineWbSunny className="w-4 h-4" /> : <AiFillMoon className="w-4 h-4" />}
    </Toggle>
  )
}
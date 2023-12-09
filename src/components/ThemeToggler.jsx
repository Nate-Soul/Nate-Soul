"use client"

import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

const ThemeToggler = () => {

  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="icon"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100 dark:rotate-90 dark:scale-0"/>
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100"/>
    </Button>
  )
}

export default ThemeToggler

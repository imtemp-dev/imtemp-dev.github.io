import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const dark = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && matchMedia('(prefers-color-scheme: dark)').matches)
    setTheme(dark ? 'dark' : 'light')
  }, [])

  const toggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return { theme, toggle, mounted }
}

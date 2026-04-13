import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/useTheme'

export default function Navbar() {
  const { theme, toggle, mounted } = useTheme()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tight">
            imtemp<span className="text-primary">·</span>dev
          </a>

          {/* Nav Links - Desktop only */}
          <div className="hidden items-center gap-8 md:flex">
            {['Featured', 'Projects', 'Skills', 'Scholar', 'Kaggle', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
          >
            {mounted ? (
              theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />
            ) : (
              <span className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}

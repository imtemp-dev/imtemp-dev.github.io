import { GithubIcon } from '@/components/ui/github-icon'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} imtemp-dev. All rights reserved.
          </p>
          <a
            href="https://github.com/imtemp-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

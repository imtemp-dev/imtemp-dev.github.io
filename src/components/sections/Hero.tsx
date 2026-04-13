import { Copy, Check, ArrowDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { GithubIcon } from '@/components/ui/github-icon'
import { ScholarIcon } from '@/components/ui/scholar-icon'
import { KaggleIcon } from '@/components/ui/kaggle-icon'
import { cn } from '@/lib/utils'

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const copyCommand = async () => {
    await navigator.clipboard.writeText('brew tap imtemp-dev/tap && brew install bts')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section id="hero" className="min-h-screen flex items-center py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Greeting Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-2">
              Developer Tools
            </Badge>
          </div>

          {/* Headline */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Building tools that think ahead
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Bulletproof Technical Specification CLI for Claude Code. Catch planning errors before they become debugging sessions.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href="https://github.com/imtemp-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=bz4JE30AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Google Scholar"
              >
                <ScholarIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.kaggle.com/codebricks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#20BEFF] transition-colors"
                aria-label="Kaggle"
              >
                <KaggleIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Featured Preview Box */}
          <div className="rounded-lg border border-border bg-card p-6 md:p-8 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold">claude-bts</h2>
                <Badge variant="outline">Go</Badge>
              </div>
              <a
                href="https://github.com/imtemp-dev/claude-bts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
            </div>

            {/* Philosophy */}
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "fix errors in documents, not in code. A spec edit is free. A code fix is a build-test-debug cycle."
            </blockquote>

            {/* Install Command */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Quick Install</p>
              <div className="relative group">
                <pre className="bg-muted rounded p-4 text-sm font-mono text-foreground overflow-x-auto">
                  <code>brew tap imtemp-dev/tap && brew install bts</code>
                </pre>
                <Button
                  size="icon-sm"
                  variant="ghost"
                  onClick={copyCommand}
                  className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#featured" className={cn(buttonVariants(), 'flex-1 sm:flex-none')}>
                Learn More <ArrowDown className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://github.com/imtemp-dev/claude-bts"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'outline' }), 'flex-1 sm:flex-none')}
              >
                View on GitHub <GithubIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center pt-8 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { GithubIcon } from '@/components/ui/github-icon'
import { cn } from '@/lib/utils'

const workflowSteps = [
  {
    number: 1,
    title: 'Destination Establishment',
    description: 'Discover intent, establish vision and roadmap, define scope, create wireframes',
  },
  {
    number: 2,
    title: 'Iterative Specification',
    description: 'Draft → verify → assess → act (improve/debate/simulate/audit) → re-verify until zero critical/major issues',
  },
  {
    number: 3,
    title: 'Code Generation & Validation',
    description: 'Implement → test → simulate (fork context) → review (fork context) → sync → complete',
  },
]

export default function FeaturedProject() {
  const [copiedIndex, setCopiedIndex] = useState(-1)

  const copyCommand = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(-1), 1500)
  }

  return (
    <section id="featured" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <Badge variant="secondary" className="mb-4">Featured Project</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">claude-bts</h2>
          <p className="text-lg text-muted-foreground">
            Bulletproof Technical Specification — A comprehensive CLI for spec-driven development with Claude Code
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Philosophy & Workflow */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Core Philosophy</h3>
              <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-lg">
                "fix errors in documents, not in code. A spec edit is free. A code fix is a build-test-debug cycle."
              </blockquote>
            </div>

            <Separator />

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">3-Phase Workflow</h3>
              <div className="space-y-8 relative pl-8">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border" />
                {workflowSteps.map((step) => (
                  <div key={step.number} className="relative">
                    <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="px-4 py-2">21 Claude Code Skills</Badge>
              <Badge variant="outline" className="px-4 py-2">8 Lifecycle Hooks</Badge>
            </div>
          </div>

          {/* Right: Install Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Install</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    'brew tap imtemp-dev/tap && brew install bts',
                    'curl -fsSL https://raw.githubusercontent.com/imtemp-dev/claude-bts/main/install.sh | bash',
                  ].map((cmd, idx) => (
                    <div key={idx} className="relative group">
                      <pre className="bg-muted rounded p-3 text-xs font-mono text-foreground overflow-x-auto">
                        <code>{cmd}</code>
                      </pre>
                      <Button
                        size="icon-sm"
                        variant="ghost"
                        onClick={() => copyCommand(cmd, idx)}
                        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        {copiedIndex === idx ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div>
              <p className="text-sm font-medium mb-3">Written in</p>
              <Badge className="px-4 py-2 text-base">Go 1.22+</Badge>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/imtemp-dev/claude-bts"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants(), 'w-full justify-center')}
              >
                View on GitHub <GithubIcon className="ml-2 h-4 w-4" />
              </a>
              <a href="#projects" className={cn(buttonVariants({ variant: 'outline' }), 'w-full justify-center')}>
                See Other Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ExternalLink } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GithubIcon } from '@/components/ui/github-icon'
import { cn } from '@/lib/utils'

const projects = [
  {
    name: 'gitmolt',
    description: 'Web-based Git workflow tool. Simplify git operations with a clean interface.',
    language: 'TypeScript',
    github: 'https://github.com/imtemp-dev/gitmolt',
    homepage: 'https://gitmolt.vercel.app',
  },
  {
    name: 'claude-p2p',
    description: 'Peer-to-peer communication implementation for distributed systems.',
    language: 'Go',
    github: 'https://github.com/imtemp-dev/claude-p2p',
  },
  {
    name: 'context-sync',
    description: 'TypeScript utility for synchronizing and managing context across applications.',
    language: 'TypeScript',
    github: 'https://github.com/imtemp-dev/context-sync',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Other Projects</h2>
          <p className="text-lg text-muted-foreground">
            Additional tools and libraries built for developer productivity
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.name} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <Badge variant="outline">{project.language}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'flex-1')}
                >
                  <GithubIcon className="h-4 w-4 mr-2" />
                  GitHub
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'flex-1')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

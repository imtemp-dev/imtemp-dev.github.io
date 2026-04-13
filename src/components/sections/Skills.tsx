import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skillGroups = [
  {
    title: 'Languages',
    skills: ['Go', 'TypeScript', 'JavaScript', 'React', 'Python'],
  },
  {
    title: 'Frontend',
    skills: ['React 18', 'Tailwind CSS', 'Vite', 'shadcn/ui', 'Radix UI'],
  },
  {
    title: 'Tools & CLI',
    skills: ['Claude Code', 'Homebrew', 'Git', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'Concepts',
    skills: ['Spec-driven Development', 'P2P Systems', 'CLI Design', 'Developer UX'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <h3 className="font-semibold text-lg">{group.title}</h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

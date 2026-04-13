import { buttonVariants } from '@/components/ui/button'
import { GithubIcon } from '@/components/ui/github-icon'
import { ScholarIcon } from '@/components/ui/scholar-icon'
import { KaggleIcon } from '@/components/ui/kaggle-icon'
import { cn } from '@/lib/utils'

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Connect with me on GitHub, Scholar, Kaggle, or reach out via email
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/imtemp-dev"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            <GithubIcon className="mr-2 h-5 w-5" />
            GitHub
          </a>
          <a
            href="https://scholar.google.com/citations?user=bz4JE30AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            <ScholarIcon className="mr-2 h-5 w-5" />
            Google Scholar
          </a>
          <a
            href="https://www.kaggle.com/codebricks"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            <KaggleIcon className="mr-2 h-5 w-5" />
            Kaggle
          </a>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Newspaper, Play, Sprout } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import researchData from '@/data/research.json'

const { video, mediaMention, papers, citationNote, profileUrl } = researchData

function VideoPlayer({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" aria-hidden />
      <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play className="h-7 w-7 translate-x-0.5 fill-foreground text-foreground" />
        </span>
      </span>
    </button>
  )
}

export default function FeaturedResearch() {
  return (
    <section id="research" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <Badge variant="secondary" className="mb-4">Featured Research</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Kiwifruit Robotics</h2>
          <p className="text-lg text-muted-foreground">
            Autonomous harvesting and pollination robots for commercial orchards —
            developed at the University of Auckland (CARES)
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="px-4 py-2">8 papers</Badge>
            <Badge variant="outline" className="px-4 py-2">800+ citations</Badge>
            <Badge variant="outline" className="px-4 py-2">2017 – 2021</Badge>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Field demo video */}
          <div className="space-y-4 lg:sticky lg:top-24">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Sprout className="h-4 w-4" />
              Field demo
            </div>
            <VideoPlayer id={video.youtubeId} title={video.title} />
            <p className="text-xs text-muted-foreground">{video.title} · {video.channel}</p>

            <a
              href={mediaMention.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-dashed border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <Newspaper className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              <span className="min-w-0 text-sm">
                <span className="block font-medium">Featured in “{mediaMention.title}”</span>
                <span className="block text-muted-foreground">{mediaMention.channel}</span>
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          </div>

          {/* Right: Selected publications */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Selected publications</h3>
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View all <ArrowUpRight className="inline h-3.5 w-3.5" />
              </a>
            </div>

            <div className="space-y-3">
              {papers.map((paper) => (
                <a
                  key={paper.title}
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  <div className="min-w-0">
                    <h4 className="font-semibold leading-snug transition-colors group-hover:text-primary">
                      {paper.title}
                    </h4>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {paper.venue} · {paper.year}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1.5">
                    <span className="text-sm font-medium whitespace-nowrap">
                      {paper.citations.toLocaleString()} citations
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </a>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">{citationNote}</p>

            <div className="pt-2">
              <a
                href="#scholar"
                className={cn(buttonVariants({ variant: 'outline' }), 'w-full justify-center')}
              >
                Citation metrics <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

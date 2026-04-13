import { ExternalLink } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { KaggleIcon } from '@/components/ui/kaggle-icon'
import { cn } from '@/lib/utils'

const competitions = [
  {
    title: 'Lux AI',
    description: 'Gather the most resources and survive the night',
    rank: 32,
    total: 1178,
    medal: 'silver' as const,
    type: 'Simulation',
  },
  {
    title: 'Novozymes Enzyme Stability Prediction',
    description: 'Identify the thermostable mutations in enzymes',
    rank: 52,
    total: 2482,
    medal: 'silver' as const,
    type: 'Tabular',
  },
  {
    title: 'Image Matching Challenge 2022',
    description: 'Register two images from different viewpoints',
    rank: 72,
    total: 642,
    medal: 'bronze' as const,
    type: 'Computer Vision',
  },
  {
    title: 'Google ASL Fingerspelling Recognition',
    description: 'Train fast and accurate ASL fingerspelling recognition models',
    rank: 76,
    total: 1314,
    medal: 'bronze' as const,
    type: 'NLP / Sequence',
  },
  {
    title: 'Happywhale — Whale & Dolphin ID',
    description: 'Identify whales and dolphins by unique characteristics',
    rank: 126,
    total: 1588,
    medal: 'bronze' as const,
    type: 'Computer Vision',
  },
  {
    title: 'Sartorius — Cell Instance Segmentation',
    description: 'Detect single neuronal cells in microscopy images',
    rank: 141,
    total: 1505,
    medal: 'bronze' as const,
    type: 'Computer Vision',
  },
]

const medalStyles = {
  silver: {
    border: 'border-slate-400/60 dark:border-slate-500/60',
    bg: 'bg-slate-50 dark:bg-slate-900/30',
    dot: 'bg-slate-400',
    label: 'text-slate-600 dark:text-slate-400',
    emoji: '🥈',
  },
  bronze: {
    border: 'border-amber-600/50 dark:border-amber-700/50',
    bg: 'bg-amber-50/60 dark:bg-amber-950/20',
    dot: 'bg-amber-600',
    label: 'text-amber-700 dark:text-amber-500',
    emoji: '🥉',
  },
}

function topPercent(rank: number, total: number) {
  const pct = (rank / total) * 100
  return pct < 1 ? 'Top 1%' : `Top ${Math.ceil(pct)}%`
}

export default function Kaggle() {
  return (
    <section id="kaggle" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <KaggleIcon className="h-6 w-6 text-[#20BEFF]" />
            <h2 className="text-3xl md:text-5xl font-bold">Kaggle</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            Competitive machine learning — computer vision, NLP, simulation
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl border border-border bg-border overflow-hidden max-w-sm sm:max-w-none mx-auto">
            <div className="bg-card text-center px-5 py-4">
              <p className="text-2xl font-bold">Expert</p>
              <p className="text-xs text-muted-foreground mt-0.5">Tier</p>
            </div>
            <div className="bg-card text-center px-5 py-4">
              <p className="text-2xl font-bold">6</p>
              <p className="text-xs text-muted-foreground mt-0.5">Competitions</p>
            </div>
            <div className="bg-card text-center px-5 py-4">
              <p className="text-2xl font-bold">🥈 2</p>
              <p className="text-xs text-muted-foreground mt-0.5">Silver</p>
            </div>
            <div className="bg-card text-center px-5 py-4">
              <p className="text-2xl font-bold">🥉 4</p>
              <p className="text-xs text-muted-foreground mt-0.5">Bronze</p>
            </div>
          </div>
        </div>

        {/* Competition Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-12">
          {competitions.map((comp) => {
            const s = medalStyles[comp.medal]
            return (
              <Card
                key={comp.title}
                className={cn('flex flex-col border', s.border, s.bg)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg leading-none">{s.emoji}</span>
                      <span className={cn('text-xs font-semibold uppercase tracking-wide', s.label)}>
                        {comp.medal} medal
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs shrink-0">
                      {comp.type}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-sm leading-snug mt-2">{comp.title}</h3>
                </CardHeader>
                <CardContent className="flex-1 pb-4 space-y-3">
                  <p className="text-xs text-muted-foreground">{comp.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">
                      #{comp.rank} / {comp.total.toLocaleString()}
                    </span>
                    <span className={cn('text-xs font-semibold px-2 py-0.5 rounded-full border', s.border, s.label)}>
                      {topPercent(comp.rank, comp.total)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="https://www.kaggle.com/codebricks"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            <KaggleIcon className="mr-2 h-5 w-5" />
            View Kaggle Profile
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

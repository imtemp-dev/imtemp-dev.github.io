import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { buttonVariants } from '@/components/ui/button'
import { ScholarIcon } from '@/components/ui/scholar-icon'
import { cn } from '@/lib/utils'
import scholarData from '@/data/scholar.json'

const { stats, citationsByYear, partialYear, updatedAt, since5yLabel, profileUrl } = scholarData
const currentYear: string = partialYear || String(new Date().getFullYear())

function CustomTooltip({ active, payload, label }: {
  active?: boolean
  payload?: { value: number }[]
  label?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2 text-sm shadow-md">
      <p className="font-semibold">{label}</p>
      <p className="text-muted-foreground">
        {payload[0].value} citations
        {label === currentYear && <span className="ml-1 text-xs">(partial)</span>}
      </p>
    </div>
  )
}

export default function Scholar() {
  return (
    <section id="scholar" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ScholarIcon className="h-6 w-6" />
            <h2 className="text-3xl md:text-5xl font-bold">Google Scholar</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Academic research impact and citation history
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Stats Table */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-3 text-sm text-muted-foreground bg-muted/50 border-b border-border">
              <div className="px-5 py-3" />
              <div className="px-5 py-3 text-center font-medium">All</div>
              <div className="px-5 py-3 text-center font-medium">{since5yLabel}</div>
            </div>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  'grid grid-cols-3 items-center',
                  i < stats.length - 1 && 'border-b border-border'
                )}
              >
                <div className="px-5 py-4 text-sm text-muted-foreground font-medium">
                  {s.label}
                </div>
                <div className="px-5 py-4 text-center text-xl font-bold">
                  {s.all.toLocaleString()}
                </div>
                <div className="px-5 py-4 text-center text-xl font-bold">
                  {s.since2021.toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          {/* Citation Chart */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Citations per year</h3>
              <div className="text-right">
                <span className="text-xs text-muted-foreground">{currentYear} is partial</span>
                {updatedAt && (
                  <p className="text-xs text-muted-foreground/60 mt-0.5">
                    Updated {updatedAt}
                  </p>
                )}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={citationsByYear} barCategoryGap="30%">
                <XAxis
                  dataKey="year"
                  tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }}
                  axisLine={false}
                  tickLine={false}
                  width={36}
                />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {citationsByYear.map((entry) => (
                    <Cell
                      key={entry.year}
                      fill={
                        entry.year === currentYear
                          ? 'var(--muted-foreground)'
                          : 'var(--foreground)'
                      }
                      opacity={entry.year === currentYear ? 0.4 : 0.85}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              <ScholarIcon className="mr-2 h-5 w-5" />
              View Google Scholar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

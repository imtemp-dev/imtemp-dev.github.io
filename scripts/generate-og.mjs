import { Resvg } from '@resvg/resvg-js'
import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT = resolve(__dirname, '../public/og-image.png')

// 1200 × 630 — standard OG image size
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#09090b"/>
      <stop offset="100%" stop-color="#18181b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Subtle grid lines -->
  <g stroke="#27272a" stroke-width="1" opacity="0.6">
    <line x1="0"    y1="210" x2="1200" y2="210"/>
    <line x1="0"    y1="420" x2="1200" y2="420"/>
    <line x1="300"  y1="0"   x2="300"  y2="630"/>
    <line x1="600"  y1="0"   x2="600"  y2="630"/>
    <line x1="900"  y1="0"   x2="900"  y2="630"/>
  </g>

  <!-- Terminal icon (top-left brand mark) -->
  <rect x="72" y="72" width="56" height="56" rx="12" fill="#09090b" stroke="#3f3f46" stroke-width="1.5"/>
  <polyline points="83,88 97,100 83,112" fill="none" stroke="#e4e4e7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="101" y1="112" x2="117" y2="112" stroke="#e4e4e7" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Logo text -->
  <text x="144" y="108" font-family="ui-monospace, 'Cascadia Code', monospace" font-size="26" font-weight="700" fill="#fafafa">imtemp</text>
  <text x="242" y="108" font-family="ui-monospace, 'Cascadia Code', monospace" font-size="26" font-weight="700" fill="#6366f1">·</text>
  <text x="252" y="108" font-family="ui-monospace, 'Cascadia Code', monospace" font-size="26" font-weight="700" fill="#fafafa">dev</text>

  <!-- Main headline -->
  <text x="72" y="290" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="64" font-weight="800" fill="#fafafa">Building tools that</text>
  <text x="72" y="370" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="64" font-weight="800" fill="url(#accent)">think ahead.</text>

  <!-- Subline -->
  <text x="72" y="440" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="28" fill="#a1a1aa">Bulletproof Technical Specification CLI · Developer Tools · Research</text>

  <!-- Stats bar -->
  <rect x="72" y="510" width="260" height="60" rx="10" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
  <text x="202" y="535" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="13" fill="#71717a">Citations</text>
  <text x="202" y="558" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="18" font-weight="700" fill="#fafafa">1,682</text>

  <rect x="348" y="510" width="260" height="60" rx="10" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
  <text x="478" y="535" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="13" fill="#71717a">h-index</text>
  <text x="478" y="558" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="18" font-weight="700" fill="#fafafa">18</text>

  <rect x="624" y="510" width="260" height="60" rx="10" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
  <text x="754" y="535" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="13" fill="#71717a">Kaggle Expert</text>
  <text x="754" y="558" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="18" font-weight="700" fill="#fafafa">Top Competitor</text>

  <!-- Right: code block decoration -->
  <rect x="920" y="200" width="220" height="160" rx="12" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
  <text x="940" y="235" font-family="ui-monospace, monospace" font-size="13" fill="#6366f1">$</text>
  <text x="956" y="235" font-family="ui-monospace, monospace" font-size="13" fill="#a1a1aa"> brew tap</text>
  <text x="940" y="258" font-family="ui-monospace, monospace" font-size="13" fill="#a1a1aa">   imtemp-dev/tap</text>
  <text x="940" y="281" font-family="ui-monospace, monospace" font-size="13" fill="#6366f1">$</text>
  <text x="956" y="281" font-family="ui-monospace, monospace" font-size="13" fill="#a1a1aa"> brew install</text>
  <text x="940" y="304" font-family="ui-monospace, monospace" font-size="13" fill="#e4e4e7">   bts</text>
  <rect x="940" y="320" width="8" height="16" rx="1" fill="#6366f1" opacity="0.8"/>

  <!-- URL -->
  <text x="1128" y="598" text-anchor="end" font-family="ui-monospace, monospace" font-size="18" fill="#52525b">imtemp-dev.github.io</text>
</svg>
`

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
})
const png = resvg.render().asPng()
writeFileSync(OUTPUT, png)
console.log(`OG image written to ${OUTPUT} (${png.length} bytes)`)

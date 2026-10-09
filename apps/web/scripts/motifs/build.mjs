import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cypress, teeth } from './charts.mjs'

const outDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../public/motifs')

const colors = {
  red: '#BE231C',
  green: '#0B5A30',
  ink: '#0B0D09',
}

const rotate = (grid) =>
  Array.from({ length: grid[0].length }, (_, x) =>
    grid
      .map((row) => row[x])
      .reverse()
      .join(''),
  )

const mirror = (grid) => grid.map((row) => [...row].reverse().join(''))

const repeatRows = (grid, rows) => Array.from({ length: rows }, (_, y) => grid[y % grid.length])

const recolor = (grid, map) => grid.map((row) => [...row].map((c) => map[c] ?? '.').join(''))

const besideAll = (...grids) => {
  const rows = grids[0].length
  return Array.from({ length: rows }, (_, y) => grids.map((g) => g[y]).join(''))
}

function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

function render(grid, palette, { cell = 6, seed = 7, opacity = 1 } = {}) {
  const rand = seeded(seed)
  const w = grid[0].length * cell
  const h = grid.length * cell
  const byColor = {}
  grid.forEach((row, y) => {
    ;[...row].forEach((key, x) => {
      const color = palette[key]
      if (!color) return
      const j = () => (rand() - 0.5) * cell * 0.12
      const p = cell * 0.18
      const x0 = x * cell + p + j()
      const y0 = y * cell + p + j()
      const x1 = (x + 1) * cell - p + j()
      const y1 = (y + 1) * cell - p + j()
      byColor[color] ??= []
      byColor[color].push(
        `M${x0.toFixed(1)} ${y0.toFixed(1)}L${x1.toFixed(1)} ${y1.toFixed(1)}M${x1.toFixed(1)} ${(y0 + j()).toFixed(1)}L${x0.toFixed(1)} ${(y1 + j()).toFixed(1)}`,
      )
    })
  })
  const paths = Object.entries(byColor)
    .map(
      ([color, d]) =>
        `<path d="${d.join('')}" stroke="${color}" stroke-width="${(cell * 0.26).toFixed(1)}" stroke-linecap="round" fill="none"/>`,
    )
    .join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><g opacity="${opacity}">${paths}</g></svg>`
}

const teethV = rotate(teeth)
const unitRows = cypress.length
const teethOut = repeatRows(mirror(teethV), unitRows)
const teethIn = repeatRows(teethV, unitRows)

const right = besideAll(
  recolor(teethIn, { a: 'r' }),
  repeatRows(['.'], unitRows),
  recolor(cypress, { a: 'g', b: 'r' }),
  recolor(teethOut, { a: 'r' }),
)

function keffiyeh({ seed = 3 } = {}) {
  const rand = seeded(seed)
  const j = (n = 0.6) => (rand() - 0.5) * n
  const f = (n) => n.toFixed(1)
  const height = 56
  const width = 74
  const ink = colors.ink

  const stripes = [
    `<rect x="0" y="0" width="7" height="${height}" fill="${ink}"/>`,
    `<rect x="10" y="0" width="1.6" height="${height}" fill="${ink}"/>`,
    `<rect x="14" y="0" width="1.6" height="${height}" fill="${ink}"/>`,
  ]

  const leafCenter = 26
  const leaves = []
  const stem = []
  for (let i = 0; i < height / 7; i++) {
    const y = i * 7 + 3.5
    const side = i % 2 === 0 ? -1 : 1
    const x = leafCenter + side * 3.2
    stem.push(`${i === 0 ? 'M' : 'L'}${f(x + j())} ${f(y)}`)
    leaves.push(
      `<ellipse cx="${f(x + j())}" cy="${f(y + j())}" rx="2.4" ry="5.4" transform="rotate(${side * 34} ${f(x)} ${f(y)})" fill="${ink}"/>`,
    )
  }
  stem.push(`L${f(leafCenter - 3.2)} ${height + 3.5}`)

  const netLeft = 38
  const size = 28
  const half = size / 2
  const net = []
  const beads = []
  for (let k = -1; k <= height / size; k++) {
    const top = k * size
    const cx = netLeft + half
    const points = [
      [cx, top],
      [netLeft + size, top + half],
      [cx, top + size],
      [netLeft, top + half],
    ]
    net.push(
      `M${points.map(([x, y]) => `${f(x + j())} ${f(y + j())}`).join('L')}Z`,
      `M${netLeft + size} ${top + half}L${netLeft + size + half} ${top}M${netLeft + size} ${top + half}L${netLeft + size + half} ${top + size}`,
    )
    beads.push(
      `<ellipse cx="${f(cx + j(0.4))}" cy="${f(top + j(0.4))}" rx="2.9" ry="3.8" fill="${ink}"/>`,
      `<ellipse cx="${f(netLeft + j(0.4))}" cy="${f(top + half + j(0.4))}" rx="2.3" ry="2" fill="${ink}"/>`,
    )
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${stripes.join('')}<path d="${stem.join('')}" stroke="${ink}" stroke-width="0.9" fill="none"/><path d="${stem.join('')}" transform="translate(0 ${-height})" stroke="${ink}" stroke-width="0.9" fill="none"/><g id="leaves">${leaves.join('')}</g><use href="#leaves" y="${-height}"/><use href="#leaves" y="${height}"/><path d="${net.join('')}" stroke="${ink}" stroke-width="1.5" stroke-linejoin="round" fill="none"/>${beads.join('')}</svg>`
}

function tornMask({ seed = 41, width = 1000, height = 600, step = 14, depth = 9 } = {}) {
  const rand = seeded(seed)
  const edge = (from, to, fixed, axis) => {
    const points = []
    const count = Math.round(Math.abs(to - from) / step)
    for (let i = 0; i <= count; i++) {
      const t = from + ((to - from) * i) / count
      const d = rand() * depth * (rand() > 0.85 ? 1.8 : 1)
      const inset = fixed === 0 ? d : fixed - d
      points.push(axis === 'x' ? [t, inset] : [inset, t])
    }
    return points
  }
  const points = [
    ...edge(0, width, 0, 'x'),
    ...edge(0, height, width, 'y'),
    ...edge(width, 0, height, 'x'),
    ...edge(height, 0, 0, 'y'),
  ]
  const d = `M${points.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L')}Z`
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none"><path d="${d}" fill="#000"/></svg>`
}

function band() {
  const width = 48
  const height = 30
  const paper = '#F1EADA'
  const net = []
  const beads = []
  for (let k = -1; k <= width / 24; k++) {
    const left = k * 24
    net.push(`M${left} 15L${left + 12} 6L${left + 24} 15L${left + 12} 24Z`)
    beads.push(`<ellipse cx="${left}" cy="15" rx="2.5" ry="2" fill="${paper}"/>`)
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${colors.ink}"/><rect width="${width}" height="3" fill="${colors.red}"/><rect y="${height - 3}" width="${width}" height="3" fill="${colors.red}"/><path d="${net.join('')}" stroke="${paper}" stroke-width="1.5" stroke-linejoin="round" fill="none"/>${beads.join('')}</svg>`
}

function oliveSprig({ seed = 9 } = {}) {
  const rand = seeded(seed)
  const f = (n) => n.toFixed(1)
  const width = 240
  const height = 560
  const darkTones = ['#3B4529', '#465232', '#55603A']
  const sageTones = ['#7E8A63', '#97A07E', '#A9B08F']
  const point = (t) => [70 + 46 * Math.sin(t * Math.PI * 0.85) - 30 * t, 44 + 500 * t]
  const heading = (t) => {
    const [x0, y0] = point(Math.max(t - 0.01, 0))
    const [x1, y1] = point(Math.min(t + 0.01, 1))
    return (Math.atan2(x1 - x0, -(y1 - y0)) * 180) / Math.PI
  }
  const stemPoints = Array.from({ length: 41 }, (_, i) => point(i / 40))
  const stem = `M${stemPoints.map(([x, y]) => `${f(x)} ${f(y)}`).join('L')}`
  const outline = (l, w) =>
    `M0 0C${f(w)} ${f(-l * 0.25)} ${f(w * 0.85)} ${f(-l * 0.7)} 0 ${f(-l)}C${f(-w * 0.85)} ${f(-l * 0.7)} ${f(-w)} ${f(-l * 0.25)} 0 0Z`
  const half = (l, w) => `M0 0C${f(w)} ${f(-l * 0.25)} ${f(w * 0.85)} ${f(-l * 0.7)} 0 ${f(-l)}Z`
  const pick = (tones) => tones[Math.floor(rand() * tones.length)]
  const leaves = []
  const olives = []
  const leaf = (x, y, angle, length) => {
    const w = length * 0.15
    const sage = rand() > 0.62
    const base = sage ? pick(sageTones) : pick(darkTones)
    const shade = sage ? pick(darkTones) : pick(sageTones)
    leaves.push(
      `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(angle)})"><path d="${outline(length, w)}" fill="${base}"/><path d="${half(length, w)}" fill="${shade}" opacity=".45"/><path d="M0 -3L0 ${f(-length + 6)}" stroke="#E4E3CC" stroke-width="0.9" opacity=".5"/></g>`,
    )
  }
  const olive = (x, y, angle) => {
    const ox = x + Math.sin((angle * Math.PI) / 180) * 40
    const oy = y + 22
    olives.push(
      `<path d="M${f(x)} ${f(y)}Q${f((x + ox) / 2)} ${f(y + 4)} ${f(ox)} ${f(oy - 15)}" stroke="#3B4529" stroke-width="1.8" fill="none"/>`,
      `<ellipse cx="${f(ox)}" cy="${f(oy)}" rx="14" ry="18.5" transform="rotate(${f(angle * 0.5)} ${f(ox)} ${f(oy)})" fill="url(#olive)"/>`,
      `<ellipse cx="${f(ox - 4.5)}" cy="${f(oy - 7)}" rx="3.2" ry="6" transform="rotate(${f(angle * 0.5 + 20)} ${f(ox)} ${f(oy)})" fill="#FFFFFF" opacity=".38"/>`,
    )
  }
  const steps = 14
  for (let i = 1; i <= steps; i++) {
    const t = i / (steps + 1)
    const [x, y] = point(t)
    const side = i % 2 === 0 ? 1 : -1
    const length = 74 + rand() * 22 - t * 10
    leaf(x, y, heading(t) + 180 + side * (34 + rand() * 18), length)
    if (rand() > 0.55) leaf(x, y, heading(t) + 180 - side * (60 + rand() * 25), length * 0.8)
  }
  ;[
    [0.12, 1],
    [0.3, -1],
    [0.36, -1.5],
    [0.52, 1],
    [0.58, 1.5],
    [0.76, -1],
    [0.9, 1.2],
  ].forEach(([t, dir]) => {
    const [x, y] = point(t)
    olive(x, y, dir * 30)
  })
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><defs><radialGradient id="olive" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#3A3833"/><stop offset=".55" stop-color="#151411"/><stop offset="1" stop-color="#050504"/></radialGradient><filter id="paint" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="3.5"/></filter></defs><g filter="url(#paint)"><path d="${stem}" stroke="#3B4529" stroke-width="3.2" stroke-linecap="round" fill="none"/>${leaves.join('')}</g>${olives.join('')}</svg>`
}

function oliveTwig({ seed = 5 } = {}) {
  const rand = seeded(seed)
  const f = (n) => n.toFixed(1)
  const leafTones = ['#4F5733', '#5E672F', '#3C4227']
  const point = (t) => [8 + 108 * t, 60 - 18 * t - 28 * t * t]
  const stemPoints = Array.from({ length: 17 }, (_, i) => point(i / 16))
  const stem = `M${stemPoints.map(([x, y]) => `${f(x)} ${f(y)}`).join('L')}`
  const leaf = (length, width) =>
    `M0 0C${f(width)} ${f(-length * 0.3)} ${f(width * 0.8)} ${f(-length * 0.75)} 0 ${f(-length)}C${f(-width * 0.8)} ${f(-length * 0.75)} ${f(-width)} ${f(-length * 0.3)} 0 0Z`
  const heading = (t) => {
    const [x0, y0] = point(Math.max(t - 0.02, 0))
    const [x1, y1] = point(Math.min(t + 0.02, 1))
    return (Math.atan2(x1 - x0, -(y1 - y0)) * 180) / Math.PI
  }
  const leaves = []
  const place = (t, offset, length) => {
    const [x, y] = point(t)
    const tone = leafTones[Math.floor(rand() * leafTones.length)]
    leaves.push(
      `<path d="${leaf(length, length * 0.24)}" transform="translate(${f(x)} ${f(y)}) rotate(${f(heading(t) + offset)})" fill="${tone}"/>`,
    )
  }
  ;[0.3, 0.46, 0.62, 0.78].forEach((t, i) => {
    place(t, -46 - rand() * 10, 26 - i * 2 + rand() * 4)
    place(t + 0.06, 44 + rand() * 10, 24 - i * 2 + rand() * 4)
  })
  place(1, 0, 20)
  place(0.14, 32, 34)
  return `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="80" viewBox="0 0 140 80"><path d="${stem}" stroke="#3C4227" stroke-width="2" stroke-linecap="round" fill="none"/>${leaves.join('')}</svg>`
}

const palette = { r: colors.red, g: colors.green, k: colors.ink }

mkdirSync(outDir, { recursive: true })
const files = {
  'border-right.svg': render(right, palette, { seed: 11, opacity: 0.72 }),
  'border-left.svg': keffiyeh(),
  'band.svg': band(),
  'torn-mask.svg': tornMask(),
  'brush-underline.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="24" viewBox="0 0 400 24" preserveAspectRatio="none"><path d="M4 15C70 9 150 6 230 7S350 9 396 13" stroke="${colors.red}" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M40 18C120 13 220 11 340 14" stroke="${colors.red}" stroke-width="2.5" stroke-linecap="round" fill="none" opacity=".75"/></svg>`,
  'olive-sprig.svg': oliveSprig(),
  'olive-twig.svg': oliveTwig(),
  'stitch-line.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20"><path d="M4.5 4.5L11.5 13.5M11.5 4.5L4.5 13.5" stroke="${colors.red}" stroke-width="2.4" stroke-linecap="round" fill="none"/></svg>`,
  'stitch-knot.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="13" fill="#F1EADA" stroke="${colors.red}" stroke-width="2.4" stroke-dasharray="4 3.2" stroke-linecap="round"/><path d="M11 11L21 21M21 11L11 21" stroke="${colors.red}" stroke-width="3" stroke-linecap="round"/></svg>`,
  'stitch-ring.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><circle cx="60" cy="60" r="56" fill="none" stroke="${colors.red}" stroke-width="3" stroke-dasharray="7 5" stroke-linecap="round"/></svg>`,
  'wave.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="16" viewBox="0 0 96 16"><path d="M0 8C12 3.5 24 3.5 36 7.5S60 12.5 72 9 90 4 96 8" stroke="${colors.ink}" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".75"/></svg>`,
}
for (const [name, svg] of Object.entries(files)) {
  writeFileSync(resolve(outDir, name), svg)
  console.log(`${name} ${(svg.length / 1024).toFixed(1)} KB`)
}

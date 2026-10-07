import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cypress, olive, teeth } from './charts.mjs'

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

function render(grid, palette, { cell = 6, seed = 7 } = {}) {
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
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${paths}</svg>`
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
    const x = leafCenter + side * 2.6
    stem.push(`${i === 0 ? 'M' : 'L'}${f(x + j())} ${f(y)}`)
    leaves.push(
      `<ellipse cx="${f(x + j())}" cy="${f(y + j())}" rx="1.7" ry="4.1" transform="rotate(${side * 38} ${f(x)} ${f(y)})" fill="${ink}"/>`,
    )
  }
  stem.push(`L${f(leafCenter - 2.6)} ${height + 3.5}`)

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

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${stripes.join('')}<path d="${stem.join('')}" stroke="${ink}" stroke-width="0.9" fill="none"/>${leaves.join('')}<path d="${net.join('')}" stroke="${ink}" stroke-width="1.5" stroke-linejoin="round" fill="none"/>${beads.join('')}</svg>`
}

function horizontal(svg) {
  const [, w, h] = svg.match(/width="([\d.]+)" height="([\d.]+)"/)
  const inner = svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${h}" height="${w}" viewBox="0 0 ${h} ${w}"><g transform="translate(${h} 0) rotate(90)">${inner}</g></svg>`
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

const palette = { r: colors.red, g: colors.green, k: colors.ink }

mkdirSync(outDir, { recursive: true })
const files = {
  'border-right.svg': render(right, palette, { seed: 11 }),
  'border-left.svg': keffiyeh(),
  'band.svg': horizontal(keffiyeh()),
  'torn-mask.svg': tornMask(),
  'brush-underline.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="24" viewBox="0 0 400 24" preserveAspectRatio="none"><path d="M4 15C70 9 150 6 230 7S350 9 396 13" stroke="${colors.red}" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M40 18C120 13 220 11 340 14" stroke="${colors.red}" stroke-width="2.5" stroke-linecap="round" fill="none" opacity=".75"/></svg>`,
  'olive-branch.svg': render(recolor(olive, { a: 'r' }), palette, { seed: 5 }),
}
for (const [name, svg] of Object.entries(files)) {
  writeFileSync(resolve(outDir, name), svg)
  console.log(`${name} ${(svg.length / 1024).toFixed(1)} KB`)
}

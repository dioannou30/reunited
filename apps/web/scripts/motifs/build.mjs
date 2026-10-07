import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cypress, net, olive, teeth } from './charts.mjs'

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

const netV = rotate(net)
const netRows = netV.length * 3
const left = besideAll(
  recolor(repeatRows(mirror(teethV), netRows), { a: 'r' }),
  recolor(repeatRows(netV, netRows), { a: 'k' }),
  recolor(repeatRows(teethV, netRows), { a: 'r' }),
)

const palette = { r: colors.red, g: colors.green, k: colors.ink }

mkdirSync(outDir, { recursive: true })
const files = {
  'border-right.svg': render(right, palette, { seed: 11 }),
  'border-left.svg': render(left, palette, { seed: 23 }),
  'olive-branch.svg': render(recolor(olive, { a: 'r' }), palette, { seed: 5 }),
}
for (const [name, svg] of Object.entries(files)) {
  writeFileSync(resolve(outDir, name), svg)
  console.log(`${name} ${(svg.length / 1024).toFixed(1)} KB`)
}

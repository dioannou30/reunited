import { type CSSVariablesResolver, createTheme, type MantineColorsTuple } from '@mantine/core'

const red: MantineColorsTuple = [
  '#FCECEA',
  '#F8D3CF',
  '#F0A9A2',
  '#E77D74',
  '#DE574D',
  '#D23A2F',
  '#BE231C',
  '#9E1C16',
  '#7D1611',
  '#5C100C',
]

const green: MantineColorsTuple = [
  '#E8F3EC',
  '#CBE3D3',
  '#9BC9AB',
  '#69AD82',
  '#3F9160',
  '#227A48',
  '#12683B',
  '#0B5A30',
  '#074625',
  '#04321A',
]

const olive: MantineColorsTuple = [
  '#F3F4E8',
  '#E2E5CC',
  '#C6CC9E',
  '#A8B06F',
  '#8C954A',
  '#737C38',
  '#5E672F',
  '#4F5733',
  '#3C4227',
  '#292D1B',
]

const gray: MantineColorsTuple = [
  '#F7F2E6',
  '#EFE8D5',
  '#E3DAC3',
  '#D3C8AD',
  '#B9AD90',
  '#9A8F74',
  '#7A715B',
  '#5C5544',
  '#3F3A2F',
  '#25221B',
]

const dark: MantineColorsTuple = [
  '#EDE6D3',
  '#CFC7B2',
  '#AAA38F',
  '#858070',
  '#5E5A4F',
  '#45423A',
  '#2E2C27',
  '#1F1E1A',
  '#171613',
  '#0B0D09',
]

export const theme = createTheme({
  colors: { red, green, olive, gray, dark },
  primaryColor: 'green',
  primaryShade: { light: 7, dark: 6 },
  white: '#FFFDF8',
  black: '#0B0D09',
  fontFamily: "'Noto Sans Variable', 'Noto Sans Arabic Variable', system-ui, sans-serif",
  headings: {
    fontFamily: "'Commissioner Variable', 'Noto Sans Arabic Variable', system-ui, sans-serif",
    fontWeight: '800',
  },
  defaultRadius: 'sm',
})

export const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: { '--mantine-color-body': '#F1EADA' },
  dark: {},
})

import type { SVGProps } from 'react'

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M7 3h7l5 5v13H7zM14 3v5h5M10 12h6M10 15.5h6M10 19h4" />
    </svg>
  )
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="8" r="3" />
      <path d="M6.5 19.5c.4-3 2.7-5 5.5-5s5.1 2 5.5 5" />
      <circle cx="5.5" cy="10" r="2.2" />
      <path d="M2 18.5c.3-2.2 1.8-3.6 3.6-3.8" />
      <circle cx="18.5" cy="10" r="2.2" />
      <path d="M22 18.5c-.3-2.2-1.8-3.6-3.6-3.8" />
    </svg>
  )
}

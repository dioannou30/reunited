import { createServerFn } from '@tanstack/react-start'
import { assertIsLocale } from '../paraglide/runtime'
import {
  type HomeContent,
  type HomeImage,
  homeContent,
  type PointIcon,
  type PointLink,
} from './home'

type CmsMedia = { url?: string | null; alt: string }

type CmsHome = {
  hero?: {
    eyebrowLine1: string
    eyebrowLine2: string
    subtitleLine1: string
    subtitleLine2: string
    lede: string
    primaryCta: string
    secondaryCta: string
    image?: CmsMedia | number | null
  }
  yesToTogether: {
    titleLine1: string
    titleLine2: string
    text: string
    cta: string
    points: { icon: PointIcon; title: string; text: string; link?: PointLink | null }[]
  }
  quote: {
    text: string
    name: string
    role: string
    linkLabel: string
    image?: CmsMedia | number | null
  }
}

function toImage(
  media: CmsMedia | number | null | undefined,
  cmsUrl: string,
): HomeImage | undefined {
  if (typeof media !== 'object' || !media?.url) return undefined
  return { src: new URL(media.url, cmsUrl).href, alt: media.alt }
}

function fromCms({ hero, yesToTogether, quote }: CmsHome, cmsUrl: string): HomeContent | undefined {
  if (!hero?.subtitleLine1) return undefined
  return {
    hero: {
      eyebrow: [hero.eyebrowLine1, hero.eyebrowLine2],
      subtitle: [hero.subtitleLine1, hero.subtitleLine2],
      lede: hero.lede,
      primaryCta: hero.primaryCta,
      secondaryCta: hero.secondaryCta,
      image: toImage(hero.image, cmsUrl),
    },
    yesToTogether: {
      title: [yesToTogether.titleLine1, yesToTogether.titleLine2],
      text: yesToTogether.text,
      cta: yesToTogether.cta,
      points: yesToTogether.points.map(({ icon, title, text, link }) => ({
        icon,
        title,
        text,
        link: link ?? undefined,
      })),
    },
    quote: {
      lines: quote.text.split('\n').filter(Boolean),
      name: quote.name,
      role: quote.role,
      linkLabel: quote.linkLabel,
      image: toImage(quote.image, cmsUrl),
    },
  }
}

export const getHomeContent = createServerFn({ method: 'GET' })
  .validator((locale: string) => assertIsLocale(locale))
  .handler(async ({ data: locale }) => {
    const cmsUrl = process.env.CMS_URL
    if (!cmsUrl) return homeContent[locale]
    try {
      const response = await fetch(`${cmsUrl}/api/globals/home?locale=${locale}&depth=1`, {
        signal: AbortSignal.timeout(3000),
      })
      if (!response.ok) throw new Error(`CMS responded ${response.status}`)
      return fromCms(await response.json(), cmsUrl) ?? homeContent[locale]
    } catch (error) {
      console.error('Home content fetch failed, using bundled content', error)
      return homeContent[locale]
    }
  })

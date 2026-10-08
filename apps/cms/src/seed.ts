import config from '@payload-config'
import { getPayload } from 'payload'
import { homeContent } from '../../web/src/content/home'

const icons = ['document', 'clock', 'users'] as const

const payload = await getPayload({ config })

let pointIds: (string | null | undefined)[] = []

for (const locale of ['el', 'en', 'ar'] as const) {
  const { hero, yesToTogether, quote, closing } = homeContent[locale]
  const saved = await payload.updateGlobal({
    slug: 'home',
    locale,
    data: {
      hero: {
        eyebrowLine1: hero.eyebrow[0],
        eyebrowLine2: hero.eyebrow[1],
        subtitleLine1: hero.subtitle[0],
        subtitleLine2: hero.subtitle[1],
        lede: hero.lede,
        primaryCta: hero.primaryCta,
        secondaryCta: hero.secondaryCta,
      },
      yesToTogether: {
        titleLine1: yesToTogether.title[0],
        titleLine2: yesToTogether.title[1],
        text: yesToTogether.text,
        cta: yesToTogether.cta,
        points: yesToTogether.points.map((point, index) => ({
          id: pointIds[index],
          icon: icons[index],
          title: point.title,
          text: point.text,
          link: point.link,
        })),
      },
      quote: {
        text: quote.lines.join('\n'),
        name: quote.name,
        role: quote.role,
        linkLabel: quote.linkLabel,
      },
      closing,
    },
  })
  pointIds = saved.yesToTogether.points.map((point) => point.id)
  payload.logger.info(`Seeded home (${locale})`)
}

process.exit(0)

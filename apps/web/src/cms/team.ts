import { createServerFn } from '@tanstack/react-start'
import { assertIsLocale } from '../paraglide/runtime'
import { mockTeamMembers } from './team.mock'

export type TeamMember = {
  id: string
  name: string
  role: string
  bio?: string
  photo?: { src: string; alt: string }
}

type CmsTeamMember = {
  id: number | string
  name: string
  role: string
  bio?: string | null
  photo?: { url?: string | null; alt: string } | number | null
}

export const getTeamMembers = createServerFn({ method: 'GET' })
  .validator((locale: string) => assertIsLocale(locale))
  .handler(async ({ data: locale }): Promise<TeamMember[]> => {
    const cmsUrl = process.env.CMS_URL
    if (!cmsUrl) return mockTeamMembers(locale)
    try {
      const response = await fetch(
        `${cmsUrl}/api/team-members?locale=${locale}&sort=order&depth=1&limit=100`,
        { signal: AbortSignal.timeout(3000) },
      )
      if (!response.ok) throw new Error(`CMS responded ${response.status}`)
      const { docs } = (await response.json()) as { docs: CmsTeamMember[] }
      return docs.map(({ id, name, role, bio, photo }) => ({
        id: String(id),
        name,
        role,
        bio: bio ?? undefined,
        photo:
          typeof photo === 'object' && photo?.url
            ? { src: new URL(photo.url, cmsUrl).href, alt: photo.alt }
            : undefined,
      }))
    } catch (error) {
      console.error('Team members fetch failed', error)
      return []
    }
  })

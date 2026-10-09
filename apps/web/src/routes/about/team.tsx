import { createFileRoute } from '@tanstack/react-router'
import { getTeamMembers } from '@/cms/team'
import { TeamList } from '@/components/about/TeamList'
import { NextLink } from '@/components/NextLink'
import { PageHeader } from '@/components/PageHeader'
import { m } from '@/paraglide/messages'
import { getLocale } from '@/paraglide/runtime'

export const Route = createFileRoute('/about/team')({
  head: () => ({ meta: [{ title: `${m.nav_about_team()} · ReUnited` }] }),
  loader: () => getTeamMembers({ data: getLocale() }),
  component: Team,
})

function Team() {
  const members = Route.useLoaderData()

  return (
    <main id="main">
      <PageHeader title={m.nav_about_team()} lede={m.about_team_lede()} />
      <TeamList members={members} />
      <NextLink to="/about/how-it-started" label={m.about_team_prev()} />
    </main>
  )
}

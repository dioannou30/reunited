import { createFileRoute } from '@tanstack/react-router'
import { StoryLetter } from '@/components/about/StoryLetter'
import { NextLink } from '@/components/NextLink'
import { PageHeader } from '@/components/PageHeader'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/about/how-it-started')({
  head: () => ({ meta: [{ title: `${m.nav_about_story()} · ReUnited` }] }),
  component: HowItStarted,
})

function HowItStarted() {
  return (
    <main id="main">
      <PageHeader title={m.nav_about_story()} lede={m.about_story_lede()} />
      <StoryLetter />
      <NextLink to="/about/team" label={m.about_story_next()} />
    </main>
  )
}

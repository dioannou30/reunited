import { createFileRoute } from '@tanstack/react-router'
import { AboutLink } from '@/components/about/AboutLink'
import { StoryLetter } from '@/components/about/StoryLetter'
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
      <AboutLink to="/about/team" label={m.about_story_next()} />
    </main>
  )
}

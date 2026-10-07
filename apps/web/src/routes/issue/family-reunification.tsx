import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '@/components/PlaceholderPage'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/issue/family-reunification')({
  head: () => ({ meta: [{ title: `${m.nav_issue_what()} · ReUnited` }] }),
  component: () => <PlaceholderPage title={m.nav_issue_what()} />,
})

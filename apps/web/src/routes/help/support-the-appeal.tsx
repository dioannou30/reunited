import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '@/components/PlaceholderPage'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/help/support-the-appeal')({
  head: () => ({ meta: [{ title: `${m.nav_help_support()} · ReUnited` }] }),
  component: () => <PlaceholderPage title={m.nav_help_support()} />,
})

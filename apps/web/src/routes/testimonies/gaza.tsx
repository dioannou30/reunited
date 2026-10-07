import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '@/components/PlaceholderPage'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/testimonies/gaza')({
  head: () => ({ meta: [{ title: `${m.nav_testimonies_gaza()} · ReUnited` }] }),
  component: () => <PlaceholderPage title={m.nav_testimonies_gaza()} />,
})

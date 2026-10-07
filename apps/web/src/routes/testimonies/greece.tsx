import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '@/components/PlaceholderPage'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/testimonies/greece')({
  component: () => <PlaceholderPage title={m.nav_testimonies_greece()} />,
})

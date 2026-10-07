import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '@/components/PlaceholderPage'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/help/get-involved')({
  component: () => <PlaceholderPage title={m.nav_help_join()} />,
})

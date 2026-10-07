import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '@/components/PlaceholderPage'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/issue/where-it-stalls')({
  component: () => <PlaceholderPage title={m.nav_issue_stalls()} />,
})

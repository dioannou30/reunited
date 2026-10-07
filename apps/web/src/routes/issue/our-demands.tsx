import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '@/components/PlaceholderPage'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/issue/our-demands')({
  component: () => <PlaceholderPage title={m.nav_issue_demands()} />,
})

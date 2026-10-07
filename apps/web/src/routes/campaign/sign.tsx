import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '@/components/PlaceholderPage'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/campaign/sign')({
  component: () => <PlaceholderPage title={m.nav_campaign_sign()} />,
})

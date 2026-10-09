import { createFileRoute } from '@tanstack/react-router'
import { ProcessSteps } from '@/components/issue/IssueBlocks'
import { ProcessStrip } from '@/components/issue/ProcessStrip'
import { NextLink } from '@/components/NextLink'
import { PageHeader } from '@/components/PageHeader'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/issue/family-reunification')({
  head: () => ({ meta: [{ title: `${m.nav_issue_what()} · ReUnited` }] }),
  component: FamilyReunification,
})

function FamilyReunification() {
  return (
    <main id="main">
      <PageHeader title={m.nav_issue_what()} lede={m.issue_what_lede()} />
      <ProcessStrip state="whole" />
      <ProcessSteps />
      <NextLink to="/issue/where-it-stalls" label={m.issue_next_stall()} />
    </main>
  )
}

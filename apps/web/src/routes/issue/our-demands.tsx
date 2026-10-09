import { createFileRoute } from '@tanstack/react-router'
import { DemandsList } from '@/components/issue/IssueBlocks'
import { ProcessStrip } from '@/components/issue/ProcessStrip'
import { PageHeader } from '@/components/PageHeader'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/issue/our-demands')({
  head: () => ({ meta: [{ title: `${m.nav_issue_demands()} · ReUnited` }] }),
  component: OurDemands,
})

function OurDemands() {
  return (
    <main id="main">
      <PageHeader title={m.nav_issue_demands()} lede={m.issue_demands_lede()} />
      <ProcessStrip state="mended" />
      <DemandsList />
    </main>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import { StallCases } from '@/components/issue/IssueBlocks'
import { ProcessStrip } from '@/components/issue/ProcessStrip'
import { NextLink } from '@/components/NextLink'
import { PageHeader } from '@/components/PageHeader'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/issue/where-it-stalls')({
  head: () => ({ meta: [{ title: `${m.nav_issue_stalls()} · ReUnited` }] }),
  component: WhereItStalls,
})

function WhereItStalls() {
  return (
    <main id="main">
      <PageHeader title={m.nav_issue_stalls()} lede={m.issue_stall_lede()} />
      <ProcessStrip state="torn" />
      <StallCases />
      <NextLink to="/issue/our-demands" label={m.issue_next_demands()} />
    </main>
  )
}

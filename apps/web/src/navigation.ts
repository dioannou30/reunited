import { m } from '@/paraglide/messages'

export const navigation = [
  {
    id: 'about',
    label: m.nav_about,
    items: [
      { to: '/about/how-it-started', label: m.nav_about_story },
      { to: '/about/team', label: m.nav_about_team },
    ],
  },
  {
    id: 'issue',
    label: m.nav_issue,
    items: [
      { to: '/issue/family-reunification', label: m.nav_issue_what },
      { to: '/issue/where-it-stalls', label: m.nav_issue_stalls },
      { to: '/issue/our-demands', label: m.nav_issue_demands },
    ],
  },
  {
    id: 'testimonies',
    label: m.nav_testimonies,
    items: [
      { to: '/testimonies/greece', label: m.nav_testimonies_greece },
      { to: '/testimonies/gaza', label: m.nav_testimonies_gaza },
    ],
  },
  {
    id: 'campaign',
    label: m.nav_campaign,
    items: [
      { to: '/campaign/actions', label: m.nav_campaign_actions },
      { to: '/campaign/sign', label: m.nav_campaign_sign },
    ],
  },
  {
    id: 'help',
    label: m.nav_help_short,
    items: [
      { to: '/help/support-the-appeal', label: m.nav_help_support },
      { to: '/help/get-involved', label: m.nav_help_join },
    ],
  },
] as const

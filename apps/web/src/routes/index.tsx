import { createFileRoute } from '@tanstack/react-router'
import { FamilyQuote } from '@/components/home/FamilyQuote'
import { Hero } from '@/components/home/Hero'
import { YesToTogether } from '@/components/home/YesToTogether'
import { getHomeContent } from '@/content/getHomeContent'
import { getLocale } from '@/paraglide/runtime'

export const Route = createFileRoute('/')({
  loader: () => getHomeContent({ data: getLocale() }),
  component: Home,
})

function Home() {
  const content = Route.useLoaderData()

  return (
    <main id="main">
      <Hero content={content.hero} />
      <YesToTogether content={content.yesToTogether} />
      <FamilyQuote content={content.quote} />
    </main>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import { FamilyQuote } from '@/components/home/FamilyQuote'
import { Hero } from '@/components/home/Hero'
import { YesToTogether } from '@/components/home/YesToTogether'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main id="main">
      <Hero />
      <YesToTogether />
      <FamilyQuote />
    </main>
  )
}

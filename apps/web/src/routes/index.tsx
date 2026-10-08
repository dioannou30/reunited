import { createFileRoute } from '@tanstack/react-router'
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
    </main>
  )
}

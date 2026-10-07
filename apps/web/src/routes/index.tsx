import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/home/Hero'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main id="main">
      <Hero />
    </main>
  )
}

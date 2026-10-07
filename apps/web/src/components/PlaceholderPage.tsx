import { m } from '@/paraglide/messages'

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <main>
      <h1>{title}</h1>
      <p>{m.placeholder()}</p>
    </main>
  )
}

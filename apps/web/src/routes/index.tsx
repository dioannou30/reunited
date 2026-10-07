import { Container, Stack, Text, Title } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="lg">
        <Title order={1}>{m.hello()}</Title>
        <Text c="dimmed">{m.intro()}</Text>
      </Stack>
    </Container>
  )
}

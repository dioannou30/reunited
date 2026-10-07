import { Button, Container, Group, Stack, Text, Title } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import { m } from '@/paraglide/messages'
import { getLocale, type Locale, locales, setLocale } from '@/paraglide/runtime'

const localeNames: Record<Locale, string> = {
  el: 'Ελληνικά',
  en: 'English',
  ar: 'العربية',
}

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const current = getLocale()

  return (
    <Container size="sm" py="xl">
      <Stack gap="lg">
        <Title order={1}>{m.hello()}</Title>
        <Text c="dimmed">{m.intro()}</Text>
        <Group gap="sm" role="group" aria-label={m.language()}>
          {locales.map((locale) => (
            <Button
              key={locale}
              lang={locale}
              variant={locale === current ? 'filled' : 'default'}
              aria-pressed={locale === current}
              onClick={() => setLocale(locale)}
            >
              {localeNames[locale]}
            </Button>
          ))}
        </Group>
      </Stack>
    </Container>
  )
}

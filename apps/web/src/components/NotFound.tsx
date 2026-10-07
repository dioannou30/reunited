import { Button, Group } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { m } from '@/paraglide/messages'

export function NotFound() {
  return (
    <main id="main" className="page-placeholder">
      <h1>{m.not_found_title()}</h1>
      <p>{m.not_found_text()}</p>
      <Group gap="sm" mt="lg">
        <Button component={Link} to="/" variant="outline" color="dark.9" radius="xl">
          {m.back_home()}
        </Button>
        <Button component={Link} to="/campaign/sign" color="red.6" radius="xl">
          {m.cta_sign()}
        </Button>
      </Group>
    </main>
  )
}

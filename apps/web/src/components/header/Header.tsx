import { Burger, Button, Drawer, Menu, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link, useLocation } from '@tanstack/react-router'
import { ArrowRightIcon, ChevronDownIcon } from '@/components/icons'
import { navigation } from '@/navigation'
import { m } from '@/paraglide/messages'
import classes from './Header.module.css'
import { LanguageSwitcher } from './LanguageSwitcher'

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" className={classes.logo} onClick={onClick}>
      <img src="/logo.svg" alt="ReUnited" width={1146} height={442} className={classes.logoImage} />
    </Link>
  )
}

function SignButton({ fullWidth, onClick }: { fullWidth?: boolean; onClick?: () => void }) {
  return (
    <Button
      component={Link}
      to="/campaign/sign"
      color="red.6"
      radius="xl"
      size="md"
      fullWidth={fullWidth}
      rightSection={<ArrowRightIcon className={classes.arrow} />}
      className={classes.signButton}
      onClick={onClick}
    >
      {m.cta_sign()}
    </Button>
  )
}

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false)
  const pathname = useLocation({ select: (location) => location.pathname })

  return (
    <>
      <div className={classes.langBar}>
        <LanguageSwitcher />
      </div>
      <header className={classes.header}>
        <div className={classes.inner}>
          <Logo />

          <nav aria-label={m.nav_main()} className={classes.desktopNav}>
            {navigation.map((section) => (
              <Menu
                key={section.id}
                trigger="click-hover"
                openDelay={60}
                closeDelay={150}
                position="bottom-start"
                offset={4}
              >
                <Menu.Target>
                  <UnstyledButton
                    className={classes.navTrigger}
                    data-active={section.items.some((item) => item.to === pathname) || undefined}
                  >
                    {section.label()}
                    <ChevronDownIcon className={classes.chevron} />
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown className={classes.dropdown}>
                  {section.items.map((item) => (
                    <Menu.Item
                      key={item.to}
                      component={Link}
                      to={item.to}
                      className={classes.dropdownItem}
                    >
                      {item.label()}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            ))}
          </nav>

          <div className={classes.actions}>
            <SignButton />
            <LanguageSwitcher className={classes.langInline} />
            <Burger
              opened={opened}
              onClick={toggle}
              size="md"
              className={classes.burger}
              aria-expanded={opened}
              aria-label={opened ? m.nav_close_menu() : m.nav_open_menu()}
            />
          </div>
        </div>

        <Drawer
          opened={opened}
          onClose={close}
          position="right"
          size="100%"
          title={<Logo onClick={close} />}
          closeButtonProps={{ 'aria-label': m.nav_close_menu(), className: classes.drawerClose }}
          classNames={{ body: classes.drawerBody }}
        >
          <SignButton fullWidth onClick={close} />
          <LanguageSwitcher className={classes.drawerLang} />
          <nav aria-label={m.nav_main()} className={classes.drawerNav}>
            {navigation.map((section) => (
              <section key={section.id} className={classes.drawerSection}>
                <h2 className={classes.drawerHeading}>{section.label()}</h2>
                <ul className={classes.drawerList}>
                  {section.items.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} className={classes.drawerLink} onClick={close}>
                        {item.label()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </Drawer>
      </header>
      <div className={classes.band} aria-hidden="true" />
    </>
  )
}

import { Accordion, Burger, Button, Drawer, Menu, Stack, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link } from '@tanstack/react-router'
import { ArrowRightIcon, ChevronDownIcon } from '@/components/icons'
import { navigation } from '@/navigation'
import { m } from '@/paraglide/messages'
import classes from './Header.module.css'
import { LanguageSwitcher } from './LanguageSwitcher'

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" className={classes.logo} onClick={onClick}>
      <span className={classes.logoRe}>Re</span>United
    </Link>
  )
}

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false)

  return (
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
                <UnstyledButton className={classes.navTrigger}>
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
          <Button
            component={Link}
            to="/campaign/sign"
            color="red"
            radius="xl"
            rightSection={<ArrowRightIcon className={classes.arrow} />}
            className={classes.signButton}
          >
            {m.cta_sign()}
          </Button>
          <LanguageSwitcher className={classes.desktopOnly} />
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            className={classes.burger}
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
        closeButtonProps={{ 'aria-label': m.nav_close_menu() }}
        classNames={{ body: classes.drawerBody }}
      >
        <nav aria-label={m.nav_main()}>
          <Accordion classNames={{ control: classes.accordionControl }}>
            {navigation.map((section) => (
              <Accordion.Item key={section.id} value={section.id}>
                <Accordion.Control>{section.label()}</Accordion.Control>
                <Accordion.Panel>
                  <Stack gap={0}>
                    {section.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={classes.drawerLink}
                        onClick={close}
                      >
                        {item.label()}
                      </Link>
                    ))}
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </nav>
        <Button
          component={Link}
          to="/campaign/sign"
          color="red"
          radius="xl"
          size="md"
          fullWidth
          rightSection={<ArrowRightIcon className={classes.arrow} />}
          className={classes.signButton}
          onClick={close}
        >
          {m.cta_sign()}
        </Button>
        <LanguageSwitcher className={classes.drawerLang} />
      </Drawer>
    </header>
  )
}

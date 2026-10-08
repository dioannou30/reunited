import { Button } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '@/components/icons'
import { navigation } from '@/navigation'
import { m } from '@/paraglide/messages'
import classes from './Footer.module.css'

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.band} aria-hidden="true" />
      <div className={classes.inner}>
        <div className={classes.brand}>
          <Link to="/" className={classes.logo}>
            <img src="/logo.svg" alt="ReUnited" width={1146} height={442} />
          </Link>
          <p className={classes.tagline}>{m.footer_tagline()}</p>
          <Button
            component={Link}
            to="/campaign/sign"
            color="red.6"
            radius="xl"
            size="md"
            rightSection={<ArrowRightIcon className={classes.arrow} />}
            className={classes.cta}
          >
            {m.cta_sign()}
          </Button>
        </div>

        <nav aria-label={m.nav_footer()} className={classes.sitemap}>
          {navigation.map((section) => (
            <div key={section.id} className={classes.column}>
              <h2 className={classes.heading}>{section.label()}</h2>
              <ul className={classes.list}>
                {section.items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className={classes.link}>
                      {item.label()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className={classes.bottom}>
          <ul className={classes.utility}>
            <li>
              <Link to="/contact" className={classes.link}>
                {m.nav_contact()}
              </Link>
            </li>
            <li>
              <Link to="/privacy" className={classes.link}>
                {m.nav_privacy()}
              </Link>
            </li>
          </ul>
          <p className={classes.credit}>
            {m.motif_credit()}{' '}
            <a
              href="https://tirazain.com"
              target="_blank"
              rel="noopener"
              className={classes.inlineLink}
            >
              Tirazain
            </a>
          </p>
          <p className={classes.credit}>© {new Date().getFullYear()} ReUnited</p>
        </div>
      </div>
    </footer>
  )
}

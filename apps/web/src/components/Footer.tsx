import { Link } from '@tanstack/react-router'
import { m } from '@/paraglide/messages'
import classes from './Footer.module.css'

export function Footer() {
  return (
    <footer className={classes.footer}>
      <nav aria-label={m.nav_footer()} className={classes.links}>
        <Link to="/about/how-it-started" className={classes.link}>
          {m.nav_about()}
        </Link>
        <Link to="/contact" className={classes.link}>
          {m.nav_contact()}
        </Link>
        <Link to="/privacy" className={classes.link}>
          {m.nav_privacy()}
        </Link>
      </nav>
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
      <p className={classes.credit}>© 2026 ReUnited</p>
    </footer>
  )
}

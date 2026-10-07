import { m } from '@/paraglide/messages'
import classes from './Footer.module.css'

export function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes.credit}>
        {m.motif_credit()}{' '}
        <a href="https://tirazain.com" target="_blank" rel="noopener" className={classes.link}>
          Tirazain
        </a>
      </p>
    </footer>
  )
}

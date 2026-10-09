import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '@/components/icons'
import classes from './AboutLink.module.css'

export function AboutLink({
  to,
  label,
}: {
  to: '/about/how-it-started' | '/about/team'
  label: string
}) {
  return (
    <nav className={classes.wrap} aria-label={label}>
      <Link to={to} className={classes.link}>
        {label}
        <span className={classes.circle}>
          <ArrowRightIcon className={classes.arrow} />
        </span>
      </Link>
    </nav>
  )
}

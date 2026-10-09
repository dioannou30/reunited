import { Link, type LinkProps } from '@tanstack/react-router'
import { ArrowRightIcon } from '@/components/icons'
import classes from './NextLink.module.css'

export function NextLink({ to, label }: { to: LinkProps['to']; label: string }) {
  return (
    <div className={classes.wrap}>
      <Link to={to} className={classes.link}>
        {label}
        <span className={classes.circle}>
          <ArrowRightIcon className={classes.arrow} />
        </span>
      </Link>
    </div>
  )
}

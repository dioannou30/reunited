import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '@/components/icons'
import { m } from '@/paraglide/messages'
import classes from './FamilyQuote.module.css'

export function FamilyQuote() {
  return (
    <section className={classes.section} aria-labelledby="family-quote-name">
      <div className={classes.media}>
        <div className={classes.frame} aria-hidden="true" />
      </div>

      <figure className={classes.figure}>
        <blockquote className={classes.quote}>
          <span>{m.home_quote_line_1()}</span>
          <span>{m.home_quote_line_2()}</span>
          <span>{m.home_quote_line_3()}</span>
        </blockquote>
        <figcaption className={classes.caption}>
          <span id="family-quote-name" className={classes.name}>
            {m.home_quote_name()}
          </span>
          <span>{m.home_quote_role()}</span>
        </figcaption>
        <Link to="/testimonies/greece" className={classes.link}>
          {m.home_quote_link()}
          <span className={classes.circle}>
            <ArrowRightIcon className={classes.arrow} />
          </span>
        </Link>
      </figure>
    </section>
  )
}

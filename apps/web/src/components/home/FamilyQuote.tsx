import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '@/components/icons'
import { homeContent } from '@/content/home'
import { getLocale } from '@/paraglide/runtime'
import classes from './FamilyQuote.module.css'

export function FamilyQuote() {
  const { quote } = homeContent[getLocale()]

  return (
    <section className={classes.section}>
      <div className={classes.media} aria-hidden="true">
        <div className={classes.frame} />
      </div>

      <figure className={classes.figure}>
        <blockquote className={classes.quote}>
          {quote.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </blockquote>
        <figcaption className={classes.caption}>
          <span className={classes.name}>{quote.name}</span>
          <span>{quote.role}</span>
        </figcaption>
        <Link to="/testimonies/greece" className={classes.link} aria-label={quote.linkLabel}>
          <ArrowRightIcon className={classes.arrow} />
        </Link>
      </figure>
    </section>
  )
}

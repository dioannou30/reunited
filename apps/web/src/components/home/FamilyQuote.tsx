import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '@/components/icons'
import type { HomeContent } from '@/content/home'
import classes from './FamilyQuote.module.css'

export function FamilyQuote({ content: quote }: { content: HomeContent['quote'] }) {
  return (
    <section className={classes.section}>
      <div className={classes.media}>
        {quote.image ? (
          <img src={quote.image.src} alt={quote.image.alt} className={classes.frame} />
        ) : (
          <div className={classes.frame} aria-hidden="true" />
        )}
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

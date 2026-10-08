import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '@/components/icons'
import type { HomeContent } from '@/content/home'
import classes from './FamilyQuote.module.css'

export function FamilyQuote({ content: quote }: { content: HomeContent['quote'] }) {
  return (
    <section className={classes.section} aria-labelledby="family-quote-name">
      <div className={classes.media}>
        {quote.image ? (
          <img src={quote.image.src} alt={quote.image.alt} className={classes.frame} />
        ) : (
          <div className={classes.frame} aria-hidden="true" />
        )}
      </div>

      <figure className={classes.figure}>
        <blockquote className={classes.quote}>
          {quote.lines.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </blockquote>
        <figcaption className={classes.caption}>
          <span id="family-quote-name" className={classes.name}>
            {quote.name}
          </span>
          <span>{quote.role}</span>
        </figcaption>
        <Link to="/testimonies/greece" className={classes.link}>
          {quote.linkLabel}
          <span className={classes.circle}>
            <ArrowRightIcon className={classes.arrow} />
          </span>
        </Link>
      </figure>
    </section>
  )
}

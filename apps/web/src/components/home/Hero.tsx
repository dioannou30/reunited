import { Button } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '@/components/icons'
import type { HomeContent } from '@/content/home'
import classes from './Hero.module.css'

export function Hero({ content: hero }: { content: HomeContent['hero'] }) {
  return (
    <section className={classes.hero} aria-labelledby="hero-title">
      <div className={classes.inner}>
        <div className={classes.intro}>
          <p className={classes.eyebrow}>
            <span>{hero.eyebrow[0]}</span>
            <span>{hero.eyebrow[1]}</span>
          </p>
          <h1 id="hero-title" className={classes.title}>
            <img
              src="/logo.svg"
              alt="ReUnited"
              width={1146}
              height={442}
              className={classes.wordmark}
            />
            <span className={classes.subtitle}>
              <span>{hero.subtitle[0]}</span>{' '}
              <span className={classes.underlined}>{hero.subtitle[1]}</span>
            </span>
          </h1>
        </div>

        <div className={classes.side}>
          <p className={classes.lede}>{hero.lede}</p>
          <div className={classes.ctas}>
            <Button
              component={Link}
              to="/campaign/sign"
              color="red.6"
              radius="xl"
              size="lg"
              rightSection={<ArrowRightIcon className={classes.arrow} />}
              className={classes.cta}
              classNames={{ label: classes.ctaLabel }}
            >
              {hero.primaryCta}
            </Button>
            <Button
              component={Link}
              to="/about/how-it-started"
              variant="outline"
              color="dark.9"
              radius="xl"
              size="lg"
              rightSection={<ArrowRightIcon className={classes.arrow} />}
              className={classes.cta}
              classNames={{ label: classes.ctaLabel }}
            >
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
      </div>

      <div className={classes.media}>
        {hero.image ? (
          <img src={hero.image.src} alt={hero.image.alt} className={classes.frame} />
        ) : (
          <div className={classes.frame} aria-hidden="true" />
        )}
        <img
          src="/motifs/olive-sprig.svg"
          alt=""
          width={240}
          height={560}
          className={classes.olive}
        />
      </div>
    </section>
  )
}

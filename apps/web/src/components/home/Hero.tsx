import { Button } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '@/components/icons'
import { homeContent } from '@/content/home'
import { getLocale } from '@/paraglide/runtime'
import classes from './Hero.module.css'

export function Hero() {
  const { hero } = homeContent[getLocale()]

  return (
    <section className={classes.hero} aria-labelledby="hero-title">
      <div className={classes.inner}>
        <div className={classes.intro}>
          <p className={classes.eyebrow}>
            <span>{hero.eyebrow[0]}</span>
            <span>{hero.eyebrow[1]}</span>
          </p>
          <h1 id="hero-title" className={classes.title}>
            <span className={classes.wordmark} dir="ltr">
              <span className={classes.re}>Re</span>United
            </span>
            <span className={classes.subtitle}>{hero.subtitle}</span>
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
            >
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
      </div>

      <div className={classes.media}>
        <div className={classes.frame} aria-hidden="true" />
        <img
          src="/motifs/olive-branch.svg"
          alt=""
          width={162}
          height={108}
          className={classes.olive}
        />
      </div>
    </section>
  )
}

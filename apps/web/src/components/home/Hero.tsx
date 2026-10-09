import { Button } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '@/components/icons'
import { m } from '@/paraglide/messages'
import classes from './Hero.module.css'

export function Hero() {
  return (
    <section className={classes.hero} aria-labelledby="hero-title">
      <div className={classes.inner}>
        <div className={classes.intro}>
          <p className={classes.eyebrow}>
            <span>{m.home_hero_eyebrow_1()}</span>
            <span>{m.home_hero_eyebrow_2()}</span>
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
              <span>{m.home_hero_subtitle_1()}</span>{' '}
              <span className={classes.underlined}>{m.home_hero_subtitle_2()}</span>
            </span>
          </h1>
        </div>

        <div className={classes.side}>
          <p className={classes.lede}>{m.home_hero_lede()}</p>
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
              {m.home_hero_cta_primary()}
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
              {m.home_hero_cta_secondary()}
            </Button>
          </div>
        </div>
      </div>

      <div className={classes.media}>
        <div className={classes.frame} aria-hidden="true" />
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

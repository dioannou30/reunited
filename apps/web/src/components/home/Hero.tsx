import { Button } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '@/components/icons'
import { homeContent } from '@/content/home'
import { getLocale } from '@/paraglide/runtime'
import classes from './Hero.module.css'

const desktopSizes =
  '(min-width: 90em) 77rem, (min-width: 62em) calc(100vw - 15rem), calc(100vw - 2rem)'

const srcSet = (name: string, widths: number[], format: string) =>
  widths.map((w) => `/images/hero/${name}-${w}.${format} ${w}w`).join(', ')

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
        <picture className={classes.frame}>
          <source
            media="(min-width: 36em)"
            type="image/avif"
            srcSet={srcSet('desktop', [1200, 1600, 2400], 'avif')}
            sizes={desktopSizes}
          />
          <source
            media="(min-width: 36em)"
            type="image/webp"
            srcSet={srcSet('desktop', [1200, 1600, 2400], 'webp')}
            sizes={desktopSizes}
          />
          <source media="(min-width: 36em)" srcSet="/images/hero/desktop-1600.jpg" />
          <source
            type="image/avif"
            srcSet={srcSet('mobile', [800, 1200, 1600], 'avif')}
            sizes="calc(100vw - 2rem)"
          />
          <source
            type="image/webp"
            srcSet={srcSet('mobile', [800, 1200, 1600], 'webp')}
            sizes="calc(100vw - 2rem)"
          />
          <img
            src="/images/hero/mobile-1200.jpg"
            alt={hero.imageAlt}
            width={1600}
            height={1200}
            fetchPriority="high"
            className={classes.image}
          />
        </picture>
        <img
          src="/motifs/olive-branch.svg"
          alt=""
          width={54}
          height={186}
          className={classes.olive}
        />
      </div>
    </section>
  )
}

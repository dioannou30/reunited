import { Button } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '@/components/icons'
import type { HomeContent } from '@/content/home'
import classes from './ClosingAsk.module.css'

export function ClosingAsk({ content }: { content: HomeContent['closing'] }) {
  return (
    <section className={classes.section} aria-labelledby="closing-title">
      <div className={classes.inner}>
        <h2 id="closing-title" className={classes.title}>
          {content.title}
        </h2>
        <p className={classes.text}>{content.text}</p>
        <Button
          component={Link}
          to="/campaign/sign"
          color="red.6"
          radius="xl"
          size="lg"
          rightSection={<ArrowRightIcon className={classes.arrow} />}
          className={classes.cta}
        >
          {content.cta}
        </Button>
      </div>
    </section>
  )
}

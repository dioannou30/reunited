import { Button } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { ArrowRightIcon, ClockIcon, DocumentIcon, UsersIcon } from '@/components/icons'
import type { HomeContent, PointIcon } from '@/content/home'
import classes from './YesToTogether.module.css'

const icons: Record<PointIcon, { Icon: typeof DocumentIcon; tone: string }> = {
  document: { Icon: DocumentIcon, tone: classes.toneOlive },
  clock: { Icon: ClockIcon, tone: classes.toneRed },
  users: { Icon: UsersIcon, tone: classes.toneOlive },
}

export function YesToTogether({ content }: { content: HomeContent['yesToTogether'] }) {
  return (
    <section className={classes.section} aria-labelledby="yes-to-together-title">
      <div className={classes.divider} aria-hidden="true">
        <span className={classes.wave} />
        <img
          src="/motifs/olive-sprig.svg"
          alt=""
          width={220}
          height={260}
          className={classes.sprig}
        />
        <span className={classes.wave} />
      </div>

      <div className={classes.inner}>
        <div className={classes.intro}>
          <h2 id="yes-to-together-title" className={classes.title}>
            <span>{content.title[0]}</span> <span>{content.title[1]}</span>
          </h2>
          <p className={classes.text}>{content.text}</p>
          <Button
            component={Link}
            to="/issue/family-reunification"
            variant="outline"
            color="dark.9"
            radius="xl"
            size="md"
            rightSection={<ArrowRightIcon className={classes.arrow} />}
            className={classes.cta}
          >
            {content.cta}
          </Button>
        </div>

        <ul className={classes.points}>
          {content.points.map((point) => {
            const { Icon, tone } = icons[point.icon]
            return (
              <li key={point.title} className={classes.point}>
                <span className={`${classes.blob} ${tone}`}>
                  <Icon className={classes.icon} />
                </span>
                <div className={classes.pointBody}>
                  <h3 className={classes.pointTitle}>{point.title}</h3>
                  <p className={classes.pointText}>{point.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

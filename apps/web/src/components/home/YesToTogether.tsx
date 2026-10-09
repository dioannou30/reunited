import { Button } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { ArrowRightIcon, ClockIcon, DocumentIcon, UsersIcon } from '@/components/icons'
import { m } from '@/paraglide/messages'
import classes from './YesToTogether.module.css'

const points = [
  {
    Icon: DocumentIcon,
    tone: classes.toneOlive,
    title: m.home_yes_right_title,
    text: m.home_yes_right_text,
  },
  {
    Icon: ClockIcon,
    tone: classes.toneRed,
    title: m.home_yes_minute_title,
    text: m.home_yes_minute_text,
    link: '/campaign/sign',
  },
  {
    Icon: UsersIcon,
    tone: classes.toneOlive,
    title: m.home_yes_voice_title,
    text: m.home_yes_voice_text,
  },
] as const

export function YesToTogether() {
  return (
    <section className={classes.section} aria-labelledby="yes-to-together-title">
      <div className={classes.divider} aria-hidden="true">
        <span className={classes.wave} />
        <img
          src="/motifs/olive-twig.svg"
          alt=""
          width={140}
          height={80}
          className={classes.sprig}
        />
        <span className={classes.wave} />
      </div>

      <div className={classes.inner}>
        <div className={classes.intro}>
          <h2 id="yes-to-together-title" className={classes.title}>
            <span>{m.home_yes_title_1()}</span> <span>{m.home_yes_title_2()}</span>
          </h2>
          <p className={classes.text}>{m.home_yes_text()}</p>
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
            {m.home_yes_cta()}
          </Button>
        </div>

        <ul className={classes.points}>
          {points.map((point, index) => {
            const { Icon, tone } = point
            return (
              <li key={index} className={classes.point}>
                <span className={`${classes.blob} ${tone}`}>
                  <Icon className={classes.icon} />
                </span>
                <div className={classes.pointBody}>
                  <h3 className={classes.pointTitle}>
                    {'link' in point ? (
                      <Link to={point.link} className={classes.pointLink}>
                        {point.title()}
                        <ArrowRightIcon className={classes.pointArrow} />
                      </Link>
                    ) : (
                      point.title()
                    )}
                  </h3>
                  <p className={classes.pointText}>{point.text()}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

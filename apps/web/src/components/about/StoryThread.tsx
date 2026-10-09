import { m } from '@/paraglide/messages'
import classes from './StoryThread.module.css'

const stations = [
  { date: m.about_story_1_date, title: m.about_story_1_title, text: m.about_story_1_text },
  { date: m.about_story_2_date, title: m.about_story_2_title, text: m.about_story_2_text },
  { date: m.about_story_3_date, title: m.about_story_3_title, text: m.about_story_3_text },
  { date: m.about_story_4_date, title: m.about_story_4_title, text: m.about_story_4_text },
]

export function StoryThread() {
  return (
    <ol className={classes.thread}>
      {stations.map((station, index) => (
        <li key={index} className={classes.station}>
          <img
            src="/motifs/stitch-knot.svg"
            alt=""
            width={32}
            height={32}
            className={classes.knot}
          />
          <p className={classes.date}>{station.date()}</p>
          <h2 className={classes.title}>{station.title()}</h2>
          <p className={classes.text}>{station.text()}</p>
        </li>
      ))}
    </ol>
  )
}

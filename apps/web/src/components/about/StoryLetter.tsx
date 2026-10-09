import { m } from '@/paraglide/messages'
import classes from './StoryLetter.module.css'

const paragraphs = [m.about_story_p1, m.about_story_p2, m.about_story_p3, m.about_story_p4]

export function StoryLetter() {
  return (
    <article className={classes.wrap}>
      <div className={classes.letter}>
        <p className={classes.opening}>{m.about_story_opening()}</p>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={classes.paragraph}>
            {paragraph()}
          </p>
        ))}
        <div className={classes.signatureRow}>
          <img
            src="/logo.svg"
            alt="ReUnited"
            width={1146}
            height={442}
            className={classes.signature}
          />
          <img
            src="/motifs/olive-twig.svg"
            alt=""
            width={140}
            height={80}
            className={classes.twig}
          />
        </div>
      </div>
      <img
        src="/motifs/olive-sprig.svg"
        alt=""
        width={240}
        height={560}
        className={classes.olive}
      />
    </article>
  )
}

import type { TeamMember } from '@/cms/team'
import { m } from '@/paraglide/messages'
import { getLocale } from '@/paraglide/runtime'
import classes from './TeamList.module.css'

const tones = [classes.toneOlive, classes.toneRed, classes.toneSand]

function initials(name: string) {
  const locale = getLocale()
  const words = name.trim().split(/\s+/)
  const letters = locale === 'ar' ? [words[0]?.[0]] : words.slice(0, 2).map((word) => word[0])
  return letters.join('').toLocaleUpperCase(locale)
}

export function TeamList({ members }: { members: TeamMember[] }) {
  if (members.length === 0) {
    return (
      <div className={classes.empty}>
        <img src="/motifs/olive-twig.svg" alt="" width={140} height={80} />
        <p>{m.about_team_empty()}</p>
      </div>
    )
  }

  return (
    <ul className={classes.list}>
      {members.map((member, index) => (
        <li key={member.id} className={classes.member}>
          {member.photo ? (
            <img
              src={member.photo.src}
              alt={member.photo.alt}
              className={classes.frame}
              loading="lazy"
            />
          ) : (
            <span
              className={`${classes.frame} ${classes.monogram} ${tones[index % tones.length]}`}
              aria-hidden="true"
            >
              {initials(member.name)}
            </span>
          )}
          <h2 className={classes.name}>{member.name}</h2>
          <p className={classes.role}>{member.role}</p>
          {member.bio ? <p className={classes.bio}>{member.bio}</p> : null}
        </li>
      ))}
    </ul>
  )
}

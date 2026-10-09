import type { TeamMember } from '@/cms/team'
import { m } from '@/paraglide/messages'
import { getLocale } from '@/paraglide/runtime'
import classes from './TeamList.module.css'

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
        <img src="/motifs/stitch-knot.svg" alt="" width={32} height={32} />
        <p>{m.about_team_empty()}</p>
      </div>
    )
  }

  return (
    <ul className={classes.list}>
      {members.map((member) => (
        <li key={member.id} className={classes.member}>
          <div className={classes.portrait}>
            {member.photo ? (
              <img
                src={member.photo.src}
                alt={member.photo.alt}
                className={classes.photo}
                loading="lazy"
              />
            ) : (
              <span className={classes.monogram} aria-hidden="true">
                {initials(member.name)}
              </span>
            )}
          </div>
          <div className={classes.body}>
            <h2 className={classes.name}>{member.name}</h2>
            <p className={classes.role}>{member.role}</p>
            {member.bio ? <p className={classes.bio}>{member.bio}</p> : null}
          </div>
        </li>
      ))}
    </ul>
  )
}

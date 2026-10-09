import type { CSSProperties } from 'react'
import { m } from '@/paraglide/messages'
import classes from './ProcessStrip.module.css'
import { steps } from './steps'

type StripState = 'whole' | 'torn' | 'mended'

const breakAfter = 4

function position(index: number, state: StripState) {
  return state !== 'whole' && index >= breakAfter ? index + 2 : index + 1
}

export function ProcessStrip({ state }: { state: StripState }) {
  const note = state === 'torn' ? m.issue_strip_break() : m.issue_strip_mended()

  return (
    <div className={classes.wrap}>
      <ol className={classes.strip} data-state={state} aria-label={m.issue_strip_label()}>
        {steps.map((step, index) => (
          <li
            key={index}
            className={classes.step}
            data-after-break={(state !== 'whole' && index >= breakAfter) || undefined}
            style={{ '--pos': position(index, state) } as CSSProperties}
          >
            <span className={classes.number}>{index + 1}</span>
            <span className={classes.label}>{step.label()}</span>
          </li>
        ))}
        {state !== 'whole' ? (
          <li className={classes.break} style={{ '--pos': breakAfter + 1 } as CSSProperties}>
            <span className={classes.srOnly}>{note}</span>
          </li>
        ) : null}
      </ol>
    </div>
  )
}

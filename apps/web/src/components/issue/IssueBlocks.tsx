import { m } from '@/paraglide/messages'
import classes from './IssueBlocks.module.css'
import { steps } from './steps'

export function ProcessSteps() {
  return (
    <ol className={classes.list}>
      {steps.map((step, index) => (
        <li key={index} className={classes.item}>
          <span className={classes.number} aria-hidden="true">
            {index + 1}
          </span>
          <div className={classes.body}>
            <h2 className={classes.title}>{step.label()}</h2>
            <p className={classes.text}>{step.text()}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

const cases = [
  { title: m.issue_stall_a_title, text: m.issue_stall_a_text },
  { title: m.issue_stall_b_title, text: m.issue_stall_b_text },
]

export function StallCases() {
  return (
    <div className={classes.cases}>
      <div className={classes.caseGrid}>
        {cases.map((item, index) => (
          <section key={index} className={classes.case}>
            <h2 className={classes.title}>{item.title()}</h2>
            <p className={classes.text}>{item.text()}</p>
          </section>
        ))}
      </div>
      <section className={classes.cost}>
        <h2 className={classes.costTitle}>{m.issue_stall_cost_title()}</h2>
        <p className={classes.costText}>{m.issue_stall_cost_text()}</p>
      </section>
    </div>
  )
}

const demands = [
  { title: m.issue_demand_1_title, text: m.issue_demand_1_text },
  { title: m.issue_demand_2_title, text: m.issue_demand_2_text },
  { title: m.issue_demand_3_title, text: m.issue_demand_3_text },
  { title: m.issue_demand_4_title, text: m.issue_demand_4_text },
]

export function DemandsList() {
  return (
    <ol className={classes.list}>
      {demands.map((demand, index) => (
        <li key={index} className={classes.item}>
          <span className={`${classes.number} ${classes.stitched}`} aria-hidden="true">
            {index + 1}
          </span>
          <div className={classes.body}>
            <h2 className={classes.title}>{demand.title()}</h2>
            <p className={classes.text}>{demand.text()}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

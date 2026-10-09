import classes from './PageHeader.module.css'

export function PageHeader({ title, lede }: { title: string; lede: string }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.lede}>{lede}</p>
    </header>
  )
}

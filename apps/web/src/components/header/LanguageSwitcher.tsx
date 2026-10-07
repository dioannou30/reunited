import { VisuallyHidden } from '@mantine/core'
import { m } from '@/paraglide/messages'
import { getLocale, type Locale, locales, setLocale } from '@/paraglide/runtime'
import classes from './Header.module.css'

const labels: Record<Locale, string> = {
  el: 'ΕΛ',
  en: 'EN',
  ar: 'عربي',
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const current = getLocale()

  return (
    <fieldset className={`${classes.langGroup} ${className ?? ''}`}>
      <VisuallyHidden component="legend">{m.language()}</VisuallyHidden>
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          lang={locale}
          className={classes.lang}
          aria-pressed={locale === current}
          onClick={() => setLocale(locale)}
        >
          {labels[locale]}
        </button>
      ))}
    </fieldset>
  )
}

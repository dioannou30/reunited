import { useLocation } from '@tanstack/react-router'
import { m } from '@/paraglide/messages'
import { getLocale, type Locale, locales, localizeHref } from '@/paraglide/runtime'
import classes from './Header.module.css'

const labels: Record<Locale, string> = {
  el: 'ΕΛ',
  en: 'EN',
  ar: 'عربي',
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const current = getLocale()
  const pathname = useLocation({ select: (location) => location.pathname })

  return (
    <nav className={`${classes.langGroup} ${className ?? ''}`} aria-label={m.language()}>
      {locales.map((locale) => (
        <a
          key={locale}
          href={localizeHref(pathname, { locale })}
          hrefLang={locale}
          lang={locale}
          className={classes.lang}
          aria-current={locale === current ? 'true' : undefined}
        >
          {labels[locale]}
        </a>
      ))}
    </nav>
  )
}

import commissionerCss from '@fontsource-variable/commissioner/index.css?url'
import notoSansCss from '@fontsource-variable/noto-sans/index.css?url'
import notoSansArabicCss from '@fontsource-variable/noto-sans-arabic/index.css?url'
import {
  ColorSchemeScript,
  DirectionProvider,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core'
import mantineCss from '@mantine/core/styles.css?url'
import type { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, HeadContent, Scripts } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { m } from '@/paraglide/messages'
import { getLocale } from '@/paraglide/runtime'
import { cssVariablesResolver, theme } from '@/theme'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: m.site_title() },
    ],
    links: [
      { rel: 'stylesheet', href: mantineCss },
      { rel: 'stylesheet', href: commissionerCss },
      { rel: 'stylesheet', href: notoSansCss },
      { rel: 'stylesheet', href: notoSansArabicCss },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  const locale = getLocale()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <HeadContent />
      </head>
      <body>
        <DirectionProvider initialDirection={dir} detectDirection={false}>
          <MantineProvider
            theme={theme}
            cssVariablesResolver={cssVariablesResolver}
            defaultColorScheme="light"
          >
            <Navbar />
            {children}
          </MantineProvider>
        </DirectionProvider>
        <Scripts />
      </body>
    </html>
  )
}

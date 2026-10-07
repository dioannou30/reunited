import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

const localized = (path: string) =>
  (['el', 'en', 'ar'] as const).map((locale) => [locale, `/${locale}${path}`] as [string, string])

export default defineConfig({
  server: {
    port: 9510,
    strictPort: true,
  },
  preview: {
    port: 9510,
    strictPort: true,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/paraglide',
      outputStructure: 'message-modules',
      cookieName: 'PARAGLIDE_LOCALE',
      strategy: ['url', 'cookie', 'preferredLanguage', 'baseLocale'],
      urlPatterns: [
        { pattern: '/', localized: localized('') },
        { pattern: '/:path(.*)?', localized: localized('/:path(.*)?') },
      ],
    }),
    tanstackStart(),
    nitro(),
    viteReact(),
  ],
})

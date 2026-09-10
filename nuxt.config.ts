import type { NuxtApp } from 'nuxt/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['github:atinux/my-pull-requests'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  $production: {
    routeRules: {
      '/': { isr: 60 * 5 },
      '/api/contributions': { isr: 60 * 5 },
      '/feed.xml': { isr: 60 * 5 },
    },
  },
  // remove vercel.client.ts from layer
  hooks: {
    'app:resolve'(app: NuxtApp) {
      app.plugins = app.plugins.filter(
        (plugin) => !plugin.src.includes('vercel')
      )
    }
  }
})

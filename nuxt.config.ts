import type { NuxtApp } from 'nuxt/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['github:atinux/my-pull-requests'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // remove vercel.client.ts from layer
  hooks: {
    'app:resolve'(app: NuxtApp) {
      app.plugins = app.plugins.filter(
        (plugin) => !plugin.src.includes('vercel')
      )
    }
  }
})

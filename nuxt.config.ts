// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image', '@nuxtjs/i18n'],

  i18n: {
    vueI18n: './i18n.config.ts'
  },

  spaLoadingTemplate: false,

  ssr: false,

  css: ['~/assets/scss/main.scss'],

  devtools: { enabled: true },

  image: {
    provider: 'netlify'
  },

  app: {
    head: {
      titleTemplate: 'Remea',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  }
});

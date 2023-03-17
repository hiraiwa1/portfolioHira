// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/styles/style.scss'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: 'hiraiwa portfolio' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://hira-18.com' },
        { property: 'og:title', content: 'hiraiwa portfolio' },
        { property: 'og:description', content: 'hiraiwa portfolio' },
        { property: 'og:image', content: 'https://hira-18.com/images/hiraiwaPotofolio_og.jpg' },
        { name: 'twitter:card', content: 'summary' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ]
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        }
      }
    }
  },
})


export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'hiraiwa portfolio',
        htmlAttrs: {
            lang: 'ja'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'hiraiwa portfolio' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:url', property: 'og:url', content: 'https://hira-18.com' },
            { hid: 'og:title', property: 'og:title', content: 'hiraiwa portfolio' },
            { hid: 'og:description', property: 'og:description', content: 'hiraiwa portfolio' },
            { hid: 'og:image', property: 'og:image', content: 'https://hira-18.com/images/hiraiwaPotofolio_og.jpg' },
            { name: 'twitter:card', content: 'summary' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Crete+Round&display=swap'
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/scss/style.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {
            src: '~/plugins/js/scroll.js'
        },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        ['nuxt-canonical', { baseUrl: 'https://hira-18.com' }],
        '@nuxtjs/proxy',
        '@nuxtjs/sitemap',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    // sitemap
    sitemap: {
        path:"sitemap.xml",
        hostname: "https://hira-18.com/"
    }
}

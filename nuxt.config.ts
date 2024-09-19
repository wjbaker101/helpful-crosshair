// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    compatibilityDate: '2024-04-03',

    modules: [
        '@nuxt/fonts',
    ],

    css: ['@/styling/main.scss'],

    postcss: {
        plugins: {
            tailwindcss: {},
        },
    },

    devtools: {
        enabled: true,
    },

});
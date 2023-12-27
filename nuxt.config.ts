// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-aos'
  ],
  app: {
    head: {
      title: "JurayevCoder",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        },
        {
          rel: "icon",
          type: "image/png",  
          href: "/favicon.png"
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
      ],
      meta: [{ name: "author", content: "JurayevCoder" }],
    },
  },
})
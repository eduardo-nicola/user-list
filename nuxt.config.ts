// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL 
    }
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  app: {
    head: {
      title: "User List",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  css: ["./assets/css/main.css", "./assets/css/tailwind.css"],


  routeRules: {
    "/": { headers: { "Cache-Control": "s-maxage=600, stale-while-revalidate=300" } },
  },

  build: {
    transpile: ["user-list"],
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: ["/sitemap.xml"],
      ignore: ["/api/**", "/dashboard/**"], 
      failOnError: false, 
    },
    routeRules: {
      "/": { cache: { swr: true, maxAge: 3600 } }, 
    },
  },
});

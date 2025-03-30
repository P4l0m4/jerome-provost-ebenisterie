// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  srcDir: "src",
  css: ["@/styles/global.scss"],
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/sitemap",
    "nuxt-jsonld",
    "dayjs-nuxt",
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_KEY,
        cacheProvider: "memory",
        apiOptions: { region: "fr" },
      },
    ],
  ],
  sitemap: {
    // urls: async () => {
    //   const newsPages = await getNews();
    //   const statesPages = await getStates();
    //   const citiesPages = await getCities();
    //   return [...newsPages, ...statesPages, ...citiesPages];
    // },
  },

  site: {
    url: "https://jpebenisterie73.fr/",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/_variables.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      STORYBLOK_KEY: process.env.STORYBLOK_KEY,
    },
  },
});

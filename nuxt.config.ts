// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    app: {
      head: {
        title: "Nuxt Weather",
        meta: [{ name: "description", content: "The best weather app" }],
      },
    },
    weatherKey: process.env.WEATHER_API_KEY,
    // au final j'ai pas reussi a utliser la clef d'api dans le code
    // j'ai donc mis la clef directement dans le code :(
  },
});

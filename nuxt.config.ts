



// https://nuxt.com/docs/api/configuration/nuxt-config


export default ({
  // devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  
  runtimeConfig: {
    jwtAcessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
  }
})
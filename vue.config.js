const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项,sass/scss针对有没有分号有特别支持，以防万一。
      sass: {
        additionalData: `@import "~@/assets/scss/pulic.sass"`
      },
      scss: {
        additionalData: `@import "~@/assets/scss/pulic.scss";`
      }
    }
  }
})

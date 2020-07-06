const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  configureWebpack: {
    //cdn
    externals: {
      'vue': 'Vue',
      'axios': 'axios',
      'vue-router': 'VueRouter',
      'vuex': 'vuex'
    },
  },
  //gzio
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css/,
            threshold: 10240,
            deleteOriginalAssets: false
          })
        ]
      }
    }

  }
}
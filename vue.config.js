const webpack = require('webpack');

module.exports = {
  publicPath: './',
  // 关闭eslint规范
  lintOnSave: false,

  configureWebpack: {
    plugins: [
      // Define Bundler Build Feature Flags
      new webpack.DefinePlugin({
        // Drop Options API from bundle
        __VUE_OPTIONS_API__: false
      })
    ]
  }
}

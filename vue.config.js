const isProd = process.env.NODE_ENV === 'production'

// 开发环境配置
const devConfig = {
  devtool: 'source-map'
}

// 生产环境配置
const prodConfig = {
  devtool: ''
}

module.exports = {
  configureWebpack: config => isProd ? prodConfig : devConfig
}

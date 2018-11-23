module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'study',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  **配置全局的css文件
  */
  css:['~assets/css/normailze.css','iview/dist/styles/iview.css'],
  /*
  * plugins插件配置
  * */
  plugins:[
    '~plugins/iview'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    **重新配置webpack,覆盖之前的
    * 配置图片
    */

    loaders:[
      {
        test:/\.(png|jpe?g|gif|svg)$/,
        loader:"url-loader",
        query:{
          limit:10000,
          name:'img/[name].[hash].[ext]'
        }
      }
    ],
    vendor: ['~/plugins/vue-notifications','iview/dist/styles/iview.css','iview'],
    /*
    ** Run ESLint on save
    * 注释eslint
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },

  /*
  * 为每个路由页面设置中间件,设置的验证中间件可以在这里引入执行
  * */
  router: {
    middleware: 'auth'
  },
  /*
  * 页面较多时提高页面的渲染速度
  * */
  render: {
    resourceHints: false
  },
  /*
  * 自定义进度条的配置,也可以自定义一个组件,显示路由切换时的加载状态
  * */
  loading: {
    color: '#2d8cf0',
    height: '3px'
  },
}


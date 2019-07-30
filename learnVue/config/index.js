'use strict'

// 项目主要配置文件 包括监听端口 ,打包路径
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
// config文件主要是项目相关配置，我们常用的就是当端口冲突时配置监听端口，打包输出路径及命名等
const path = require('path')

module.exports = {
    dev: {

        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: { // 在这里配置如下代码 发布部署的时候把这个得注释掉 去build 中的utils.js中添加以下地址
            // '/api': {
            //     target: '', // 你请求的第三方接口 
            //     changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            //     pathRewrite: { // 路径重写，
            //         '^/api': '/api' // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可。
            //     }
            // },
            // '/api': {
            //     target: 'http://40.00.100.100:3002/',//设置你调用的接口域名和端口号 别忘了加http
            //     changeOrigin: true,
            //     pathRewrite: {
            //       '^/api': '/'//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
            //     }
            //   }
        },

        // Various Dev Server settings
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        //编译输入的 index.html 文件
        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        // 编译输出的静态资源路径
        assetsSubDirectory: 'static',
        // 编译输出的二级目录
        assetsPublicPath: './',
        //编译发布的根目录， 编译之前assetsPublicPath: '/',之前没有.;由于是引入相对路径，所以改为"./".可配置为资源服务器域名或 CDN 域名

        productionSourceMap: true,
        //map文件为可以准确显示哪里报错,是否开启 cssSourceMap,当然打包的时候可以设置为false，文件小些，但是如果有错误，控制台不会报具体位置
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}
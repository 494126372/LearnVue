'use strict'

// 项目开发环境配置
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    // BASE_API: '"http://localhost:50002/"', // 开发环境配置的Api地址，
    BASE_API: "/api/" //  可以配置成这个index.js中的地址 当然可以配成上面地址使用 一般在发布的时候会注释掉index.js中的ProxyTable中的内容
        //
})
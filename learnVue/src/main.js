// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由默认 的路劲
import login from "./Login" // 引入组件

//  自定义路由
import VueRouter from 'vue-router'

import routers from './routers'

 // Vue -resource 的请求注册
 import VueResource from 'vue-resource'
 

// import Vuex from 'vuex'
// import store from './vuex/store' // 自己创建 store.js

// Vue.use(Vuex) // 注册

// 引用调用组件 1.main入口引用组件并命名 ./指代当前src 代码目录
Vue.config.productionTip = false
import axios from 'axios' // 1、在这里引入axios
Vue.prototype.$axios = axios // 2、在vue中使用axios
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
    el: '#app', // App.vue——[根组件] 就是index.html页面绑定的那个el #app div
    router, // 显示默认页信息设置,
    // store, // vuex
    components: { App, login ,}, // 
    // template: '<App/>' // 根组件  页面显示是根组件和 test组件共同显示的
    // template: '<login/>', // 此处不添加将不显示 指定模板(渲染的页面)  login 模板名称必须和组件里的名字一样
    render: h => h(login), // 跟上面一样的效果template这个
    name: "1212121"
})


// 自定义路由
// const router = new VueRouter({
//     mode: 'history',
//     routes: routers
// })

// new Vue({
//     el: '#app',
//     routers,
//     render: h => h(login)
// })

//其中 <router-view> 是用来渲染通过路由映射过来的组件，当路径更改时，<router-view> 中的内容也会发生更改

// 上面已经配置了两个路由，当打开 http://localhost:8080 或者 http://localhost:8080/home 的时候，就会在 <router-view> 中渲染 home.vue 组件
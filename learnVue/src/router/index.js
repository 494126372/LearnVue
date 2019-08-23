import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Axios from '@/components/Axios'

import Index from '@/views/index/index'
import Manage from "@/views/manage/index"
import Login from '@/Login' // 引入组件

import Home from '@/components/home'
import VueResource from '@/components/VueResource'
import { resolve } from 'url';

Vue.use(Router)
Vue.use(VueResource)
export default new Router({
    routes: [

        // API登陆
        {
            path: '/login',
            component: resolve => require(['../components/Login.vue'], resolve)
        },
        {
            path: '/',
            name: 'Index',
            component: Index // 首页组件 带'/' 为显示默认首页 
        },
        {
            path: '/main_helloworld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: "/manage",
            name: "Manage",
            component: Manage
        },
        {
            path: "/home",
            name: "home",
            component: Home,
        },

        {
            path: '/home1',
            component: Login,
            　　children: [　　　{　　　　 path: '/', 　　　component: Axios }　　]
        },
        {
            path: '/axios',
            name: 'Axois',
            component: Axios,

        },
        {
            path: '/VueResource',
            name: 'VueResource',
            component: VueResource,

        }, {
            path: '/print',
            name: 'printExcel',
            component: resolve => require(['../components/printExcel.vue'], resolve),

        },

        {
            path: '/print1',
            name: 'prinrExcel2',
            component: resolve => require(['../components/prinrExcel2.vue'], resolve),

        }

    ]
})
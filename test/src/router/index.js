import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import apps from '@/components/apps'
import qrcode from '@/components/qrcode'
import schart from '@/components/Scharts'  // 大小写都可以
import dashboard from '@/components/Dashboard'  //  不想一直添加引用的话就可以
// component: resolve => require(['../components/page/Dashboard.vue'], resolve),
Vue.use(Router)

export default new Router({

  // routes: [
   
  //   {
  //     path: '/',
  //     redirect: '/dashboard',
  //     name: 'HelloWorld',
  //     component: HelloWorld,
  //     children: [
  //       {path: '/dashboard', name: '首页Dash面板', component: dashboard, },
  //       {path: '/qrcode', name: '二维码', component: qrcode, },
  //     ]
  //   },
  //   {
  //     path: '/apps',
  //     name: 'apps',
  //     component: apps
  //   },
  // ],
  // 导航栏左侧的设置
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['../components/HelloWorld.vue'], resolve),
      meta:{
        title:"首页Helloworld"
      },
      
    },
    {
      path:"/apps",
      name:"apps",
      // 下面require的引用方式就不需要ImPort去引用了 
      component:resolve => require(['../components/apps.vue'], resolve), 
      meta:{
        title:"apps"
      }
    },
    {
      path:"/qrcode",
      name:"二維碼標題",// 没用
      component:qrcode,
      meta:{
        title:"二维码"  // 路由页面标题
      }
    },
    {
      path:"/schart",
      name:"表格曲线图", 
      component:schart,
      meta:{
        title:"曲线饼状图",
      }
    },
    {
      path:"/dashboard",
      name:"dashboard",
      component:dashboard,
      meta:{
        title:"dashboard",
      }
    }
  ]
})

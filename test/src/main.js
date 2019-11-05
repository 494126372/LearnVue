// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题  不加没什么效果
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle) // 设置子组件标题  npm install vue-wechat-title
Vue.config.productionTip = false;

import Print from 'vue-print-nb'
Vue.use(Print); //注册 打印預覽打印
Vue.use(Element, { size: 'small', zIndex: 3000 });
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({

    el: "#app",
    router,
    render: h => h(App)
})
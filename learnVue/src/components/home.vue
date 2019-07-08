<template>
    <div id="app">
        
         <h1>自定义配置的路由routers.js</h1>
        <router-view/>    // router-view 根组件包含的子组件内容 也就是路由配置要显示的默认页内容 ！！！
        

        <b>父组件及子组件创建传值：</b> <br>
        <b> 1. 先定义一个子组件，在组件中注册props </b><br>
        <b> 2. 在父组件home 中，引入子组件，并传入子组件内需要的值</b><br>

        <child :message="parentMsg"></child><br>
          <child :msg="parentMsg1"></child><br>
          <footernav></footernav>
    </div>
</template>
<script>
import child from './child'
import footernav from './footer'

export default {
    data:function(){
        return {
            parentMsg:"a message from parent 父组件值1",
            parentMsg1:" a message from parent msg  父组件值2 "
        }
    },
    components:{  child, footernav }
}
</script>
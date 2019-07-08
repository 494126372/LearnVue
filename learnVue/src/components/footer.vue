<template>
    <div class="footer fiex">
        
        <ul>
            <span> <router-link to="/"> Footer 组件 首页 |</router-link></span>
           <span> <router-link to="/manage">manage 管理 | </router-link></span>
            <span> <router-link to="/Axios">Test Axios  |</router-link></span>
         
             <span> <router-link to="/main_helloworld">HelloWorld | </router-link></span>
             <button  class="sign" @click="login" >按钮的跳转不是a标签</button>
              <span> <router-link to="/home">Home 页父子组件  |</router-link></span>
               <span> <router-link to="/VueResource">VueResource Get Post 请求  |</router-link></span>
              <hr>

        </ul>
        <b>
          Copyright&nbsp;&copy;&nbsp;{{ author }} - 2016 All rights reserved
       </b>
    </div>
    
</template>

<script>
export default {
    data:function(){
        return {
            author:"zhangfei"
        }
    },
    methods: {
        login(){
            // this.$router.push({ path:"/"})
            this.$router.push('/manage') // 填写的是路由配置的路径信息
        }
    },
    // 这是 footer.vue 的 html 和 script 部分 主要在 computed 中，将 this.$store.state.author 的值返回给 html 中的 author
    // 页面渲染之后，就能获取到 author 的值



    // 2 . 将状态映射到组件
    computed: {
        // author(){
        // //   return  this.$state.author  //
        // }
    },
}
</script>
<style scoped>
     li a{
        
         color: black;
       
         
          width: 100%;
     }
    
  
</style>

<template>
  <div id="app">
    
    <router-view/>
    
   
  <h3>{{ msg }}</h3>
  <h3 v-show="vshow">Hello! V-show 隐藏和显示</h3>
  <h3 v-if="vshow">Hello! V-if 创建和销毁组件 </h3>
  <span> 原值： {{ jisuan }}</span><br>
  <span> 反转计算： {{ reversedJisuan }}</span><br>
  <input type="text" v-model="jisuan">
  <button @click="show" aria-placeholder="请输入计算值">显示和隐藏及销毁</button>
  
  </div>
 
</template>

<script>
import hello from './components/HelloWorld'
import Axios from './components/Axios'
export default {
  name: 'App',
  data() {
      return {
          msg:"根组件内容是 Login.Vue ( #App1 )  main中的</login> 组件!",
          jisuan:"Hello Vue 123 !",
          vshow:true,
         
      }
  },
  comments:{
      hello,Axios  
  },
  
  // 计算钩子函数  绑定对原有数据字段的计算值 
  computed:{
   
    // 计算属性的 getter
    reversedJisuan:function(){
      // `this` 指向 vm 实例
      return this.jisuan.split('').reverse().join('')
    }
    
  },
  watch:{
    jisuan(val){
      // this.jisuan= this.jisuan +"watchValue!"
      var a=val;
      console.log(a);
    }
  },
  methods: {
    show(){
      this.vshow=!this.vshow;
    }
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: blanchedalmond;
}
</style>

<template>
  <div class="hello">
    
    <h1>{{ msg }}</h1>
    <h2></h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs 公共组件区
        </a>
      </li>
    
    </ul>
     <router-link to="/" >首页</router-link>
      <footernav></footernav>
  </div>
 
 
</template>

<script>
import footernav from './footer'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    footernav
  },
  // 钩子函数生命周期
  beforeCreate(){  //vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。, 加loading事件

    console.log('==============' + 'beforeCreated' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  //vue实例的数据对象data有了，$el还没有  ,结束loading、请求数据为mounted渲染做准备
  created(){
    console.log('==============' + 'created' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  // vue实例的$el和data都初始化了，但还是虚拟的dom节点，具体的data.filter还未替换。
  beforeMount(){
    console.log('==============' + 'beforeMount' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  //vue实例挂载完成，data.filter成功渲染  , 配合钩子路由使用
  mounted(){
    console.log('==============' + 'mounted' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  // 数据data 更新时候触发 
  beforeUpdate(){
    console.log('==============' + 'beforeUpdate' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  //数据data 更新时候触发 ，也可以进行Wactching
  updated(){
    console.log('==============' + 'updated' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

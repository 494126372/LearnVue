<template>
 <div id='app'>
     {{ msg }}
     <form >
      <div class="form-group">
        <label>用户：</label>
        <input type="text" v-model="ruleForm.name" class="form-control">
      </div>
      <div class="form-group">
        <label>密码：</label>
        <input type="password" class="form-control" v-model="ruleForm.pwd">
      </div>
      <div class="form-group">
        <input type="button" value="登录保存信息" class="btn btn-primary" @click="postComment">
           <el-button type="primary" icon="el-icon-edit">El Button 局部引用</el-button>
               <el-button type="primary" icon="el-icon-edit" @click="backHome" >返回主頁</el-button>
               <el-button type="primary" icon="el-icon-edit" @click="backHome1" >返回上一主頁</el-button>
      </div>
       <span id="span"></span>
    </form>
    </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 9000 };
Vue.use(Button);
export default {
 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ruleForm:{
       name:"",
       pwd:"",
      },
    }
  },
  methods:{
    postComment(){
    var item=this.ruleForm;
    //  item.unshift(this.ruleForm)  // 将新内容添加到数组中
     var info=JSON.stringify(item);  // 存储的必须是字符串 !
      
       localStorage.setItem("user",info);
      var  user=JSON.parse(localStorage.getItem("user"));
      document.getElementById('span').innerHTML=user.name+user.pwd;
      //  this.$message({
      //           message: "保存成功！",
      //           type: "error"
      //         });
      alert("OK")
    },
    backHome(){
    // this.$router.push('/');
    console.log("router.replace():");
    // console.log($this.$router["history"]);
    this.$router.replace({path:"/"});
   

    // 相对于当前页面向前或向后跳转多少个页面,类似 window.history.go(n)。n可为正数可为负数。正数返回上一个页面
    },
    backHome1(){
       this.$router.go(-1); // this.$router.go(n) 等同於後退一步
    }
  },
  created(){
   this.$router.meta.title="设置APP标题";
  }
  
 
 
   
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

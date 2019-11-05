<template>
  <div >
    {{ msg }}
    <form>
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
      </div>
      <span id="span"></span>
      <b>ELement-UI 的Table 表单绑定</b>
    </form>
    <el-table :data="tableData" style="width: 50%"  id='tab'>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" ></el-table-column>
    </el-table>
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">v-wechat-title='$route.meta.title' 标题添加</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple1">1212121</div>
      </el-col>
      <el-button type="primary" icon="el-icon-edit">El Button 全局引用</el-button>
      <el-button type="primary" @click="RouterClick" icon="el-icon-edit">RouterClickApps</el-button>
      <el-button type="primary" @click="RouterClick1" icon="el-icon-edit">Router上一頁</el-button>
       <el-button type="primary" @click="ViewQrcode" icon="el-icon-edit">查看二维码</el-button>
       <el-button type="primary" @click="ViewSchart" icon="el-icon-edit">图标ViewSchart</el-button>
      <a href="tanchishe.html">貪吃蛇</a>
      <el-button icon="el-icon-edit"  @click="()=>{ this.$router.go(-1) }"  >返回 行内点击事件</el-button>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      msg: "Welcome to Your Vue.js App",
      ruleForm: {
        name: "",
        pwd: ""
      }
    };
  },
  methods: {
    postComment() {
      var item = this.ruleForm;
      //  item.unshift(this.ruleForm)  // 将新内容添加到数组中
      var info = JSON.stringify(item); // 存储的必须是字符串 !

      localStorage.setItem("user", info);
      var user = JSON.parse(localStorage.getItem("user"));
      document.getElementById("span").innerHTML = user.name + user.pwd;
      //  this.$message({
      //           message: "保存成功！",
      //           type: "error"
      //         });
      alert("OK");
    },
    RouterClick(){
     
      this.$router.push('/apps');
      console.log("router.push");
      //  console.log(this.$router["history"]);
    },
    RouterClick1(){
      this.$router.go(-1);
    },
    ViewQrcode(){
      this.$router.push('/qrcode');
    },
    ViewSchart(){
      this.$router.push('/schart');
    }



  },
  created: function() {
    var a = "";

    this.msg = this.msg
      .split(" ")
      .reverse()
      .join("-");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #99a9bf;
}
.bg-purple1 {
  background-color: red;
}


.el-table--small{
background-color: #42b983;
}
</style>

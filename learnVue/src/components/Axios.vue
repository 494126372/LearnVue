<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <h2>跨域访问API</h2>
    <button @click="GetjsonpData" >axios跨域获取数据</button>
    <button @click="IsSee">按钮</button>
    <ul v-if="istrue=='true'">
      <li></li>
      <li>// 因为在新版的vue-cli的package.json中webpack-dev-server没有设置--open,所以打开package.json文件在”scripts”属性中的”dev”属性中手动添加--open，</li>
      <li
        v-for="(item,index) in  reviceDates"
        :key="index"
      >{{ "姓名："+ item.name +"邮箱: "+item.email }}
      </li>
    </ul>
    <p>{{   <span> 
       谈到跨域，首先得了解CORS（Cross origin resource sharing） 跨域资源共享，
      它是w3c的一个标准，是一份浏览器技术规范，提供了web服务从不同网域传来沙盒脚本的方法，
      以避免浏览器的同源策略，是比JSONP模式的高级版。JSONP只支持GET请求方式，
      而CORS除了GET请求方式以外也支持其他的HTTP请求。CORS允许浏览器发送跨域服务器，发出XMLHttpRequest请求，
      从而克服AJAX只能同源请求。
      （想要了解为什么有跨域问题的产生，请了解浏览器的同源策略）
      如果要使用axios直接进行跨域访问是不可以的，这是就需要配置代理了，为什么要配置代理呢？
原因就是因为客户端请求服务端的数据是存在跨域问题的，而服务器和服务器之间可以相互请求数据，是没有跨域的概念
（如果服务器没有设置禁止跨域的权限问题），也就是说，我们可以配置一个代理的服务器可以请求另一个服务器中的数据，
然后把请求出来的数据返回到我们的代理服务器中，代理服务器再返回数据给我们的客户端，这样我们就可以实现跨域访问数据啦

  </span> }}</p>
    
    <p>4.1  src目录下的 index.html——[主页]
    index.html如其他html一样，但一般只定义一个空的根节点，在main.js里面定义的实例将挂载在根节点下，内容都通过vue组件来填充
    
    </p>
  </div>
   
</template>


<script>
import axios from "axios"; // 1、在这里引入axios
// 2、在vue中使用axios  export default 当中的参数名不能乱写 第一级都得按照规范些  data(){} 中可以随意
export default {
  name: "asp",
  he: 121212,
  data() {
    return {
      msg: "ASP.NET",
      name: "",
      id: "",
      reviceDates: [],
      header: [],
      istrue:"false",
    };
  },
  methods: {
    GetjsonpData() {
      var url = "/api"; // 这里就是刚才的config/index.js中的/api
      var self = this;
      axios
        .get(url)
        .then(function(response) {
          self.reviceDates = response.data.maintainers;
          self.header = response.headers;
          //   console.log(response.headers);
          self.istrue='true';
        })
        .catch(function(error) {
          console.log(error);
        });
      // 或者使用以下代码也可
      /*this.$axios({       
                            method: "get",
                            url: url,
                            data: {
                                name: "axios",
                                id: "1"
                            }
                        })
                        .then(function(res) {
                           console.log(res);
                       })
                        .catch(function(err) {
                           console.log(err);
                       });*/
    },

    IsSee(e) {
      console.log("methods 不同调用方法");
        this.istrue='false';
    },
    SeeMe:function(){
        
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

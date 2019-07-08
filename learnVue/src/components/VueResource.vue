<template>
    <div>
        <hr>
        请求内容：
        <div>{{ Msg }}</div>
        <input type="text" ref="txt" value="123">
        <h3> 结果ref.txt{{ name }}</h3>
        <button @click="GetData()">点击请求数据</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            parmas:{},
            apiUrl:"http://jsonplaceholder.typicode.com/posts",
            Msg:"",
            name:""
        }
    },
    methods: {
        GetData(){
        //   this.$http.get(this.apiUrl).then((response) => {
        //         this.$set('gridData', response.data)
        //         console.log(response.data)
        //     },(err) => {
        //         console.log("出错了"+err);
        //     }).catch(function(err) {
        //         console.log(err)
        //     })
        // 成功的回调必须要传，失败的回调是可选的
          // 当发起get请求之后，通过.then设置回调成功的函数
          console.log("1")
          this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function (result) {
            // 通过 result.body 请求拿到服务器返回成功的数据
            console.log(result.body)
            this.Msg=result.body[0]
          })
            // 这个时候 通过post的第三个参数， { emulatJSON: true } 设置提交的内容类型 为普通表单数据格式
          this.$http.post('http://jsonplaceholder.typicode.com/posts', {}, {emulateJSON: true}).then(result => {
            console.log(result.body[0])
          })

        //    this.$http.post('/try/ajax/demo_test_post.php',{name:"菜鸟教程",url:"http://www.runoob.com"},{emulateJSON:true}).then(function(res){
        //             document.write(res.body);    
        //         },function(res){
        //             console.log(res.status);
        //         });
        }
    },
   mounted(){
      console.log( this.$refs.txt.value);
      this.name=this.$refs.txt.value;
   },
}

</script>

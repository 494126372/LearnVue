<template>
  <div id='app'>
    <div id="qrcode"></div> <!-- 创建一个div，并设置id为qrcode -->
    <el-button @click="back('/')">返回</el-button>
  </div>
</template>
   
<script>
import QRCode from 'qrcodejs2'  // 引入qrcode
export default {
  name : 'test',
  mounted () {
    this.createqrcode(); // 自动执行调用方法生成
  },
  methods: {
    createqrcode() {
      let qrcode = new QRCode('qrcode', {
        width: 132,  
        height: 132,
        text: 'https://www.baidu.com', // 二维码地址
        colorDark : "#000",
        colorLight : "#fff",
      })
    //   qrcode.toCanvas(document.getElementById("qrcode"),'http://localhost:8081/#/qrcode')
    },
    back(url){
        this.$router.push(url);
    }
  },
//    components:{
//       QRCode
//   }
}
</script>
<style scoped>

   #qrcode{
       text-align: center;
   }
    img {
      width: 132px;
      height: 132px;
      background-color: rgb(133, 82, 82); 
      padding: 6px;
    }
  
</style>


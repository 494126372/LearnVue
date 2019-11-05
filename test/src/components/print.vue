<template lang="">
    <div>
        
        <div >
           打印頁面  
           <el-button type="text" @click="doPrint" id="btnclk">打印1</el-button> 
            <el-button type="text" @click="dialogVisible = true">顯示打印區域</el-button>
             <button v-print="'#printTest'" id="btnprint">打印3 vue-print-nb 預覽打印</button>
        </div>

        <div class='main'>
         <el-dialog title="打印" width="50%" :visible.sync="dialogVisible" id='printdialog'>
       
     
        <div class="print" ref="print" id="printTest">
        <qrcode value="https://fengyuanchen.github.io/vue-qrcode/" tag="img"></qrcode>
        <table
          cellspacing="0"
          cellpadding="0"
          style="height:250mm; width:180mm;font-size:16px;padding-left:10px;"
        >
          <tr>
            <td
              class="border a"
              colspan="7"
              style="font-size: 16pt; font-family: 黑体; padding-bottom: 10px;"
              align="right"
              valign="bottom"
            >&nbsp;</td>
            <td
              class="border a"
              style="font-size: 16pt; font-family: 黑体; padding-top: 18px;"
              align="right"
            >
              <span
                style="font-size: 24px; font-family: 微软雅黑; padding-bottom: 0px; font-weight: lighter; font-style: normal;"
                shape="rect"
              >№</span>
            </td>
            <td
              class="border a"
              style="font-size: 16pt; font-family: 黑体; padding-top: 18px;"
              align="left"
            >DB24554544</td>
            <td class="border a style8" style="padding-left: 0px;" align="left" rowspan="16">
              ︵
              <br>第
              <br>一
              <br>联
              <br>︶
              <br>
              <br>
              <br>︵
              <br>共
              <br>二
              <br>联
              <br>︶
            </td>
          </tr>
          <tr>
            <th class="border r b thWidth style7">货主</th>
            <td class="border r b" colspan="5">{{ printInfos.owner }}</td>
            <th class="border r b thWidth" colspan="1">联系电话</th>
            <td class="border b" colspan="2">{{ printInfos.ownerTel }}</td>
          </tr>
          <tr>
            <th class="border thWidth r b style7">动物种类</th>
            <td class="border r b" colspan="5">{{ printInfos.animalKindName }}</td>
            <th class="border r b thWidth" colspan="1">数量及单位</th>
            <td class="border b" colspan="2">{{ printInfos.animalNum }} {{ printInfos.unit }}</td>
          </tr>
          <tr>
            <th class="border r b thWidth style7" rowspan="2">启运地点</th>
            <td class="border b" align="left" colspan="8">{{ printInfos.startRegionCodeName }}</td>
          </tr>
          <tr>
            <td class="border r b t" colspan="3" align="left">{{ printInfos.startAddress }}</td>
            <td
              class="border b l t"
              colspan="5"
              align="right"
            >{{ printInfos.startAddress }}村（养殖场﹑交易市场）</td>
          </tr>
          <tr>
            <th class="border r b thWidth style7" rowspan="2">到达地点</th>
            <td class="border b" colspan="8" align="left">{{ printInfos.endRegionCodeName }}</td>
          </tr>
          <tr>
            <td class="border r b t" colspan="3" align="left">{{ printInfos.endAddress }}</td>
            <td class="border b t l" colspan="5" align="right">村（养殖场﹑屠宰场﹑交易市场）</td>
          </tr>
          <tr>
            <th class="border r b thWidth style7">用 途</th>
            <td class="border r b" colspan="1">{{ printInfos.use }}</td>
            <th class="border r b thWidth" style="padding-left: 0px; padding-right: 0px;">承运人</th>
            <th class="border r b thWidth" colspan="3">{{ printInfos.carrier}}</th>
            <th class="border r b thWidth" colspan="1">联系电话</th>
            <td class="border b" colspan="2">{{ printInfos.carrierTel }}</td>
          </tr>
          <tr>
            <th class="border thWidth r b style7">运载方式</th>
            <td class="border r b" colspan="5">{{ printInfos.carryMethod }}</td>
            <th class="border r b thWidth style2" colspan="1">运载工具牌号</th>
            <td class="border b" colspan="2">{{ printInfos.carryCarNum }}</td>
          </tr>
          <tr>
            <th class="border r b thWidth" colspan="4">运载工具消毒情况</th>
            <td class="border b" colspan="5">{{ printInfos.disinfection }}</td>
          </tr>
          <tr>
            <td
              class="border b"
              colspan="9"
              valign="bottom"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本批动物经检疫合格，应于 {{ printInfos.transportDateName }} 日内到达有效。</td>
          </tr>
          <tr>
            <th class="border r b t thWidth" colspan="5"></th>
            <td class="border b l t" colspan="4">
              官方兽医签字：张三
              <br>
              <br>
              签发日期：{{ signDate }}
              <br>
              <br>
              <center>(动物卫生监督所检疫专用章)</center>
            </td>
          </tr>
          <tr>
            <th class="border r b thWidth style5">牲畜耳标号</th>
            <td class="border b style6" colspan="8">{{ printInfos.earmarks }}</td>
          </tr>
          <tr>
            <th class="border r b thWidth">
              动物卫生
              <br>监督检查
              <br>站 签 章
            </th>
            <td class="border b" colspan="8">
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
            </td>
          </tr>
          <tr>
            <th class="border r b thWidth style3">备注</th>
            <td class="border b style4" colspan="8" valign="bottom">
              备注信息
              <br>
              <br>
            </td>
          </tr>
          <tr>
            <td class="border r b l" colspan="9" valign="top" style="font-size: 12px;">
              注: 1.本证书一式两联，第一联由动物卫生监督所留存，第二联随货同行。
              <br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;2.跨省调运动物到达目的地后，货主或承运人应在24小时内向输入地动物卫生监督机构告。
              <br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;3.动物卫生监督所联系电话：0931-5454545。
            </td>
          </tr>
        </table>
      </div>
    </el-dialog>

        </div>
    </div>
</template>
<script>


// import prints from '@/excel/Export2Excel.js'; // 導出
// 2.官方组件打印预览 
// main.js中注册
// import Print from 'vue-print-nb'
// Vue.use(Print);  //注册

export default {
    data() {
        return {
            name:"",
            dialogVisible:false,
            signDate:new Date().toLocaleDateString(),
             printInfos: {},
        }
    },
    methods:{


    doPrint(e) {
       this.dialogVisible = true; // 打印预览界面显示
      // 1.设置要打印的区域 div的className
      var newstr = document.getElementById("printTest").innerHTML;
      // var newStr1 = $("#printTest").innerHTML;
      // 2. 复制给body，并执行window.print打印功能
      document.body.innerHTML = newstr;
      // 3. 还原：将旧的页面储存起来，当打印完成后返给给页面。
      var oldstr = document.body.innerHTML;
      window.print(this.$refs.ruleForm);
   
      // 重新加载页面，以刷新数据
      window.location.reload();
      document.body.innerHTML = oldstr;
      return false;
    },

    subok(e) {
      var self=this;
       // 两秒后模拟打印
       this.dialogVisible = true; // 打印
        setTimeout(function() {
        // IE
        self.doPrint().then(()=>{
          self.dialogVisible=false;

        })

      }, 200)

    }
    },
}
</script>
 
<style>
.addAnimalA.el-form-item--small.el-form-item {
  margin-bottom: 0px;
}
.addAnimalA.b input {
  width: 230px;
}
.addAnimalA.el-radio {
  margin-right: 2px;
}
.addAnimalA label {
  padding-top: 5px;
}
.border {
  border: 1px solid #000;
}
.r {
  border-right-style: none;
}
.l {
  border-left-style: none;
}
.t {
  border-top-style: none;
}
.b {
  border-bottom-style: none;
}
.a {
  border-style: none;
}
.thWidth {
  width: 16%;
  font-weight: lighter;
}
.style2 {
  width: 15%;
}
.style3 {
  width: 14%;
  height: 53px;
}
.style4 {
  height: 53px;
}
.style5 {
  width: 14%;
  height: 46px;
}
.style6 {
  height: 46px;
}
.style7 {
  width: 14%;
}
</style>

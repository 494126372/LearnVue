<template>
  <div >
    <button @click="printExcels">打印数据Excel1</button>
   <el-button size="middle" type="primary" v-on:click="downloadMater()">下载材料</el-button>        
   
    <el-table :data="tableData" id="table" style="width: 600px">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>

	</div>




</template>

  <script>
import XLSX from 'xlsx'

import { exportExcelMethod } from "../Excel/exportExcel.js";
 var FileSaver = require('file-saver')


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
 
   
    };
  },
  methods: {
    printExcels() {
      exportExcelMethod("table", "学生信息", "sheet1");
    },
   

   // 第二种

   downloadMater (){
                 const defaultCellStyle =  { width:200, font: { name: "Verdana", sz: 11, color: "red"}, fill: {fgColor: {rgb: "FFFFAA00"}}};
                 const wopts = { bookType:'xlsx', bookSST:false, type:'binary', defaultCellStyle: defaultCellStyle, showGridLines: false};
                 const wb = { SheetNames: ['Sheet1'], Sheets: {}, Props: {} }; 
                 let data = this.tableData
                wb.Sheets['Sheet1'] = XLSX.utils.json_to_sheet(data)
                
                //创建二进制对象写入转换好的字节流
               let tmpDown =  new Blob([this.s2ab(XLSX.write(wb, wopts))], { type: "application/octet-stream" })
               FileSaver.saveAs(tmpDown, "hello world.xls");
             },
             //字符串转字符流
             s2ab (s) {
                if (typeof ArrayBuffer !== 'undefined') {  
                    var buf = new ArrayBuffer(s.length);  
                    var view = new Uint8Array(buf);  
                    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;  
                    return buf;  
                } else {  
                    var buf = new Array(s.length);  
                    for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;  
                    return buf;  
                }
             }
        
           
       
      
  
  }
};
</script>
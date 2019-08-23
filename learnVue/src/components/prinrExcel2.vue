<template>
  <div>
    <button @click="downloadExl">导出</button>
    <button @click="downloadExl1">node-xslx自定义列宽导出</button>

     <tab-excel/>
     <bar/>
  </div>

</template>
<script>


import excel from "../Excel/exportExcel1";
import Vue from "vue";
import xlsx from 'node-xlsx';
// Or var xlsx = require('node-xlsx').default;


var  templ={
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
      tHeader:{
        id:"编号",
        name:"编码",
        date:"日期",
        address:"地址",
      }
    };
  },
  template:` <table border="1px solid black">
      <tr :v-model='tableData' >
        <th>{{tHeader.id}}</th>
        <th>{{tHeader.date}}</th>
        <th>{{tHeader.name}}</th>
        <th>{{tHeader.address}}</th>
      </tr>
      <tr v-for="(row,index) in tableData" :key="index">
        <td>{{ index }}</td>
        <td>{{row.date }}</td>
        <td>{{row.name}}</td>
        <td>{{row.address}}</td>
      </tr>
    </table>  `

}

var bar={
  template:`    <h1>单页面组件使用不了全局组件本身就是一个全局组件只能使用局部组件</h1>`
}
export default {
  data() {
    return {
      temp: "",
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
       tHeader:{
        id:"编号",
        name:"编码",
        date:"日期",
        address:"地址",
      }
    };
  },
 
  components: {
    'tab-excel':templ,
    bar
  },
 
  methods: {
    downloadExl() {
      var fileName = "屠宰场信息" + new Date().getTime();
      var sheetName = "sheet1";

      excel.ExcelTable("table", fileName, sheetName);
    },
    downloadExl1(){
      // 自定义列宽的node-xlsx
      const data = [[1, 2, 3], 
      [true, false, null, 'sheetjs'],
       ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
        ['baz', null, 'qux']]
      const options = {'!cols': [{ wch: 6 }, { wch: 7 }, { wch: 10 }, { wch: 20 } ]};
 

     var buffer = xlsx.build([{name: "mySheetName", data: data}], options); // Returns a buffer

    }
  }
};
</script>
<style scoped>
th,
td {
  height: 15px;
}
table {
  border: 1px;
  width: 500px;
}
</style>
    
<template>
  <div>
    <button @click="downloadExl">导出</button>
    <button @click="downloadExl1">node-xslx自定义列宽导出</button>

     <tab-excel/>
     <bar/>
  </div>

</template>
<script>


import excel from "../Excel/exportExcel1";
import Vue from "vue";
import xlsx from 'node-xlsx';
// Or var xlsx = require('node-xlsx').default;


var  templ={
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
      tHeader:{
        id:"编号",
        name:"编码",
        date:"日期",
        address:"地址",
      }
    };
  },
  template:` <table border="1px solid black">
      <tr :v-model='tableData' >
        <th>{{tHeader.id}}</th>
        <th>{{tHeader.date}}</th>
        <th>{{tHeader.name}}</th>
        <th>{{tHeader.address}}</th>
      </tr>
      <tr v-for="(row,index) in tableData" :key="index">
        <td>{{ index }}</td>
        <td>{{row.date }}</td>
        <td>{{row.name}}</td>
        <td>{{row.address}}</td>
      </tr>
    </table>  `

}

var bar={
  template:`    <h1>单页面组件使用不了全局组件本身就是一个全局组件只能使用局部组件</h1>`
}
export default {
  data() {
    return {
      temp: "",
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
       tHeader:{
        id:"编号",
        name:"编码",
        date:"日期",
        address:"地址",
      }
    };
  },
 
  components: {
    'tab-excel':templ,
    bar
  },
 
  methods: {
    downloadExl() {
      var fileName = "屠宰场信息" + new Date().getTime();
      var sheetName = "sheet1";

      excel.ExcelTable("table", fileName, sheetName);
    },
    downloadExl1(){
      // 自定义列宽的node-xlsx
      const data = [[1, 2, 3], 
      [true, false, null, 'sheetjs'],
       ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
        ['baz', null, 'qux']]
      const options = {'!cols': [{ wch: 6 }, { wch: 7 }, { wch: 10 }, { wch: 20 } ]};
 

     var buffer = xlsx.build([{name: "mySheetName", data: data}], options); // Returns a buffer

    }
  }
};
</script>
<style scoped>
th,
td {
  height: 15px;
}
table {
  border: 1px;
  width: 500px;
}
</style>
    

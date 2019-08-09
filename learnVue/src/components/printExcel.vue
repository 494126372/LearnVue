<template>
  <div>
    <button @click="printExcels">打印数据Excel1</button>
    <button @click="printExcelsByxlsx">打印数据Excel(npm install xlsx 方法)</button>
    <el-table :data="tableData" id="table" style="width: 600px">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

  <script>
import { exportExcelMethod } from "../Excel/exportExcel.js";
import XLSX from "xlsx";
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

      tableData1: {
        cols: [
          { name: "A", key: 0 },
          { name: "B", key: 1 },
          { name: "C", key: 2 }
        ],
        data: [
          ["id", "name", "value"],
          [1, "sheetjs", 7262],
          [2, "js-xlsx", 6969]
        ]
      }
    };
  },
  methods: {
    printExcels() {
      exportExcelMethod("table", "学生信息", "sheet1");
    },
    printExcelsByxlsx() {
 
    var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
    var data = XLSX.utils.sheet_to_json(first_worksheet, {header:1});

    /* convert from array of arrays to workbook */
    var worksheet = XLSX.utils.aoa_to_sheet(tableData1);
    var new_workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetJS");
   
    }
  }
};
</script>
const Excel = {
    ExcelTable: function(tableId, fileName, sheetName) {
        var tableHTML = document.querySelector(tableId).outerHTML;
        var xlsContent = `<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel"
      xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="ProgId" content="Excel.Sheet" /> 
    </head>
    <body>${tableHTML}</body>
    </html>`;
        var blob = new Blob([xlsContent], { type: "application/vnd.ms-excel" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = fileName + ".xls";
        a.innerHTML = "下载xls"
        a.click();
        // document.body.appendChild(a);
    }
}

export default Excel
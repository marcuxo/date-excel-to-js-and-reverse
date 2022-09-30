function dateExcelToJs(fecha_) {
  var resultado = ((fecha_* 86400)-2209161600)*1000;
  var fecha = new Date(resultado)//1600128000000
    //console.log(fecha);
  return fecha;
}

function dateJsToExcel(date) {
  let _a = new Date(date)
  let _date = (_a.getTime()/(86400*1000))+25569
  // console.log('=>>>>>>>>>>>>>>>>>>>>>>',_date,date)
  return _date
}

module.exports = {
  dateExcelToJs,
  dateJsToExcel
}

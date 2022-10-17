function dateExcelToJs_(fecha_:number):Date {
  var resultado:number = ((fecha_* 86400)-2209161600)*1000;
  var fecha:Date = new Date(resultado)//1600128000000
    //console.log(fecha);
  return fecha;
}

function dateJsToExcel(date):number {
  let _a:Date = new Date(date)
  let _date:number = (_a.getTime()/(86400*1000))+25569
  // console.log('=>>>>>>>>>>>>>>>>>>>>>>',_date,date)
  return _date
}
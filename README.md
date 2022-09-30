[![license](https://img.shields.io/badge/license-MIT%20License-blue.svg)](https://github.com/marcuxo/date-excel-to-js-and-reverse/blob/main/LICENSE)

# date-excel-to-js-and-reverse

## Description
transform date from excel to js and js to excel, easy 👌

## Install
```node
npm i date-excel-to-js-and-reverse
```

## Usage
```node
const { dateExcelToJs } = require('date-excel-to-js-and-reverse');
console.log(dateExcelToJs(44832));
 // 2022-09-28T00:00:00.000Z
```

#### to transform from javascript to excel supports number and string

```node
const { dateExcelToJs } = require('date-excel-to-js-and-reverse');
console.log(dateJsToExcel('2022-09-22'))
 // 44826
console.log(dateJsToExcel(1663804800000))
 // 44826
```


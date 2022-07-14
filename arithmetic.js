var a = 2;
var b = 3;
var c= 4;
var cal1 = a + b * c;
var cal2 = a % b + c;
var cal3 = c + a /b;
var cal4 = a * b + c;

let arr = new Array(cal1,cal2,cal3,cal4);
//console.log(Math.max(arr));
//console.log(Math.min(arr));

var sortArray = arr.sort();
console.log(sortArray);
console.log(sortArray.slice(0,1));
console.log(sortArray.slice(3));


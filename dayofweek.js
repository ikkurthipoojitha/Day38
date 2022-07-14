let day = prompt("Enter day");
let month = prompt("Enter month");
let year = prompt("Enter year");

var y0 = year - Math.floor((14 - month) / 12);
var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
var res = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"];
if (d0 <= res.length) 
    {
        console.log("Day is " + res[d0]);
    }
else {
    console.log("Invalid day ");
    }

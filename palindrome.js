var num = 737;
var temp = num;
var rem = 0, rev = 0;
while (num != 0){
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
}
if (temp == rev){
    console.log(true);
}
else{
    console.log(true);
}
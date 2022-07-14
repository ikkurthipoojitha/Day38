var stake = 100 ;
var goal = 200;
win=0;
noftimes=0;
totalTime = 10;
while (stake != 0 && goal != stake && noftimes < totalTime){
    var ran = Math.round(Math.random());
    if (ran == 1){
        stake++;
        win++;
    }
    else {
        stake--;
    }
    noftimes++;
}

var wining = (win / totalTime) * 100;
var loosing = 100 - wining;
console.log("Number of wins " + win)
console.log("wining percentage " + wining);
console.log("lossing percentage " + loosing);
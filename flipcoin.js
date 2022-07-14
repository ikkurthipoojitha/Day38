var heads=0;
var tails=0;
var flip=6;
for(var i=1;i<=flip;i++){
    var rn=Math.floor(Math.random()*5);
	if(rn==1){
        heads++;
    }
	else{
		tails++;
	}
}
var res=(heads/flip)*100;
console.log("Percentage of Heads is "+res);
var res1=(tails/flip)*100;
console.log("Percentage of tails is "+res1);
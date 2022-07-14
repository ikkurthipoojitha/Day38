var number = 6;
for(var i=1;i<=number;i++){
    var count=0;
    for(var j=1;j<=i;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        while(number%i==0){
            console.log(i);
            number=number/i;
        }
    }
}

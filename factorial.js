let n = 4;
let f =1;
if(n==0 | n==1 ){
    f = 1;
    console.log(f);

}
else{
    for(var i = n; i>=1;i++){
            f = f * i;
    }
    console.log(f);

}

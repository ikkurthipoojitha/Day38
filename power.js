function power(n)
{
    if(n==0){
        console.log(1);
    }
    for(var i=1;i<=n;i++){
        console.log(Math.pow(2, i));
    }
}
power(4);
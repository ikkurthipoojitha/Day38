
function isPrime(number)
{
    if (number == 0 || number == 1){
            return false;
    }
    for (var i = 2; i< number; i++) {
        if (number % i == 0){
            return false;
        }
    }
return true;
}
res = 10;
for (let i = 2; i < res; i++){
    if (isPrime(i)){
        console.log(i); 
    }
}
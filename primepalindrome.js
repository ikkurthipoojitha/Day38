function palindrome(num){
        var temp = num;
        var rem = 0, rev = 0;
        while (num != 0){
            rem = num % 10;
            rev = rev * 10 + rem;
            num = Math.floor(num / 10);
        }
        if (temp == rev){
            return true;
        }
        else{
            return false;
        }
}

function prime(num){

    if (num == 0 || num == 1){
        return false;
    }
    for (var i = 2; i< num; i++) {
        if (num % i == 0){
            return false;
        }
    }
    return true;
}

var num = 11;
console.log(prime(num));
console.log(palindrome(num));
for (let i = 2; i < num; i++) 
    {
        if (prime(i) && palindrome(i)) 
        {
            console.log(i);
        }
    }
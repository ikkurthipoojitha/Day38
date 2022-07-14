let year = 2016;
let leap = false;
if (year % 4 == 0) 
        if (year % 100 == 0) 
            if (year % 400 == 0)
                    leap = true;
            else
                leap = false;
        else
            leap = true;
else
    leap = false;
if(leap)
    console.log("leap year");      
else 
    console.log("not a leap year");
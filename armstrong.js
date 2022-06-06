let num = 153;
let sum = 0;
let n = num;
while (num>0) {
     rem = num%10;
     sum = sum+(rem*rem*rem);
  
    if(rem>=5){
        num = num-rem;
    }
    let lastDigit =num/10;
    num = Math.round(lastDigit);
    console.log(num);
    }if(n==sum){
        console.log('given number is armstrong');
    }else
    {
        console.log('given number not armstrong')
    }
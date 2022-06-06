let num = 1;
let sum = 20
let prime;
for(i=1;i<sum;i++){
        prime = 0;
     for(j=2;j<i;j++){
        if(i%j==0){
            prime = 1;
        }
    }
    if(i>1 && prime==0){
        console.log(i)
    }
}
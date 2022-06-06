let e = 80;
let t = 70;
let m = 80;
let s = 80;
let ss = 90;
let total = (e+t+m+s+ss);
let average = (total/5);
console.log("student total is:"+total);
console.log(average+"student average");
if(40>average){
    console.log('student grade is F');
}
else if(90<average){
    console.log('student grade is A');
}else if(80<average){
    console.log('student grade is B');
}else if(70<average){
    console.log('student grade is c');
}else if(60<average){
    console.log('student grade is D');
}else if(50<average)
{
    console.log('student grade is E');
}
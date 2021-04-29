var num1=Number(prompt("Choose a number"));
if(isNaN(num1)){
  do{
  x=prompt("Invalid Input: It has to be a NUMBER!!!!!");
  num1=x;
}
while(isNaN(num1));
}

var num2=Number(prompt("Choose a another number"));
if(isNaN(num2)){
  do{
  z=prompt("Invalid Input: It has to be a NUMBER!!!!!");
  num2=z;
}
while(isNaN(num2));
}


function Numb(){
num1=Math.ceil(num1);
num2=Math.floor(num2);
rannum=Math.floor((Math.random()*10)+0);
sum=num1+num2+rannum;

  
document.querySelector("#number1").innerHTML="The first number is: "+num1;
  document.querySelector("#number2").innerHTML="The second number is: "+num2;
  document.querySelector("#number3").innerHTML="The random number is: "+rannum;
  document.querySelector("#number4").innerHTML="The total is: "+sum;
}
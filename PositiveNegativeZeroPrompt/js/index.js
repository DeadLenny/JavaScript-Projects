var one = Number(prompt("Choose a number"));
var two = Number(prompt("Choose a number"));





function un(){
  if(one === 0){
    document.querySelector(".first").innerHTML=("The number is "+one+" and it is zero");
  } else if(Math.sign(one) == -1){
    document.querySelector(".first").innerHTML=("The number is "+one+" and it is negative");
  }else{
    document.querySelector(".first").innerHTML=("The number is "+one+" and it is positive");
  }
}

function deux(){
  if((two%2)===0){
    document.querySelector(".second").innerHTML=("The number is "+two+" it is even");
  }else{
    document.querySelector(".second").innerHTML=("The number is "+two+" and it is odd");
  }
}


un();
deux();
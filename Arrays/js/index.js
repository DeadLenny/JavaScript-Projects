var choice=prompt("What is your favourite random word?");
var array=["sanic ","enchiladas ","fisheroos ","dataman ",choice];

first();
document.write('<br/>');
second();
document.write('<br/>');
document.write(array[3],array[1]);
document.write('<br/>');
searche();
document.write('<br/>');
last();




function first(){
  for(var i=0;i<array.length;i++){
  document.write(array[i]+"  ")
}
}
function second(){
  var blah=array.reverse();

for(var i=0;i<blah.length;i++){
  document.write(blah[i]+"  ")
}
}

function last(){
  array.sort();
  for(var i=0;i<array.length;i++){
  document.write(array[i]+"  ")
}
}


function searche(){
  for(var i=0;i<array.length;i++){
    t=array[i].includes("e")
  
  if(t==true){
     document.write(array[i]+" ")
     }
  }
  
}
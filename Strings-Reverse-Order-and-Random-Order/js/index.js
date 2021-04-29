var name=prompt("What is your name?");
rev();
document.write('<br/>');
first();
document.write('<br/>');
ran();

function rev(){
  rev= name.split("");
  rev=rev.reverse("");
  rev=rev.join("");
document.write("Name in reverse: "+rev);
}
function first(){
  res = name.charAt(0);
  rej = name.charAt(name.length-1);
  document.write("The First letter is: "+res);
  document.write('<br/>');
  document.write("The Last letter is: "+rej);
  
}
function ran(){
  var a = name.split(""),
        n = a.length;
  
  for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
   g=a.join("");
  document.write("The letters randomly rearranged: "+g);
}
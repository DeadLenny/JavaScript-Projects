

var q1=prompt("What is your name?");
var q2=prompt("What is your favourite candy?");
var q3=prompt("What is your least favourite candy?");


var q4=prompt("What is your name?");
var q5=prompt("What is your favourite candy?");
var q6=prompt("What is your least favourite candy?");

function function1(name,candy){
  document.write("Hi! My name is ", name," and my favourite candy is ", candy, ".");
}

function function2(name,least){
  document.write(" Hi! the name is ",name, " and ",least," is terrible!");
}

function1(q1,q2);
document.write('<br/>');
function2(q1,q3);
document.write('<br/>');
document.write('<br/>');

function1(q4,q5);
document.write('<br/>');
function2(q4,q6);
document.write('<br/>');
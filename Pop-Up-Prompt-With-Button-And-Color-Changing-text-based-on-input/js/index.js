var person = prompt("What is your favourite color?(Please type in all lower case)");

function condi() {
  if (person == "red") {
    document.getElementById("write").style.color = "red";
  } else if (person == "blue") {
    document.getElementById("write").style.color = "blue";
  } else if (person == "yellow") {
    document.getElementById("write").style.color = "yellow";
  } else if (person == "green") {
    document.getElementById("write").style.color = "green";
  } else if (person == "purple") {
    document.getElementById("write").style.color = "purple";
  }else if (person == "orange"){
    document.getElementById("write").style.color="orange";
  }else if (person == "pink"){
    document.getElementById("write").style.color="pink";
  }else{
    document.getElementById("write").style.color="white";
  }
}

function black() {
  document.getElementById("write").style.color = "black";
}

function per() {
  document.querySelector("#write").innerHTML = person;
}
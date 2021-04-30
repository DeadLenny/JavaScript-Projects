var array1 = [];
var array2 = [];
var name = prompt("What is your name?");
namecon();
array1.push(name);

var grade = prompt("Enter your grade:");
gradenan();
range();
array2.push(grade);

document.querySelector("#some").innerHTML = "Name: " + array1[0];
document.querySelector("#some1").innerHTML = "Grade: " + array2[0];

function gradenan() {
  if (isNaN(grade)) {
    do {
      x = prompt("Invalid Input: It has to be a NUMBER!!!!!");
      grade = x;
    } while (isNaN(grade));
  }
}

function range() {
  if (grade <= -1 || grade >= 101) {
    do {
       document.querySelector("#error2").innerHTML = "You didn't choose a number between 0 and 100, at first" ;
      x = prompt("Invalid Input: NUMBER HAS TO BE BETWEEN 0 AND 100!!!!");
      grade = x;
    } while (grade <= -1 || grade >= 101);
  }
}

function namecon() {
  if (name.length < 2) {
    do {
      document.querySelector("#error1").innerHTML = "Error:You didn't type at least 2 characters, at first" ;
      x = prompt(
        "Invalid Input: THE INPUT MUST BE AT LEAST 2 CHARACTERS!!!!!!"
      );
      name = x;
    } while (name.length < 2);
  }
}

function anotherone() {
  name = prompt("What is your name?");
  namecon();
  array1.push(name);

  grade = prompt("Enter your grade:");
  gradenan();
  range();
  array2.push(grade);

  for (var i = 0; i < array1.length; i++) {
    if (i == 1) {
      document.querySelector("#some2").innerHTML = "Name: " + array1[1];
      document.querySelector("#some3").innerHTML = "Grade: " + array2[1];
    }
    if (i == 2) {
      document.querySelector("#some4").innerHTML = "Name: " + array1[2];
      document.querySelector("#some5").innerHTML = "Grade: " + array2[2];
    }
    if (i == 3) {
      document.querySelector("#some6").innerHTML = "Name: " + array1[3];
      document.querySelector("#some7").innerHTML = "Grade: " + array2[3];
    }
    if (i == 4) {
      document.querySelector("#some8").innerHTML = "Name: " + array1[4];
      document.querySelector("#some9").innerHTML = "Grade: " + array2[4];
    }
    if (i == 5) {
      document.querySelector("#some10").innerHTML = "Name: " + array1[5];
      document.querySelector("#some11").innerHTML = "Grade: " + array2[5];
    }
    if (i == 6) {
      document.querySelector("#some12").innerHTML = "Name: " + array1[6];
      document.querySelector("#some13").innerHTML = "Grade: " + array2[6];
    }
    if (i == 7) {
      document.querySelector("#some14").innerHTML = "Name: " + array1[7];
      document.querySelector("#some15").innerHTML = "Grade: " + array2[7];
  }
}
}
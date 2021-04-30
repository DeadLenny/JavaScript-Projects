var array1 = [];

function dothis() {
  name();
  animal();
  num();
  letter();
}

function name() {
  var x = document.getElementById("entry1").value;
  document.querySelector("#res1").innerHTML = x;
}

function animal() {
  var y = document.getElementById("entry2").value;

  array1.push(y);
  document.querySelector("#res5").innerHTML = array1;

  if (y === "dog") {
    document.querySelector("#res2").innerHTML = "woof woof";
  } else if (y === "cat") {
    document.querySelector("#res2").innerHTML = "meow meow";
  } else if (y === "fish") {
    document.querySelector("#res2").innerHTML = "blub blub";
  } else {
    document.querySelector("#res2").innerHTML = "Annoying Sounds";
  }
}
  function num() {
    var get = document.getElementById("entry3").value;
    document.querySelector("#res3").innerHTML = Number(get) + 6;
  }

  function letter() {
  var ll = document.getElementById("entry4").value;
  if (ll.length == 1 && ll.match(/[a-z]/i)) {
    document.querySelector("#res4").innerHTML = "The cool letter is: " + ll;
  } else if (ll.length > 1) {
    document.querySelector("#res4").innerHTML = "Not one Letter";
  } else {
    document.querySelector("#res4").innerHTML = "Not a Letter";
  }
}
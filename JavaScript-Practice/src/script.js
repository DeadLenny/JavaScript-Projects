function dothis(){
  
  name();
  password();
  confirm();
  age();
  decide();
 
}
function name(){
  username="FinalUsername"
  var entry = document.getElementById("entry1").value;
  if(entry.match(username)){
    return true;
  }else{
    alert("Incorrect username");
  }
}
function password(){
  pass="finalPassword"
    var entry2 = document.getElementById("entry2").value;
  if(entry2.match(pass)){
    return true;
  }else{
    alert("Incorrect password");
  }
}
function confirm(){
  confir="finalPassword"
    var entry3 = document.getElementById("entry3").value;
  if(entry3.match(confir)){
    return true;
  }else{
    alert("Password does not match");
  }
}
function age(){
  ag=Number(document.getElementById("entry4").value)
  if(ag>=18){
    return true;
  }else if(ag<18){
    alert("You are not old enough")
  }else{
    alert("Must be a number ")
  }
  
}
function decide(){
     if(name()==true && password()==true && confirm()==true && age()==true){
    alert("Submitted Correctly")
  }
  }
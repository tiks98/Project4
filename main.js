var Name = document.getElementById("Name");
var age = document.getElementById("age");
var locations = document.getElementById("locations");
var email = document.getElementById("email");





email.addEventListener("input", function (event) {

   if(emial.validity.typeMismatch){
    email.setCustomValidity("this@email.com");
} else {
  email.setCustomValidity("");
}
});


email.addEventListener("invalid", () => {

  
  if(email.value === ""){
    email.setCustomValidity(" Enter your email address here");
  } else {
    email.setCustomValidity("");
  }
 
});




Name.addEventListener("invalid", () => {

 
  if(Name.value === ""){
    Name.setCustomValidity(" Please enter your name here");
  } else {
    Name.setCustomValidity("");
  }
 
});

locations.addEventListener("invalid", () => {

  
  if(locations.value === ""){
    locations.setCustomValidity(" Please enter location here");
  } else {
    locations.setCustomValidity("");
  }
 
});


age.addEventListener("invalid", () => {

  
  if(age.value === ""){
    age.setCustomValidity("Enter select your age");
  } else {
    age.setCustomValidity("");
  }
 
});

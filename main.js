var firstName = document.getElementById("firstName");
var age = document.getElementById("age");
var locations = document.getElementById("locations");
var email = document.getElementById("mail");





email.addEventListener("input", function (event) {

   if(emial.validity.typeMismatch){
    email.setCustomValidity("user123@example.com");
} else {
  email.setCustomValidity("");
}
});


email.addEventListener("invalid", () => {

  
  if(email.value === ""){
    email.setCustomValidity("Enter Your Email");
  } else {
    email.setCustomValidity("");
  }
 
});




firstName.addEventListener("invalid", () => {

 
  if(firstName.value === ""){
    firstName.setCustomValidity(" Enter Your Name");
  } else {
    firstName.setCustomValidity("");
  }
 
});

locations.addEventListener("invalid", () => {

  
  if(locations.value === ""){
    locations.setCustomValidity("Enter Your Location");
  } else {
    locations.setCustomValidity("");
  }
 
});


age.addEventListener("invalid", () => {

  
  if(age.value === ""){
    age.setCustomValidity("Enter Your Age");
  } else {
    age.setCustomValidity("");
  }
 
});

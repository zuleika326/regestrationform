const registrationform = document.getElementById("registration form");

registrationform.addEventListener("submit", (e) => {
  //stop form from [page] reloading
  e.preventDefault();
  const Email = document.getElementById("Email").value;
  const Password = document.getElementById("Password").value;
  const Repeat = document.getElementById("Repeat").value;


  if (Password !== Repeat) {
    alert("password must be same");
  }else if(Email.length >20 ){
    alert("email should not exceed 20 characters ")
  }
  
    console.log(
        "Email : ",
        Email,
        "Password : ",
        Password,
        "Repeat : ",
        Repeat,
        
      );




  
});
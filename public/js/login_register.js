function validate() {      
  var reg_pwd = document.getElementById("reg_password");
  var confirm_password = document.getElementById("confirm_password");
        
  if (reg_pwd.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    return false;
  }
  else {
    confirm_password.setCustomValidity("");
    return true;
  }
}

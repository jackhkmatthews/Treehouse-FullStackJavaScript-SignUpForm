//PROBLEM: hints are shown even when form is valid
//SOLUTION: hide and show them at appropraite times

var $password = $("#password")
var $confirmPassword = $("#confirm_password")
var $button = $("#button")
var $username = $("#username")

function passwordEvent () {
  //find out if password is valid
  if($password.val().length > 8){
    
    //hide hint if valid
    $password.next().hide();
    
  
    //else show hint
  } else {
    $password.next().show();
  }
}

function confirmPasswordEvent () {
  
  //find out if passwords match
  if ($confirmPassword.val() === $password.val()) {
    
    //hide hint if match
    $confirmPassword.next().hide();
   
    //else show hint
  } else {
    $confirmPassword.next().show();
  }
}

function checkForm () {
  if ($password.val().length > 8 && $confirmPassword.val() === $password.val() && $username !== "") {
    $button.show();
  } else {
    $button.hide();
}
}

//hide hints
$("form span").hide();

//hide button
$button.hide()

//when event (focus or keyup) happens on password input run passwordFunction to check if valid and hide/show hint as appropriate and run confirmpasswordFunction to check if same as password and hide/show hint as appropriate

$password.focus(passwordEvent).focus(confirmPasswordEvent).focus(checkForm).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(checkForm);

//when event (focus or keyup) happens on confirm password input run confirmpasswordFunction to check if same as password and hide/show hint as appropriate
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).focus(checkForm).keyup(checkForm);
















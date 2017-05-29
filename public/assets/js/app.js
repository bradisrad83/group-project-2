
$(document).ready(function() {

  var token;

  $(".clickLog").click(function() {
    $('#logInModal').modal('show');
  });

  $('#getRegModal').click(function() {
    $('#logInModal').modal('hide');
    $('#registerModal').modal('show');
  });

  $('#getLogin').click(function() {
    $('#registerModal').modal('hide');
    $('#logInModal').modal('show');
  });

  $('#registerbtn').click( function() {
    var rName = $('#reg-username').val().trim();
    var rEmail = $('#reg-email').val().trim();

    var rPassword = $('#reg-password').val().trim();
    var confirmPass = $('#confirm-password').val().trim();

    var registerObj = {
      username: rName,
      email: rEmail,
      password: rPassword
    };

    $('#regErrMsg').html("");


    if (confirmPass !== rPassword) {
      console.log(confirmPass);
      console.log(rPassword);

      $('#regErrMsg').prepend("<h4 class='text-center' style='color:#ea8737;'>Sorry, your passwords don't match. Please try again.</h4>");
      $('#registerModal').modal('show');
    } else {
      $.ajax({
        type: 'POST',
        url: 'api/account',
        data: registerObj,
        success: function(result) {
          console.log(result);
          // Save the token to a variable
          token = result.token;
          console.log("^^^^^^^^^^token^^^^^^^^^^");
          console.log(token);
          console.log("^^^^^^^^^^^^^^^^^^^^^^^^^");
          localStorage.setItem('Token', token);
          //sessionStorage.setItem('Token', token);
          $('#registerForm')[0].reset();
          location.href = "/dashboard";
        },
        error: function(error) {

          var errorMsg = error.responseJSON.errors[0].message;

          console.log(errorMsg);
          var uniqueUsername = "username has been used";
          var uniqueEmail = "email must be unique";
          var invalideEmail = "email is not valid";
          var tooLong = "Validation len failed";

          switch (errorMsg) {
            case uniqueUsername:
              $('#regErrMsg').prepend("<h4 class='text-center' style='color:#ea8737;'>Sorry, that username is in use, please choose a new one</h4>");
              $('#registerModal').modal('show');
              break;
            case tooLong:
              $('#regErrMsg').prepend("<h4 class='text-center' style='color:#ea8737;'>Sorry, that username is to long, please limit it to 20 characters or less</h4>");
              $('#registerModal').modal('show');
              break;
            case uniqueEmail:
              $('#regErrMsg').prepend("<h4 class='text-center' style='color:#ea8737;'>Sorry, that email is in use.</h4>");
              $('#registerModal').modal('show');
              break;
            case invalideEmail:
              $('#regErrMsg').prepend("<h4 class='text-center' style='color:#ea8737;'>Sorry, that email is not valid please check and re-enter.</h4>");
              $('#registerModal').modal('show');
              break;
            default:
              $('#regErrMsg').prepend("<h4 class='text-center' style='color:#ea8737;'>Sorry, something went wrong please re-register.</h4>");
              $('#registerModal').modal('show');
          } //close switch
        }
      }); //close ajax
    } //close else statement

  });//close registerbtn click function



$('#loginbtn').click(function() {
    var lName = $('#log-username').val().trim();
    var lPassword = $('#log-password').val().trim();
  console.log(lName);
  console.log(lPassword);
    var loginObj = {
        username: lName,
        password: lPassword
    };

    $('#logErrMsg').html("");
    console.log(loginObj);
    $.ajax({
        type: 'post',
        url: 'api/login',
        data:loginObj,
        success: function(res){
            token = res.token;
            console.log(token);
            localStorage.setItem('Token', token);
            location.href = "/dashboard/" + loginObj.username;

            console.log(res)
        },
        error: function(error){
          console.log(error);
          $('#logErrMsg').prepend("<h4 class='text-center' style='color:#ea8737;'>Your username or password is incorrect.</h4>");
          $('#logInModal').modal('show');
        }
    });
  });
});

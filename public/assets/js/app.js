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

  $('#registerbtn').click(function() {
    var rName = $('#reg-username').val().trim();
    var rEmail = $('#reg-email').val().trim();
    var rPassword = $('#reg-password').val().trim();
    var confirmPass = $('#confirm-password').val().trim();

    var registerObj = {
      username: rName,
      email: rEmail,
      password: rPassword
    };
    if (confirmPass !== rPassword) {
      //bootbox.confirm("<h3 class='text-center m-top-90'> Sorry, your passwords don't match.<br/>Please try again.</h3>");
      //$('#registerModal').modal('show');
      bootbox.confirm({
        message: "<h3 class='text-center m-top-80'> Sorry, your passwords don't match.<br/>Please try again.</h3>",
        buttons: {
          confirm: {
            label: 'Yes',
            className: 'btn-success'
          },
          cancel: {
            label: 'No',
            className: 'btn-danger',
            callback: function() {
              $('#registerModal').modal('hide');
            }
          }
        },
        callback: function(result) {
          console.log(result);
        }
      });
    } else {
      $.ajax({
        type: 'POST',
        url: 'api/account',
        data: registerObj,
        success: function(result) {
          console.log(result);
          // Save the token to a variable
          token = result.token;
          console.log(token);
        }
      });
    }




    //$.post( '/api/account', $('registerForm').serialize(), function(data) {
    //console.log(data);
    // do something with data?
    // currently its saying "POST http://localhost:8080/api/account 404 (Not Found)"
    //});
  });

});

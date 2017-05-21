$(document).ready(function() {

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
    var rPassword =$('#reg-password').val().trim();

    var registerObj = {
      username: rName,
      email: rEmail,
      password: rPassword
    };
    $.ajax({
      type: 'POST',
      url: 'api/account',
      data: registerObj,
      success: function(result){
        console.log(result);
      }
    });



  //$.post( '/api/account', $('registerForm').serialize(), function(data) {
      //console.log(data);
      // do something with data?
      // currently its saying "POST http://localhost:8080/api/account 404 (Not Found)"
    //});
  });

});

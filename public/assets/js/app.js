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
  $.post( '/api/account', $('registerForm').serialize(), function(data) {
      // do something with data?
      // currently its saying "POST http://localhost:8080/api/account 404 (Not Found)"
    });
  });

});

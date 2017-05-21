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
})

$(function() {

  $("#nav").removeClass('active')

  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });


});

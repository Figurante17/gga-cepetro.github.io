$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 120) {
      $(".fixar").addClass("menuScroll");
    } else {
      $(".fixar").removeClass("menuScroll");
    }
  });
});

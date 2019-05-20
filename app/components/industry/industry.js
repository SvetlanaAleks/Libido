$(document).ready(function() {
  $(".industry__button").click(function() {
    $(this)
      .parent()
      .toggleClass("active");
  });
});

$(".js-reviews-slider").slick({
  infinite: true,
  slidesToShow: 3,
  dots: true,
  prevArrow: $(".reviews__arrow-prev"),
  nextArrow: $(".reviews__arrow-next"),
  centerMode: true,
  centerPadding: "0px",
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(document).ready(function() {
  $(".reviews__button").click(function() {
    if ($(this).hasClass("open")) {
      $(this).text("+");
      $(".reviews__more-text").slideUp();
      $(this).removeClass("open");
    } else {
      $(".reviews__more-text").slideUp();
      $(this).text("-");
      $(this).removeClass("open");
      $(this)
        .parent()
        .find(".reviews__more-text")
        .slideDown();

      $(this).addClass("open");
    }
  });
});

$(".js-reviews-slider").on("beforeChange", function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  $(".reviews__more-text").slideUp();
  $(".reviews__button")
    .removeClass("open")
    .text("+");
});

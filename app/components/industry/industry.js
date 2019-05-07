$(".js-industry-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".industry__arrow-prev"),
  nextArrow: $(".industry__arrow-next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
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
  $(".industry__button").click(function() {
    if ($(this).hasClass("open")) {
      $(this).text("+");
      $(".industry__more-text").slideUp();
      $(this).removeClass("open");
    } else {
      $(this).text("-");
      $(".industry__more-text").slideUp();
      $(this).removeClass("open");
      $(this)
        .parent()
        .find(".industry__more-text")
        .slideDown();

      $(this).addClass("open");
    }
  });
});

$(".js-industry-slider").on("beforeChange", function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  $(".industry__more-text").slideUp();
  $(".industry__button")
    .removeClass("open")
    .text("+");
});

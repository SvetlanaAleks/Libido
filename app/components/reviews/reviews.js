$(".js-reviews-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  prevArrow: $(".reviews__arrow-prev"),
  nextArrow: $(".reviews__arrow-next"),
  centerMode: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
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
    $(this)
      .parent()
      .toggleClass("active");
  });
});

$(".js-reviews-slider").on("beforeChange", function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  $(".reviews__slide").removeClass("active");
});

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
    $(this)
      .parent()
      .toggleClass("active");
  });
});

$(".js-industry-slider").on("beforeChange", function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  $(".industry__slide").removeClass("active");
});

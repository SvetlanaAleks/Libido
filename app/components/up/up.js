var upEl = $('.up__el');
var up = $('.up');

$(upEl).click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

$(window).scroll(function() {
    var height = $('section.header').outerHeight();
    ($(this).scrollTop() > height)
        ? up.addClass('active')
        : up.removeClass('active');
});


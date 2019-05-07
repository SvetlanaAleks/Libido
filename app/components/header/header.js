var links = $('.topLink');
links.click(function (e) {
    e.preventDefault();
    var _this = $(this);
    var href = _this.attr("href");

    if (href.length <= 1) {
        return;
    }
    var target = $(href);
    if (!target.length) {
        return;
    }
    var top = target.offset().top;
    $("html, body").animate({
        scrollTop: top - 50
    }, 1000);
});


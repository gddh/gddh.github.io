shots = $(".shot").fadeTo(0, 0.0);

$('.container').scroll(function(d,h) {
    shots.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $('#portfolio').scrollTop() + $('.container').height();
        if (a < b) $(this).fadeTo(500,1);
    });
});
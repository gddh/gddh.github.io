shots = $(".shot").fadeTo(0, 0.5);

$('.contain').scroll(function(d,h) {
    shots.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $('#port').scrollTop() + $('.contain').height();
        if (a < b) $(this).fadeTo(500,1);
    });
});
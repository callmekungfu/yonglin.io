$(document).ready(() => {
    $('body').fadeIn('slow');
});

$(".mobile-control").click(function(){
    var menu = $(".nav-menu-container");
    menu.fadeToggle( "fast", "linear" );
});

$('a').click(function(evt){
    var target = $(this).attr('href');
    var newTab = $(this).attr('target');
    evt.preventDefault();
    if (target.charAt(0) !== '#') {
        if (newTab === '_blank') {
            window.open(target, '_blank')
        } else {
            $('body').fadeOut(500, function(){
                window.location.href = target;
            });
        }
    } else {
        window.open(target);
    }
})
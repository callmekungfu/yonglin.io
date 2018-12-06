$(document).ready(() => {
    $('body').fadeIn('slow');
});

$('a').click(function(evt){
    var target = $(this).attr('href');
    evt.preventDefault();
    if (target) {
        $('body').fadeOut(500, function(){
            window.location.href = target;
        });
    }
})
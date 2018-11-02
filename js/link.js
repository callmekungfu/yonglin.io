$('a').click(function(evt){
    var target = $(this).attr('href');
    evt.preventDefault();
    $('body').fadeOut(500, function(){
        window.location.href = target;
    });
})
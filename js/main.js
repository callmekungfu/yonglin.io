var controller = new ScrollMagic.Controller();

// Project Revealer
$('.project').each(function () {
  var loaderInit = new TimelineMax();
  if ($(this).hasClass('left')) {
    var imgSet = 0,
      imgBlockFrom = -101,
      imgBlockTo = 101,
      contTextSet = -30,
      textBlockStaggerFrom = 101,
      textBlockStaggerTo = -101;
  } else {
    var imgSet = 0,
      imgBlockFrom = 101,
      imgBlockTo = -101,
      contTextSet = 30,
      textBlockStaggerFrom = -101,
      textBlockStaggerTo = 101;
  }
  loaderInit
    .set($(this).find('.preview-image'), {
      autoAlpha: 1,
      xPercent: imgSet
    }, 0)
    .from($(this).find('.reveal_block-img'), 0.325, {
      xPercent: imgBlockFrom,
      ease: Power1.easeOut
    })
    .set($(this).find('.reveal-img'), {
      autoAlpha: 1
    })
    .to($(this).find('.reveal_block-img'), 0.225, {
      xPercent: imgBlockTo,
      ease: Sine.easeOut
    })

  //  build a scene
  var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 'onEnter',
      offset: 700
    }).setTween(loaderInit).addTo(controller)
});

// Fun facts
$('.fun-fact').click(function(){
  var $text = $(this).find('p');
  var $icon = $(this).find('.fun-fact-icon');
  $icon.removeClass("bounceIn");
  $text.removeClass("fadeInUp");
  $icon.addClass("bounceOut")
  $text.addClass("fadeOutUp");
  setTimeout(function(){
    $icon.removeClass("bounceOut")
    $text.removeClass("fadeOutUp");
    $icon.addClass("bounceIn")
    $text.addClass("fadeInUp");
  }, 800)
})
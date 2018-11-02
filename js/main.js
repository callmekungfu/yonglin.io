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
$('.fun-fact').click(function () {
  var $text = $(this).find('p');
  var $icon = $(this).find('.fun-fact-icon');
  $icon.removeClass("bounceIn");
  $text.removeClass("fadeInUp");
  $icon.addClass("bounceOut")
  $text.addClass("fadeOutUp");
  setTimeout(function () {
    $icon.removeClass("bounceOut")
    $text.removeClass("fadeOutUp");
    $icon.addClass("bounceIn")
    $text.addClass("fadeInUp");
  }, 800)
})

$('.contact-btn').click(function () {
  var $title = $('.contact-title');
  var $desc = $('.contact-desc');
  var $btn = $(this);
  $title.removeClass("fadeInUp");
  $desc.removeClass("fadeInUp");
  $btn.removeClass("bounceIn");

  $title.addClass("fadeOutUp");
  setTimeout(function () {
    $desc.addClass("fadeOutUp");
  }, 250);
  setTimeout(function () {
    $btn.addClass("bounceOut");
    setTimeout(contactStep2, 500);
  }, 500);
});

$('.step2').click((evt) => {
  evt.preventDefault();
  $('.inline-contact h4').addClass('fadeOutUp');
  setTimeout(() => {
    $('.step2').addClass("zoomOut")
  }, 250);
  setTimeout(() => {
    $('.inline-contact').hide();
    $('#contactMessage').removeClass('hidden');
    setTimeout(()=>{
      $('#contactMessage').addClass('fadeIn');
    }, 100);
  }, 1000)
  
});

function contactStep2() {
  $('.contact-prompt').hide();
  $('.inline-contact').show();
  setTimeout(() => {
    $('.inline-contact h4').addClass('fadeInDown');
  }, 100);
  setTimeout(() => {
    $('.step2').addClass("bounceIn")
  }, 600)
}
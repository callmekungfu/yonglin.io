var controller = new ScrollMagic.Controller();
var message = {
  contact: {}
};

var facts;

$(document).ready(() => {
  $.ajax({
    type: "GET",
    url: "/facts.json",
    dataType: "json",
  })
  .done((data) => {
    var $text = $('.fun-fact').find('p');
    var $icon = $('.fun-fact').find('.fun-fact-icon');
    facts = shuffle(data.facts);
    $icon.text(facts[0].icon);
    $text.text(facts[0].content);
    $('.fun-fact').addClass('fadeInUp');
    $icon.removeClass("bounceOut")
    $text.removeClass("fadeOutUp");
    $icon.addClass("bounceIn")
    $text.addClass("fadeInUp");
  });
});

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

var factCounter = 1;
// Fun facts
$('.fun-fact').click(function () {
  if (factCounter === facts.length) {
    factCounter = 0;
  }
  var $text = $(this).find('p');
  var $icon = $(this).find('.fun-fact-icon');
  $icon.removeClass("bounceIn");
  $text.removeClass("fadeInUp");
  $icon.addClass("bounceOut");
  $text.addClass("fadeOutUp");
  setTimeout(function () {
    $icon.text(facts[factCounter].icon);
    $text.text(facts[factCounter].content);
    $icon.removeClass("bounceOut")
    $text.removeClass("fadeOutUp");
    $icon.addClass("bounceIn")
    $text.addClass("fadeInUp");
    factCounter++;
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
  var flag = true;
  $('.info-prompt input').each((i, ele) => {
    var content = $(ele).val();
    var input = $(ele);
    if (!content.length) {
      input.addClass('input-error');
      input.addClass('tada');
      flag = false;
      setTimeout(() => {
        input.removeClass('tada');
      }, 600);
    }
    if (i === 1) {
      if (!isEmail(content)) {
        input.addClass('input-error');
        input.addClass('tada');
        flag = false;
      }
    }
  });
  if (flag) {
    message.contact.name = $('.info-prompt input[name="name"]').val();
    message.contact.email = $('.info-prompt input[name="email"]').val();
    message.subject = $(evt.target).attr('data-subject')
    $('.inline-contact h4').addClass('fadeOutUp');
    setTimeout(() => {
      $('.step2').addClass("zoomOut")
    }, 250);
    setTimeout(() => {
      $('.inline-contact').hide();
      $('#contactMessage').removeClass('hidden');
      setTimeout(() => {
        $('#contactMessage').addClass('fadeIn');
      }, 100);
    }, 1000);
  }
});

$('#aboutMeTrigger').click((evt) => {
  evt.preventDefault();
  var $aboutMe = $('.about-me');
  $aboutMe.removeClass('fadeOutLeftBig')
  $aboutMe.removeClass('visuallyhidden');
  $aboutMe.addClass('fadeInLeftBig');
  $('.main').fadeOut();
  setTimeout(() => {
    var typeOptions = {
      strings: ["I am Yong Lin Wang.\nA multidisciplinary software developer."],
      typeSpeed: 60,
      onComplete: () => {
        setTimeout(() => {
          $('.type-intro h2').addClass('fadeOut');
          setTimeout(() => {
            $('.type-intro h2').hide();
            $('.type-intro').css({
              'height': '100vh'
            });
            $('.bio').addClass('fadeIn');
          }, 600)
        }, 500)
      }
    }
    new Typed(".type-intro h2", typeOptions);
  }, 1000)
});

$('.close-about-us').click(() => {
  var $aboutMe = $('.about-me');
  $('.main').show()
  $aboutMe.removeClass('fadeInLeftBig');
  $aboutMe.addClass('fadeOutLeftBig');
  setTimeout(() => {
    $aboutMe.addClass('visuallyhidden');
  }, 900);
})

$('.contact-link').click(function() {
  $('html,body').animate({
      scrollTop: $(".contact").offset().top
    }, 1000);
});

$('.work-link').click(function() {
  $('html,body').animate({
      scrollTop: $(".project").offset().top
    }, 800);
});

$('.contact-info').keyup((evt) => {
  var $this = $(evt.target);
  if ($this.val().length) {
    $this.removeClass('input-error');
    $this.removeClass('tada');
  }
})

$('#contactMessage').bind('input propertychange', () => {
  if ($('#contactMessage').val().length) {
    $(".send-btn").removeClass('rotateOut');
    $(".send-btn").show();
    $(".send-btn").addClass('rotateIn');
  } else {
    $(".send-btn").removeClass('rotateIn');
    $(".send-btn").addClass('rotateOut');
  }
});

$('.send-btn').click((evt) => {
  var $title = $('.contact-title');
  var $desc = $('.contact-desc');
  message.body = $('#contactMessage').val();
  console.log(message);
  $('#contactMessage').removeClass('fadeIn')
  $('#contactMessage').fadeOut("fast");
  $(".send-btn").removeClass('rotateIn');
  $(".send-btn").addClass('rotateOut');
  $title.css('opacity', '0');
  $desc.css('opacity', '0');
  $('.contact-btn').css('opacity', '0');
  $.ajax({
    url: 'https://www.youmirrortube.com/email',
    method: 'post',
    data: message,
    ContentType: 'application/json',
  })
    .done((data) => {
      console.log(data);
      if (data.status === 'success') {
        $title.text("Message Sent!")
        $desc.text("I have received your message and will respond to you as soon as possible, thank you for contacting me! :)")
        $('.contact-btn').hide()
        $('.contact-prompt').show();
        $title.removeClass("fadeOutUp");
        $desc.removeClass("fadeOutUp");
        setTimeout(function () {
          $('.response-icon').removeClass('hidden');
          $('.response-icon').addClass("bounceIn");
          setTimeout(() => {
            $title.addClass("fadeInDown");
            $desc.addClass("fadeInDown");
          }, 250);
        }, 500);
      } else {
        $title.text("Failed!");
        $desc.text('Something went wrong sending the message, please try again later');
        $('.contact-btn').hide();
        $('.contact-prompt').show();
        $title.removeClass("fadeOutUp");
        $desc.removeClass("fadeOutUp");
        setTimeout(function () {
          $('.response-icon').removeClass('hidden');
          $('.response-icon').addClass("bounceIn");
          setTimeout(() => {
            $title.addClass("fadeInDown");
            $desc.addClass("fadeInDown");
          }, 250);
        }, 500);
      }
    });
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
};

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
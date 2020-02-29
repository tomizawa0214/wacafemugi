'use strict';

function mouseover1() {
  document.getElementById('home').innerHTML = '現在画面';
}
function mouseout1() {
  document.getElementById('home').innerHTML = 'Home';
}

function mouseover2() {
  document.getElementById('about').innerHTML = '和カフェ麦とは？';
}
function mouseout2() {
  document.getElementById('about').innerHTML = 'About';
}

function mouseover3() {
  document.getElementById('menu').innerHTML = '食事・ドリンク';
}
function mouseout3() {
  document.getElementById('menu').innerHTML = 'Menu';
}

function mouseover4() {
  document.getElementById('contact').innerHTML = '店舗案内・予約確認';
}
function mouseout4() {
  document.getElementById('contact').innerHTML = 'Contact';
}

$(window).resize(function() {
  $.each(slides, function() {
    resize(this);
  });
});

function resize(slide) {
  var background = $('#idshow1 , #idshow2', slide);
  if (background.width() * fitTo.height() > background.height() * fitTo.width()) {
    background.height(fitTo.height());
    background.width(fitTo.height() * slide.originalWidth / slide.originalHeight);
    background.css({ marginLeft: -(background.width() - fitTo.width()) / 2, marginTop: 0 });
  } else {
    background.width(fitTo.width());
    background.height(fitTo.width() * slide.originalHeight / slide.originalWidth);
    background.css({ marginLeft: 0, marginTop: -(background.height() - fitTo.height()) / 2 });
  }
}

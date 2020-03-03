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

var myImage = new Array(
  "photo/外観.jpg",
  "photo/パンケーキ.jpg",
  "photo/グラタン.jpg",
);
var myNowCnt = -1;		// 現在表示している配列番号
var myflg = 0;		// どっちを表示して、どっちを消すかのフラグ
function myChange(){	// スライドショーメイン関数
  myNowCnt = (myNowCnt<myImage.length-1) ? myNowCnt+1 : 0;		// 次の配列番号
  myflg = (myflg==0) ? 1 : 0;						// 表示・非表示フラグ反転
  if (myflg == 0){
    document.getElementById("idshow1").src = myImage[myNowCnt];		// 次の画像をセットする
    document.getElementById("idshow1").className = "fadein";		// フェードイン
    document.getElementById("idshow2").className = "fadeout";	// フェードアウト
  }else{
    document.getElementById("idshow2").src = myImage[myNowCnt];		// 次の画像をセットする
    document.getElementById("idshow1").className = "fadeout";	// フェードアウト
    document.getElementById("idshow2").className = "fadein";		// フェードイン
  }
  setTimeout( "myChange()" , 4000 );					// 4秒周期に画像を更新する
}

//
// $(function(){
// 	var slides = [];
// 	var fitTo = $('#slider');
//   $('#slider img').each(function() {
//     var slide = $(this);
//     slide.originalWidth = slide.width();
//     slide.originalHeight = slide.height();
//     slides.push(slide);
//     resize(slide);
//   });
//
//   $(window).resize(function() {
//     $.each(slides, function() {
//       resize(this);
//     });
//   });
//
//   function resize(slide) {
//     var background = $('.background img', slide);
//     if (background.width() * fitTo.height() > background.height() * fitTo.width()) {
//       background.height(fitTo.height());
//       background.width(fitTo.height() * slide.originalWidth / slide.originalHeight);
//       background.css({ marginLeft: -(background.width() - fitTo.width()) / 2, marginTop: 0 });
//     } else {
//       background.width(fitTo.width());
//       background.height(fitTo.width() * slide.originalHeight / slide.originalWidth);
//       background.css({ marginLeft: 0, marginTop: -(background.height() - fitTo.height()) / 2 });
//     }
//   }
// });

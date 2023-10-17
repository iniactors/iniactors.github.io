$(function(){
    $('a[href^=#]').click(function() {
    var speed = 500; // スクロール速度(ミリ秒)
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html').animate({scrollTop:position}, speed, 'swing');
    return false;
    });
    });

// ウィンドウがリサイズされたときに呼ばれる関数
function handleResize() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var top = document.getElementById("top-section");
    var h = (windowWidth / 16) * 9;
    top.style.height = h + "px";
  }
  
  // ウィンドウのリサイズイベントにリスナーを追加
  window.addEventListener("resize", handleResize);

  window.onload = handleResize();
  
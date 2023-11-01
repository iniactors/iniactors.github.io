
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
    var h = (windowWidth / 16);
    top.style.height = (h*9) + "px";
    var sns = document.querySelectorAll(".sns-icon");
    for (var i = 0; i < sns.length; i++) {
        sns[i].style.marginRight = (h*2.5) + "px";
    }
    var X = document.getElementById("Xicon");
    X.style.marginTop = (h*4) + "px";
  }
  
  // ウィンドウのリサイズイベントにリスナーを追加
  window.addEventListener("resize", handleResize);

  window.onload = handleResize();

  var catchcopy = document.getElementById("catchcopymove");
  var options = {

    threshold:1
    }
    
    ;

  var observer = new IntersectionObserver(EachTextAnimeControl, options);
  
  observer.observe(catchcopy);

  function EachTextAnimeControl(entries){
    if(entries[0].IntersectionRatio == 0){
      return ;
    }
    else{
      var element = $(".catchcopy");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if(t === "星" || t === "友" || t === "情"){
        textbox += '<span style="animation-delay:.' + i + 's;color: #F0D864;">' + t + '</span>';
      }
      else if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  $('.catchcopy').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
    }}
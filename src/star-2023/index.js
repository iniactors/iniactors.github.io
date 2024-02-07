
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

  function arrowUp(n){
    if(document.getElementById(n).value === "9"){
        document.getElementById(n).value = "0";
    }
    else{
        document.getElementById(n).value = Number(document.getElementById(n).value) + 1;
    }
  }

  function arrowDown(n){
    if(document.getElementById(n).value === "0"){
        document.getElementById(n).value = "9";
    }
    else{
        document.getElementById(n).value = Number(document.getElementById(n).value) - 1;
    }
  }

  var success = ["8", "1", "6", "4"]

function checkNum(){
    for(var p=0;p<4;p++){
        console.log(document.getElementById(p).value);
        if(document.getElementById(p).value !== success[p]){
            return ;
        }
    }
    console.log("success");
}

function imgChange(name) {
    // 正規表現パターンを正しく構築する
    var pattern = new RegExp('.+' + name + '\.png$'); 
    // 画像の URL の末尾が正規表現パターンにマッチするかどうかをチェックする
    if(pattern.test(document.getElementById(name).src)) {
        document.getElementById(name).src = "../img/star-2023/" + name + "_hint.png" ;
    } else {
        document.getElementById(name).src = "../img/star-2023/" + name + ".png" ;
    }
}
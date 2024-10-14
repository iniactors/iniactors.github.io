// ローディング画面

window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

/***************************************/
/*           ハンバーガーメニュー       */
/***************************************/

const responsive_menu_btn = document.querySelector('.responsive_btn');
const header_menu_detail = document.querySelector('.header-nav');
const menu_links = document.querySelectorAll('.header-navitem > a');
const body = document.querySelector('body');  // body要素を取得

// ハンバーガーメニューを開閉するイベント
responsive_menu_btn.addEventListener('click', menuToggle);

function menuToggle() {
    header_menu_detail.classList.toggle('menu_active');
    responsive_menu_btn.classList.toggle('menu_active');  // メニューが開いた時に×印にする

    // メニューが開いているときは背景を固定し、閉じたら解除
    if (header_menu_detail.classList.contains('menu_active')) {
        body.classList.add('no_scroll');
    } else {
        body.classList.remove('no_scroll');
    }
}

// メニューリンクをクリックしたときにメニューを閉じるイベント
menu_links.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { // 画面幅が768px以下のときだけメニューを閉じる
            header_menu_detail.classList.remove('menu_active');
            responsive_menu_btn.classList.remove('menu_active');  // 三本線に戻す
            body.classList.remove('no_scroll');  // メニューが閉じられたら背景固定を解除
        }
    });
});


/***************************************/
/* クリックで切り替わる画像スライダーのコード */
/***************************************/

const images = document.querySelectorAll('.cast-silhouette');
const caption = document.querySelector('.silhouette-caption');
const centerText = document.querySelector('.center-text');  // 真ん中のテキスト要素
const prevBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
const totalImages = images.length;
let imageIndex = 0;

// 画像ごとに表示する中央テキストを配列で用意
const centerTexts = ["主人公。幼い時に誘拐されて以来、ある特殊な能力を持っている。昔アイが決めた判断に今でも疑問を持っている......",
                        "水瀬の1番の友達。勉強が苦手な明るいお調子者。しかし水瀬には絶対に言えないある秘密を抱えている......",
                        "国の安全を守る機関、『安全局』に所属している。水瀬の能力は危険なため、水瀬の監視・護衛を行っている。",
                        "ヒューマノイド製造元であるノヴァースの社長。亡くなった妻、明日香の夢であるヒューマノイド普及に取り組んでいる。",
                        "八神英治の妻。夢の道半ばで亡くなってしまった。しかし生前、自分のことをコピーしたヒューマノイドを作成し......"];

//ページ全体を読み込んだときに画像スライダーを更新する
window.addEventListener('load', () => {
    updateSlider();
});

//次へ進むボタンがクリックされたときの処理
nextBtn.addEventListener('click', () => {
    imageIndex++;
    if (imageIndex > totalImages - 1) {
    imageIndex = 0;
    } 
    updateSlider();
});

//前へ戻るボタンがクリックされたときの処理
prevBtn.addEventListener('click', () => {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = totalImages - 1;
    } 
    updateSlider();
});

//画像スライダーを更新する関数
function updateSlider() {
    images.forEach((image, index) => {
        if (index === imageIndex) {
            image.style.display = 'block';
            caption.innerHTML = image.alt;
        centerText.innerHTML = centerTexts[index];  // 対応する中央テキストを表示
        } else {
        image.style.display = 'none';
        }
    });
}



/**************************/
/* クレジット開閉のコード */
/*************************/

// details要素とsummary要素を取得
const detailsElement = document.querySelector('.details');
const summaryElement = detailsElement.querySelector('.summary');

// detailsの状態が変更された時にイベントを処理
detailsElement.addEventListener('toggle', () => {
    if (detailsElement.open) {
        // クレジットが開いているとき
        summaryElement.textContent = '△CLOSE';
    } else {
        // クレジットが閉じているとき
        summaryElement.textContent = '▽OPEN';
    }
});
const responsive_menu_btn = document.querySelector('.responsive_btn');
const header_menu_detail = document.querySelector('.header-nav');
const menu_links = document.querySelectorAll('.header-navitem > a');

// ハンバーガーメニューを開閉するイベント
responsive_menu_btn.addEventListener('click', menuToggle);

function menuToggle() {
    header_menu_detail.classList.toggle('menu_active');
    responsive_menu_btn.classList.toggle('menu_active');  // メニューが開いた時に×印にする
}

// メニューリンクをクリックしたときにメニューを閉じるイベント
menu_links.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { // 画面幅が768px以下のときだけメニューを閉じる
            header_menu_detail.classList.remove('menu_active');
            responsive_menu_btn.classList.remove('menu_active');  // 三本線に戻す
        }
    });
});



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
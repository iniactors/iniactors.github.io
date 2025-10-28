// ----------------------
// 統合版: main.js
// ----------------------

// 1. ページ読み込み後のふすまアニメーション
window.addEventListener('load', () => {
    const fusumaLeft = document.querySelector('.fusuma-left');
    const fusumaRight = document.querySelector('.fusuma-right');
    const fusumaOverlay = document.getElementById('fusuma-overlay');

    setTimeout(() => {
        fusumaLeft.classList.add('open');
        fusumaRight.classList.add('open');
    }, 500);

    fusumaOverlay.addEventListener('transitionend', () => {
        fusumaOverlay.style.display = 'none';
    });

    // ページ表示から少し遅れて流れ星を開始
    setTimeout(() => {
        createRandomShootingStar();
        setInterval(createRandomShootingStar, 8000 + Math.random() * 10000);
    }, 3000);
});

// ----------------------
// DOMContentLoaded 後に実行
// ----------------------
document.addEventListener('DOMContentLoaded', () => {
    // 2. 昼夜切替ボタン
    const toggleButton = document.getElementById('toggleButton');
    const characterSection = document.getElementById('character-section');
    const moonSunWrapper = document.getElementById('moonSunWrapper');
    const body = document.body;

    const nightColor = '#222';
    const dayColor = '#9cd7e9ff';

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            // CSSクラスで処理する
            if (characterSection) characterSection.classList.toggle('is-night');

            if (moonSunWrapper) {
                moonSunWrapper.classList.toggle('show-sun');
                body.style.backgroundColor = moonSunWrapper.classList.contains('show-sun') ? dayColor : nightColor;
            }
        });
    }

    // 3. キラキラ星生成
    const starsContainer = document.getElementById('stars-container');
    if (starsContainer) {
        const numStars = 250;
        starsContainer.innerHTML = '';
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 4 + 1;
            star.style.width = star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * -15}s`;
            star.style.animationDuration = `${Math.random() * 2 + 1}s`;
            starsContainer.appendChild(star);
        }
    }

    // 4. モーダル処理（jQuery）
    $(".modalBtn").on("click", function () {
        $(".modalBg").fadeIn();
        $("body").addClass("no-scroll");
    });
    $(".modalClose").on("click", function () {
        $(".modalBg").fadeOut();
        $("body").removeClass("no-scroll");
    });
});

// ----------------------
// 流れ星生成関数
// ----------------------
const shootingStar = document.querySelector('.shooting-star');
function createRandomShootingStar() {
    if (!shootingStar) return;
    shootingStar.style.animation = 'none';
    shootingStar.offsetHeight; // 再描画

    const startX = Math.random() * 100 - 50;
    const startY = Math.random() * 30 - 10;
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 15;

    shootingStar.style.setProperty('--start-x', `${startX}vw`);
    shootingStar.style.setProperty('--start-y', `${startY}vh`);
    shootingStar.style.setProperty('--end-x', `${startX + 120}vw`);
    shootingStar.style.setProperty('--end-y', `${startY + 70}vh`);
    shootingStar.style.setProperty('--rotate-deg', `${Math.random() * 60 - 30}deg`);
    shootingStar.style.animation = `shooting-star-anim ${duration}s ease-in forwards`;
    shootingStar.style.animationDelay = `${delay}s`;
}

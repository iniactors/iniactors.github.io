// ページの全ての要素（画像など）が読み込まれたら実行
window.addEventListener('load', () => {
    // HTMLからふすまの要素を取得
    const fusumaLeft = document.querySelector('.fusuma-left');
    const fusumaRight = document.querySelector('.fusuma-right');
    const fusumaOverlay = document.getElementById('fusuma-overlay');

    // 少し待ってから（例: 0.5秒後）アニメーションを開始
    setTimeout(() => {
        // 左右のふすまに 'open' クラスを追加してアニメーションを発火
        fusumaLeft.classList.add('open');
        fusumaRight.classList.add('open');
    }, 500);

    // アニメーションが完了したら、ふすまの要素を非表示にする
    // これにより、背後のコンテンツが操作可能になる
    fusumaOverlay.addEventListener('transitionend', () => {
        fusumaOverlay.style.display = 'none';
    });
});
// 以前bodyの色を変えていたJavaScriptを、以下のように修正します。

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const characterSection = document.getElementById('character-section');

    if (toggleButton && characterSection) {
        // 初期状態を太陽モードにする
        characterSection.classList.remove('is-night');
        
        toggleButton.addEventListener('click', () => {
            // この一行だけで、CSSが残りのすべてを処理します
            characterSection.classList.toggle('is-night');
        });
    }
});
// --- キラキラ星の生成 ---
const starsContainer = document.getElementById('stars-container');
const numStars = 250; // ▼▼▼ 星の数を増やす (例: 100 → 250) ▼▼▼

// 既存の星があれば一度クリア（再実行時用）
starsContainer.innerHTML = '';

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // ランダムな位置とサイズ
    const size = Math.random() * 4 + 1; // ▼▼▼ 1pxから5pxにサイズ幅を広げる ▼▼▼
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    
    // ランダムなアニメーション開始遅延
    star.style.animationDelay = `${Math.random() * -15}s`; // ▼▼▼ 遅延の幅を広げる (-15秒から0秒) ▼▼▼
    star.style.animationDuration = `${Math.random() * 2 + 1}s`; // 1秒から3秒の間でランダムな点滅速度

    starsContainer.appendChild(star);
}

// --- 流れ星のランダム化（既存の関数を修正） ---
const shootingStar = document.querySelector('.shooting-star');

function createRandomShootingStar() {
    shootingStar.style.animation = 'none';
    shootingStar.offsetHeight; // 強制的に再描画

    const startX = Math.random() * 100 - 50; // -50vwから50vwの間
    const startY = Math.random() * 30 - 10; // -10vhから20vhの間
    
    const duration = Math.random() * 3 + 2; // 2秒から5秒で流れる速度を調整
    const delay = Math.random() * 15; // 0秒から15秒の間でランダムに遅延
    
    // アニメーションを再適用し、今回は開始位置をCSS変数で渡す
    shootingStar.style.setProperty('--start-x', `${startX}vw`);
    shootingStar.style.setProperty('--start-y', `${startY}vh`);
    shootingStar.style.setProperty('--end-x', `${startX + 120}vw`); // x方向に大きく移動
    shootingStar.style.setProperty('--end-y', `${startY + 70}vh`); // y方向にも大きく移動
    shootingStar.style.setProperty('--rotate-deg', `${Math.random() * 60 - 30}deg`); // 流れ星の角度もランダムに

    shootingStar.style.animation = `shooting-star-anim ${duration}s ease-in forwards`;
    shootingStar.style.animationDelay = `${delay}s`;
}

// ページ読み込み後、最初の流れ星を少し遅れて表示
setTimeout(() => {
    createRandomShootingStar();
    // ▼▼▼ 複数の流れ星を繰り返し表示させる ▼▼▼
    setInterval(createRandomShootingStar, 8000 + Math.random() * 10000); // 8〜18秒ごとに新しい流れ星
}, 3000); // ページ表示から3秒後に最初の流れ星
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

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const moonSunWrapper = document.getElementById('moonSunWrapper');
    const body = document.body; // body要素も取得しておく

    // 色を定義しておくと管理しやすいです
    const nightColor = '#222';
    const dayColor = '#9cd7e9ff'; // 夜明けのような少し明るい紺色

    toggleButton.addEventListener('click', () => {
        // 月と太陽の表示を切り替える
        moonSunWrapper.classList.toggle('show-sun');
        // もしmoonSunWrapperに 'show-sun' クラスが付いているなら（太陽なら）
        if (moonSunWrapper.classList.contains('show-sun')) {
            // 空の色を太陽の色にする
            body.style.backgroundColor = dayColor;
        } else {
            // そうでなければ（月なら）空の色を月の色に戻す
            body.style.backgroundColor = nightColor;
        }
    });
});
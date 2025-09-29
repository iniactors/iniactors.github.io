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
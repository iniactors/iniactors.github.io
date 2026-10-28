document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('alarm-overlay');
  const stopBtn = document.getElementById('alarm-stop-btn');
  const flash = document.getElementById('morning-flash');

  let isDismissed = false;

  const dismissAlarm = () => {
    if (isDismissed) return;
    isDismissed = true;

    // 1. スマホをフェードアウトしながら光エフェクトを一気に発火
    if (overlay) {
      overlay.classList.add('alarm-dismissed');
    }
    if (flash) {
      flash.classList.add('flash-active');
    }

    // 2. 光が引いた後、オーバーレイ要素を非表示にして通常操作を可能に
    setTimeout(() => {
      if (overlay) overlay.style.display = 'none';
      if (flash) flash.style.display = 'none';
    }, 1600);
  };

  // 停止ボタン押下で解除
  if (stopBtn) {
    stopBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dismissAlarm();
    });
  }

  // 画面のどこを押しても解除可能
  if (overlay) {
    overlay.addEventListener('click', dismissAlarm);
  }

  // 5秒間操作がなければ自動で朝の画面を開く
  setTimeout(() => {
    dismissAlarm();
  }, 5000);

  // コピーライトの西暦自動更新
  const yearElem = document.getElementById('year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
});

/* =========================================
   学生証スライダーの制御スクリプト
========================================= */
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.student-id-card');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const prevBtn = document.getElementById('chara-prev');
  const nextBtn = document.getElementById('chara-next');

  if (!cards.length) return;

  let currentIndex = 0;
  const totalCards = cards.length;

  function updateSlider(index) {
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  // 次へボタン
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextIndex = (currentIndex + 1) % totalCards;
      updateSlider(nextIndex);
    });
  }

  // 前へボタン
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
      updateSlider(prevIndex);
    });
  }

  // ドットクリックでのダイレクト切り替え
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      updateSlider(i);
    });
  });
});

// alarm-stop-btn のイベント内
document.getElementById('alarm-stop-btn').addEventListener('click', () => {
  // アラームUIのフェードアウト
  document.getElementById('alarm-overlay').classList.add('fade-out');
  
  // 朝の光フラッシュ演出
  const flash = document.getElementById('morning-flash');
  flash.classList.add('active');

  // 1秒後に光をフェードアウト
  setTimeout(() => {
    flash.classList.remove('active');
  }, 1000);
});
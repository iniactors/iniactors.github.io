import '@google/model-viewer'

window.onload = () => {
  // 実行したい処理を書く
  setTimeout(fadeOutAnimation, 16000)
}

const fadeOutAnimation = () => {
  // アニメーションをフェードアウトさせる
  const animationElem = document.querySelector('#animation-wrapper')
  animationElem.classList.add('end-animation')
  setTimeout(destroyAnimation, 510)
}

const destroyAnimation = () => {
  // アニメーションエリアを非表示にする
  const animationElem = document.querySelector('#animation-wrapper')
  animationElem.style.display = 'none'
}

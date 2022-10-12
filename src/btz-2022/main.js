import '@google/model-viewer'
import Cookies from 'js-cookie'

window.onload = () => {
  // 実行したい処理を書く
  if (Cookies.get('visited') === 'yes') {
    destroyAnimation()
  } else {
    setTimeout(fadeOutAnimation, 16000)
  }
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
  Cookies.set('visited', 'yes', { expires: 7, sameSite: 'strict' })
}

const replayAnimation = () => {
  // リロードしてアニメーションをリプレイする
  Cookies.remove('visited')
  location.reload()
}

// リプレイボタンのイベントハンドリング
const replayBtnElem = document.querySelector('#btn-replay')
replayBtnElem.addEventListener('click', replayAnimation)

import '@google/model-viewer'
import Cookies from 'js-cookie'

window.onload = () => {
  // 実行したい処理を書く
  if (Cookies.get('visited') === 'yes') {
    destroyAnimation()
  } else {
    setTimeout(fadeOutAnimation, 16000)
  }
  set3DCameraOrbit()
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

const set3DCameraOrbit = () => {
  // 3Dモデルのカメラ位置をセットする
  const modelViewerElem = document.querySelector('model-viewer')
  const bodyWidth = document.body.clientWidth
  if (bodyWidth <= 768) {
    modelViewerElem.setAttribute('disable-zoom', true)
  } else {
    modelViewerElem.removeAttribute('disable-zoom')
  }
  const zVal = bodyWidth > 1180 ? 75 : 100
  modelViewerElem.setAttribute('camera-orbit', `-17deg 82deg ${zVal}%`)
}

// リプレイボタンのイベントハンドリング
const replayBtnElem = document.querySelector('#btn-replay')
replayBtnElem.addEventListener('click', replayAnimation)

// リサイズ時のイベントハンドリング
window.addEventListener('resize', set3DCameraOrbit)

import '@google/model-viewer'
import Cookies from 'js-cookie'

window.onload = () => {
  // 実行したい処理を書く
  if (Cookies.get('visited') === 'yes') {
    destroyAnimation()
  } else {
    document.querySelector('#animation-wrapper').style.display = 'block' // アニメーションの再生を開始
    setTimeout(fadeOutAnimation, 16000)
  }
  set3DCameraOrbit()
  const countdownDelta = updateCountdown() // countdownのdiffを取得
  if (0 <= countdownDelta) {
    // 初回公演日時より前の場合の処理
    document.querySelector('#countdown').style.display = 'block'
    setInterval(updateCountdown, 1000)
  } else {
    document.querySelector('#btn-form').style.display = 'flex'
  }
}

const fadeOutAnimation = () => {
  // アニメーションをフェードアウトさせる
  document.querySelector('#animation-wrapper').classList.add('end-animation')
  setTimeout(destroyAnimation, 510)
}

const destroyAnimation = () => {
  // アニメーションエリアを非表示にする
  document.querySelector('#animation-wrapper').style.display = 'none'
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

const updateCountdown = () => {
  const targetTime = new Date('2022-10-29T10:20+09:00').getTime() // 初回公演日時の設定
  const diff = targetTime - Date.now() // 日時diffを取得
  if (0 <= diff) {
    const numbers = [
      diff / 1000 / 60 / 60 / 24,
      (diff / 1000 / 60 / 60) % 24,
      (diff / 1000 / 60) % 60,
      (diff / 1000) % 60,
    ]
    Array.from(document.querySelectorAll('#countdown .num'), (element, i) => {
      element.textContent = `${Math.floor(numbers[i])}`.padStart(2, 0)
    })
  }
  return diff
}

// リプレイボタンのイベントハンドリング
document.querySelector('#btn-replay').addEventListener('click', replayAnimation)

// リサイズ時のイベントハンドリング
window.addEventListener('resize', set3DCameraOrbit)

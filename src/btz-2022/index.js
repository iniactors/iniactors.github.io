import '@google/model-viewer'
import Cookies from 'js-cookie'

window.onload = () => {
  const isVisited = Cookies.get('visited') // 前に訪問したことがあるか
  document.body.style.visibility = 'visible' // indexページのbody要素を表示する
  if (isVisited === 'yes') {
    // 2回目以降の訪問時
    destroyAnimation()
  } else {
    // 初回訪問時にアニメーションを再生する
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
  const isZtb = Cookies.get('isZtb')
  if (isZtb !== 'yes') {
    setTimeout(openZtbDialog, 2500)
  }
}

const replayAnimation = () => {
  // リロードしてアニメーションをリプレイする
  Cookies.remove('visited')
  Cookies.remove('isZtb')
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

const ztbDialog = document.querySelector('#ztb-dialog')

const openZtbDialog = () => {
  ztbDialog.classList.add('is-animation')
  ztbDialog.showModal()
}

const gotoZtb = () => {
  document.body.classList.add('fade-out-body') // ダイアログ以外をフェードアウト
  Cookies.set('isZtb', 'yes', { expires: 2, sameSite: 'strict' }) // 回帰済みかどうかのフラグcookie
  document.body.onanimationend = () => {
    setTimeout(() => (location.href = '../2202-ztb/'), 1500) // フェードアウトの1.5秒後に遷移
  }
}

// リプレイボタンのイベントハンドリング
document.querySelector('#btn-replay').addEventListener('click', replayAnimation)

// リサイズ時のイベントハンドリング
window.addEventListener('resize', set3DCameraOrbit)

//
document
  .querySelector('#btn-ztb-dialog-confirm')
  .addEventListener('click', gotoZtb)

document.querySelectorAll('.btn-ztb-dialog-close').forEach((elem) => {
  elem.addEventListener('click', () => {
    ztbDialog.classList.add('is-close-animation')
    ztbDialog.onanimationend = () => {
      ztbDialog.close() // フェードアウト後にダイアログを非表示に
    }
  })
})

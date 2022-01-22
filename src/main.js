// スクロールメニューの実装
const items = document.querySelectorAll('.scroll')
items.forEach((item) => {
  const targetId = item.getAttribute('href')
  const target = document.querySelector(targetId)
  item.addEventListener('click', (event) => {
    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth' })
  })
})

// 最新の作品を表示する（最初の作品のdetailをopenに設定する）
const worksElem = document.querySelector('.works')
worksElem.firstElementChild.setAttribute('open', true)

// 著作権表示の年を設定する
const yearElem = document.querySelector('#year')
const now = new Date()
const year = now.getFullYear()
yearElem.textContent = year

// 著作権表示の年を設定する
const yearElem = document.querySelector('#year')
const now = new Date()
const year = now.getFullYear()
yearElem.textContent = year

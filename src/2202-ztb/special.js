// APIでデータを受け取って表示する

const API_URL =
  'https://script.google.com/macros/s/AKfycbz7F3xyHC-RunzHVuPT4hQEtCLMiHe5uHtK-ctqYX49-SfiMGXhu4arXiLAS66PqAMsFg/exec'

const getData = async () => {
  const res = await fetch(API_URL, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
    },
  })
  if (res.status !== 200) {
    console.error('データの取得に失敗しました')
  }
  return res.json()
}

window.onload = async () => {
  const data = await getData()
  const i = document.getElementById('t')
  for (const item of data) {
    const n = document.createElement('p')
    n.textContent = item
    n.classList.add('story-section')
    i.appendChild(n)
  }
}

const submitToTwitter = () => {
  const text = document.querySelector('#comment-text').value
  if (text.length !== 0) {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${text}\n&hashtags=平成回帰軍,iniactors`
    window.open(encodeURI(tweetUrl))
  } else {
    alert('あれれ？\n何も書き込んでいないようだよ！')
  }
}

const quoteData = [
  {
    text: '999回失敗しても、1回うまくいけばいい。それが発明家なんだ。失敗は、うまくいくための練習だと考えているんだ。',
    by: 'チャールズ・ケタリング',
  },
  {
    text: '過去を悔やみ、未来を案じるのも結構だが、今この時に、「行動できる」という事を忘れてはいけない。',
    by: 'アブラハム・マズロー',
  },
  {
    text: '肩書きがなくては己が何なのかもわからんような阿呆共の仲間になることはない。',
    by: '南方熊楠',
  },
]

const randomQuote = () => {
  // ランダムで名言を渡してあげる
  const randNam = Math.floor(Math.random() * quoteData.length)
  const quote = quoteData[randNam]
  document.querySelector('#quote-text').textContent = `${quote.text}`
  document.querySelector('#quote-by').textContent = `${quote.by}`
}

window.onload = () => {
  randomQuote()
}

document
  .querySelector('#comment-button-submit')
  .addEventListener('click', submitToTwitter)

const items = document.querySelectorAll(".scroll")
items.forEach((item) => {
  const targetId = item.getAttribute("href")
  const target = document.querySelector(targetId)
  item.addEventListener("click", (event) => {
    event.preventDefault()
    target.scrollIntoView({ behavior: "smooth" })
  })
})

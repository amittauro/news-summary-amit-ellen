window.addEventListener('load', () => {
  setListTimer()
  let element = document.getElementById('app')
  let headlines = new Headlines(element, $)
  headlines.get('cummings')
  window.addEventListener('hashchange', (event) => {
    event.preventDefault()
    if (window.location.hash === "") {
      headlines.get('cummings')
      setListTimer()
    } else {
      let articleUrl = `https://www.theguardian.com/${window.location.hash.slice(1)}`
      summary = new Summary(articleUrl,element, $)
      summary.get()
    }
  })
})

function setListTimer() {
  let timer = 400
  for (let i = 1; i <= 10; i++ ) {
    setTimeout(() => {
      document.getElementById(i).style.display = 'block';
    }, i * timer)
  }
}

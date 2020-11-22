window.addEventListener('load', () => {
  let element = document.getElementById('app')
  let headlines = new Headlines(element, $)
  headlines.get('cummings')
  window.addEventListener('hashchange', (event) => {
    event.preventDefault()
    if (window.location.hash === "") {
      headlines.get('cummings')
    } else {
      let articleUrl = `https://www.theguardian.com/${window.location.hash.slice(1)}`
      summary = new Summary(articleUrl,element, $)
      summary.get()
    }
  })
})

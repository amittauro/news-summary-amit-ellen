class Headlines {
  constructor(element, $) {
    this.element = element
    this.$ = $
    this.render = this.render.bind(this)
  }

  get(search) {
    this.$.get(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=${search}`,
      this.render)
  }

  render(data) {
    let elements = ['<ul>']
    data.response.results.forEach(result => elements.push(`<li><a href='summary.html?${result.webUrl}'>${result.webTitle}</a></li>`))
    elements.push('</ul>')
    this.element.innerHTML = elements.join("")
  }
}

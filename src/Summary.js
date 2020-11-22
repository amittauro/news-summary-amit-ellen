class Summary {
  constructor(url, element, $) {
    this.url = url;
    this.element = element;
    this.$ = $;
  }

  get() {
    this.$.get(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${this.url}`)
      .then((data) => {
        this.element.innerHTML = `<p>${data.sentences.join(" ")}</p><button onclick='window.history.back()'>Back to Headlines</button>`
      });
  }

  goBack() {
    window.history.back()
  }
}

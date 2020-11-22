describe('summary', () => {
  let summary
  let mock$
  let mockElement
  let url

  beforeEach(() => {
    url = 'http://www.example.com'
    mockElement = {}
    mock$ = { get: () => Promise.resolve(mockAylienData) }
    summary = new Summary(url, mockElement, mock$)
  })

  it('#get renders a summary of the page at a URL', async() => {
    await summary.get()
    expect(mockElement.innerHTML).toBe("<p>Sentence 1. Sentence 2. Sentence 3.</p><button onclick='window.history.back()'>Back to Headlines</button>")
  })
})

describe("Headlines", () => {
  let headlines;
  let mock$
  let mockelement

  beforeEach(function() {
    mockelement = {}
    mock$ = { get: (api, callback) => null }
    headlines = new Headlines(mockelement, mock$)
  })

  it('can make a get request', () => {
    spyOn(mock$, 'get')
    headlines.get('cummings')
    expect(mock$.get).toHaveBeenCalledWith("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=cummings", headlines.render)
  })

  it('can render the data', () => {
    expectedResult = [
      '<ul>',
      "<li><a href='https://www.theguardian.com/fashion'>Goodbye Dominic Cummings, carefully styled disruptive dresser</a></li>",
      "<li><a href='https://www.theguardian.com/politics'>'End of Cummings era' – what the papers say</a></li>",
      '</ul>'
    ].join("")
    headlines.render(mockdata)
    expect(mockelement.innerHTML).toBe(expectedResult)
  })
})

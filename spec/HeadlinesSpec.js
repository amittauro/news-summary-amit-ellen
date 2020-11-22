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
      "<li>Goodbye Dominic Cummings, carefully styled disruptive dresser<a href = '#fashion/2020/nov/13/goodbye-dominic-cummings-carefully-styled-disruptive-dresser'><button>View Summary</button></a></li>",
      "<li>'End of Cummings era' – what the papers say<a href = '#politics/2020/nov/14/end-of-cummings-era-what-the-papers-say'><button>View Summary</button></a></li>",
      '</ul>'
    ].join("")
    headlines.render(mockdata)
    expect(mockelement.innerHTML).toBe(expectedResult)
  })
})

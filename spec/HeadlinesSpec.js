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
      "<li id='1'>Title 1<a href='#article/id/1'><button>View Summary</button></a><a href='url/1'><button>View Full Article</button></a></li>",
      "<li id='2'>Title 2<a href='#article/id/2'><button>View Summary</button></a><a href='url/2'><button>View Full Article</button></a></li>",
      '</ul>'
    ].join("")
    headlines.render(mockdata)
    expect(mockelement.innerHTML).toBe(expectedResult)
  })
})

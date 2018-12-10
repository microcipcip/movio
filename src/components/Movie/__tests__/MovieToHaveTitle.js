import React from 'react'
import { customRender, movieList, domToString } from 'utils/testUtils'
import Movie from '../Movie'

it('Should have the right title', async () => {
  const movie = movieList[0]
  const { getByText } = customRender(
    <Movie {...movie}>
      <Movie.Cover />
      <Movie.Title />
      <Movie.Date />
    </Movie>,
    { movieList }
  )
  const title = getByText(movieList[0].title)
  expect(title.textContent).toEqual(movieList[0].title)
  expect(title.nodeName).toEqual('H2')
})

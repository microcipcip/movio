import React from 'react'
import { customRender, genreList, movieList } from 'utils/testUtils'
import Movie from '../Movie'

it('Should have the right title', async () => {
  const movie = movieList[0]
  const { getByText } = customRender(
    <Movie genreList={genreList} {...movie}>
      <Movie.Cover />
      <Movie.Title />
      <Movie.Date />
    </Movie>,
    { genreList, movieList }
  )
  const title = getByText(movieList[0].title)
  expect(title.textContent).toEqual(movieList[0].title)
  expect(title.nodeName).toEqual('H2')
})

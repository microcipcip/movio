import React from 'react'
import { customRender, genreList, movieList } from 'utils/testUtils'
import Movie from '../Movie'

it('Should create snapshot', async () => {
  const movie = movieList[0]
  const { container } = customRender(
    <Movie genreList={genreList} {...movie}>
      <Movie.Cover />
      <Movie.Title />
      <Movie.Date />
    </Movie>,
    { genreList, movieList }
  )
  expect(container).toMatchSnapshot()
})

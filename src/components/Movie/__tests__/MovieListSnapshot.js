import React from 'react'
import { customRender, movieList } from 'utils/testUtils'
import Movie from '../Movie'

it('Should create snapshot', async () => {
  const movie = movieList[0]
  const { container } = customRender(
    <Movie {...movie}>
      <Movie.Cover />
      <Movie.Title />
      <Movie.Date />
    </Movie>,
    { movieList }
  )
  expect(container).toMatchSnapshot()
})

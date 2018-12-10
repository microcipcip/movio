import React from 'react'
import { customRender, movieList } from 'utils/testUtils'
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

  const year = new Date(movieList[0].release_date)
  const date = getByText(new RegExp(year.getFullYear(), 'i'))
  expect(date.getAttribute('datetime')).toEqual(movieList[0].release_date)
})

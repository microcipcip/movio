import React from 'react'
import { customRender, genreList, movieList } from 'utils/testUtils'
import Movie from '../Movie'

it.skip('Should have the right title', async () => {
  const movie = movieList[0]
  const { getByText } = customRender(
    <Movie genreList={genreList} {...movie}>
      <Movie.Cover />
      <Movie.Title />
      <Movie.Date />
    </Movie>,
    { genreList, movieList }
  )

  const year = new Date(movieList[0].release_date)
  const date = getByText(new RegExp(year.getFullYear(), 'i'))
  expect(date.getAttribute('datetime')).toEqual(movieList[0].release_date)
})

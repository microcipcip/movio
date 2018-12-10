import React from 'react'
import { customRender, movieList, domToString } from 'utils/testUtils'
import Movie from '../Movie'

it('Should have the right src and alt tag', async () => {
  const movie = movieList[0]
  const { container, getByAltText } = customRender(
    <Movie {...movie}>
      <Movie.Cover />
      <Movie.Title />
      <Movie.Date />
    </Movie>,
    { movieList }
  )
  const img = getByAltText(movieList[0].title)
  expect(img.getAttribute('alt')).toEqual(movieList[0].title)
  expect(img.getAttribute('src')).toMatch(
    new RegExp(movieList[0].poster_path, 'i')
  )
})

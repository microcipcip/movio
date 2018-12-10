import React from 'react'
import { customRender, movieList } from 'utils/testUtils'
import MovieList from '../MovieList'

it('Should populate children from movieList', async () => {
  const { container } = customRender(<MovieList />, { movieList })
  expect(container.querySelectorAll('img').length).toEqual(movieList.length)
})

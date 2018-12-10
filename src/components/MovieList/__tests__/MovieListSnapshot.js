import React from 'react'
import { customRender, genreList, movieList } from 'utils/testUtils'
import MovieList from '../MovieList'

it('Should create snapshot', async () => {
  const { container } = customRender(<MovieList />, { genreList, movieList })
  expect(container).toMatchSnapshot()
})

import React from 'react'
import { customRender, movieList } from 'utils/testUtils'
import MovieList from '../MovieList'

it('Should create snapshot', async () => {
  const { container } = customRender(<MovieList />, { movieList })
  expect(container).toMatchSnapshot()
})

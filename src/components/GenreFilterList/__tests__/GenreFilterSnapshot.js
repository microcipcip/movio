import React from 'react'
import { customRender, genreList } from 'utils/testUtils'
import GenreFilterList from '../GenreFilterList'

it('Should create snapshot', async () => {
  const { container } = customRender(<GenreFilterList />, { genreList })
  expect(container).toMatchSnapshot()
})

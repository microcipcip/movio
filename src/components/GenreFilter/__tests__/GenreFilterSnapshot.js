import React from 'react'
import { customRender, genreList } from 'utils/testUtils'
import GenreFilter from '../GenreFilter'

it('Should create snapshot', async () => {
  const genre = genreList[0]
  const toggleGenreFilter = jest.fn()
  const { container } = customRender(
    <GenreFilter genre={genre} toggleGenreFilter={toggleGenreFilter} />,
    { genreList }
  )
  expect(container).toMatchSnapshot()
})

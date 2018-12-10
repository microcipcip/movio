import React from 'react'
import { customRender, genreList } from 'utils/testUtils'
import GenreFilter from '../GenreFilter'

it('Should not find the first genre when genreList is proving the second', async () => {
  const genre = genreList[1]
  const toggleGenreFilter = jest.fn()
  const { queryByLabelText } = customRender(
    <GenreFilter genre={genre} toggleGenreFilter={toggleGenreFilter} />
  )
  const actionGenre = queryByLabelText(genreList[0].name)
  expect(actionGenre).toBeNull()
})

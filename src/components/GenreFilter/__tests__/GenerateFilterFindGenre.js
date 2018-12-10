import React from 'react'
import { customRender, genreList, fireEvent } from 'utils/testUtils'
import GenreFilter from '../GenreFilter'

it('Should find the first genre and call toggleGenreFilter', async () => {
  const genre = genreList[0]
  const toggleGenreFilter = jest.fn()
  const { getByLabelText } = customRender(
    <GenreFilter genre={genre} toggleGenreFilter={toggleGenreFilter} />
  )

  const input = getByLabelText(genreList[0].name)
  fireEvent.click(input)

  expect(toggleGenreFilter).toHaveBeenCalledTimes(1)
  expect(toggleGenreFilter).toHaveBeenCalledWith(genre.id, genre.isChecked)
})

import React from 'react'
import { customRender, genreList } from 'utils/testUtils'
import GenreFilter from '../GenreFilter'

it('Should find the first genre', async () => {
  const genre = genreList[0]
  const toggleGenreFilter = jest.fn()
  const { getByLabelText } = customRender(
    <GenreFilter genre={genre} toggleGenreFilter={toggleGenreFilter} />
  )

  const input = getByLabelText(genreList[0].name)
})

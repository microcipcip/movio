import React from 'react'
import { customRender, genreList } from 'utils/testUtils'
import GenreFilterList from '../GenreFilterList'

it('Should find the First genre ', async () => {
  const { getByLabelText } = customRender(<GenreFilterList />, { genreList })

  getByLabelText(genreList[0].name)
})

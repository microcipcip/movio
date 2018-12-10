import React from 'react'
import { customRender, genreList } from 'utils/testUtils'
import GenreFilterList from '../GenreFilterList'

it('Should not find the first genre when genreList is not provided', async () => {
  const { queryByLabelText } = customRender(<GenreFilterList />)
  const actionGenre = queryByLabelText(genreList[1].name)
  expect(actionGenre).toBeNull()
})

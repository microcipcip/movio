import React from 'react'
import { customRender, movieList, fireEvent } from 'utils/testUtils'
import VoteFilterList from '../VoteFilterList'

it('Should activate the dropdown', async () => {
  const { getByTestId } = customRender(<VoteFilterList />, { movieList })

  const select = getByTestId('VoteFilterSelect')
  fireEvent.click(select)
  // expect(toggleGenreFilter).toHaveBeenCalledTimes(1)
  // expect(toggleGenreFilter).toHaveBeenCalledWith(genre.id, genre.isChecked)
})

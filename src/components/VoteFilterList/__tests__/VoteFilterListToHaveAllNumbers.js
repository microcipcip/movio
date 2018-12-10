import React from 'react'
import { customRender, movieList } from 'utils/testUtils'
import VoteFilterList from '../VoteFilterList'

it('Should have "Vote average" text', async () => {
  const { getByText } = customRender(<VoteFilterList />, { movieList })
  const textAverage = getByText(/Vote average/i)
})

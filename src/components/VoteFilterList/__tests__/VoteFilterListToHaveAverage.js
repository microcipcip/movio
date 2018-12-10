import React from 'react'
import { TMDB_VOTE_RATING_LIST } from 'config'
import { customRender, movieList } from 'utils/testUtils'
import VoteFilterList from '../VoteFilterList'

it('Should have all average values', async () => {
  const { getByText } = customRender(<VoteFilterList />, { movieList })
  TMDB_VOTE_RATING_LIST.forEach(n => {
    getByText(new RegExp(n, 'i'))
  })
})

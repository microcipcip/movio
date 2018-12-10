import React from 'react'
import { customRender, movieList } from 'utils/testUtils'
import VoteFilter from '../VoteFilter'

it('Should create snapshot', async () => {
  const props = { ratingValue: 0, setVoteFilter: jest.fn(), isActive: true }
  const { container } = customRender(<VoteFilter {...props} />, { movieList })
  expect(container).toMatchSnapshot()
})

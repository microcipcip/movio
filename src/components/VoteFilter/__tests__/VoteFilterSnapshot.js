import React from 'react'
import { customRender, movieList } from 'utils/testUtils'
import VoteFilter from '../VoteFilter'

it('Should create snapshot', async () => {
  const { container } = customRender(<VoteFilter />, { movieList })
  expect(container).toMatchSnapshot()
})

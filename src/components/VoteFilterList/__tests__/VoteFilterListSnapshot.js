import React from 'react'
import { customRender, movieList } from 'utils/testUtils'
import VoteFilterList from '../VoteFilterList'

it('Should create snapshot', async () => {
  const { container } = customRender(<VoteFilterList />, { movieList })
  expect(container).toMatchSnapshot()
})

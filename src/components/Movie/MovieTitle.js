import React from 'react'
import styled from 'styled-components'
import { MovieConsumer } from './Movie'

const MovieTitle = props => (
  <MovieConsumer>
    {({ title }) => <MovieTitleStyled>{title}</MovieTitleStyled>}
  </MovieConsumer>
)

const MovieTitleStyled = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 1.8rem;
`

export default MovieTitle

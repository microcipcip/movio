import React from 'react'
import styled from 'styled-components'
import { formatMovieDate } from 'utils/date'
import { MovieConsumer } from './Movie'

const MovieDate = props => (
  <MovieConsumer>
    {({ release_date }) => (
      <MovieDateStyled dateTime={release_date}>
        {formatMovieDate(release_date)}
      </MovieDateStyled>
    )}
  </MovieConsumer>
)

const MovieDateStyled = styled.time`
  color: ${prop => prop.theme.textColorLight};
  text-align: right;
  font-size: 1.2rem;
`

export default MovieDate

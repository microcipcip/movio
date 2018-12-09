import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import styled from 'styled-components'
import { formatMovieDate } from 'utils/date'
import { MovieConsumer } from './Movie'

const MovieDate = props => (
  <MovieConsumer>
    {({ release_date }) => (
      <MovieDateStyled datetime={release_date}>
        {formatMovieDate(release_date)}
      </MovieDateStyled>
    )}
  </MovieConsumer>
)

const MovieDateStyled = styled.time`
  color: ${prop => prop.theme.textColorLight};
  font-size: 1.4rem;
`

MovieDate.propTypes = {}
MovieDate.defaultProps = {}

export default MovieDate

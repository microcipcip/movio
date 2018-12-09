import React, { createContext } from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import styled from 'styled-components'
import checkCompoundConsumer from 'helpers/checkCompoundConsumer'
import MovieCover from './MovieCover'
import MovieTitle from './MovieTitle'
import MovieDate from './MovieDate'

const MovieContext = createContext()

const Movie = ({ children, ...restOfProps }) => (
  <MovieContext.Provider value={restOfProps}>
    <MovieStyled>{children}</MovieStyled>
  </MovieContext.Provider>
)

Movie.Cover = MovieCover
Movie.Title = MovieTitle
Movie.Date = MovieDate

const MovieStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

// prevent Consumer from being used outside tha parent
export const MovieConsumer = checkCompoundConsumer(
  MovieContext,
  'Compound components of Movie should render beneath it'
)

Movie.propTypes = {}
Movie.defaultProps = {}

export default Movie
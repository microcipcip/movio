import React, { createContext } from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import checkCompoundConsumer from 'helpers/checkCompoundConsumer'
import MovieCover from './MovieCover'
import MovieTitle from './MovieTitle'
import MovieDate from './MovieDate'

const MovieContext = createContext()

const Movie = ({ children, ...restOfProps }) => (
  <MovieContext.Provider value={restOfProps}>{children}</MovieContext.Provider>
)

Movie.Cover = MovieCover
Movie.Title = MovieTitle
Movie.Date = MovieDate

Movie.propTypes = {}
Movie.defaultProps = {}

// prevent Consumer from being used outside tha parent
export const MovieConsumer = checkCompoundConsumer(
  MovieContext,
  'Compound components of Movie should render beneath it'
)

export default Movie

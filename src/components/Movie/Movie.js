import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import MovieCover from './MovieCover'
import MovieTitle from './MovieTitle'
import MovieDate from './MovieDate'

const Movie = ({ n }) => {
  return (
    <div>
      Movie {n}
      <MovieCover />
      <MovieTitle />
      <MovieDate />
      ------------------------------
    </div>
  )
}

Movie.propTypes = {}
Movie.defaultProps = {}

export default Movie

import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import MovieCover from './MovieCover'
import MovieTitle from './MovieTitle'
import MovieDate from './MovieDate'

const Movie = ({ title, release_date, poster_path }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
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

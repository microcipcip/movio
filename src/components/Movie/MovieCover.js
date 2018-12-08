import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { MovieConsumer } from './Movie'

const MovieCover = props => (
  <MovieConsumer>
    {({ poster_path }) => (
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
    )}
  </MovieConsumer>
)

MovieCover.propTypes = {}
MovieCover.defaultProps = {}

export default MovieCover

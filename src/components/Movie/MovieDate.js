import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { MovieConsumer } from './Movie'

const MovieDate = props => (
  <MovieConsumer>{({ release_date }) => <h2>{release_date}</h2>}</MovieConsumer>
)

MovieDate.propTypes = {}
MovieDate.defaultProps = {}

export default MovieDate

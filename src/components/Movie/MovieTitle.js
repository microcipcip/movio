import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { MovieConsumer } from './Movie'

const MovieTitle = props => (
  <MovieConsumer>{({ title }) => <h2>{title}</h2>}</MovieConsumer>
)

MovieTitle.propTypes = {}
MovieTitle.defaultProps = {}

export default MovieTitle

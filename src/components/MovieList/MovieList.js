import React from 'react'
import PropTypes from 'prop-types'
import Movie from 'components/Movie'

const MovieList = props => [1, 2, 3, 4, 5].map(n => <Movie key={n} n={n} />)

MovieList.propTypes = {}
MovieList.defaultProps = {}

export default MovieList

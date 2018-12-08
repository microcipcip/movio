import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import CinemaContext from 'components/App/CinemaContext'
import Movie from 'components/Movie'

const MovieList = props => (
  <CinemaContext.Consumer>
    {({ movieList }) =>
      movieList.map(movie => <Movie key={movie.id} {...movie} />)
    }
  </CinemaContext.Consumer>
)

MovieList.propTypes = {}
MovieList.defaultProps = {}

export default MovieList

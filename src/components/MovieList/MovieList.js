import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import CinemaContext from 'components/App/CinemaContext'
import Movie from 'components/Movie'

const MovieList = props => (
  <CinemaContext.Consumer>
    {({ movieList }) => {
      return movieList.map(movie => (
        <Movie key={movie.id} {...movie}>
          <Movie.Cover />
          <Movie.Title />
          <Movie.Date />
        </Movie>
      ))
    }}
  </CinemaContext.Consumer>
)

MovieList.propTypes = {}
MovieList.defaultProps = {}

export default MovieList

import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import styled from 'styled-components'
import * as s from 'styles/vars'
import CinemaContext from 'components/App/CinemaContext'
import Movie from 'components/Movie'

const MovieList = props => (
  <CinemaContext.Consumer>
    {({ movieList }) => (
      <MovieListStyled>
        {movieList.map(movie => (
          <Movie key={movie.id} {...movie}>
            <Movie.Cover />
            <MovieContent className="typ">
              <Movie.Title />
              <Movie.Date />
            </MovieContent>
          </Movie>
        ))}
      </MovieListStyled>
    )}
  </CinemaContext.Consumer>
)

const MovieListStyled = styled.div`
  //display: flex;
  //flex-wrap: wrap;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${s.movieListGutter};
`

const MovieContent = styled.div`
  padding: 10px 0 0;
`

MovieList.propTypes = {}
MovieList.defaultProps = {}

export default MovieList

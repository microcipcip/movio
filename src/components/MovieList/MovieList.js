import React from 'react'
import styled from 'styled-components'
import * as s from 'styles/vars'
import bp from 'styles/mixins/bp'
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 2fr));
  grid-gap: ${s.movieListGutter};
  ${bp.up('m')`
    grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
  `};
`

const MovieContent = styled.div`
  padding: 10px 0 0;
`

export default MovieList

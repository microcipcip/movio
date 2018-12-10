import React from 'react'
import styled from 'styled-components'
import * as s from 'styles/vars'
import bp from 'styles/mixins/bp'
import CinemaContext from 'components/App/CinemaContext'
import Movie from 'components/Movie'

const MovieList = props => (
  <CinemaContext.Consumer>
    {({ movieList, resetVoteFilter, genreList }) =>
      movieList.length ? (
        <MovieListStyled>
          {movieList.map(movie => (
            <Movie key={movie.id} genreList={genreList} {...movie}>
              <Movie.Cover />
              <MovieContent className="typ">
                {/*<Movie.Date />*/}
                <Movie.Title />
                <Movie.GenreList />
              </MovieContent>
            </Movie>
          ))}
        </MovieListStyled>
      ) : (
        <MovieNotFound>
          <MovieNotFoundText>No movie found!</MovieNotFoundText>
          <MovieNotFoundReset onClick={resetVoteFilter}>
            Reset vote filter
          </MovieNotFoundReset>
        </MovieNotFound>
      )
    }
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
  display: flex;
  flex-direction: column;
  padding: 10px 0 0;
`

const MovieNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const MovieNotFoundText = styled.h3`
  color: ${props => props.theme.movieNotFoundTextColor};
`

const MovieNotFoundReset = styled.div`
  cursor: pointer;
  margin: 1em 0 0;
  padding: 0.6em 2em;
  background-color: ${props => props.theme.movieNotFoundResetBg};
  color: ${props => props.theme.movieNotFoundResetTextColor};
`

export default MovieList

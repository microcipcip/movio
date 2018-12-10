import React from 'react'
import styled from 'styled-components'
import { MovieConsumer } from './Movie'

const MovieGenreList = props => (
  <MovieConsumer>
    {({ genre_ids, genreList }) => (
      <MovieGenreListStyled>
        {genre_ids.map(genreId => (
          <MovieGenreTag key={genreId}>{genreList[genreId].name}</MovieGenreTag>
        ))}
      </MovieGenreListStyled>
    )}
  </MovieConsumer>
)

const MovieGenreListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5em 0 0;
  font-weight: bold;
  font-size: 1.8rem;
`

const MovieGenreTag = styled.span`
  display: inline-flex;
  margin: 0.1em 0.4em 0.1em 0;
  color: #555555;
  font-size: 1.2rem;
  &:after {
    content: ', ';
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
`

export default MovieGenreList

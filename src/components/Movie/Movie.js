import React, { createContext } from 'react'
import styled from 'styled-components'
import checkCompoundConsumer from 'helpers/checkCompoundConsumer'
import MovieCover from './MovieCover'
import MovieTitle from './MovieTitle'
import MovieDate from './MovieDate'

const MovieContext = createContext()

const Movie = React.memo(
  ({ children, ...restOfProps }) => (
    <MovieContext.Provider value={restOfProps}>
      <MovieStyled>{children}</MovieStyled>
    </MovieContext.Provider>
  ),
  (prevProps, nextProps) => prevProps.id === nextProps.id
)

Movie.Cover = MovieCover
Movie.Title = MovieTitle
Movie.Date = MovieDate

const MovieStyled = styled.div`
  display: flex;
  flex-direction: column;
`

// prevent Consumer from being used outside tha parent
export const MovieConsumer = checkCompoundConsumer(
  MovieContext,
  'Compound components of Movie should render beneath it'
)

export default Movie

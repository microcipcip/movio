import React from 'react'
import styled from 'styled-components'
import CinemaContext from 'components/App/CinemaContext'
import GenreFilter from 'components/GenreFilter'

const GenreFilterList = props => (
  <CinemaContext.Consumer>
    {({ genreList, toggleGenreFilter }) => (
      <GenreFilterListStyled>
        {genreList.map(genre => (
          <GenreFilter
            key={genre.id}
            genre={genre}
            toggleGenreFilter={toggleGenreFilter}
          />
        ))}
      </GenreFilterListStyled>
    )}
  </CinemaContext.Consumer>
)

const GenreFilterListStyled = styled.div`
  padding: 26px 0;
`

export default GenreFilterList

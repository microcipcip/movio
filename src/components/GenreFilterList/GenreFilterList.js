import React from 'react'
import styled from 'styled-components'
import CinemaContext from 'components/App/CinemaContext'
import GenreFilter from 'components/GenreFilter'

const GenreFilterList = props => (
  <CinemaContext.Consumer>
    {({ genreList, toggleGenreFilter }) => {
      return (
        <GenreFilterListStyled>
          {Object.values(genreList)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(genre => (
              <GenreFilter
                key={genre.id}
                genre={genre}
                toggleGenreFilter={toggleGenreFilter}
              />
            ))}
        </GenreFilterListStyled>
      )
    }}
  </CinemaContext.Consumer>
)

const GenreFilterListStyled = styled.div`
  padding: 26px 0;
`

export default GenreFilterList

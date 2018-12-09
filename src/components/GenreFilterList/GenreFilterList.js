import React from 'react'
import CinemaContext from 'components/App/CinemaContext'
import GenreFilter from 'components/GenreFilter'

const GenreFilterList = props => (
  <CinemaContext.Consumer>
    {({ genreList, toggleGenreFilter }) =>
      genreList.map(genre => (
        <GenreFilter
          key={genre.id}
          genre={genre}
          toggleGenreFilter={toggleGenreFilter}
        />
      ))
    }
  </CinemaContext.Consumer>
)

export default GenreFilterList

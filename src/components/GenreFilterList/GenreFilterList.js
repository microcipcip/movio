import React from 'react'
import CinemaContext from 'components/App/CinemaContext'
import GenreFilter from 'components/GenreFilter'

const GenreFilterList = props => (
  <CinemaContext.Consumer>
    {({ genreList }) =>
      genreList.map(genre => <GenreFilter key={genre.id} {...genre} />)
    }
  </CinemaContext.Consumer>
)

export default GenreFilterList

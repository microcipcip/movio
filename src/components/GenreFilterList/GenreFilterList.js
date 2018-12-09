import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import CinemaContext from 'components/App/CinemaContext'
import GenreFilter from 'components/GenreFilter'

const GenreFilterList = props => (
  <CinemaContext.Consumer>
    {({ genreList }) =>
      genreList.map(genre => <GenreFilter key={genre.id} {...genre} />)
    }
  </CinemaContext.Consumer>
)

GenreFilterList.propTypes = {}
GenreFilterList.defaultProps = {}

export default GenreFilterList

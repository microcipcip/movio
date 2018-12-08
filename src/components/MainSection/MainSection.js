import React from 'react'
import PropTypes from 'prop-types'
import MovieList from 'components/MovieList'
import VoteFilter from 'components/VoteFilter'

const MainSection = props => (
  <div>
    <VoteFilter />
    <MovieList />
  </div>
)

MainSection.propTypes = {}
MainSection.defaultProps = {}

export default MainSection

import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
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

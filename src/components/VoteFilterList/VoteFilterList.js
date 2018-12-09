import React from 'react'
import { TMDB_VOTE_RATING_LIST } from 'config'
import CinemaContext from 'components/App/CinemaContext'
import VoteFilter from 'components/VoteFilter'

const VoteFilterList = props => (
  <CinemaContext.Consumer>
    {({ setVoteFilter }) =>
      TMDB_VOTE_RATING_LIST.map(RATING => (
        <VoteFilter
          key={RATING}
          ratingValue={RATING}
          setVoteFilter={setVoteFilter}
        />
      ))
    }
  </CinemaContext.Consumer>
)

export default VoteFilterList

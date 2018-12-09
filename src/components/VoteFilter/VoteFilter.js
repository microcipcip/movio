import React from 'react'

const VoteFilter = ({ ratingValue, setVoteFilter }) => (
  <div onClick={() => setVoteFilter(ratingValue)}>{ratingValue}</div>
)

export default VoteFilter

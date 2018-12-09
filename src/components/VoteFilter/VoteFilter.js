import React from 'react'

const VoteFilter = ({ ratingValue, setVoteFilter, isActive }) => (
  <div onClick={() => setVoteFilter(ratingValue)}>{ratingValue}</div>
)

export default VoteFilter

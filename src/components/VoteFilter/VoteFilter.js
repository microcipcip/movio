import React from 'react'
import styled from 'styled-components'
const VoteFilter = ({ ratingValue, setVoteFilter, isActive }) => (
  <VoteFilterStyled
    active={isActive}
    onClick={() => setVoteFilter(ratingValue)}
  >
    {ratingValue}
  </VoteFilterStyled>
)

const VoteFilterStyled = styled.div`
  cursor: pointer;
  padding: 2px 10px;
  ${props =>
    props.active &&
    `
      background-color: ${props.theme.voteFilterBgHover};
  `}
  &:hover {
    background-color: ${props => props.theme.voteFilterBgHover};
  }
`

export default VoteFilter

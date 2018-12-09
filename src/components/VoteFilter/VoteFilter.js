import React from 'react'
import styled from 'styled-components'
import * as s from 'styles/vars'

const VoteFilter = React.memo(
  ({ ratingValue, setVoteFilter, isActive }) => (
    <VoteFilterStyled
      active={isActive}
      onClick={() => setVoteFilter(ratingValue)}
    >
      {ratingValue}
    </VoteFilterStyled>
  ),
  ({ isActive: prevIsActive }, { isActive: nextIsActive }) => {
    return prevIsActive === nextIsActive
  }
)

const VoteFilterStyled = styled.div`
  cursor: pointer;
  padding: 2px ${s.gutter};
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

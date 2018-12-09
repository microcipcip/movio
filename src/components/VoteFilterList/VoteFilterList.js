import React from 'react'
import styled from 'styled-components'
import { TMDB_VOTE_RATING_LIST } from 'config'
import CinemaContext from 'components/App/CinemaContext'
import VoteFilter from 'components/VoteFilter'

class VoteFilterList extends React.Component {
  state = {
    isDropdownActive: false,
  }

  render() {
    return (
      <CinemaContext.Consumer>
        {({ setVoteFilter, voteFilter }) => (
          <VoteFilterListStyled>
            <VoteFilterSelect>Select</VoteFilterSelect>
            <VoteFilterOptions>
              {TMDB_VOTE_RATING_LIST.map(rating => (
                <VoteFilter
                  key={rating}
                  ratingValue={rating}
                  isActive={voteFilter === rating}
                  setVoteFilter={setVoteFilter}
                />
              ))}
            </VoteFilterOptions>
          </VoteFilterListStyled>
        )}
      </CinemaContext.Consumer>
    )
  }
}

const VoteFilterListStyled = styled.div`
  display: flex;
`

const VoteFilterSelect = styled.div`
  position: relative;
  display: flex;
`

const VoteFilterOptions = styled.div`
  display: none;
`

export default VoteFilterList

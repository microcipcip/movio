import React from 'react'
import styled from 'styled-components'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { TMDB_VOTE_RATING_LIST } from 'config'
import CinemaContext from 'components/App/CinemaContext'
import VoteFilter from 'components/VoteFilter'

class VoteFilterList extends React.Component {
  state = {
    isDropdownActive: false,
  }

  voteFilterToggler = () => {
    const { isDropdownActive } = this.state
    this.setState(() => ({ isDropdownActive: !isDropdownActive }))
  }

  render() {
    const { isDropdownActive } = this.state
    const VoteFilterIcon = isDropdownActive ? FaCaretUp : FaCaretDown
    return (
      <CinemaContext.Consumer>
        {({ setVoteFilter, voteFilter }) => (
          <VoteFilterListStyled>
            <VoteFilterSelect onClick={this.voteFilterToggler}>
              <VoteFilterSelectText>Vote {voteFilter}</VoteFilterSelectText>{' '}
              <VoteFilterIcon />
            </VoteFilterSelect>
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
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 150px;
  padding: 4px 10px;
  color: ${props => props.theme.voteFilterSelectTextColor};
  border: 1px solid ${props => props.theme.voteFilterSelectBorderColor};
`

const VoteFilterSelectText = styled.div`
  margin-right: 8px;
`

const VoteFilterOptions = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  background-color: ${props => props.theme.mainSectionFilterBarBg};
  opacity: 0;
`

export default VoteFilterList

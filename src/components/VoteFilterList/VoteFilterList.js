import React from 'react'
import styled from 'styled-components'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import * as s from 'styles/vars'
import { TMDB_VOTE_RATING_LIST } from 'config'
import CinemaContext from 'components/App/CinemaContext'
import VoteFilter from 'components/VoteFilter'

class VoteFilterList extends React.Component {
  state = {
    isDropdownActive: false,
  }

  toggleSelect = () => {
    const { isDropdownActive } = this.state
    this.setState(() => ({ isDropdownActive: !isDropdownActive }))
  }

  closeSelectOnFilter = (setVoteFilter, val) => {
    this.toggleSelect()
    setVoteFilter(val)
  }

  render() {
    const { isDropdownActive } = this.state
    const VoteFilterIcon = isDropdownActive ? FaCaretUp : FaCaretDown
    return (
      <CinemaContext.Consumer>
        {({ setVoteFilter, voteFilter }) => (
          <VoteFilterListStyled>
            <VoteFilterSelect onClick={this.toggleSelect}>
              <VoteFilterSelectText>
                Vote average > {voteFilter}
              </VoteFilterSelectText>{' '}
              <VoteFilterIcon />
            </VoteFilterSelect>
            <VoteFilterOptions active={isDropdownActive}>
              {TMDB_VOTE_RATING_LIST.map(rating => (
                <VoteFilter
                  key={rating}
                  ratingValue={rating}
                  isActive={voteFilter === rating}
                  setVoteFilter={val =>
                    this.closeSelectOnFilter(setVoteFilter, val)
                  }
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
  position: relative;
`

const VoteFilterSelect = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
  padding: 4px ${s.gutter};
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
  padding: 2px 0;
  background-color: ${props => props.theme.mainSectionFilterBarBg};
  opacity: 0;
  ${props =>
    props.active &&
    `
    opacity: 1;
  `}
`

export default VoteFilterList

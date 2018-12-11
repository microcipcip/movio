import React from 'react'
import styled from 'styled-components'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import CinemaContext from 'components/App/CinemaContext'

class VoteFilter extends React.Component {
  state = {
    value: 0,
  }

  render() {
    return (
      <CinemaContext.Consumer>
        {({ setVoteFilter, voteFilter }) => (
          <VoteFilterListStyled>
            <VoteFilterListInput>
              <InputRange
                minValue={0}
                maxValue={10}
                value={voteFilter}
                onChange={val => setVoteFilter(val)}
                step={0.5}
              />
            </VoteFilterListInput>
          </VoteFilterListStyled>
        )}
      </CinemaContext.Consumer>
    )
  }
}

const VoteFilterListStyled = styled.div`
  display: block;
  min-width: 140px;
  position: relative;
`

const VoteFilterListInput = styled.div`
  .input-range__track--active {
    background: ${props => props.theme.actionColor};
  }
  .input-range__slider {
    width: 1.3rem;
    height: 1.3rem;
    margin-top: -0.8rem;
    background-color: ${props => props.theme.actionColor};
    border-color: ${props => props.theme.actionColor};
  }
  .input-range__label-container {
    font-size: 1.2rem;
  }
  .input-range__label--value {
    top: -2.4rem;
    .input-range__label-container {
      left: 0;
    }
  }
  .input-range__label--min,
  .input-range__label--max {
    display: none;
  }
`

export default VoteFilter

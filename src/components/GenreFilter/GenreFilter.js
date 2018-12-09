import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

const GenreFilter = ({ id, name }) => (
  <div>
    <GenreInputStyled
      type="checkbox"
      name="checkbox"
      id={`genre-${name}`}
      value={name}
      onChange={() => {}}
    />
    <GenreLabelStyled htmlFor={`genre-${name}`}>{name}</GenreLabelStyled>
  </div>
)

const GenreInputStyled = styled.input`
  //display: none;
`

const GenreLabelStyled = styled.label`
  cursor: pointer;
  ${GenreInputStyled}:checked + & {
    background: red;
  }
`

GenreFilter.propTypes = {}
GenreFilter.defaultProps = {}

export default GenreFilter

import React from 'react'
import styled from 'styled-components'

const GenreFilter = ({ genre: { id, name, isChecked }, toggleGenreFilter }) => (
  <div>
    <GenreInputStyled
      type="checkbox"
      name="checkbox"
      id={`genre-${name}`}
      value={name}
      onChange={() => toggleGenreFilter(id, isChecked)}
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

export default GenreFilter

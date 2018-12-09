import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

const GenreFilter = ({ genre: { id, name, isChecked }, toggleGenreFilter }) => (
  <GenreFilterStyled>
    <GenreInput
      type="checkbox"
      name="checkbox"
      id={`genre-${name}`}
      value={name}
      onChange={() => toggleGenreFilter(id, isChecked)}
    />
    <GenreLabel htmlFor={`genre-${name}`}>
      <GenreLabelText>{name}</GenreLabelText> {isChecked && <FaTimes />}
    </GenreLabel>
  </GenreFilterStyled>
)

const GenreFilterStyled = styled.div``

const GenreInput = styled.input`
  display: none;
`

const GenreLabel = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 10px;
  color: ${props => props.theme.genreLabelTextColor};
  ${GenreInput}:checked + & {
    color: ${props => props.theme.genreLabelTextColorHover};
  }
`

const GenreLabelText = styled.div``

export default GenreFilter

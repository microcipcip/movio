import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import * as s from 'styles/vars'

const GenreFilter = React.memo(
  ({ genre: { id, name, isChecked }, toggleGenreFilter }) => (
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
  ),
  (
    { genre: { id: prevId, isChecked: prevIsChecked } },
    { genre: { id: nextId, isChecked: nextIsChecked } }
  ) => {
    return prevId === nextId && prevIsChecked === nextIsChecked
  }
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
  padding: 4px ${s.gutter};
  color: ${props => props.theme.genreLabelTextColor};
  ${GenreInput}:checked + & {
    color: ${props => props.theme.genreLabelTextColorHover};
  }
`

const GenreLabelText = styled.div``

export default GenreFilter

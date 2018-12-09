import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import styled from 'styled-components'
import { MovieConsumer } from './Movie'

const MovieTitle = props => (
  <MovieConsumer>
    {({ title }) => <MovieTitleStyled>{title}</MovieTitleStyled>}
  </MovieConsumer>
)

const MovieTitleStyled = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 1.8rem;
`

MovieTitle.propTypes = {}
MovieTitle.defaultProps = {}

export default MovieTitle

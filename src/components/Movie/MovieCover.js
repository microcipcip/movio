import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import styled from 'styled-components'
import { TMDB_API_IMG_URL } from 'config'
import { MovieConsumer } from './Movie'

const MovieCover = props => (
  <MovieConsumer>
    {({ poster_path }) => (
      <MovieCoverStyled>
        <ImageStyled src={`${TMDB_API_IMG_URL}w342/${poster_path}`} alt="" />
      </MovieCoverStyled>
    )}
  </MovieConsumer>
)

const MovieCoverStyled = styled.div`
  position: relative;
  &:after {
    content: '';
    display: block;
    // set image size with aspect ratio to avoid jumps
    padding-top: ${(750 / 500) * 100}%;
  }
`

const ImageStyled = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`

MovieCover.propTypes = {}
MovieCover.defaultProps = {}

export default MovieCover

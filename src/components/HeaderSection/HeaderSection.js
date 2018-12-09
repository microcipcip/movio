import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

const HeaderSection = props => (
  <HeaderSectionStyled>HeaderSection</HeaderSectionStyled>
)

HeaderSection.propTypes = {}
HeaderSection.defaultProps = {}

const HeaderSectionStyled = styled.div`
  order: 1;
  width: 100%;
  max-width: 100%;
  flex-basis: 100%;
`

export default HeaderSection

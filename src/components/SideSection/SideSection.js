import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import styled from 'styled-components'
import bp from 'styles/mixins/bp'
import GenreFilterList from 'components/GenreFilterList'

const SideSection = props => (
  <SideSectionStyled>
    <GenreFilterList />
  </SideSectionStyled>
)

const SideSectionStyled = styled.div`
  order: 2;
  ${bp.down('m')`
    display: none;
    max-width: 100%;  
    flex-basis: 100%;  
  `}
  ${bp.up('m')`
    flex: 0 0 230px; 
  `}
`

SideSection.propTypes = {}
SideSection.defaultProps = {}

export default SideSection

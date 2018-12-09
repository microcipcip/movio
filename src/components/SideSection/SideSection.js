import React from 'react'
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

export default SideSection

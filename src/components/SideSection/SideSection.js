import React from 'react'
import styled from 'styled-components'
import * as s from 'styles/vars'
import bp from 'styles/mixins/bp'
import GenreFilterList from 'components/GenreFilterList'

const SideSection = props => (
  <SideSectionStyled>
    <GenreFilterList />
  </SideSectionStyled>
)

const SideSectionStyled = styled.div`
  z-index: ${s.zIndex.sideSection};
  position: fixed;
  top: 0;
  left: 0;
  width: ${s.sideSectionWidth};
  height: calc(${s.sideSectionHeight});
  border-right: 1px solid ${props => props.theme.sideSectionBorderColor};
  background-color: ${props => props.theme.bg};
  ${bp.down('m')`
    display: none;
  `}
  ${bp.up('m')`
    //width: 230px; 
  `}
`

export default SideSection

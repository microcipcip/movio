import React from 'react'
import styled from 'styled-components'
import * as s from 'styles/vars'
import bp from 'styles/mixins/bp'
import CinemaContext from 'components/App/CinemaContext'
import GenreFilterList from 'components/GenreFilterList'

const SideSection = props => (
  <CinemaContext.Consumer>
    {({ sideSectionActive }) => (
      <SideSectionStyled active={sideSectionActive}>
        <GenreFilterList />
      </SideSectionStyled>
    )}
  </CinemaContext.Consumer>
)

const SideSectionStyled = styled.div`
  z-index: ${s.zIndex.sideSection};
  position: fixed;
  top: ${s.headerHeight};
  left: 0;
  overflow-y: auto;
  background-color: ${props => props.theme.bg};
  ${bp.down('m')`
    width: 100%;
    height: calc(100vh - ${s.headerHeight});
    transform: translateY(-100%);
    transition: .2s ease-in-out;
    ${props =>
      props.active &&
      `
      transform: translateY(0%);
    `}
  `}
  ${bp.up('m')`
    width: ${s.sideSectionWidth};
    height: calc(${s.sideSectionHeight});
    border-right: 1px solid ${props => props.theme.sideSectionBorderColor};
  `}
`

export default SideSection

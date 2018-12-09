import React from 'react'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import * as s from 'styles/vars'
import bp from 'styles/mixins/bp'
import CinemaContext from 'components/App/CinemaContext'

const HeaderSection = props => (
  <CinemaContext.Consumer>
    {({ toggleSideSection }) => (
      <HeaderSectionStyled>
        <HeaderToggleSidebar onClick={toggleSideSection}>
          <FaBars />
        </HeaderToggleSidebar>
        <HeaderTitle>Movio</HeaderTitle>
        <HeaderToken />
      </HeaderSectionStyled>
    )}
  </CinemaContext.Consumer>
)

const HeaderSectionStyled = styled.div`
  z-index: ${s.zIndex.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${s.headerHeight};
  padding: 0 ${s.gutter};
  border-bottom: 2px solid ${props => props.theme.headerSectionBorderColor};
  background: ${props => props.theme.headerSectionBg};
  ${bp.up('m')`
    justify-content: center;
  `}
`

const HeaderToggleSidebar = styled.div`
  line-height: 1;
  font-size: 2.6rem;
  ${bp.up('m')`
    display: none;
  `}
`

const HeaderTitle = styled.h1`
  margin: 0;
  padding: 0;
  text-shadow: 0 0 12px ${props => props.theme.headerTitle};
  font-weight: bold;
  font-size: 2.2rem;
`

// this is used just to keep the title in the center
const HeaderToken = styled.div`
  ${bp.up('m')`
    display: none;
  `}
`

export default HeaderSection

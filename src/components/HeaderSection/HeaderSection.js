import React from 'react'
import styled from 'styled-components'
import * as s from 'styles/vars'

const HeaderSection = props => (
  <HeaderSectionStyled>
    <HeaderTitle>Movio</HeaderTitle>
  </HeaderSectionStyled>
)

const HeaderSectionStyled = styled.div`
  z-index: ${s.zIndex.header};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${s.headerHeight};
  border-bottom: 1px solid ${props => props.theme.headerSectionBorderColor};
  background: ${props => props.theme.headerSectionBg};
`

const HeaderTitle = styled.h1`
  margin: 0;
  padding: 0;
  text-shadow: 0 0 12px ${props => props.theme.headerTitle};
  font-weight: bold;
  font-size: 2.2rem;
`

export default HeaderSection

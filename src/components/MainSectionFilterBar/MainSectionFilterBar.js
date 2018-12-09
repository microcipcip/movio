import React from 'react'
import styled from 'styled-components'
import * as s from 'styles/vars'
import VoteFilterList from 'components/VoteFilterList'

const MainSectionFilterBar = props => (
  <MainSectionFilterBarStyled>
    <MainSectionFilterSortBy>Sort by:</MainSectionFilterSortBy>
    <VoteFilterList />
  </MainSectionFilterBarStyled>
)

const MainSectionFilterBarStyled = styled.div`
  z-index: ${s.zIndex.mainSectionFilteredBar};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: ${s.headerHeight};
  left: ${s.sideSectionWidth};
  width: calc(100% - ${s.sideSectionWidth});
  height: ${s.mainSectionFilterBarHeight};
  padding: 0 ${s.mainSectionGutter};
  background: ${props => props.theme.mainSectionFilterBarBg};
  box-shadow: 0 0 20px 20px ${props => props.theme.mainSectionFilterShadowBarBg};
`

const MainSectionFilterSortBy = styled.div`
  margin-right: 8px;
  color: ${props => props.theme.mainSectionFilterSortByColor};
`

export default MainSectionFilterBar

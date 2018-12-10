import React from 'react'
import styled from 'styled-components'
import * as s from 'styles/vars'
import bp from 'styles/mixins/bp'
import VoteFilter from 'components/VoteFilter'

const MainSectionFilterBar = props => (
  <MainSectionFilterBarStyled>
    <MainSectionFilterSortBy>Sort by vote:</MainSectionFilterSortBy>
    <VoteFilter />
  </MainSectionFilterBarStyled>
)

const MainSectionFilterBarStyled = styled.div`
  z-index: ${s.zIndex.mainSectionFilteredBar};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: ${s.headerHeight};
  left: 0;
  width: 100%;
  height: ${s.mainSectionFilterBarHeight};
  padding: 0 ${s.mainSectionGutter};
  background: ${props => props.theme.mainSectionFilterBarBg};
  box-shadow: 0 0 20px 20px ${props => props.theme.mainSectionFilterShadowBarBg};
  ${bp.up('m')`
    left: ${s.sideSectionWidth};
    width: calc(100% - ${s.sideSectionWidth});
  `}
`

const MainSectionFilterSortBy = styled.div`
  margin-right: 8px;
  color: ${props => props.theme.mainSectionFilterSortByColor};
  font-size: 1.4rem;
`

export default MainSectionFilterBar

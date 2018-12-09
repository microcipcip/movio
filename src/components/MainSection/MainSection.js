import React from 'react'
import styled from 'styled-components'
import * as s from 'styles/vars'
import bp from 'styles/mixins/bp'
import MovieList from 'components/MovieList'
import MainSectionFilterBar from 'components/MainSectionFilterBar'

const MainSection = props => (
  <MainSectionStyled>
    <MainSectionFilterBar />
    <MovieList />
  </MainSectionStyled>
)

const MainSectionStyled = styled.div`
  order: 3;
  flex: 1;
  margin-top: ${s.mainSectionMarginTop};
  padding: ${s.mainSectionGutter};
  ${bp.up('m')`
    margin-left: ${s.sideSectionWidth};
  `}
`

export default MainSection

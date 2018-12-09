import React from 'react'
import styled from 'styled-components'
import * as s from 'styles/vars'
import bp from 'styles/mixins/bp'
import MovieList from 'components/MovieList'
import VoteFilter from 'components/VoteFilter'

const MainSection = props => (
  <MainSectionStyled>
    <VoteFilter />
    <MovieList />
  </MainSectionStyled>
)

const MainSectionStyled = styled.div`
  order: 3;
  flex: 1;
  padding: 0 ${s.mainSectionGutter} ${s.mainSectionGutter};
  ${bp.down('m')`
    max-width: 100%;  
    flex-basis: 100%;  
  `}
`

export default MainSection

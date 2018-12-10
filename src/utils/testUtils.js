import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'
import 'jest-dom/extend-expect'
import { genreList, movieList } from 'utils/testData'
import * as s from 'styles/vars'

import CinemaContext, { cinemaContextState } from 'components/App/CinemaContext'

const customRender = (node, data = {}) => {
  return render(
    <CinemaContext.Provider value={Object.assign(cinemaContextState, data)}>
      <ThemeProvider theme={s.theme.dark}>{node}</ThemeProvider>
    </CinemaContext.Provider>
  )
}

const domToString = el => {
  const clnEl = el.cloneNode(true)
  const tmp = document.createElement('div')
  tmp.appendChild(clnEl)
  return tmp.innerHTML
}

// re-export everything
export * from 'react-testing-library'
export { customRender, domToString, genreList, movieList }

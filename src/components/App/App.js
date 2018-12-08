import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import Styles from 'styles'
import { theme } from 'styles/vars'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme.dark}>
        <React.Fragment>
          <Styles />
          <div>App</div>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App

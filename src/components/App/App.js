import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import Styles from 'styles'
import { theme } from 'styles/vars'
import fetchApi from 'utils/fetchApi'
import HeaderSection from 'components/HeaderSection'
import MainSection from 'components/MainSection'
import SideSection from 'components/SideSection'

class App extends Component {
  async componentDidMount() {
    try {
      const data = await fetchApi('movie/now_playing?language=en-US&page=1')
      console.log(data)
    } catch (err) {
      throw err
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme.dark}>
        <React.Fragment>
          <Styles />
          <div>
            App
            <HeaderSection />
            <MainSection />
            <SideSection />
          </div>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App

import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import Styles from 'styles'
import { theme } from 'styles/vars'
import fetchApi from 'utils/fetchApi'
import HeaderSection from 'components/HeaderSection'
import MainSection from 'components/MainSection'
import SideSection from 'components/SideSection'
import CinemaContext, { cinemaContextState } from './CinemaContext'

class App extends Component {
  state = { ...cinemaContextState }

  getMovies = async () => {
    const { results } = await fetchApi('movie/now_playing')
    return results
  }

  getGenres = async movieList => {
    const { genres } = await fetchApi('genre/movie/list')
    return genres.filter(({ id }) =>
      movieList.some(movie => movie.genre_ids.includes(id))
    )
  }

  async componentDidMount() {
    try {
      this.setState(() => ({ isFetching: true }))
      const movieList = await this.getMovies()
      const genreList = await this.getGenres(movieList)
      this.setState(() => ({
        movieList,
        genreList,
        isFetching: false,
      }))
    } catch (err) {
      console.error(err)
      this.setState(() => ({
        errorMsg: 'Something went wrong while fetching movieList and genreList',
        isFetching: false,
      }))
    }
  }

  render() {
    const { isFetching, errorMsg } = this.state

    if (isFetching) return <div>Loading...</div>

    if (errorMsg) return <div>{errorMsg}</div>

    return (
      <ThemeProvider theme={theme.dark}>
        <CinemaContext.Provider value={this.state}>
          <React.Fragment>
            <Styles />
            <div>
              App
              <HeaderSection />
              <MainSection />
              <SideSection />
            </div>
          </React.Fragment>
        </CinemaContext.Provider>
      </ThemeProvider>
    )
  }
}

export default App

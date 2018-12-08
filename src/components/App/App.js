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
      const movieList = await this.getMovies()
      const genreList = await this.getGenres(movieList)
      this.setState(() => ({
        movieList,
        genreList,
      }))
    } catch (err) {
      console.error(err)
      this.setState(() => ({
        fetchError:
          'Something went wrong while fetching movieList and genreList',
      }))
    }
  }

  render() {
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

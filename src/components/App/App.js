import React, { Component } from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import styled, { ThemeProvider } from 'styled-components'
import Styles from 'styles'
import { theme } from 'styles/vars'
import fetchApi from 'utils/fetchApi'
import CinemaContext, { cinemaContextState } from './CinemaContext'
import HeaderSection from 'components/HeaderSection'
import MainSection from 'components/MainSection'
import SideSection from 'components/SideSection'

class App extends Component {
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

  addGenreFilter = genreId => {}

  removeGenreFilter = genreId => {}

  setVoteFilter = voteValue => {}

  state = {
    ...cinemaContextState,
    addGenreFilter: this.addGenreFilter,
    removeGenreFilter: this.removeGenreFilter,
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
          <AppStyled>
            <Styles />
            <HeaderSection />
            <MainSection />
            <SideSection />
          </AppStyled>
        </CinemaContext.Provider>
      </ThemeProvider>
    )
  }
}

const AppStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`

App.propTypes = {}
App.defaultProps = {}

export default App

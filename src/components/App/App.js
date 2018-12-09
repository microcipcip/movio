import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Styles from 'styles'
import { theme } from 'styles/vars'
import fetchApi from 'utils/fetchApi'
import CinemaContext, { cinemaContextState } from './CinemaContext'
import HeaderSection from 'components/HeaderSection'
import MainSection from 'components/MainSection'
import SideSection from 'components/SideSection'

class App extends Component {
  fetchMovies = async () => {
    const { results } = await fetchApi('movie/now_playing')
    // sort by popularity once so we don't have to do it ever again
    // (although it seems that the API is sorted by popularity by default)
    return results.sort((a, b) => b.popularity - a.popularity)
  }

  fetchGenres = async movieList => {
    const { genres } = await fetchApi('genre/movie/list')
    // initialize the isChecked property
    const setIsChecked = genre => {
      genre.isChecked = false
      return genre
    }
    return genres
      .map(setIsChecked)
      .filter(({ id }) => movieList.some(movie => movie.genre_ids.includes(id)))
  }

  getGenreActiveIdList = () => {
    return this.state.genreList
      .filter(gender => gender.isChecked)
      .map(gender => gender.id)
  }

  setFilteredMovies = () => {
    const { voteFilter } = this.state
    const genreIdList = this.getGenreActiveIdList()
    const genreIdListLength = genreIdList.length
    this.setState(() => ({
      movieList: this.movieFetchedList.filter(
        movie =>
          movie.genre_ids.some(
            genreId => !genreIdListLength || genreIdList.includes(genreId)
          ) && movie.vote_average > voteFilter
      ),
    }))
  }

  toggleGenreFilter = (genreId, isChecked) => {
    const setIsChecked = genre => {
      const genreCopy = { ...genre }
      if (genreCopy.id === genreId) genreCopy.isChecked = !isChecked
      return genreCopy
    }
    this.setState(() => ({ genreList: this.state.genreList.map(setIsChecked) }))
  }

  setVoteFilter = voteFilter => {
    this.setState({ voteFilter })
  }

  // state
  movieFetchedList = []
  genreFetchedList = []

  state = {
    ...cinemaContextState,
    toggleGenreFilter: this.toggleGenreFilter,
    setVoteFilter: this.setVoteFilter,
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    const { voteFilter, genreList } = this.state
    if (
      prevState.voteFilter !== voteFilter ||
      prevState.genreList !== genreList
    ) {
      this.setFilteredMovies()
    }
  }

  async componentDidMount() {
    try {
      this.setState(() => ({ isFetching: true }))
      // keep a copy of the original list
      // so we can clone it when needed
      this.movieFetchedList = await this.fetchMovies()
      this.genreFetchedList = await this.fetchGenres(this.movieFetchedList)

      this.setState(() => ({
        movieList: [...this.movieFetchedList],
        genreList: [...this.genreFetchedList],
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
  align-content: flex-start;
  flex-wrap: wrap;
  min-height: 100vh;
`

export default App

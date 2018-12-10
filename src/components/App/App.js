import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Transition from 'components/Transition'
import Loader from 'react-loader-spinner'
import Styles from 'styles'
import * as s from 'styles/vars'
import { TMDB_VOTE_RATING_DEFAULT } from 'config'
import fetchApi from 'utils/fetchApi'
import normalizeObject from 'utils/normalizeObject'
import CinemaContext, { cinemaContextState } from './CinemaContext'
import HeaderSection from 'components/HeaderSection'
import MainSection from 'components/MainSection'
import SideSection from 'components/SideSection'

class App extends Component {
  fetchMovies = async () => {
    const { movieList } = this.props
    const { results } = movieList || (await fetchApi('movie/now_playing'))
    // sort by popularity once so we don't have to do it ever again
    // (although it seems that the API is sorted by popularity by default)
    return results.sort((a, b) => b.popularity - a.popularity)
  }

  fetchGenres = async movieList => {
    const { genreList } = this.props
    const { genres } = genreList || (await fetchApi('genre/movie/list'))
    // initialize the isChecked property
    const setIsChecked = genre => {
      genre.isChecked = false
      return genre
    }
    return genres
      .map(setIsChecked)
      .filter(({ id }) => movieList.some(movie => movie.genre_ids.includes(id)))
      .reduce(normalizeObject, {})
  }

  resetVoteFilter = () => {
    this.setState(() => ({ voteFilter: TMDB_VOTE_RATING_DEFAULT }))
  }

  getGenreActiveIdList = () => {
    return Object.values(this.state.genreList)
      .filter(genre => genre.isChecked)
      .map(genre => genre.id)
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
          ) && movie.vote_average >= voteFilter
      ),
    }))
  }

  toggleGenreFilter = (genreId, isChecked) => {
    const setIsChecked = genre => {
      const genreCopy = { ...genre }
      if (genreCopy.id === genreId) genreCopy.isChecked = !isChecked
      return genreCopy
    }
    this.setState(() => ({
      genreList: Object.values(this.state.genreList)
        .map(setIsChecked)
        .reduce(normalizeObject, {}),
    }))
  }

  setVoteFilter = voteFilter => {
    this.setState({ voteFilter })
  }

  toggleSideSection = () => {
    const { sideSectionActive } = this.state
    this.setState({
      sideSectionActive: !sideSectionActive,
    })
  }

  fetchData = async () => {
    const { loadingTimeMin } = this.props
    const timeStart = Date.now()
    try {
      this.setState(() => ({ isFetching: true }))
      // keep a copy of the original list
      // so we can clone it when needed
      this.movieFetchedList = await this.fetchMovies()
      this.genreFetchedList = await this.fetchGenres(this.movieFetchedList)
      this.setState(() => ({
        movieList: [...this.movieFetchedList],
        genreList: { ...this.genreFetchedList },
        isFetching: false,
      }))

      const timeEnd = Date.now()
      const timerDiff = (loadingTimeMin || 1500) - (timeEnd - timeStart)
      // add a small delay just to show a cool loader
      setTimeout(() => {
        this.setState(() => ({ isLoading: false }))
      }, timerDiff)
    } catch (err) {
      console.error(err)
      this.setState(() => ({
        errorMsg: 'Something went wrong while fetching movieList and genreList',
        isFetching: false,
        isLoading: false,
      }))
    }
  }

  // state
  themeType = 'dark' // dark or light
  movieFetchedList = []
  genreFetchedList = {}

  state = {
    ...cinemaContextState,
    resetVoteFilter: this.resetVoteFilter,
    toggleGenreFilter: this.toggleGenreFilter,
    setVoteFilter: this.setVoteFilter,
    toggleSideSection: this.toggleSideSection,
  }

  componentDidUpdate(prevProps, prevState) {
    const { voteFilter, genreList } = this.state
    if (
      prevState.voteFilter !== voteFilter ||
      prevState.genreList !== genreList
    ) {
      this.setFilteredMovies()
    }
  }

  async componentDidMount() {
    await this.fetchData()
  }

  render() {
    const { isFetching, isLoading, errorMsg, sideSectionActive } = this.state
    return (
      <ThemeProvider theme={s.theme[this.themeType]}>
        <CinemaContext.Provider value={this.state}>
          <AppStyled>
            <Styles sideActive={sideSectionActive} />
            <AppInitLoader isLoading={isLoading} themeType={this.themeType} />
            <AppInitError errorMsg={errorMsg} />
            {!isFetching && !errorMsg && (
              <React.Fragment>
                <HeaderSection />
                <MainSection />
                <SideSection />
              </React.Fragment>
            )}
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

const AppInitWrapper = styled.div`
  z-index: ${s.zIndex.appInitWrapper};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.bg};
`

const AppInitErrorText = styled.h3`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.appIniErrorTextColor};
`

const AppInitErrorReloader = styled.div`
  cursor: pointer;
  margin: 1em 0 0;
  padding: 0.6em 2em;
  background-color: ${props => props.theme.appIniErrorReloaderBg};
  color: ${props => props.theme.appIniErrorReloaderTextColor};
`

const AppInitLoader = ({ isLoading, themeType }) => (
  <Transition active={isLoading} type="FadeOut" duration={0.3}>
    <AppInitWrapper>
      <Loader
        type="Oval"
        color={s.theme[themeType].appInitLoader}
        height="70"
        width="70"
      />
    </AppInitWrapper>
  </Transition>
)

const AppInitError = ({ errorMsg }) =>
  errorMsg ? (
    <AppInitWrapper>
      <AppInitErrorText>{errorMsg}</AppInitErrorText>
      <AppInitErrorReloader onClick={() => window.location.reload()}>
        Reload
      </AppInitErrorReloader>
    </AppInitWrapper>
  ) : null

export default App

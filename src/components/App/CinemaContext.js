import { createContext } from 'react'

const noop = () => {}
export const cinemaContextState = {
  movieList: [],
  genreList: [],
  voteFilter: 3,
  toggleGenreFilter: noop,
  setVoteFilter: noop,
  toggleSideSection: noop,
  sideSectionActive: false,
  isFetching: true,
  isLoading: true,
  errorMsg: '',
}

const Context = createContext(cinemaContextState)

export default Context

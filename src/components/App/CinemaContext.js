import { createContext } from 'react'

const noop = () => {}
export const cinemaContextState = {
  movieList: [],
  genreList: [],
  toggleGenreFilter: noop,
  setVoteFilter: noop,
  isFetching: false,
  errorMsg: '',
}

const Context = createContext(cinemaContextState)

export default Context

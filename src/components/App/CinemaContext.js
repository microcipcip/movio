import { createContext } from 'react'

const noop = () => {}
export const cinemaContextState = {
  movieList: [],
  genreList: [],
  voteFilter: 3,
  toggleGenreFilter: noop,
  setVoteFilter: noop,
  isFetching: false,
  errorMsg: '',
}

const Context = createContext(cinemaContextState)

export default Context

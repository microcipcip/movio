import { createContext } from 'react'
import { TMDB_VOTE_RATING_DEFAULT } from 'config'

const noop = () => {}
export const cinemaContextState = {
  movieList: [],
  genreList: [],
  voteFilter: TMDB_VOTE_RATING_DEFAULT,
  resetVoteFilter: noop,
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

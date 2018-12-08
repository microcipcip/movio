import { createContext } from 'react'
export const cinemaContextState = {
  movieList: [],
  genreList: [],
  isFetching: false,
  errorMsg: '',
}

const Context = createContext(cinemaContextState)

export default Context

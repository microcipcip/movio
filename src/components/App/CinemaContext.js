import { createContext } from 'react'
export const cinemaContextState = {
  movieList: [],
  genreList: [],
  isFetching: false,
  fetchError: '',
}

const Context = createContext(cinemaContextState)

export default Context

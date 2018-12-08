import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import MovieCover from './MovieCover'
import MovieTitle from './MovieTitle'
import MovieDate from './MovieDate'

const MovieContext = createContext()

class Movie extends Component {
  static Cover = MovieCover
  static Title = MovieTitle
  static Date = MovieDate

  render() {
    const { children, ...restOfProps } = this.props
    console.log(restOfProps)
    return (
      <MovieContext.Provider value={restOfProps}>
        {children}
      </MovieContext.Provider>
    )
  }
}

Movie.propTypes = {}
Movie.defaultProps = {}

// prevent Consumer from being used outside tha parent
export const MovieConsumer = ({ children }) => (
  <MovieContext.Consumer>
    {ctx => {
      if (!ctx) {
        throw new Error(
          'Compound components of Movie should render beneath Movie'
        )
      }
      return children(ctx)
    }}
  </MovieContext.Consumer>
)

export default Movie

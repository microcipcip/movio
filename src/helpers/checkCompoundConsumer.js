import React from 'react'

export default (Component, errorMsg = '') => ({ children }) => (
  <Component.Consumer>
    {ctx => {
      if (!ctx) {
        throw new Error(errorMsg)
      }
      return children(ctx)
    }}
  </Component.Consumer>
)

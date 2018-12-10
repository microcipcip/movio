import React from 'react'
import styled from 'styled-components'

class Transition extends React.Component {
  state = {
    mounted: true,
  }

  unMount = () => {
    this.setState({ mounted: false })
  }

  render() {
    const { children, active, duration, type } = this.props
    const { mounted } = this.state
    if (!mounted) return null
    switch (type) {
      case 'FadeIn':
        return (
          <FadeIn opacityVal={active ? 0 : 1} duration={duration}>
            {children}
          </FadeIn>
        )
      case 'FadeOut':
        return (
          <FadeOut
            opacityVal={active ? 1 : 0}
            duration={duration}
            onTransitionEnd={this.unMount}
          >
            {children}
          </FadeOut>
        )
      default:
        return null
    }
  }
}

const FadeIn = styled.div`
  display: block;
  transition: ${props => `opacity ${props.duration}s ease-in-out`};
  opacity: ${props => `${props.opacityVal}`};
`

const FadeOut = styled.div`
  display: block;
  transition: ${props => `opacity ${props.duration}s ease-in-out`};
  opacity: ${props => `${props.opacityVal}`};
`

export default Transition

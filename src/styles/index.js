import { createGlobalStyle } from 'styled-components'
import normalize from './normalize'
import layout from './layout'
import typography from './typography'

export default createGlobalStyle`
  ${normalize}
  ${layout}
  ${typography}
`

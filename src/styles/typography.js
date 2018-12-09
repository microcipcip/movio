import { css } from 'styled-components'
import * as s from './vars'

export default css`
  html {
    overflow-y: scroll;
    height: 100%;
    font-size: 62.5%;
  }
  body {
    min-width: ${s.deviceWidthMin};
    height: 100%;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.textColor};
    font-family: ${s.fontFamily};
    font-size: ${s.fontSize};
    line-height: ${s.baseLineHeight};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 ${s.smallSpacing};
    font-family: ${s.headingFontFamily};
    font-weight: normal;
    line-height: ${s.headingLineHeight};
  }
  h1 {
    font-size: ${s.h1FontSize};
  }
  h2 {
    font-size: ${s.h2FontSize};
  }
  h3 {
    font-size: ${s.h3FontSize};
  }
  h4 {
    font-size: ${s.h4FontSize};
  }
  h5 {
    font-size: ${s.h5FontSize};
  }
  h6 {
    font-size: ${s.h6FontSize};
  }

  p {
    margin: 0 0 ${s.smallSpacing};
  }
  a {
    color: ${props => props.theme.actionColor};
    text-decoration: none;
    transition: color 0.2s;

    &:active,
    &:focus,
    &:hover {
      color: ${props => props.theme.actionColorHover};
    }
  }

  .typ {
    > *:first-child {
      margin-top: 0;
    }
    > *:last-child {
      margin-bottom: 0;
    }
    ul {
      margin-bottom: ${s.smallSpacing / 2};
      padding-left: ${s.smallSpacing};
      list-style-type: disc;
    }
    ol {
      margin-bottom: ${s.smallSpacing / 2};
      padding-left: ${s.smallSpacing};
      list-style-type: decimal;
    }
  }
`

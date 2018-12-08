// typography
export const fontFamily = 'Open Sans, sans-serif'
export const fontSizeValue = 1.8
export const fontSize = `${fontSizeValue}rem`
export const baseLineHeight = 1.5
export const headingFontFamily = fontFamily
export const headingLineHeight = 1.2

export const h1FontSize = `${fontSizeValue * 2.25}rem`
export const h2FontSize = `${fontSizeValue * 2}rem`
export const h3FontSize = `${fontSizeValue * 1.75}rem`
export const h4FontSize = `${fontSizeValue * 1.5}rem`
export const h5FontSize = `${fontSizeValue * 1.25}rem`
export const h6FontSize = `${fontSizeValue}rem`

// spacing
export const baseSpacing = `${baseLineHeight}em`
export const smallSpacing = baseLineHeight / 2

// theme
export const cBlack = '#000000'
export const cWhite = '#FFFFFF'
export const cBlue = '#2b41ff'
export const cBlueDark = '#0400ff'
export const theme = {
  dark: {
    bg: cBlack,
    textColor: cWhite,
    actionColor: cBlue,
    actionColorHover: cBlueDark,
  },
  light: {
    bg: cWhite,
    textColor: cBlack,
    actionColor: cBlue,
    actionColorHover: cBlueDark,
  },
}

// device
export const deviceWidthMax = '1200px'
export const deviceWidthMin = '320px'

// media queries
export const bp = {
  xxxs: 0,
  xxs: 200,
  xs: 320,
  s: 400,
  sl: 480,
  sl2: 580,
  m: 768,
  ml: 992,
  l: 1100,
  xl: 1200,
  xxl: 1300,
  xxxl: 1400,
  xxxxl: 1500,
  xxxxxl: 1600,
  xxxxxxl: 1700,
}

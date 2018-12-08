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
export const smallSpacing = baseSpacing / 2

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
    actionColorHover: cBlue,
  },
  light: {
    bg: cWhite,
    textColor: cBlack,
    actionColor: cBlue,
    actionColorHover: cBlue,
  },
}

// device
export const deviceWidthMax = '1200px'
export const deviceWidthMin = '320px'

// media queries

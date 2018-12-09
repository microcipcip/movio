import { lighten, darken, stripUnit, transparentize } from 'polished'

// typography
export const fontFamily = 'Open Sans, sans-serif'
export const fontSizeValue = 1.8
export const fontSize = `${fontSizeValue}rem`
export const baseLineHeight = 1.5
export const headingFontFamily = fontFamily
export const headingLineHeight = 1.2

export const h1FontSize = `${fontSizeValue * 2.0}rem`
export const h2FontSize = `${fontSizeValue * 1.6}rem`
export const h3FontSize = `${fontSizeValue * 1.45}rem`
export const h4FontSize = `${fontSizeValue * 1.3}rem`
export const h5FontSize = `${fontSizeValue * 1.25}rem`
export const h6FontSize = `${fontSizeValue}rem`

// spacing
export const baseSpacing = `${baseLineHeight}em`
export const smallSpacing = baseLineHeight / 2

// device
export const deviceWidthMax = '1200px'
export const deviceWidthMin = '320px'

// media queries
export const bp = {
  xxxs: 0,
  xxs: 200,
  xs: 320,
  s: 400,
  sl: 500,
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

// headerSection
export const headerHeight = '50px'

// mainSectionFilterBar
export const mainSectionFilterBarHeight = '46px'

// mainSection
export const mainSectionGutter = '20px'
export const mainSectionMarginTop = `${stripUnit(headerHeight) +
  stripUnit(mainSectionFilterBarHeight)}px`

// sideSection
export const sideSectionWidth = '230px'
export const sideSectionHeight = `100vh - ${stripUnit(headerHeight) +
  stripUnit(mainSectionFilterBarHeight)}px`

// movie
export const movieListGutter = '16px'

// zindex
export const zIndex = {
  header: 4,
  mainSectionFilteredBar: 3,
  sideSection: 3,
}

// theme
export const cBlack = '#000000'
export const cGreyDark = '#111111'
export const cGreyMedium = '#7c7c7c'
export const cGreyLight = '#c3c3c3'
export const cWhite = '#FFFFFF'
export const cBlue = '#2b41ff'
export const cBlueDark = '#0400ff'
export const theme = {
  dark: {
    headerSectionBg: darken(0.01, cGreyDark),
    headerSectionBorderColor: darken(0.02, cGreyDark),
    headerTitle: darken(0.5, cWhite),
    mainSectionFilterBarBg: cGreyDark,
    mainSectionFilterShadowBarBg: transparentize(0.2, cGreyDark),
    mainSectionFilterSortByColor: lighten(0.3, cGreyDark),
    sideSectionBorderColor: darken(0.03, cGreyDark),
    voteFilterSelectBorderColor: lighten(0.1, cGreyDark),
    voteFilterSelectTextColor: lighten(0.5, cGreyDark),
    voteFilterBgHover: lighten(0.02, cGreyDark),
    bg: cGreyDark,
    textColor: cWhite,
    textColorLight: cGreyLight,
    actionColor: cBlue,
    actionColorHover: cBlueDark,
  },
  light: {
    headerSectionBg: cWhite,
    headerSectionBorderColor: darken(0.1, cWhite),
    headerTitle: lighten(0.5, cBlack),
    mainSectionFilterBarBg: cWhite,
    mainSectionFilterShadowBarBg: transparentize(0.2, cWhite),
    mainSectionFilterSortByColor: darken(0.3, cWhite),
    sideSectionBorderColor: darken(0.1, cWhite),
    voteFilterSelectBorderColor: darken(0.1, cWhite),
    voteFilterSelectTextColor: darken(0.5, cWhite),
    voteFilterBgHover: darken(0.2, cWhite),
    bg: cWhite,
    textColor: cBlack,
    textColorLight: cGreyMedium,
    actionColor: cBlue,
    actionColorHover: cBlueDark,
  },
}

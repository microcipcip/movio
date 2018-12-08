import { css } from 'styled-components'

// Breakpoint
export const mediaWidthRule = rule =>
  `${{ up: 'min', down: 'max' }[rule] || 'min'}-width`

export const ruleTemplate = (rule, width) => `(${rule}: ${width}px)`
export const mediaTemplate = rules => `@media only screen and ${rules}`

export const getSmallestMedia = breakpoints => {
  const keys = Object.keys(breakpoints)

  return Number(
    keys.reduce((acc, key) => {
      if (acc) {
        return acc > breakpoints[key] ? breakpoints[key] : acc
      }
      return breakpoints[key]
    }, undefined)
  )
}

export const getNextMedia = (breakpoints, width) => {
  const keys = Object.keys(breakpoints)

  const nextBreakpoint = Number(
    keys.reduce((acc, key) => {
      const current = breakpoints[key]
      if (acc && width - current <= 0) {
        return width - acc > Math.abs(width - current) || width - acc === 0
          ? current
          : acc
      }
      return getSmallestMedia(breakpoints)
    }, undefined)
  )

  if (nextBreakpoint === width) {
    throw new Error(
      `The breakpoint of value ${nextBreakpoint} is the heighst there is, did you mean to use "[media].up"?`
    )
  }
  return nextBreakpoint
}

export const mediaRules = (breakpoints, widthKey, rule, boundKey) => {
  const width = breakpoints[widthKey]
  const bound = breakpoints[boundKey]
  let baseWidthRule = mediaWidthRule(rule)
  let boudWidthRule

  let baseRule = ruleTemplate(baseWidthRule, width)
  let boundRule

  if (bound && width) {
    // Get correct rule based on width relative to bound
    baseWidthRule = mediaWidthRule(bound <= width ? 'down' : 'up')
    boudWidthRule = mediaWidthRule(bound <= width ? 'up' : 'down')

    baseRule = ruleTemplate(
      mediaWidthRule(bound <= width ? 'down' : 'up'),
      width
    )
    boundRule = ruleTemplate(boudWidthRule, bound)
    return [].concat([baseRule], bound ? [boundRule] : []).join(' and ')
  }

  if (!bound && rule === 'only') {
    // Get correct rule based on width relative to bound
    boudWidthRule = mediaWidthRule(bound <= width ? 'up' : 'down')
    boundRule = ruleTemplate(boudWidthRule, getNextMedia(breakpoints, width))
  }

  return [].concat([baseRule], boundRule ? [boundRule] : []).join(' and ')
}

export const getMixin = (breakpoints, key, rule = 'up') => bound => (
  ...args
) => css`
  ${mediaTemplate(mediaRules(breakpoints, key, rule, bound))} {
    ${css(...args)}
  }
`

export const getMediaShorthands = (breakpoints, rule) =>
  Object.keys(breakpoints).reduce(
    (acc, key) => ({
      ...acc,
      [key]: getMixin(breakpoints, key, rule)(),
    }),
    {}
  )

export const getMedia = breakpoints => {
  const mediasUp = getMediaShorthands(breakpoints, 'up')
  const list = Object.keys(breakpoints)

  return {
    ...mediasUp,
    up: widthKey => getMixin(breakpoints, widthKey, 'up')(),
    down: widthKey => getMixin(breakpoints, widthKey, 'down')(),
    only: (widthKey, boundKey) =>
      getMixin(breakpoints, widthKey, 'only')(boundKey),
    list,
  }
}

export default getMedia

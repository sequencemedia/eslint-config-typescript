function hasLanguageOptionsParser ({ languageOptions: { parser = null } = {} }) {
  return Boolean(parser)
}

function getLanguageOptionsParser ({ languageOptions: { parser = null } = {} }) {
  return parser
}

function filterLanguageOptionsEntriesbyKey ([key]) {
  return key !== 'parser'
}

export function getLanguageOptions ({ languageOptions = {} }) {
  const entries = Object.entries(languageOptions)

  return (
    Object.fromEntries(
      entries.filter(filterLanguageOptionsEntriesbyKey)
    )
  )
}

export function getLinterOptions ({ linterOptions = {} }) {
  return linterOptions
}

export function getProcessor ({ processor = {} }) {
  return processor
}

export function getRules ({ rules = {} }) {
  return rules
}

export function getSettings ({ settings = {} }) {
  return settings
}

export function mergeLanguageOptions (alpha = {}, omega = {}) {
  return (
    Object
      .assign(
        hasLanguageOptionsParser(alpha) ? { parser: getLanguageOptionsParser(alpha) } : {},
        structuredClone(getLanguageOptions(alpha)),
        hasLanguageOptionsParser(omega) ? { parser: getLanguageOptionsParser(omega) } : {},
        getLanguageOptions(omega)
      )
  )
}

export function mergeLinterOptions (alpha = {}, omega = {}) {
  return (
    Object
      .assign(
        structuredClone(getLinterOptions(alpha)),
        getLinterOptions(omega)
      )
  )
}

export function mergeRules (alpha = {}, omega = {}) {
  return (
    Object
      .assign(
        structuredClone(getRules(alpha)),
        getRules(omega)
      )
  )
}

export function mergeSettings (alpha = {}, omega = {}) {
  return (
    Object
      .assign(
        structuredClone(getSettings(alpha)),
        getSettings(omega)
      )
  )
}

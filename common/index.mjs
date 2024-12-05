export function isString (v) {
  return typeof v === 'string'
}

export function isObject (v) {
  return (
    (v || false).constructor === Object &&
    !Array.isArray(v)
  )
}

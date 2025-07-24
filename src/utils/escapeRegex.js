// escape RegExp special characters https://stackoverflow.com/a/9310752/5142490
const escapeRegex = (str) => {
  if (typeof str !== 'string') {
    console.error('escapeRegex: Expected string but received:', typeof str, str)
    return ''
  }
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

export default escapeRegex

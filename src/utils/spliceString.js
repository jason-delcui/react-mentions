const spliceString = (str, start, end, insert) => {
  if (typeof str !== 'string') {
    console.error('spliceString: Expected string but received:', typeof str, str)
    return insert || ''
  }
  return str.substring(0, start) + insert + str.substring(end)
}

export default spliceString

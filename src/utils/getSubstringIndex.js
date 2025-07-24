import lettersDiacritics from './diacritics'

const removeAccents = str => {
  if (typeof str !== 'string') {
    console.error('removeAccents: Expected string but received:', typeof str, str)
    return ''
  }

  let formattedStr = str

  lettersDiacritics.forEach(letterDiacritics => {
    formattedStr = formattedStr.replace(
      letterDiacritics.letters,
      letterDiacritics.base
    )
  })

  return formattedStr
}

export const normalizeString = str => removeAccents(str).toLowerCase()

const getSubstringIndex = (str, substr, ignoreAccents) => {
  if (!ignoreAccents) {
    return str.toLowerCase().indexOf(substr.toLowerCase())
  }

  return normalizeString(str).indexOf(normalizeString(substr))
}

export default getSubstringIndex

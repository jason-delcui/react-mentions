import PLACEHOLDERS from './placeholders'

const makeMentionsMarkup = (markup, id, display) => {
  if (typeof markup !== 'string') {
    console.error('makeMentionsMarkup: Expected string markup but received:', typeof markup, markup)
    return `@[${display || id}](${id})`  // fallback to default markup
  }
  return markup
    .replace(PLACEHOLDERS.id, id)
    .replace(PLACEHOLDERS.display, display)
}

export default makeMentionsMarkup

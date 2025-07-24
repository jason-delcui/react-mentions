import { Children } from 'react'
import invariant from 'invariant'
import markupToRegex from './markupToRegex'
import countPlaceholders from './countPlaceholders'

const readConfigFromChildren = children =>
  Children.toArray(children).map(
    ({ props: { markup, regex, displayTransform } }) => {
      // Ensure markup has a default value if undefined
      const finalMarkup = markup || '@[__display__](__id__)'
      
      return {
        markup: finalMarkup,
        regex: regex
          ? coerceCapturingGroups(regex, finalMarkup)
          : markupToRegex(finalMarkup),
        displayTransform: displayTransform || ((id, display) => display || id),
      }
    }
  )

// make sure that the custom regex defines the correct number of capturing groups
const coerceCapturingGroups = (regex, markup) => {
  const numberOfGroups = new RegExp(regex.toString() + '|').exec('').length - 1
  const numberOfPlaceholders = countPlaceholders(markup)

  invariant(
    numberOfGroups === numberOfPlaceholders,
    `Number of capturing groups in RegExp ${regex.toString()} (${numberOfGroups}) does not match the number of placeholders in the markup '${markup}' (${numberOfPlaceholders})`
  )

  return regex
}

export default readConfigFromChildren

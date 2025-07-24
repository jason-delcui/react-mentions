import PLACEHOLDERS from './placeholders'
import escapeRegex from './escapeRegex'

const markupToRegex = (markup) => {
    if (typeof markup !== 'string') {
        console.error('markupToRegex: Expected string markup but received:', typeof markup, markup)
        // Return a default regex that matches the standard mention format
        return /@\[([^\]]+?)\]\(([^)]+?)\)/g
    }

    const escapedMarkup = escapeRegex(markup)

    const charAfterDisplay =
        markup[
            markup.indexOf(PLACEHOLDERS.display) + PLACEHOLDERS.display.length
        ]

    const charAfterId =
        markup[markup.indexOf(PLACEHOLDERS.id) + PLACEHOLDERS.id.length]

    return new RegExp(
        escapedMarkup
            .replace(
                PLACEHOLDERS.display,
                `([^${escapeRegex(charAfterDisplay || '')}]+?)`
            )
            .replace(
                PLACEHOLDERS.id,
                `([^${escapeRegex(charAfterId || '')}]+?)`
            )
    )
}

export default markupToRegex

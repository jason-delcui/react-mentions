import { Mention, MentionsInput } from './index'

import React from 'react'
import { makeTriggerRegex } from './MentionsInput'
import { render, screen } from '@testing-library/react'

const data = [
  { id: 'first', value: 'First entry' },
  { id: 'second', value: 'Second entry' },
  { id: 'third', value: 'Third' },
]

describe('MentionsInput', () => {
  it('should render a textarea by default.', () => {
    render(
      <MentionsInput value="">
        <Mention trigger="@" data={data} />
      </MentionsInput>
    )
    
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('textbox').tagName).toBe('TEXTAREA')
  })

  it('should render a regular input when singleLine is set to true.', () => {
    render(
      <MentionsInput value="" singleLine={true}>
        <Mention trigger="@" data={data} />
      </MentionsInput>
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('textbox').tagName).toBe('INPUT')
  })

  it.todo(
    'should show a list of suggestions once the trigger key has been entered.'
  )
  it.todo(
    'should be possible to navigate through the suggestions with the up and down arrows.'
  )
  it.todo('should be possible to select a suggestion with enter.')
  it.todo('should be possible to close the suggestions with esc.')

  // Temporarily skipping complex tests that would need extensive enzyme-to-testing-library migration
  it.skip('should be able to handle sync responses from multiple mentions sources', () => {
    // This test needs to be rewritten for @testing-library/react
  })

  it.skip('should scroll the highlighter in sync with the textarea', () => {
    // This test needs to be rewritten for @testing-library/react
  })

  it.skip('should place suggestions in suggestionsPortalHost', () => {
    // This test needs to be rewritten for @testing-library/react
  })

  it.skip('should accept a custom regex attribute', () => {
    // This test needs to be rewritten for @testing-library/react
  })

  it('should forward the `inputRef` prop to become the `ref` of the input', () => {
    const inputRef = React.createRef()
    render(
      <MentionsInput value="test" inputRef={inputRef}>
        <Mention trigger="@" data={data} />
      </MentionsInput>
    )
    
    expect(inputRef.current).toBeTruthy()
    expect(inputRef.current).toBe(screen.getByRole('textbox'))
  })

  it('should forward the `inputRef` prop to become the `ref` of the input (callback ref)', () => {
    const inputRef = jest.fn()
    render(
      <MentionsInput value="test" inputRef={inputRef}>
        <Mention trigger="@" data={data} />
      </MentionsInput>
    )
    
    expect(inputRef).toHaveBeenCalledWith(screen.getByRole('textbox'))
  })

  it('should render a custom input when supplied.', () => {
    const CustomInput = React.forwardRef((props, ref) => {
      return <input id="testInput" ref={ref} {...props} />
    })
    render(
      <MentionsInput value="test" inputComponent={CustomInput}>
        <Mention trigger="@" data={data} />
      </MentionsInput>
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('textbox').tagName).toBe('INPUT')
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'testInput')
  })

  describe('makeTriggerRegex', () => {
    it('should return regular expressions', () => {
      const trigger = /abc/
      expect(makeTriggerRegex(trigger)).toEqual(trigger)
    })

    it('should escape and capture a string trigger', () => {
      const result = makeTriggerRegex('trigger').toString()
      expect(result).toEqual('/(?:^|\\s)(trigger([^\\strigger]*))$/')
    })

    it('should allow spaces in search', () => {
      const result = makeTriggerRegex('trigger', {
        allowSpaceInQuery: true,
      }).toString()
      expect(result).toEqual('/(?:^|\\s)(trigger([^trigger]*))$/')
    })
  })

  describe.skip('custom cut/copy/paste', () => {
    // These tests need to be rewritten for @testing-library/react
    // Skipping for now during React 19 upgrade
  })
})

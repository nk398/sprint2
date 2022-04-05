import React from 'react'
import { render, cleanup,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

describe('App component loads correctly', () => {
    test('renders correctly', () => {
        render(<settings />);
    })
})

test('click', () => {
    render(
      <div>
        <label htmlFor="checkbox">Check</label>
        <input id="checkbox" type="checkbox" />
      </div>,
    )
  
    userEvent.click(screen.getByText('Check'))
    expect(screen.getByLabelText('Check')).toBeChecked()
  })

test('click2', () => {
  render(
    <div>
      <label htmlFor="button">Cancel</label>
      <input id="button" type="button" />
    </div>,
  )

  userEvent.click(scr
                  een.getByText('Cancel'))
})

test('click3', () => {
  render(
    <div>
      <label htmlFor="button">Submit</label>
      <input id="button" type="button" />
    </div>,
  )

  userEvent.click(screen.getByText('Submit'))
})



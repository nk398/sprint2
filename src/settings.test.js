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

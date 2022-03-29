import React from 'react'
//import { screen } from '@testing-library/any-framework';
//import { screen } from '@testing-library/react';
//import { render, fireEvent, cleanup } from '@testing-library/react'
import { render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('App component loads correctly', () => {
  test('renders correctly', () => {
      render(<dash />);
  })
})

test('click', () => {
  render(
    <div>
      <label htmlFor="button">Refresh</label>
      <input id="button" type="button" />
    </div>,
  )

  userEvent.click(screen.getByText('Refresh'))
})

test('click2', () => {
  render(
    <div>
      <label htmlFor="button">Signout</label>
      <input id="button" type="button" />
    </div>,
  )

  userEvent.click(screen.getByText('Signout'))
})

test('click3', () => {
  render(
    <div>
      <label htmlFor="button">Settings</label>
      <input id="button" type="button" />
    </div>,
  )

  userEvent.click(screen.getByText('Settings'))
})

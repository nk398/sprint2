import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { screen } from '@testing-library/any-framework';
import '../public/settings';

afterEach(cleanup)
render(<settings />);
screen.getByText('settings');

test('onsubmit signup', () => {
  const handleSubmit = jest.fn()
 // const { } = render(<login onSubmit={handleSubmit} />)
  fireEvent.change(screen.getByLabelText(/username/i), {target: {value: 'johndoe'}})
  fireEvent.change(screen.getByLabelText(/email/i), {target: {value: 'johndoe@gmail.com'}})
  fireEvent.change(screen.getByLabelText(/password/i), {target: {value: 'password@123'}})

  screen.getByText(/signup/i).click()

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    password: 'password'
  })
})

  

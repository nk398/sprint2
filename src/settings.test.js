import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { screen } from '@testing-library/any-framework';
import '../public/settings';

afterEach(cleanup)
render(<settings />);
screen.getByText('settings');

test('refresh button', () => {
  const { button } = jest.fn()
 // const { } = render(<login onSubmit={handleSubmit} />)

  screen.getByText(/refresh/i).click()

  })

  

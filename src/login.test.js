import React from 'react'
//import { screen } from '@testing-library/any-framework';
//import { screen } from '@testing-library/react';
//import { render, fireEvent, cleanup } from '@testing-library/react'
import { render } from '@testing-library/react';

describe('App component loads correctly', () => {
  test('renders correctly', () => {
      render(<login />);
  })
})

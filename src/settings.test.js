import React from 'react'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('App component loads correctly', () => {
    test('renders correctly', () => {
        render(<settings />);

    })

})

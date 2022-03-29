import { getByText } from '@testing-library/dom'
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import '/public/login.html';

const { fireEvent } = require('@testing-library/react');

let dom
let container

describe('login.html', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  it('renders a input ', () => {
    expect(container.querySelector('email')).not.toBeNull()
    expect(getByText(container, 'Email')).toBeInTheDocument()
  })

  it('renders a input2', () => {
    expect(container.querySelector('password')).not.toBeNull()
    expect(getByText(container, 'password')).toBeInTheDocument()
  })

  it('renders a button1', () => {
    expect(container.querySelector('button')).not.toBeNull()
    expect(getByText(container, 'Login')).toBeInTheDocument()
  })

  it('renders a button2', () => {
    expect(container.querySelector('button2')).not.toBeNull()
    expect(getByText(container, 'SignUp')).toBeInTheDocument()
  })
    
    fireEvent.click(input)
    let generatedParagraphs = container.querySelectorAll('#field email ')
    expect(generatedParagraphs.length).toBe(1)

    fireEvent.click(input2)
    generatedParagraphs = container.querySelectorAll('#field password ')
    expect(generatedParagraphs.length).toBe(2)

    fireEvent.click(button1)
    generatedParagraphs = container.querySelectorAll('#login ')
    expect(generatedParagraphs.length).toBe(3)

    fireEvent.click(button2)
    generatedParagraphs = container.querySelectorAll('#signup ')
    expect(generatedParagraphs.length).toBe(4)

})

import { screen, render } from '@testing-library/react'
import React from 'react'
import SignUpForm from '../src/components/Signup'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from '../src/App';

test("signup inputs", () => {
    render(<SignUpForm />)
    screen.debug()
})

test("Should have header tesxt Sign up", ( ) => {
    const header = screen.getByText('Sign Up')
    expect(header).toHaveTextContent("Sign Up")
});

test("Should add user details", () => {
    const input = screen.getByRole('textBox')
    const submit = screen.getByText("Sign Up")
    userEvent.type(input, "Chidimma")
    userEvent.click(submit)

    const name = screen.getByText("Chidimma")
    expect(name).toBeInTheDocument()
});

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

test("it works", () => {
    expect(true).toBe(true)
})
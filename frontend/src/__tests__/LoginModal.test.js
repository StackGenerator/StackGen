import { render, screen } from '@testing-library/react';
import LoginModal from '../components/LoginModal.jsx';

describe('login modal display', () => {
  test('renders the username input field', () => {
    render(<LoginModal />);
    const usernameInput = screen.getByPlaceholderText(/Username/i);
    expect(usernameInput).toBeInTheDocument();
  });
  test('renders the password input field', () => {
    render(<LoginModal />);
    const passInput = screen.getByPlaceholderText(/Password/i);
    expect(passInput).toBeInTheDocument();
  });
  test('renders the Login button', () => {
    render(<LoginModal />);
    const loginBtn = screen.getByText(/Login/i);
    expect(loginBtn).toBeInTheDocument();
  });
});

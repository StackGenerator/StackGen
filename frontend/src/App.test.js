import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders the start questionnaire button', () => {
  render(<App />);
  const startBtn = screen.getByText(/Start Questionnaire/i);
  expect(startBtn).toBeInTheDocument();
});
test('renders the hero', () => {
  render(<App />);
  const hero1 = screen.getByText(/What's the best/i);
  const gradientElement = screen.getByText(/tech stack/i);
  const hero2 = screen.getByText(/for your application?/i);
  expect(hero1).toBeInTheDocument();
  expect(gradientElement).toBeInTheDocument();
  expect(hero2).toBeInTheDocument();
});

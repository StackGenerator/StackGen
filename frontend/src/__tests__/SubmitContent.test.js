import { render, screen } from '@testing-library/react';
import SubmitContent from '../components/SubmitContent.jsx';

describe('question submission screen', () => {
  test('asks the user to submit the results', () => {
    render(<SubmitContent />);
    const submitPrompt = screen.getByText(/Press Submit to see your results/i);
    expect(submitPrompt).toBeInTheDocument();
  });
  test('renders the thank you message', () => {
    render(<SubmitContent />);
    const thankMsg = screen.getByText(/Thank you for your answers!/i);
    expect(thankMsg).toBeInTheDocument();
  });
});

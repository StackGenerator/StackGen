import { render, screen } from '@testing-library/react';
import FrontendContent from '../components/FrontendContent.jsx';

describe('display of all frontend questions', () => {
  test('renders the first question', () => {
    render(<FrontendContent />);
    const question1 = screen.getByText(
      /Which is more important: flexibility, or comprehensiveness?/i
    );
    expect(question1).toBeInTheDocument();
  });
  test('renders the second question', () => {
    render(<FrontendContent />);
    const question2 = screen.getByText(
      /Do you know or want to learn TypeScript?/i
    );
    expect(question2).toBeInTheDocument();
  });
  test('renders the third question', () => {
    render(<FrontendContent />);
    const question3 = screen.getByText(
      /Which is more important: an easy learning curve or a robust ecosystem?/i
    );
    expect(question3).toBeInTheDocument();
  });
  test('renders the fourth question', () => {
    render(<FrontendContent />);
    const question4 = screen.getByText(
      /How important is performance (speed)?/i
    );
    expect(question4).toBeInTheDocument();
  });
  test('renders the fifth question', () => {
    render(<FrontendContent />);
    const question5 = screen.getByText(
      /Which is more important: current popularity or trajectory?/i
    );
    expect(question5).toBeInTheDocument();
  });
});

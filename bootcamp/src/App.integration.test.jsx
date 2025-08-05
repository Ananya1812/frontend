import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Integration Test', () => {
  test('renders Vite and React logos and increments counter', () => {
    render(<App />);
    // Check logos
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
    expect(screen.getByAltText('React logo')).toBeInTheDocument();
    // Check counter button
    const button = screen.getByRole('button', { name: /count is/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('count is 0');
    // Click and check increment
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  });
});

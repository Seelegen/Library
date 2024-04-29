import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders "Loading" text on homepage', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const loadingText = screen.getByText(/Loading/i);
  expect(loadingText).toBeInTheDocument();
});

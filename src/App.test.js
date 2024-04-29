import { render, screen, waitFor, fireEvent } from '@testing-library/react';
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

test('renders Last Change after loading', async () => {
  render(
    <Router>
      <App />
    </Router>
  );

  await waitFor(() => {
    const loadingText = screen.queryByText(/Loading/i);
    return !loadingText;
  });

  await new Promise(resolve => setTimeout(resolve, 3000));
  const derniersChangementsText = screen.getByText(/Derniers changements/i);
  expect(derniersChangementsText).toBeInTheDocument();
});

test('render book', async () => {
  render(
    <Router>
      <App />
    </Router>
  );
  await new Promise(resolve => setTimeout(resolve, 200));
  const bookButton = screen.getByText(/Livre/i);
  fireEvent.click(bookButton);
  await new Promise(resolve => setTimeout(resolve, 500));

  const clickableLinks = screen.getAllByRole('link', { clickable: true });
  expect(clickableLinks.length).toBeGreaterThan(0);
});

test('render author', async () => {
  render(
    <Router>
      <App />
    </Router>
  );
  await new Promise(resolve => setTimeout(resolve, 200));
  const authorButton = screen.getByText(/Auteur/i);
  fireEvent.click(authorButton);
  await new Promise(resolve => setTimeout(resolve, 500));

  const clickableLinks = screen.getAllByRole('link', { clickable: true });
  expect(clickableLinks.length).toBeGreaterThan(0);
});
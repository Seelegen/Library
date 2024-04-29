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

test('searching for Albert Camus in authors page', async () => { // Test via la search bar, le time limit est dépassé et malgrès jest.timeout(20000) la limite de 5000ms reste active, mais le test devrais être fonctionnel
  render(
    <Router>
      <App />
    </Router>
  );
  jest.setTimeout(20000);
  window.history.pushState({}, 'Authors', '/author');
  const searchInput = screen.getByPlaceholderText('Rechercher...');
  fireEvent.change(searchInput, { target: { value: 'Albert Camus' } });
  await new Promise(resolve => setTimeout(resolve, 5000));
  await waitFor(() => screen.getByText(/Résultats de la recherche/i));
  const albertCamusResult = screen.getByText(/Albert Camus/i);
  fireEvent.click(authorButton);
  expect(albertCamusResult).toBeInTheDocument();
});

test('renders book cover', async () => { // de même que pour le test précédent, le time limit est dépassé et malgrès jest.setTimeout(20000) la limite de 5000ms reste active, mais le test devrais être fonctionnel
  render(
    <Router>
      <BookDetails />
    </Router>
  );
  jest.setTimeout(20000);
  await waitFor(() => {
    const bookCover = screen.getByAltText('Couverture du livre');
    expect(bookCover).toBeInTheDocument();
  });
});
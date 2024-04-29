import { render, screen, waitFor } from '@testing-library/react';
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

test('renders "Derniers changements" text after loading', async () => {
  render(
    <Router>
      <App />
    </Router>
  );

  await waitFor(() => {
    const loadingText = screen.queryByText(/Loading/i);
    return !loadingText;
  });

  // Attendre 3 secondes
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Vérifier si le texte "Derniers changements" est affiché après l'attente de 3 secondes
  const derniersChangementsText = screen.getByText(/Derniers changements/i);
  expect(derniersChangementsText).toBeInTheDocument();
});
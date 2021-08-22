import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('Checks if "Home" link contains the text "Home"', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  expect(screen.getByTestId('navbar-mansions')).toHaveTextContent('Mansions');
});

test('Checks if "Mansions" link contains the text "Mansions"', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  expect(screen.getByTestId('navbar-mansions')).toHaveTextContent('Mansions');
});

test('Checks if "Appointments" link contains the text "Appointments"', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  expect(screen.getByTestId('navbar-appointments')).toHaveTextContent('Appointments');
});

test('Checks if "Agents" link contains the text "Agents"', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  expect(screen.getByTestId('navbar-agents')).toHaveTextContent('Agents');
});

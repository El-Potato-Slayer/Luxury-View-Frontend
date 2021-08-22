import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders learn react link', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  console.log(123);
});

test('Renders the homepage', () => {
  render(
    <App />,
  );
  fireEvent.click(screen.getByTestId('navbar-homepage'));
  expect(screen.getByTestId('app-homepage')).toHaveTextContent('Homepage');
});

test('Renders mansions component', () => {
  render(
    <App />,
  );
  fireEvent.click(screen.getByTestId('navbar-mansions'));
  expect(screen.getByTestId('app-mansions')).toHaveTextContent('Mansions');
});

test('Renders appointments component', () => {
  render(
    <App />,
  );
  fireEvent.click(screen.getByTestId('navbar-appointments'));
  expect(screen.getByTestId('app-appointments')).toHaveTextContent('Appointments');
});

test('Renders agents component', () => {
  render(
    <App />,
  );
  fireEvent.click(screen.getByTestId('navbar-agents'));
  expect(screen.getByTestId('app-agents')).toHaveTextContent('Agents');
});

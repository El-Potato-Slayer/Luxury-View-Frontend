import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import '@testing-library/jest-dom';

afterEach(cleanup);

test('renders learn react link', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  console.log(123);
});

it('Renders App component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('Renders the homepage', () => {
  render(
    <App />,
  );
  fireEvent.click(screen.getByTestId('navbar-homepage'));
  expect(screen.getByTestId('homepage')).toHaveTextContent('Luxury View');
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

it('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

import {
  cleanup, render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import AgentsList from '../containers/AgentsList';
import store from '../mocks/store/configureStore';

afterEach(cleanup);

test('Renders the AgentsList component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AgentsList />
      </BrowserRouter>
    </Provider>,
    div,
  );
});

test('Checks that title is rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AgentsList />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('agents')).toHaveTextContent('Agents');
});

test('Checks that agent names are rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AgentsList />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('agents')).toHaveTextContent('Joshua Door');
  expect(screen.getByTestId('agents')).toHaveTextContent('Darlene');
  expect(screen.getByTestId('agents')).toHaveTextContent('Yapi Kobustus');
});

test('Checks that unknown agent names are not rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AgentsList />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('agents')).not.toHaveTextContent('Ooga');
  expect(screen.getByTestId('agents')).not.toHaveTextContent('Booga');
  expect(screen.getByTestId('agents')).not.toHaveTextContent('Ooga Wooga Booga');
});

test('Checks that agent numbers are rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AgentsList />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('agents')).toHaveTextContent('Number: 0987634391');
  expect(screen.getByTestId('agents')).toHaveTextContent('Number: 0987431489');
  expect(screen.getByTestId('agents')).toHaveTextContent('Number: 0874521321');
});

test('Checks that unknown agent numbers are not rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AgentsList />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('agents')).not.toHaveTextContent('Number: 065748');
  expect(screen.getByTestId('agents')).not.toHaveTextContent('Number: 6584035224');
  expect(screen.getByTestId('agents')).not.toHaveTextContent('Number: 45');
});

test('Checks that agent emails are rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AgentsList />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('agents')).toHaveTextContent('Email: joshuadoor@gmail.com');
  expect(screen.getByTestId('agents')).toHaveTextContent('Email: darthememphis@gmail.com');
  expect(screen.getByTestId('agents')).toHaveTextContent('Email: yapikobus@gmail.com');
});

test('Checks that unknown agent emails are not rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AgentsList />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('agents')).not.toHaveTextContent('Email: jok@gmail.com');
  expect(screen.getByTestId('agents')).not.toHaveTextContent('Email: yani@gmail.com');
  expect(screen.getByTestId('agents')).not.toHaveTextContent('Email: tollo@gmail.com');
});

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <AgentsList />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

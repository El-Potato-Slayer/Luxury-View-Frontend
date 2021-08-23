import {
  cleanup, render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import AgentsList from '../containers/AgentsList';
import store from '../store/configureStore';

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

test('Checks if title is rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AgentsList />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('agents')).toHaveTextContent('Agents');
});

// it('matches snapshot', () => {
//   const tree = renderer.create(
//     <BrowserRouter>
//       <Home />
//       ,
//     </BrowserRouter>,
//   ).toJSON();
//   expect(tree).toMatchSnapshot();
// });

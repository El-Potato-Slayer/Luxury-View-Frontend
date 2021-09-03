import {
  cleanup, render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import store from '../mocks/store/configureStore';
import App from '../App';

afterEach(cleanup);

test('Renders the Home component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </App>
    </Provider>, div,
  );
});

test('Checks if title is rendered', () => {
  render(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </App>
    </Provider>,
  );
  expect(screen.getByTestId('homepage')).toHaveTextContent("The World'sLuxury Marketplace");
});

describe('Newest Section', () => {
  test('Checks if Newest section is rendered', () => {
    render(
      <Provider store={store}>
        <App>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </App>
      </Provider>,
    );
    expect(screen.getByTestId('homepage-newest')).toHaveTextContent('Newest');
  });

  test('Checks that mansion names are rendered', () => {
    render(
      <Provider store={store}>
        <App>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </App>
      </Provider>,
    );
    expect(screen.getByTestId('homepage-newest')).toHaveTextContent('Suganti Vapi');
    expect(screen.getByTestId('homepage-newest')).toHaveTextContent('6 Bed Mansion');
    expect(screen.getByTestId('homepage-newest')).toHaveTextContent('Videa Casale');
    expect(screen.getByTestId('homepage-newest')).toHaveTextContent('Modern Trophy Estate');
  });

  test('Checks that unknown mansion names are not rendered', () => {
    render(
      <Provider store={store}>
        <App>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </App>
      </Provider>,
    );
    expect(screen.getByTestId('homepage-newest')).not.toHaveTextContent('Ooga');
    expect(screen.getByTestId('homepage-newest')).not.toHaveTextContent('Booga');
  });

  test('Checks that mansion prices are rendered', () => {
    render(
      <Provider store={store}>
        <App>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </App>
      </Provider>,
    );
    expect(screen.getByTestId('homepage-newest')).toHaveTextContent('$35,000,000');
    expect(screen.getByTestId('homepage-newest')).toHaveTextContent('$100,000,000');
    expect(screen.getByTestId('homepage-newest')).toHaveTextContent('$26,000,000');
    expect(screen.getByTestId('homepage-newest')).toHaveTextContent('$2,500,000');
  });

  test('Checks that unknown mansion prices are not rendered', () => {
    render(
      <Provider store={store}>
        <App>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </App>
      </Provider>,
    );
    expect(screen.getByTestId('homepage-newest')).not.toHaveTextContent('$42');
    expect(screen.getByTestId('homepage-newest')).not.toHaveTextContent('$1.78');
    expect(screen.getByTestId('homepage-newest')).not.toHaveTextContent('$547');
    expect(screen.getByTestId('homepage-newest')).not.toHaveTextContent('$425');
  });

  test('Checks if mansion prices are not rendered without comma in Newest section', () => {
    render(
      <Provider store={store}>
        <App>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </App>
      </Provider>,
    );
    expect(screen.getByTestId('homepage-newest')).not.toHaveTextContent('$35000000');
    expect(screen.getByTestId('homepage-newest')).not.toHaveTextContent('$100000000');
    expect(screen.getByTestId('homepage-newest')).not.toHaveTextContent('$26000000');
    expect(screen.getByTestId('homepage-newest')).not.toHaveTextContent('$2500000');
  });
});

describe('Soon To Come section', () => {
  test('Checks if Soon To Come section is rendered', () => {
    render(
      <Provider store={store}>
        <App>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </App>
      </Provider>,
    );
    expect(screen.getByTestId('homepage-soon')).toHaveTextContent('Soon');
  });

  test('Checks that card titles are rendered', () => {
    render(
      <Provider store={store}>
        <App>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </App>
      </Provider>,
    );
    expect(screen.getByTestId('homepage-soon')).toHaveTextContent('Cars');
    expect(screen.getByTestId('homepage-soon')).toHaveTextContent('Yachts');
    expect(screen.getByTestId('homepage-soon')).toHaveTextContent('Jets');
    expect(screen.getByTestId('homepage-soon')).toHaveTextContent('Helicopters');
  });

  test('Checks that unknown card titles are not rendered', () => {
    render(
      <Provider store={store}>
        <App>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </App>
      </Provider>,
    );
    expect(screen.getByTestId('homepage-soon')).not.toHaveTextContent('Ooga');
    expect(screen.getByTestId('homepage-soon')).not.toHaveTextContent('Booga');
  });
});

describe('As Seen In section', () => {
  test('Checks if As Seen In section is rendered', () => {
    render(
      <Provider store={store}>
        <App>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </App>
      </Provider>,
    );
    expect(screen.getByTestId('homepage-seen')).toHaveTextContent('As seen in');
  });

  test('Checks that images are rendered', () => {
    render(
      <Provider store={store}>
        <App>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </App>
      </Provider>,
    );
    expect(screen.getByAltText('huffpost-logo')).toBeInTheDocument();
    expect(screen.getByAltText('business-insider-logo')).toBeInTheDocument();
    expect(screen.getByAltText('bloomberg-logo')).toBeInTheDocument();
    expect(screen.getByAltText('cnbc-logo')).toBeInTheDocument();
    expect(screen.getByAltText('bbc-logo')).toBeInTheDocument();
    expect(screen.getByAltText('financial-times-logo')).toBeInTheDocument();
  });
});

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </App>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

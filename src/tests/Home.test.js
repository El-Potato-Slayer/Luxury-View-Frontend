import {
  cleanup, render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Home from '../components/Home';

afterEach(cleanup);

test('Renders the Home component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});

test('Checks if title is rendered', () => {
  render(
    <BrowserRouter>
      <Home />
      ,
    </BrowserRouter>,
  );
  expect(screen.getByTestId('homepage')).toHaveTextContent('Luxury View');
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

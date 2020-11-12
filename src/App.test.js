import { render, screen, cleanup  } from './test-utils'
import App from './App';

afterEach(cleanup);

test('renders app title', () => {
  render(<App />);

  expect(screen.getByText(/Mortgage Rate Quotes/)).toBeInTheDocument();
});

test('it matches snapshot', () => {
  const tree = render(<App />);

  expect(tree).toMatchSnapshot();
})

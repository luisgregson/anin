import preact from 'preact';
import Header from '../src/components/header/index';
import render from 'preact-render-to-json';

test('Renders correctly', () => {
  const props = {
    title: 'Test page',
    slugs: ['', 'another-page']
  };
  const header = render(<Header {...props} />);

  expect(header).toMatchSnapshot();
});


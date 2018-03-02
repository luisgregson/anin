import { h } from 'preact';
import Header from '../src/components/header/index';
import { shallow } from 'preact-render-spy';

describe('slugs are used to form display text for Links', () => {
  const props = {
    title: 'Test!!',
    slugs: ['', 'another-page']
  };
  const actual = shallow(<Header {...props}  />);

  test(`empty string slug should be displayed as 'Home'`, () => {
    const firstLinkText = actual.find('Link').at(0).childAt(0).text();
    expect(firstLinkText).toBe('Home');
  });

  test('multi-word slugs should be converted into CamelCase words with spaces between', () => {
    const secondLinkText = actual.find('Link').at(1).childAt(0).text();
    expect(secondLinkText).toBe('Another Page');
  });
});

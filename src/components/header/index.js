import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import PropTypes from 'prop-types';
import style from './style';
import { flow, join, map, upperFirst, words } from 'lodash/fp';
import { mapWithIndex } from 'services/compositions.js';

const upperFirstSpacedWords = flow(words, map(upperFirst), join(' '));

export default class Header extends Component {
  links = mapWithIndex(
    (slug, index) => (
      <Link key={`${index}${slug}`}
        activeClassName={style.active}
        children={slug === '' ? 'Home' : upperFirstSpacedWords(slug)}
        href={`/${slug}`}
      />
    ),
    this.props.slugs
  );

  children = []

  render() {
    return (
      <header class={style.header}>
        <div class={style.logo}>
          <h1 class="sr-only">A Night In November</h1>
          <img src="assets/logo.png" />
        </div>
        <nav>
          {this.links}
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  slugs: PropTypes.arrayOf(PropTypes.string)
};

Header.defaultProps = {
  links: []
};

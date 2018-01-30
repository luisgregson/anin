import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import PropTypes from 'prop-types';
import style from './style';
import { map, upperFirst, words } from 'lodash';

export default class Header extends Component {
  linkList = this.props.links.map((link, index) =>
    (
      <Link key={index} activeClassName={style.active} href={`/${link}`}>
        {map(words(link), upperFirst)}
      </Link>
    )
  );

  render() {
    return (
      <header class={style.header}>
        <h1>A Night In November</h1>
        <nav>
          <Link activeClassName={style.active} href="/">Home</Link>
          {this.linkList}
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string)
};

Header.defaultProps = {
  links: []
};

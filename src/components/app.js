import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import About from '../routes/about';
import Gigs from '../routes/gigs';
import Contact from '../routes/contact';

export default class App extends Component {
  links = [ 'about', 'gigs', 'contact', 'test'];

  /** Gets fired when the route changes.
  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
  *	@param {string} event.url	The newly routed URL
  */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header links={this.links} />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <About path="/about" />
          <Gigs path="/gigs" />
          <Contact path="/contact" />
        </Router>
      </div>
    );
  }
}

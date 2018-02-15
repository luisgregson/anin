const path = require('path');

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 **/
export default config => {
  // add root folders for webpack to recurse when importing
  config.resolve.modules = [
    ...config.resolve.modules,
    './'
  ];
}

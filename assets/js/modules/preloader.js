/**
 * Preloader
 */

'use strict';

module.exports = function() {
  var loading = document.querySelector('body.is-loading');

  if (loading) {
    setTimeout(function() { loading.classList.remove('is-loading'); loading.classList.add('is-loaded'); }, 4000);
  }

};

/**
 * SVG image load handlers
 */

'use strict';

module.exports = function() {
  var image = document.querySelector('.js-image-load');

  if (!image) { return; }

  if (image.hasAttribute('data-target')) {
    var img = new Image();
    var target = document.querySelector(image.getAttribute('data-target'));
    var imgSrc = image.getAttribute('xlink:href');

    img.src = imgSrc;

    img.onload = function () {
      target.classList.add('src-image-loaded');
    };

  } else {
    image.onload = function () {
      this.classList.add('is-loaded');
    };
  }
};

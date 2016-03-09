/**
 * SVG image load handlers
 */

'use strict';

module.exports = function() {
  var image = document.querySelector('.js-image-load');

  if (!image) { return; }

  var img = new Image();
  var target = document.querySelector(image.getAttribute('data-target'));
  var imgSrc = image.getAttribute('xlink:href');

  // console.log(target);

  img.src = imgSrc;

  img.onload = function () {
    target.classList.add('src-image-loaded');
  };
};

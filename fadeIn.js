/**
 * Effects: fadeIn()
 */

(function ($) {
  // jQuery
  $(el).fadeIn();

  // Vanilla JS
  function fadeIn(el) {
    el.style.opacity = 0;

    var last = new Date();
    var tick = function () {
      el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
      last = +new Date();

      if (+el.style.opacity < 1) {
        // Window.requestAnimationFrame() method tells the browser that you wish to perform an animation and
        // requests that the browser call a specified function to update an animation before the next repaint.
        // The method takes as an argument a callback to be invoked before the repaint.

        // setTimeout to 16ms - since that is the time interval between each frame refresh.
        (window.requestAnimationFrame && window.requestAnimationFrame(tick) || setTimeout(tick, 16))
      }
    };

    tick();
  }

  fadeIn(el);

})(jQuery);
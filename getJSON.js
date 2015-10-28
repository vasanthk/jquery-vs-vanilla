/**
 * Get JSON
 *
 * Support: IE9+
 */

(function ($) {
  // jQuery
  $.getJSON('url/path', function (data) {
    // Code to handle data
  });

  // Vanilla JS
  var request = new XMLHttpRequest();
  // Signature open(method, url, async)
  request.open('GET', 'url/path', true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      // Success
      var data = JSON.parse(request.responseText);
    } else {
      console.log('We reached our target server, but it returned an error.');
    }
  };

  request.onerror = function () {
    // There was a connection error of some sort.
  };

  request.send();
})(jQuery);
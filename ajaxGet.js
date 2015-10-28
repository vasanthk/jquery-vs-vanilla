/**
 * Get request using AJAX
 */

(function ($) {
  // jQuery
  $.ajax({
    type: 'GET',
    url: '/my/url',
    success: function (resp) {

    },
    error: function () {

    }
  });

  // Vanilla JS
  var request = new XMLHttpRequest();
  request.open('GET', '/my/url', true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var resp = request.responseText;
    } else {
      console.log('We reached our target server, but it returned an error');
    }
  };

  request.onerror = function () {
    // This was a connection error of some sort.
  };

  request.send();

})(jQuery);
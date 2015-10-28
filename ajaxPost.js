/**
 * POST with AJAX
 *
 * Support: IE8+
 */

(function ($) {
  var data = {sample: 'data'};

  // jQuery
  $.ajax({
    type: 'POST',
    url: '/my/url',
    data: data
  });

  // Vanilla JS
  var request = new XMLHttpRequest();
  request.open('POST', '/my/url', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(data);

})(jQuery);
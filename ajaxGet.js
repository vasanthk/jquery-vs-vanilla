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

})(jQuery);
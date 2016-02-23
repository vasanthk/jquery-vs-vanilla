/**
 * AJAX
 *
 * @Reference:
 * http://blog.mediumequalsmessage.com/promise-deferred-objects-in-javascript-pt1-theory-and-semantics
 */

// Vanilla JS
var ajax = new XMLHttpRequest();
ajax.open('GET', url);
ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
ajax.responseType = 'json';
ajax.send();

ajax.onload = function (e) {
  var response = e.target.response;
  console.log(response);
};

// jQuery
$.ajax({
    url: url
  })
  .done(function (res) {
    // No need for JSON.parse()
    console.log(res);
  })
  .fail(function (err) {
    console.log('Error: ', err.status);
  });

// jQuery $.getJSON()
$.getJSON(url)
  .done(function (data) {
    console.log(data);
  })
  .fail(function (err) {
    console.log('Error: ', err.status);
  });

// MULTIPLE AJAX

// jQuery parallel
var results = {};
var requests = 0;

var urls = ['values/1', "values/2", "values/3"];

urls.forEach(function (url) {
  $.getJSON(url, function (data) {
    results[url] = data.value;
    requests++;

    if (requests === urls.length) {
      // On complete
      console.log('All AJAX queries are done');
    }
  })
});

// jQuery serial
$(function () {
  //setup an array of AJAX options, each object is an index that will specify information for a single AJAX request
  var ajaxes = [{url: '<url>', dataType: 'json'}, {url: '<url2>', dataType: 'xml'}],
    current = 0;

  //declare your function to run AJAX requests
  function do_ajax() {
    //check to make sure there are more requests to make
    if (current < ajaxes.length) {
      //make the AJAX request with the given data from the `ajaxes` array of objects
      $.ajax({
        url: ajaxes[current].url,
        dataType: ajaxes[current].dataType,
        success: function (serverResponse) {
          // ...
          // increment the `current` counter and recursively call this function again
          current++;
          do_ajax();
        }
      });
    }
  }

  //run the AJAX function for the first time once `document.ready` fires
  do_ajax();
});

// Using jQuery.when (deferreds)
$.when($.ajax("/req1"), $.ajax("/req2"), $.ajax("/req3")).then(function (resp1, resp2, resp3) {
  // plot graph using data from resp1, resp2 & resp3
});


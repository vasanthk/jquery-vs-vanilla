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

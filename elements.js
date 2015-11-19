/**
 * Manipulating DOM
 */

// ADD CLASS
(function ($) {
  // jQuery
  $(el).addClass(className);

  // Vanilla JS
  if (el.classList) {
    el.classList.addClass(className);
  } else {
    el.className += ' ' + className;
  }

})(jQuery);

// AFTER
(function ($) {
  // jQuery
  $(el).after(htmlString);

  // Vanilla JS
  el.insertAdjacentHTML('afterend', htmlString);
})(jQuery);

// APPEND
(function ($) {
  // jQuery
  $(parent).append(el);

  // Vanilla JS
  parent.appendChild(el);
})(jQuery);

// BEFORE
(function ($) {
  // jQuery
  $(el).before(htmlString);

  // Vanilla JS
  el.insertAdjacentHTML('beforebegin', htmlString);
})(jQuery);

// CHILDREN
(function ($) {
  // jQuery
  $(el).children();

  // Vanilla JS
  el.children;
})(jQuery);

// CLONE
(function ($) {
  // jQuery
  $(el).clone();

  // Vanilla JS
  el.cloneNode(true);
})(jQuery);

// CONTAINS
(function ($) {
  // jQuery
  $.contains(el, child);

  // Vanilla JS
  el !== child && el.contains(child);
})(jQuery);

// CONTAINS SELECTOR
(function ($) {
  // jQuery
  $(el).find(selector).length;

  // Vanilla JS
  el.querySelector(selector) !== null;
})(jQuery);

// EACH
(function ($) {
  // jQuery
  $(selector).each(function (i, el) {

  });

  // Vanilla JS
  var elements = document.querySelectorAll(selector);
  Array.prototype.forEach.call(elements, function (el, i) {

  });
})(jQuery);

// EMPTY
(function ($) {
  // jQuery
  $(el).empty();

  // Vanilla JS
  el.innerHTML = '';
})(jQuery);

// FILTER
(function ($) {
  // jQuery
  $(selector).filter(filterFn);

  // Vanilla JS
  Array.prototype.call(document.querySelectorAll(selector), filterFn);
})(jQuery);

// FIND CHILDREN
(function ($) {
  // jQuery
  $(el).find(selector);

  // Vanilla JS
  el.querySelectorAll(selector);
})(jQuery);

// FIND ELEMENTS
(function ($) {
  // jQuery
  $('.my #awesome-selector');

  // Vanilla JS
  document.querySelectorAll('.my #awesome-selector');
})(jQuery);

// GET ATTRIBUTES
(function ($) {
  // jQuery
  $(el).attr('tabindex');

  // Vanilla JS
  el.getAttribute('tabindex');
})(jQuery);

// GET HTML
(function ($) {
  // jQuery
  $(el).html();

  // Vanilla JS
  el.innerHTML;
})(jQuery);

// GET OUTER HTML
(function ($) {
  // jQuery
  $('selector')[0].outerHTML;

  // Vanilla JS
  el.outerHTML;
})(jQuery);

// GET STYLE
(function ($) {
  // jQuery
  $(el).css(ruleName);

  // Vanilla JS
  getComputedStyle(el)[ruleName];
})(jQuery);

// GET TEXT
(function ($) {
  // jQuery
  $(el).text();

  // Vanilla JS
  el.textContent;
})(jQuery);

// HAS CLASS
(function ($) {
  // jQuery
  $(el).hasClass(className);

  // Vanilla JS
  if (el.classList) {
    el.classList.contains(className);
  }
  else {
    new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
})(jQuery);

// MATCHES
(function ($) {
  // jQuery
  $(el).is($(otherEl));

  // Vanilla JS
  el === otherEl;
})(jQuery);

// MATCHES SELECTOR
(function ($) {
  // jQuery
  $(el).is('.my-class');

  // Vanilla JS
  var matches = function(el, selector) {
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
  };
  matches(el, '.my-class');

})(jQuery);

// NEXT
(function ($) {
  // jQuery
  $(el).next();

  // Vanilla JS
  el.nextElementSibling;
})(jQuery);

// OFFSET
(function ($) {
  // jQuery
  $(el).offset();

  // Vanilla JS
  var rect = el.getBoundingClientRect();
  var offset = {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
})(jQuery);

// OFFSET PARENT
(function ($) {
  // jQuery
  $(el).offsetParent();

  // Vanilla JS
  el.offsetHeight || el;
})(jQuery);

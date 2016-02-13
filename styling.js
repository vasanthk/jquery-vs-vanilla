/**
 * Styling using Vanilla JS
 *
 * @Reference:
 * http://javascript.info/tutorial/view-and-position
 */

// className
document.body.className += ' class3';

// style
document.body.style.backgroundColor = prompt('background color?', 'green');

// cssText
// style.cssText is the only way to add !important.
var div = document.body.children[0];
div.style.cssText = 'color: red !important; \
    background-color: yellow; \
    width: 100px; \
    text-align: center; \
    blabla: 5; \
  ';
// blabla is ignored
alert(div.style.cssText);

// Reading the style
// Note: The style gives access only to properties set through it, or with "style" attribute.
//  <style>
//    body { margin: 10px }
//  </style>
//  <body>
//  <script>
//    alert(document.body.style.marginTop)  // Will not return anything.
//  </script>
//  </body>

// getComputedStyle
// The syntax is: getComputedStyle(element, pseudo)
// element - The element to get a styling for
// pseudo - A pseudo-selector like ‘hover’ or null if not needed.
var computedStyle = getComputedStyle(document.body, null);
alert(computedStyle.marginTop);

// CSS Box Model

// clientWidth/Height
// Size of the client area: content area with paddings, but without scrollbars.

// scrollWidth/Height
// Content area width and height including the scrolled out part.
// scrollWidth/Height is same as clientWidth/Height, but includes full scrollable area.
element.style.height = element.scrollHeight + 'px';

// scrollTop/scrollLeft
// Size of scrolled out part: vertical and horizontal. The value is always in pixels.
// scrollLeft/scrollTop are writeable
// Unlike other properties, which are read-only, you can change scrollLeft/scrollTop, and the browser scrolls the element.
// In standards mode, the scroll of the document is in document.documentElement.
// The following code scrolls the document 10px down:
document.documentElement.scrollTop += 10;

//offsetWidth/Height
//Outer box width/height, full size with borders, but without margins.

//clientTop/Left
//The indent of client area from box outer corner. In other words, the width of top/left border in pixels.

//offsetParent, offsetLeft/Top
//Properties offsetLeft and offsetTop reflect a relative shift of an element from its offsetParent.
//The offsetParent is the parent element in the sense of layout. For example, if an element is positioned absolutely, the offsetParent is not it’s DOM parent, but a nearest positioned element (or BODY).
// We could use this to check if an elem is hidden:
function isHidden(elem) {
  return !elem.offsetWidth && !elem.offsetHeight;
}
// SUMMARY
// Link: http://javascript.info/files/tutorial/browser/dom/metricSummary.png
//
//clientWidth/clientHeight - width/height of the visible in-border area (can be called a client area. The client area includes padding and doesn’t include scrollbars.
//clientLeft/clientTop - left/top border width or, more generally, a shift of the client area from the top-left corner of the box.
//scrollWidth/scrollHeight - width/height of the scrollable in-border area. Includes padding. Doesn’t include scrollbars.
//scrollLeft/scrollTop - the width/height of the scrolled out part of the document, starting from the top-left corner.
//offsetWidth/offsetHeight - the “outer” width/height of the box as seen from outside, excluding margins.
//offsetParent - the nearest table-cell, body for static positioning or the nearest positioned element for other positioning types.
//offsetLeft/offsetTop - the position in pixels of top-left corner of the box related to it’s offsetParent.

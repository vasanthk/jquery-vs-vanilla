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


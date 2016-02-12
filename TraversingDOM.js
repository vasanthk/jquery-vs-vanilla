/**
 * Traversing DOM Elements
 *
 * @Reference:
 * http://javascript.info/tutorial/traversing-dom
 */

// Root element
console.log(document.documentElement);

// In the world of DOM, an “element not found” or “no such element” is always null.
// It is impossible to reference elements that are not yet rendered at the time of script execution.
// For eg. if you access documnt.body in <head> -- it returns null, since the <body> is not yet loaded.

// Child Elements

// childNodes
// All child nodes are referenced including whitespace ones.
console.log(document.body.childNodes);

// children
// Sometimes we need to browse only element nodes, skipping text nodes. That’s what the children property is for.
// It contains all element nodes.
console.log(document.body.children);

// firstChild and lastChild - Similar to childNodes, it includes text nodes.
// For excluding text nodes, use firstElementChild and lastElementChild
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

// parentNode, previousSibling and nextSibling
// For excluding text nodes, use previousElementSibling and nextElementSibling
console.log(document.body.parentNode);
console.log(document.body.previousElementSibling);
console.log(document.body.nextElementSibling);
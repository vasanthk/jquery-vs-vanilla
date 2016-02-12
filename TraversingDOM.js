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

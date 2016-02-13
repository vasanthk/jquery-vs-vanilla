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

// Structure and content properties

// nodeType
// The most important ones are ELEMENT_NODE with number 1 and TEXT_NODE, which has number 3.
var childNodes = document.body.childNodes;
console.log(childNodes[0].nodeType != 1);

// nodeName, tagName
// Both nodeName and tagName contain the name of an element node.
// In HTML any nodeName is uppercased, no matter which case you use in the document.
// For element nodes, nodeName and tagName are the same.
// But nodeName property also exists on non-element nodes. eg. alert(document.nodeName) // #document
console.log(document.body.tagName); // BODY

// innerHTML
// It allows to access node contents in the text form. innerHTML works only for element nodes.
// Gotcha: `innerHTML` can't be appended
// Syntactically, is possible to append to innerHTML with elem.innerHTML += "New text", like below:
// But what actually is done:
// 1) Old content is wiped
// 2) The new value innerHTML is parsed and inserted.
document.body.innerHTML += "<div>Hi <img src='smile.gif'/> !</div>"
document.body.innerHTML += "How you doing?";

// nodeValue
// The innerHTML works only for element nodes. For other types of nodes, there is a nodeValue property, which keeps the content.
// eg. text nodes and comments
document.body.childNodes[i].nodeValue = 'Test';

// Properties

// DOM node is an object. So it can store custom properties and methods just like any JavaScript object.
// Custom DOM properties:
// 1) May have any value.Property names case-sensitive
// 2) Don’t affect HTML
// 3) Also, custom properties show up in for..in mixed with native properties:
document.body.sayHi = function () {
  alert(this.nodeName);
};
document.body.sayHi();  // BODY

document.body.custom = 5;
var list = [];
for (var key in document.body) {
  list.push(key);
}
alert(list.join('\n'));

// Attributes

// DOM nodes provide access to HTML attributes using the following standard methods:
// elem.hasAttribute(name) - checks if the attribute exists
// elem.getAttribute(name) - gets an attribute value
// elem.setAttribute(name, value) - sets an attribute
// elem.removeAttribute(name) - removes an attribute
//
// In contrast with properties, attributes:
// 1) May be only strings.
// 2) Names not case-sensitive, because HTML attributes are not case-sensitive
// 3) They show up in innerHTML (unless it’s older IE)
// 4) You can list all attributes using an array-like attributes property of the element.
var div = document.body.children[0];
alert(div.getAttribute('ABOUT')); // case insensitive
div.setAttribute('Test', 123);
alert(document.body.innerHTML);

// Properties and attributes synchronization.

// Every type of DOM nodes has standard properties.
// Standard DOM properties are synchronized with attributes.

// id
document.body.setAttribute('id', 'la-la-la');
alert(document.body.id); // la-la-la

// href
var a = document.body.children[0];
a.href = '/';
alert('attribute:' + a.getAttribute('href')); // '/'
alert('property:' + a.href);  // IE: '/', others: full URL

// Gotcha: There are other attributes, which are synced, but not copied. For example input.checked:
// The value of input.checked property is either true or false, but the attribute has whatever you put into it.
var input = document.body.children[0];
alert(input.checked); // true
alert(input.getAttribute('checked')); // empty string

// value
// There are also built-in properties which are synced one-way only.
// For example, the input.value is synchronized from the attribute:
var input = document.body.children[0];
input.setAttribute('value', 'new');
alert(input.value); // 'new', input.value changed

// The "value" attribute keeps the original value after the property was updated,
// for example when a visitor typed in something. The original value can be used to check if the input is changed, or to reset it.
var input = document.body.children[0];
input.value = 'new';
alert(input.getAttribute('value')); // 'markup', not changed!

// class/className
// Because "class" is a reserved word in JavaScript, the name of the corresponding property for the "class" attribute is className.
// To avoid IE quirks, just always use className property to manage classes, not the attribute.
document.body.setAttribute('class', 'big red bloom');
alert(document.body.className);  // big red bloom

// To live well with any IE, use attributes correctly.
// Or, in other words, try using properties all the time, until you really need an attribute.
//
// And the only times you really need an attribute are:
// 1) To get a custom HTML attribute, because it is not synced to DOM property.
// 2) To get an “original value” of the standard HTML attribute, like <INPUT value="...">.

// Attributes as DOM nodes
// In attributes collection, every attribute is represented by a special kind of DOM node. It has name, value and other properties.
var span = document.body.children[0];
alert(span.attributes['style'].value);  // "color:blue;"
alert(span.attributes['id'].value);  // "my"


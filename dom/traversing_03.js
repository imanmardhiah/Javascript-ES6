//traversing the document object model
//how to move around(select) parent and child elements

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = list;
val = listItem;

//get child node
//provide us a node list of all child
//text nodes are the line breaks
//in most cases we need element child node

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeType;

// Type of Node
// 1 - Element
// 2 - Attribute
// 3 - Text Node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

//how to get children element nodes
//it return html collection so we can treat it like an array
//except using loops and methods
//it should convert to an array to loop through and use methods

val = list.children;
val = list.children[0];
val = list.children[0].textContent='boom';

//how to get access to the children of children
val = list.children[3].children[0].id='test-link';

//first child
val =  list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;

//count child
val = list.childElementCount;

//get parent node
val = listItem.parentNode; //ul is a single element
val = listItem.parentElement.parentElement;

//get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;

//get previous siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);


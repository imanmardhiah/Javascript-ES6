//Replace

//create new element
const newHeading = document.createElement('h2');

//add id
newHeading.id='new-head';

//new text node
newHeading.appendChild(document.createTextNode('task list'));

//get old heading
const oldHeading = document.getElementById('task-title');

//parent
const cardAction = document.querySelector('.card-action');

//replace method
cardAction.replaceChild(newHeading,oldHeading);

//remove elements
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove the list item
lis[0].remove();

//remove child element
list.removeChild(lis[2]);

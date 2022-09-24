//selectors are DOM (Document Object Model)
//Methods that allow access to properties and elements
//single selectors are able to select 1 element only

//document.getElementById()
//select the single element by its id

//you can select an element and store it in a variable
const heading = document.getElementById('task-title');

//you can access the info about the element
let val = heading.id;

//change the style
heading.style.background="green";
heading.style.color="#fff";
heading.style.padding="5px";
//heading.style.display="none";
//all the elements are in a form of string

//change the content
heading.textContent='Task list';
heading.innerText="My Tasks";
heading.innerHTML='<span style="color:pink">Task</span>';

//document.querySelector() select an element with their id/class/html tag
console.log(document.querySelector('#task-title')); //id
console.log(document.querySelector('.card-title'));//class
console.log(document.querySelector('h5'));//html tag

document.querySelector('li').style.color='red'; //implemented to the first one on the list
document.querySelector('ul li').style.color='blue'; 
//implemented to the first one on the list and not all of them

//css pseudo selectors will help you to select any single elements you want
document.querySelector('li:last-child').style.color='pink';
document.querySelector('li:nth-child(3)').style.color='green';
document.querySelector('li:nth-child(4)').textContent='hello';
document.querySelector('li:nth-child(odd)').style.background='#ccc';
document.querySelector('li:nth-child(even)').style.background='aqua';

console.log(val);


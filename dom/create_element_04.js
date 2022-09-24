//we can construct the element from the scratch in js
//create element
const li = document.createElement('li');

//add class
li.className ='collection-item';

//add id 
li.id = 'new-item';

//create a text note and append it
li.appendChild(document.createTextNode('new item'));

//create link
const link = document.createElement('a');

//add class
link.className='delete-item secondary-content';

//add html icon
link.innerHTML='<i class="fa fa-remove"></i>';

//append the link into the li
li.appendChild(link);

//append the li as the child of the ul
document.querySelector('ul').appendChild(link);


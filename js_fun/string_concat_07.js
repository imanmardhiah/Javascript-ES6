const firstName = 'Polly';
const lastName = 'Pocket';
const age = 30;
const test = 'Hello from Javascript';
const course = 'web development,web design,cloud';

let val;

//concat
val = firstName + ' ' + lastName;

//append
val = 'alice'; 
val += 'wonderland'; // save old value and new value

//escaping
val = 'That\'s awesome'; //"That's awesome";

//length
val = firstName.length;

//change case
val = firstName.toLowerCase();
val = lastName.toUpperCase();

//char at 
val = firstName.charAt('2');

//indexOf
val = firstName.indexOf('y'); //return the first one
val = firstName.lastIndexOf('l'); //return the last one

//substring
val = firstName.substring(1,3);

//slice
val = lastName.slice(1,3);
val = lastName.slice(-3);

//split
val = test.split(' ');
val = course.split(',');

//replace
val = test.replace('Javascript','react.js');

//includes()
val = test.includes('from'); //it will return true or false

console.log(val);

/* if(condition) {
    do something
}
else {
    do something else
}
*/

const id = 100;

// equal to
if(id == 100){
    console.log('id is 100');
}else{
    console.log('id is not 100');
}

//not equal
if(id != 100){
    console.log('correct');
}else{
    console.log('id is 100');
}

// if (id == 100) //only check value and it doesnt check the datatype if it is string
if (id === 100){// === check value and datatype so always use this one to avoid bugs
console.log('id is a number');
}else{
    console.log('not found');
}

//greater than or less than
if(id >= 100){
    console.log('valid value');
}else{
    console.log('invalid');
}

const color = 'red';

if(color === 'red'){ //if(color !== 'red')
    console.log('color is red');
}else if(color === green){
    console.log('color is green');
}else{
    console.log('color is invalid');
}

const userName = 'sara';
const age = 30;

//use template literals in ES6 and avoid using too much concat and + sign
//AND &&
if(age >= 0 && age <= 12){
    console.log(`${userName} is a child`);
}else if(age >= 13 && age <= 19){
    console.log(`${userName} is a teenager`);
}else{
    console.log(`${userName} is an adult`);
}

//OR ||
if(age < 16 || age > 65){
    console.log(`${userName} can not run`);
}else{
    console.log(`${userName} is registered`);
}

//ternary operators for only 1 condition
console.log(id === 100 ? 'correct number' : 'invalid number');

//without braces
if (id === 100)
    console.log('id is a number');
else
    console.log('not found');





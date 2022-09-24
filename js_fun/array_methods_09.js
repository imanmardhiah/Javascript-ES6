//Create array
//first option always to use const
//only use let when u need to count/calculate

const numbers = [100,2,3,49,5,60,17]; //recommended
const numbers2 = new Array(22,12,43,6);
const fruits = ['Apple','Honeydew','Cherry','Kiwi','Grape'];
const mix = ['hello',12,'earth',true,undefined,{a:1,b:2}]; // {a:1,b:2} - an object

let val;

//get array length
val = numbers.length;

//check if array is array
val = Array.isArray(numbers2); //return true or false

//get a single value
val = numbers[3];

//change the value
numbers[3] = 250; //const array can't be erased but can be mutated

//find the index of the value
val = numbers.indexOf(1);

//mutate an array
//add on to the end
numbers.push(777);

//add to the beginning
numbers.unshift(15);

//remove from the end
numbers.pop();

//remove from the beginning
numbers.shift();

//splice
//numbers.splice(1,4);

//reverse
//numbers.reverse();

//concat
val = numbers.concat(numbers2);

//sort arrays
val = fruits.sort();
val = numbers.sort();

//sorting an array with a compare function in an ascensing order
/*
val = numbers.sort(function(x,y){
    return x-y;
});
//sorting an array with a compare function in an descending order
val = numbers.sort(function(x,y){
    return y-x;
});
*/

//find method
//any number over 50
function over50(num){
    return num >50;
};

val = numbers.find(over50);

console.log(val);
//with function expression

const greeting = function(){
    return 'Welcome to AA';
}

console.log(greeting());

//with arrow function 
const greets = () => {
    return 'Welcome to Academy';
};

//shorter form
//it gets shorter if the function has only one statement
//and the statement returns a value, so we can eliminate
//curly braces and return keyword as well

const greetin = () => 'Welcome to Arrow';

//arrow function with parameters
const greet = (user) => `Welcome to Arrow Cafe ${user}`;

console.log(greet('david'));
//function declaration

function greet(firstName='john',lastName='doe'){ //for ES6 default value
   // if(typeof firstName === 'undefined'){firstName = 'John'}
   // if(typeof lastName === 'undefined'){lastName = 'Doe'}
    console.log(`welcome ${firstName} ${lastName}`); //body of the function
}

greet(); //call function

//function expression
const square = function(x=3){ //default value
    return x*x;
}

square(6);
console.log(square);

//immediate invokable function expression
(function(){
    console.log('IIFE RAN..')
})();

(function(userName='John'){
    console.log(`welcome ${userName}`)
})();

//property method
//when a function is a property of an object, it is a method
const todo = { //name of the object
    add : function(){ //name of the function
        console.log('add to list');
    },
    edit : function(){ //name of the function
        console.log('edit the list');
    }
} 
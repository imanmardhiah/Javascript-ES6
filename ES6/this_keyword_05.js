//method - a function in a property of an object
//this keyword behaves differently in different places
//in a method, this refers to the global object (window)
//if it is used in a function, it refers to the global object
//in a function, in a strict mode it is undefined
//in an event, this refers to the element that received the event
//methods like call() and apply() can refer this to any object
/*
let val = this;

console.log(val);
*/

const user_1 = {
    firstName : 'sara',
    lastName : 'smith',
    id : 100,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};

const user_2 = {
    firstName : 'polly',
    lastName : 'pocket',
    id : 25,
    fullName : function(){
        return this;
    }
};

//in an object method, this refers to the "owner" of the method
//the user object is the owner of the method
console.log(user_1);
console.log(user_1.fullName());

console.log(user_2);
console.log(user_2.fullName());

//this alone
//in a browser the global object is window
const x = this;
console.log(x);

//this  in the function
//in js function, the owner of the function is the default binding for this
//it means this refers to the global object

function myFunction(){
    return this;
}

console.log(myFunction());

//function binding
//the call() and apply() methods are predefined js methods
//these methods can be use to call an object method with another object as argument

const customer = {
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
};

const customer_1 = {
    firstName:'barbie',
    lastName:'girl',
}

const test = customer.fullName.call(customer_1);
console.log(test);

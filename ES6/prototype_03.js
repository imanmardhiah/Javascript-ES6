//object literals
/*
const user = {
    userName:'alex',
    age:25
};

console.log(user);

//prototype is a special type of object with additional properties and methods
//which will be shared across all the object instances
//of its constructor function
//it is an object which is associated with every object and function in javascript by default

//constructor function

function User(){
    this.name = 'barbie';
    this.age = 20;
};

const user_1 = new User();
user_1.gender = 'female';

console.log(user_1);
*/
//prototype 
function Student(){
    this.name = 'sara';
    this.age = 15;
};

const student_1 = new Student();
console.log(student_1);

//how to add a new attribute in the prototype
Student.prototype.gender='Female';

const student_2 = new Student();
console.log(student_2);

//how to access to the prototype
console.log(student_1.prototype); //it will appear undefined hence
//any dealing with the prototype, go for the constructor function

console.log(Student.prototype); //object
console.log(student_1.__proto__);//object

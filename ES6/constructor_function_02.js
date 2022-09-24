//object literal
/*
const student = {
    firstName:'sara',
    lastName:'smith',
    age:16
};

console.log(student.age); */

//constructor function starts with Capital letter
function Student(){
    this.firstName = 'Polly';
    this.lastName = 'Pocket';
    this.age = 16;
}; //this keyword point to this object being created by the function

//dynamic version
function Student(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

const student_1 = new Student('Pete','Davidson',18);
console.log(student_1);




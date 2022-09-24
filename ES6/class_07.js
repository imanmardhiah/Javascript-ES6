//the constructor method is a special method
//it has the exact name as the constructor
//it is executed auto when a new object is created
//it is used to initialize the properties of an object
//if we dont define the constructor function
//js will add an empty constructor function
//js classes are the templates for the js objects
//a js class is NOT AN OBJECT

// syntax
/*
class ClassName{
    constructor(){

    }
}


//this class has two initial properties
class Student{ //class name starts with a Capital letter for the constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

//we can use classes to create objects
const student_1 = new Student('sara','smith',23);
const student_2 = new Student('polly','pocket',26);

console.log(student_2,student_1);
*/

class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    dob(){
        let date = new Date();
        return date.getFullYear() - this.age;
    }
}

let student_1 = new Student('alice',1996);
document.body.innerHTML=`${student_1.name} is ${student_1.dob()}`;

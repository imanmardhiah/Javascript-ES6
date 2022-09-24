const personPrototype = {
    greeting : function(){
        return `Hello ${this.firstName} ${this.lastName}`
    } 
};
//beginner approach
const user = Object.create(personPrototype);
user.firstName = 'sara';
user.lastName = 'smith';

console.log(user);
console.log(user.greeting());

//pro approach
const newUser = Object.create(personPrototype,{
    firstName: {value:'alice'},
    lastName: {value:'wonderland'}
});

console.log(newUser);
console.log(newUser.greeting());
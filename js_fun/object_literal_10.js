const person = {
    firstName:'sara',
    lastName:'smith',
    age:'30',
    email:'sara@gmail.com',
    hobbies:['music','circus'], //array
    address:{                   //object
        city:'KL',
        country:'Malaysia'
    }
}

let val;

//get the specific value

val = person.age; //recommended
val = person.hobbies[0];
val = person.address.city;
val = person['address'];

//console.log(val);

const people = [
    {userName:'sara',age:30},
    {userName:'alice',age:20},
    {userName:'mikayla',age:25}
];

console.log(people);

val = people[0].userName;
console.log(val);

for(let i = 0 ; i < people.length ; i++)
{
    console.log(people[i].userName);
}

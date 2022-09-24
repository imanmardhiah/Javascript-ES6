//for loop
for(let i=1; i<=10; i++){
    if(i === 8){
        console.log('id found');
        continue; //will continue loop but it won't print the number
    }
    if(i === 5){
        console.log('stop loop');
        break; //stop the loop
    }
    console.log(i);
}

//while loop
let a = 0; 

while( a < 10 ){
    console.log(a);
    a++;
}

//do while
let i = 0;

do {
    console.log(i);
    i++;
}
while(i<10);

//loop an array
const numbers =[1,23,54,137,67]; //array name always use plural form

for(let i=0; i<numbers.length;i++)
{
    console.log(i,numbers[i]); //value of loop and value of array
}

//forEach loop (it is only for array)
numbers.forEach(function(num,index){ //use singular form for array parameter
    console.log(index,num);
});

const users = [
    {name:'sara',id:2},
    {name:'polly',id:1},
    {name:'david',id:3},
];

for(let i = 0; i < users.length ; i++)
{
    console.log(i,users[i].name);
}

users.forEach(function(user){
    console.log(user.name);
})


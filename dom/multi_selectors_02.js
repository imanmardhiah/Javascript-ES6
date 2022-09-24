//html collection is returned when you use tagname and classname
//using html collection - index and list
//html collection can be access using the name,id,index number
//document.getElementsByClassName()
/*
const items = document.getElementsByClassName('collection-item');
console.log(items[1]);
items[1].style.color='red';
items[3].textContent='hello';
*/
//document.getElementsByTagName()
const lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[2]);
lis[0].style.color='pink';
lis[1].textContent='welcome';

//convert html collection into an array
const lisArr = Array.from(lis);
console.log(lisArr);
lisArr.reverse();

//document.querySelectorAll()
//return a node list
//node list is returned when you use document query 
//node list can be treated like an array(loops, methods)
//it is not required to convert

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item){
    item.textContent='hello';
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background='pink';
});

for(let i=0; i<liEven.length;i++)
{
    liEven[i].style.background='aqua';
}

console.log(items);

// 3 type of browser API - node list, token list, html collection



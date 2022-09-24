//Event bubbling

//it is basically bubbling up an event thru DOM
//when an event happens on a particular element in the DOM
//it actually bubbles up thru its parent

//when we click on the card-title which is the task list
//the event is going to bubble up thru all the parent elements

//task list element
document.querySelector('.card-title').addEventListener('click',function(){ //write function
    console.log('card title clicked!!');
});

//task list parent
document.querySelector('.card-content').addEventListener('click',function(){ //write function
    console.log('card content clicked!!');
});

//card content parent
document.querySelector('#main').addEventListener('click',function(){ // or use class - .card
    console.log('card clicked!!');
});

//card parent
document.querySelector('.col').addEventListener('click',function(){ //write function
    console.log('col clicked!!');
});

//col parent
document.querySelector('.row').addEventListener('click',function(){ //write function
    console.log('row clicked!!');
});

//event delegation
//it is the opposite of event bubbling
//we put the event listener on the parent element
//and it goes down to the child

const delItem = document.querySelector('.delete-item');

document.body.addEventListener('click',deleteItem);

function deleteItem(e){
    /*
    if(e.target.parentElement.className === 'delete-item secondary-content'){
        console.log('delete item');
    }
    */
   //better approach
   if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
   }
}
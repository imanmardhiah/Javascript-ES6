const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
/*
form.addEventListener('submit',runEvent);

//keyEvents
//keydown
taskInput.addEventListener('keydown',runEvent);

//keyup
taskInput.addEventListener('keyup',runEvent);

//keypress
taskInput.addEventListener('keypress',runEvent);

//cut
taskInput.addEventListener('cut',runEvent);

//blur
taskInput.addEventListener('blur',runEvent);
*/
//focus
taskInput.addEventListener('focus',runEvent);

//event handler
function runEvent(e){
    console.log(`Event type: ${e.type}`);
    e.preventDefault();
}
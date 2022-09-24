//click, name of event
document.querySelector('.clear-tasks').addEventListener('click', runEvent);

function runEvent(e){
    //console.log('Clicked');

    let val;
    val = e;
    //Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList; // Dom Token List
    
    //Event type
    val = e.type;

    //Timestamp
    val = e.timeStamp;

    //coord events related to the window
    val = e.clientY; //y axis
    val = e.clientX; //x axis

    //coord related to the element
    val = e.offsetY; //y axis
    val = e.offsetX; //x axis

    // y axis && x axis gives different value each time

    console.log(val);
}
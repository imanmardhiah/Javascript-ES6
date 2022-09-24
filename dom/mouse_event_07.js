const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');
/*
//click
clearBtn.addEventListener('click',runEvent);

//double click
clearBtn.addEventListener('dblclick',runEvent);

//mouse down
clearBtn.addEventListener('mousedown',runEvent);

//mouse up
clearBtn.addEventListener('mouseup',runEvent);

//mouse enter and leave fires off when we (enter and leave the element)
//mouseenter
card.addEventListener('mouseenter',runEvent);
//mouse leave
card.addEventListener('mouseleave',runEvent);

//mouseover and mouse out fires off for nested element
//mouseover
card.addEventListener('mouseover',runEvent);

//mouseout
card.addEventListener('mouseout',runEvent);
*/
//mousemove
card.addEventListener('mousemove',runEvent);

//event handler
function runEvent(e){
    console.log(`Event type : ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY ; ${e.offsetY}`;
    document.body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`;
}
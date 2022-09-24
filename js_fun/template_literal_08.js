
const names = 'sara';
const age = 30;
const job = 'actress';
const city = 'kuala lumpur';
let output;

//without template literals
output = '<ul>'+
'<li>Name: '+names+'</li>'+
'<li>Age: '+age+'</li>'+
'<li>Job: '+job+'</li>'+
'<li>City: '+city+'</li>'+
'</ul>';

//template literals
output = `<ul>
<li>Name: ${names}</li>
<li>Age: ${age}</li>
<li>City: ${job}</li>
<li>Job: ${city}</li>
</ul>`;

//console.log(output); track error

document.body.innerHTML=output;
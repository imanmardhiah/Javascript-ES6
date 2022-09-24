//global scope
var a = 1;
let b = 2;
const c = 3;
//it is not good to have global variable security wise

//function scope
function test(){
    var a = 4;
    let b = 5;
    const c = 3;

    console.log('Function scope: ', a,b,c);
}

test();

//block level scope
//block level value will overwrite global value if it has the same name and value
if(true){
    var a = 4;
    let b = 5;
    const c = 6;

    console.log('Block level scope: ',a,b,c);
}

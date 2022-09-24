const colors = ['pink','purple','silver','black']; //create an array

colors.push('gold'); ///add to the end

colors.unshift('aqua');//add to the beginning

colors.forEach(function(color){ //display array value //not in exercise
    console.log(color);
});

console.log(colors.length); //array length
// Challenge Very Easy
var birthYear = 1995;
var currentYear = 2020;
var age = currentYear - birthYear;

console.log(`Jordan was born in ${birthYear} and it is currently ${currentYear}, so he is ${age} years old.`)

// Challenge Easy
var long = 'LaPhaedra';
var short = 'Jordan';



// Challenge medium
var words = prompt("Enter a string")

if(words === words.toUpperCase()){
    console.log("shouting");
} else if (words === words.toLowerCase()){
    console.log("Whispering");
} else{
    console.log("Speaking Normally");
}

// // Challenge Hard
// function add(X,Y){
//     return x+y;
// }

// function subtract(X,Y){
//     return x-y;
// }

// function multiply(X,Y){
//     return x*y;
// }

// function divide(X,Y){
//     return x/y;
// }


// Challenge Very Hard
function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

var firstInput;
var secondInput;
var operator;

firstInput = parseInt(prompt("Enter first number"));
operator = prompt("Enter operator: +, -, /, *");
secondInput = parseInt(prompt("Enter second number"));

if(operator === "+"){
    console.log(add(firstInput,secondInput));
} else if(operator === "-"){
    console.log(subtract(firstInput,secondInput));
} else if(operator === "*"){
    console.log(multiply(firstInput,secondInput));
} else{
    console.log(divide(firstInput,secondInput));
}
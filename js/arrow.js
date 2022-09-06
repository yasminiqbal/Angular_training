// Normal functions

let greet = function(user){
    console.log("Hello "+user);
    return 1;
}

console.log(greet("yasmin"));

// same as using arrow function (keyword function not using explicitly)

let greet1 = (user) => {
    console.log("Hello " + user);
    return 1;

}

console.log(greet1("Rehan"));

let sum = (num1, num2) => num1+num2;
let result = sum(19,13)
console.log(result)
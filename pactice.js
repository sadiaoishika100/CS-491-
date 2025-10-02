console.log("Hello World!")
//Boolean - true/false
let isIceCreamCold = true;

//Number
let king = 23;

//String - can use double "" or single ' '
let color = "blue";

//Arrays index start with 0
let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23];

// Constant
const nbMonth = 12;

console.log("Number ", king)


console.log("Number ${king}") // variable value inside a string


console.log("Number ${king*2}") // do the math inside 
// an array of strings mapping
let myarray = ['Microsoft', 'Google']

// printing the array with map. map calls the function as parameters on each element of the array
console.log('Printing the array with map')

// Create a function that will print it's first parameter and ignore any others:
let printIt = (value) => console.log(value)

// print the array using map
myarray.map(printIt)
let numberarray = [1, 6, 7.5]; 

let mult22 = (x) => x * 22; 

let newarray = numberarray.map(mult22); 

console.log(newarray);

//function that adds 2 to a number and use it to add 2 to all numbers of an array
let twoarray= [1,2,3];
let add2= (x) => x+2;
let newtwoarray= twoarray.map(add2);
newtwoarray.map(printIt);
// an array of numbers
let nums = [1, 2, 5, 6, 10, 20, 100, 200];

// Starting with the 'nums' array, create a new array that only has numbers less than 20
const smallNums = nums.filter((elt) => elt < 20);
smallNums.map(printIt);


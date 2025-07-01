// A function is a block of code that is designed to perform a specific task.
//Function Defination(Defining) and Function call(invoke)
//Functions help us to overcome the redudancy
//Function defination whaterver we are defining in paranthesis is called as parameter
// function funcName(msg){
//    console.log(msg)
// }
//function call whatever we are defining in paranthesis is called as argument
// funcName("Hello JS");

//Nan is not a number

// function sum(x,y){
//    s= x+y;
//    return s;
// }
// //blocked scope: fun Params are like local variables of function 
// let value =sum(4,5);
// console.log(value);

//Arrow function part of modern JS
//Arrow function is a shorthand for function declaration
//arrow function is like a normal function but it is more concise
// function Sum(a,b){
//    return a+b;
// }
// const arrowSum = (a,b) => {
//    console.log(a+b);
// };


// function Multiply(a,b){
//    return a*b;
// }

// const arrowMultiply = (a,b)=>{
//    console.log(a*b);
// }

// let printHello = () =>{
//    console.log("Hello");
// }
 function greet(name){
  function displayName(){
    console.log("Hello" +" "+name);
  }
  displayName();

 }
 greet("Alice");

function createCounter1(n){
  return function(){
      n++;
  };
}

const counter1 = createCounter1(10);
console.log(counter1()); 
console.log(counter1());
console.log(counter1());

function createCounter(n) {
  let current = n;
  return function() {
      return current++;
  };
}

const counter = createCounter(10);
console.log(counter()); 
console.log(counter()); 
console.log(counter());


function expect(val) {
  return {
      toBe: function(otherVal) {
          if (val === otherVal) {
              return true;
          } else {
              throw new Error("Not Equal");
          }
      },
      notToBe: function(otherVal) {
          if (val !== otherVal) {
              return true;
          } else {
              throw new Error("Equal");
          }
      }
  };
}
// expect(val): This function takes a value val and returns an object with two methods.
// toBe(val): This method checks if the original value (val) is strictly equal to the provided value      (otherVal). If they are equal, it returns true. If not, it throws an error with the message "Not Equal".
// notToBe(val): This method checks if the original value (val) is not strictly equal to the provided value (otherVal). If they are not equal, it returns true. If they are equal, it throws an error with the message "Equal".

// Usage
try {
  expect(5).toBe(5); // Returns true
  expect(5).notToBe(6); // Returns true
  expect(5).toBe(6); // Throws "Not Equal"
} catch (error) {
  console.error(error.message);
}

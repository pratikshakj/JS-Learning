//Practice

// let age = prompt("what is your age?");
// if (age>10 && age<20){
//     console.log("Age lies between 10 and 20")
// }

//Patterns in JS
//Rightangle triangle
// let r = 5;
// let pattern ='';

// for(let i = 1; i <= r; i++){
//     for(let j= 1;j<=i; j++){
//         pattern += j +' ';
//     }
//     pattern += "\n";
// }
// console.log(pattern);

// let rows= 5;
// let pattern = '';
// // for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= rows; j++) {
//         console.log("* ")
//         // pattern += '* ';
// //     }
// //     // pattern += "\n";
// }
// // console.log(pattern);

//WAPTP the sum of n natural numbers using for loop.

// let sum = 0;
// let n = 4;
// n=Number.parseInt(n);
// for(let i = 0; i < n; i++){
//    sum =sum+(i+1);
//    console.log((i+1) + " + ");
// }
// console.log("=" +sum);

// let fact =1;
// let n = 5;
// for(let i = 1; i<=n;i++){
//    fact = fact*i;
// }
// console.log(fact);

//Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

// function countVowels(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u" ||
//       char === "A" ||
//       char === "E" ||
//       char === "I" ||
//       char === "O" ||
//       char === "U"
//     ) {
//       count++;
//     }
//     console.log("The character are:", char)
//   }
//   return count;
// }


//Same pgm using arrow function

// let countVowels = (str) =>{
//    let count = 0 ;
//    for (let char of str) {
//       if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
//          count++;
//       }
//    }
//    return count;
// }

// Square of a number
// let nums = [2,3,4];

// let calcSqr = (num) =>{
//    console.log(num**2);
// }

// nums.forEach(calcSqr)


// nums.forEach(function squareNum (num){
//   let value = num**2;
//   console.log(value);
// })

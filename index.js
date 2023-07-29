// 1)Write a function that takes two numbers as arguments and returns their sum.

// function add(a,b) {
//     return a+b;
// }
// const result = add(5,6);
// console.log(result);

//Arrow funtion
// const addNumbers = (a, b) => {
//     return a + b;
//   };
// const result = addNumbers(5, 10);
// console.log(result)

//2)Write a function that takes a string as an argument and returns its length.

// function leng(a) {
//     return a.length;
// }
// const result = leng("Hello");
// console.log(result);

//Arrow funtion
// const leng = (a) => {
//     return a.length;
// };
// const  result = leng("Harshal");
// console.log(result);

// 3)Write a program that takes two numbers and displays their sum, difference, product, and quotient.
// function calculateSum(a,b) {
//     return a + b;

// }
// function calculateDiff(a,b) {
//     return a - b ;

// }
// function calculatePro(a,b) {
//     return a * b ;

// }
// function calculateQuo(a,b) {
//     return a / b ;

// }

// function displayResults(a, b) {
//     console.log(`Sum: ${calculateSum(a, b)}`);
//     console.log(`Difference: ${calculateDiff(a, b)}`);
//     console.log(`Product: ${calculatePro(a, b)}`);
//     console.log(`Quotient: ${calculateQuo(a, b)}`);
// }

// const num1 = 10;
// const num2 =24;
// displayResults(num1,num2);

//4) Write a function that takes two numbers as arguments and returns the larger number.

// function findMax(num1,num2) {
//     if(num1 > num2) {
//         return num1;
//     }
//     else {
//        return num2;
//     }
// }

// const num1 = 10;
// const num2 = 20;
// const result = findMax(num1,num2);
// console.log("The larger number  is:",result)\

//5) Write a program that takes a number and checks whether it is positive, negative, or zero.
// function numCheck() {
//     const num = parseFloat(prompt("Enter a number:"));
//     if(num == 0){
//         return console.log("num is zero ");
        
//     }
//     else if(num>0) {
//         return console.log("num is postive " + num,);
//     }
//     else {
//         return console.log("Num is negative " + num);
//     }


// }
// numCheck();

// 6) Write a program that takes a number and prints the multiplication table for that number.
// function printMultitable(num) {
//     for(let i = 1; i <= 10; i++) {
//         const result = num * i;
//         console.log(result);
//     }
// }
// const num = parseInt(prompt("Enter a number ton generate its Multi.. table"));
// printMultitable(num);

// 7) Write a program that takes a number and calculates the sum of all numbers from 1 to that number.
// const number = parseInt(prompt('Enter a positive integer'));

// let sum = 0;

// for( let i = 0; i<= number; i++) {
//     sum += i;
// }
// console.log('The sum of natural numbers:',sum);

// function sumOfnum(n) {
//     return (n * (n + 1)) / 2;
// }
// const n = parseInt(prompt('Enter a postivie number'));
// let result = sumOfnum(n);
// console.log(result);

// Write a program that takes a string and prints out the number of vowels in the string.
// function countVowels(inputString) {
//     const vowels ="aeioiAEIOU";
//     let vowelCount = 0;
//     for (let char of inputString) {
//         if(vowels.includes(char)){
//             vowelCount++

//         }
//     }
//     return vowelCount;
// }

// const inputString = prompt("Enter a string");
// const numVowels = countVowels(inputString);
// console.log("The number of vowels in the string " + numVowels);



// 9) Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.


 function findCommonElement(arr1, arr2) {

  const commonElements = arr1.filter(function(num) {
     return arr2.includes(num);
   });

  const uniqueCommonElements = Array.from(new Set(commonElements));
  const sortedCommomElements = uniqueCommonElements.sort(function(a,b) {
     return a - b;
   })

  return sortedCommomElements
};

const array1 = [1,2,3,4,5,];
const array2 = [3,4,5,6,7];
const commonElement = findCommonElement(array1, array2);
console.log(commonElement);















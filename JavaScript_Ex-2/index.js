// 1) Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.

// Define a function called greet that takes a name parameter
function greet(name) {
    // Use a console.log statement to output a greeting message with the name parameter
    console.log(`Hello ${name} How are you doing today?`);
}
// Call the greet function and pass in the name "Harshal" as an argument

greet("Harshal");



// 2)Write a function called 'getSquare' that takes a number parameter and returns its square.

// Define a function called getSquare that takes a number parameter
function getSquare(number) {
     // Use the exponent operator (**) to square the number parameter
  const  square = number ** 2 ;
   return square;
}
const result = getSquare(5);

console.log(result);

// 3)Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

function countLetters(str) {
     // Create an empty object to store the letter counts
     const counts = {};
    
     // Loop through each character in the string
     for(let i = 0; i < str.length; i++) {
        const char = str[i];

         
        // Check if the character is already in the counts object
        if(counts[char]) {
            // If it is, increment the count by 1
            counts[char]++;
        }
        else{
            // If it's not, add it to the object with a count of 1
            counts[char] = 1;
        }   
    }
    // Return the counts object
    return counts;
}

const letterCounts = countLetters("WebDevelopment")

console.log(letterCounts);


// 4)Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

function createCounter() {
    // initialize count to 0
    let count = 0;

    // define and return a function that increments count and returns its value
     return function() {
        // increment count by 1
        count++;

      // return the new value of count
        return  count;
     };

}

// create a new counter function
const counter = createCounter();
// call the counter function multiple times and log the result
console.log(counter()); // prints 1
console.log(counter()); // prints 2
console.log(counter()); // prints 3

// Explanation:
// - The `createCounter` function creates a closure where `count` is a private variable that cannot be accessed from outside the function.
// - The function returns an inner function that can access `count` due to the closure.
// - The inner function increments `count` by 1 each time it is called and returns its new value.
// - The `counter` variable is assigned the returned inner function from `createCounter`.
// - Each time `counter` is called, it increments and returns the current value of `count`.
// Note:
// Closures are an important concept in JavaScript, and this example demonstrates their use.


// 5)Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

function sumEvenNumbers(num) {
      // initialize sum to 0
    let sum = 0;
    
    // initialize sum to 0
    for(i = 0; i<num.length; i++) {
        // check if the current number is even
        if( num[i] % 2 === 0) {
            // add the current number to sum
            sum += num[i];
        }
        
    }
    // return the final sum of even numbers
    return sum;
} 

const num = [1,2,4,5,6];
console.log(sumEvenNumbers(num));


// 6)Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

function sumArrayNumbers(arr) {
    
    let sum = 0;
    for(i = 0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Test cases
const numbers1 = [1, 2, 3, 4, 5];
console.log(sumArrayNumbers(numbers1)); // Output: 15

const numbers2 = [10, 20, 30];
console.log(sumArrayNumbers(numbers2)); // Output: 60

const numbers3 = [-1, 2, -3, 4, -5];
console.log(sumArrayNumbers(numbers3)); // Output: -3


//7) Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.

function filterLongStrings(arr) {

    // create an empty array to store the filtered strings
    let filteredArr = [];

    // loop through each string in the original array
    for(let i = 0; i<arr.length; i++) {
        // check if the string length is greater than 5
        if(arr[i].length > 5 ) {
            // if it is, push the string to the filtered array
            filteredArr.push(arr[i]);
        }

    }

    return filteredArr;
}
// Test cases
console.log(filterLongStrings(["apple", "banana", "kiwi", "watermelon", "orange"]))
console.log(filterLongStrings(["cat", "dog", "elephant", "giraffe"])); // ['elephant', 'giraffe']
console.log(filterLongStrings(["car", "bike", "bus", "train"])); // []
console.log(filterLongStrings(["123456", "123", "123456789"])); // ["123456", "123456789"]
console.log(filterLongStrings([])); // []

// 8)Write a function that takes an object and returns an array of all the keys in the object.

function getKeys(obj) {
     

    const keys = Object.keys(obj);
    
    return keys;
}
 const person = {
    name: "John",
    age: 30,
    gender: "male",
    city: "New York"
    
};
console.log(getKeys(person));


//9) Write a function that takes an array of objects and returns an array of all the values of a specified property name.

function getPropertyValues(arr, propName) {
    
    // Using Array.map() method to get the values of the specified property
    const values = arr.map((obj) => obj[propName]);

    return values;
}

// Test cases
const people = [
    { name: "Pranay", age: 20, gender: "male" },
    { name: "Nidhi", age: 21, gender: "female" },
    { name: "Soumya", age: 21, gender: "male" },
];

console.log(getPropertyValues(people, "name")); // ["Pranay", "Nidhi", "Soumya"]
console.log(getPropertyValues(people, "age")); //  [20, 21, 21]
console.log(getPropertyValues(people, "gender")); // ["male", "female", "male"]
console.log(getPropertyValues(people, "address")); // [undefined, undefined, undefined]



// Write a function that takes an array of objects and returns the object with the highest value for a specified property name.

function findMaxByProperty(arr,prop) {

    //check if the araay is empty
    if(arr.length === 0) {
        return null;
    }
    // Initialize maxObj to first object in the array
    let maxObj = arr[0];

    // Loop through the array starting at second object
    for(let i = 1; i < arr.length; i++) {
        // Check if the current object's property value is greater than maxObj's property value
        if(arr[i][prop] > maxObj[prop]) {
            // If yes, update maxObj to current object
            maxObj = arr[i];

        }

    }
     // Return the object with highest value for the specified property
     return maxObj;
    
}

//Test case 1
const arr1 = [
    { name: "apple", price: 100 },
    { name: "banana", price: 200 },
    { name: "orange", price: 300 },
  ];

const maxObj1 = findMaxByProperty(arr1,"price");
console.log(maxObj1);

// Test case 2
const arr2 = [
    { name: "Pranay", age: 20 },
    { name: "Nidhi", age: 21 },
    { name: "Soumya", age: 21 },
];
const maxObj2 = findMaxByProperty(arr2, "age");
console.log(maxObj2);
// The function assumes that all objects in the array have the specified property name











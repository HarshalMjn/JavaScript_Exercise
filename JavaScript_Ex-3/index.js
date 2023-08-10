// 1) Write a function to change the text of a button on the click event.

// Function to change the text of a button on click event
function changeButtonText() {
    var button = document.getElementById("myButton");
    if (button.textContent === "Click me") {
      button.textContent = "Button clicked!";
    } else {
      button.textContent = "Click me";
   }
}
  
  

// 2) Write a function to add a CSS class to an element on the mouseover event.
// This function takes an element ID and a class name as arguments
// It adds the class name to the element on mouseover event
function  addClassOnMouseOver(elementID,className) {
  // Get the elemnt by ID  
  const element = document.getElementById(elementID);

  //Add an event listener to element for the "mouseover" 
  
    element.addEventListener("mousemover",() =>{
    element.classList.add(className);
  });
}
// Test case
// Add the "active" class to the "button" element on mouseover harshal suniml
addClassOnMouseOver("button" , "active");


// 3)Write a function to remove a CSS class from an element on scroll event.

// Function to remove a CSS class from an element on scroll event
function removeClassOnScroll(element, className) {

  //Add scroll evemt to listener to the wimdow objet 

window.addEventListener("scroll",function(){
  //check if the element has the specified class name 
  if(element.classList.contains(className)) {
    //Remove the class name from the element
    element.classList.remove(className);
  }

});
 

}
// Test case 1
const box1 = document.querySelector("#box1");
removeClassOnScroll(box1, "highlight");


//4) Write a function to toggle the display of a div element on click event.
function toggleDivDisplayOnClick(divID) {
  const div = document.getElementById(divID);
    if(div.style.display === "none") {
      div.style.display = "block";
    }
    else {
      div.style.display = "none";
    }
}


// 5)Write a function to validate a form on submit event.
function validateForm(event) {
  event.preventDefault(); // prevent the form from submitting
  const form = event.target; // get the form element
  let isValid = true; // initialize a flag for validation
  
  // loop through the form elements
  for (let i = 0; i < form.elements.length; i++) {
    const input = form.elements[i];
    const value = input.value.trim(); // trim the input value
    
    // if input is required and empty
    if (input.hasAttribute("required") && value === "") {
      isValid = false; // mark validation as failed
      input.classList.add("invalid"); // add invalid class to input
    } else {
      input.classList.remove("invalid"); // remove invalid class from input

    }

    //validate email formaat if tghe input has type = "email"
    if(input.type === "email" && value !== ""){
      const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(value)) {
        isValid = false;
        input.classList.add("invalid");
      }
    }
  }
  
  // show success or error message based on validation
  const message = document.getElementById("message");
  if (isValid) {
    message.classList.remove("error");
    message.innerText = "Form submitted successfully!";
  } else {
    message.classList.add("error");
    message.innerText = "Please fill out all required fields.";
  }
}

// Test case: attach the validateForm function to the submit event of a form element
const form = document.getElementById("myForm");
form.addEventListener("submit", validateForm);

//6)Write a function to fetch data from an API using the Fetch API and handle the response with a callback.
function fetchData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}

// Example usage
fetchData('https://jsonplaceholder.typicode.com/todos/1', (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
//Note:The Fetch API is built into modern web browsers and allows developers to make HTTP requests to servers using JavaScript.

// 7) Write a function to read a file using the Node.js File System module and handle the contents with a callback.
const fs = require('fs');

function readFileContents(filepath, callback) {
  // Use the readFile method of the fs module to read the contents of the file
  fs.readFile(filepath, 'utf8', (error, contents) => {
    if (error) {
      // If an error occurs, call the callback with the error as the first argument
      callback(error);
    } else {
      // If the file is read successfully, call the callback with the contents as the second argument
      callback(null, contents);
    }
  });
}

// Example usage
readFileContents('example.txt', (error, contents) => {
  if (error) {
    console.error(error);
  } else {
    console.log(contents);
  }
});


// 8) Write a function to load an image asynchronously and handle the load event with a callback.

function loadImageAsync(url, callback) {
  const img = new Image();

  // Set up event listener for when the image has loaded
  img.addEventListener('load', () => {
    callback(null, img);
  });

  // Set up event listener for when there's an error loading the image
  img.addEventListener('error', () => {
    callback(new Error(`Failed to load image at ${url}`));
  });

  // Start loading the image
  img.src = url;
}

// Example usage:
loadImageAsync('https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg', (error, img) => {
  if (error) {
    console.error(error);
  } else {
    // Add the loaded image to the page
    document.body.appendChild(img);
  }
});


// 9) Write a function to simulate an asynchronous delay using a callback.
function simulateDelay(delay, callback) {
  setTimeout(callback, delay);
}

// Example usage:
console.log("Before delay");

simulateDelay(2000, () => {
  console.log("After delay");
});

console.log("Function finished executing");

// Output:
// Before delay
// Function finished executing
// After delay (after a 2 second delay)   



// 10) Write a function to download a file asynchronously and handle the progress and completion events with callbacks.

function downloadFile(url, progressCallback, completionCallback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob"; // Specify the response type as blob

  xhr.addEventListener("progress", (event) => {
    // Calculate the progress percentage and invoke the progress callback
    const progress = Math.round((event.loaded / event.total) * 100);
    progressCallback(progress);
  });

  xhr.addEventListener("load", () => {
    // Invoke the completion callback with the downloaded blob object
    completionCallback(xhr.response);
  });

  xhr.send();
}

// Test case
const url = "https://dot-batch-project-assets.vercel.app/devdetective-images.zip";
downloadFile(
  url,
  (progress) => console.log(`Download progress: ${progress}%`), // progress callback logs the progress percentage
  (blob) => console.log(`File downloaded. Blob size: ${blob.size} bytes`) // completion callback logs the size of the downloaded blob
);






 








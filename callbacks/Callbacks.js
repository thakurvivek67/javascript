// A callback is a function passed as an argument to another function

//Callbacks enable you to handle the outcomes of asynchronous operations in a non-blocking way. 
//This means your program can keep running while the operation is ongoing.

function buyBike(callback) {
    setTimeout(function() {
        console.log("Bought Royal Enfield Himalayan");
        callback();
    }, 2000);
}

function planTrip() {
    console.log("Trip to Ladakh planned");
}

buyBike(planTrip);

// second code

function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function() {
      callback("Operation complete");
    }, 5000);
  }
  
  // Define the callback function
  function callbackFunction(result) {
    console.log("Result: " + result);
  }
  
  // Call the main function with the callback function
  mainFunction(callbackFunction);


//third code 

// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Define the main function
function mainFunction(callback) {
  console.log("Performing operation...");
  // Use Array.forEach to loop through the array of numbers
  numbers.forEach(callback);
}

// Define the callback function
function callbackFunction(number) {
  console.log("Result: " + number);
}

// Call the main function with the callback function
mainFunction(callbackFunction);

  
// function doTask(taskName, delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(`${taskName} completed.`);
//         resolve(`${taskName} result`);
//       }, delay);
//     });
//   }
  
//   // Chaining promises
//   doTask('Task 1', 1000) // Start with Task 1, which takes 1 second
//     .then((result) => {
//       console.log('Received in first .then:', result);
//       return doTask('Task 2', 2000); // After Task 1, start Task 2, which takes 2 seconds
//     })
//     .then((result) => {
//       console.log('Received in second .then:', result);
//       return doTask('Task 3', 3000); // After Task 2, start Task 3, which takes 3 seconds
//     })
//     .then((result) => {
//       console.log('Received in third .then:', result);
//       console.log('All tasks completed.');
//     })
//     .catch((error) => {
//       console.error('An error occurred:', error);
//     });
  
function numberGame() {
    new Promise((resolve, reject) => {
      // Step 1: Select the random number
      setTimeout(() => {
        const randomNumber = 3; // Example number
        console.log(`The randomly selected number is ${randomNumber}`);
        resolve(randomNumber); // Resolve the promise with the random number
      }, 3000);
    })
    .then((randomNumber) => {
      // Step 2: Multiply the selected number by 2
      const multipliedNumber = randomNumber * 2;
      console.log(`The random number when multiplied by 2 becomes ${multipliedNumber}`);
      return multipliedNumber; // Sending the value down the chain
    })
    .then((number) => {
      // Step 3: Add 2 to the multiplied number
      console.log(`When 2 is added to the multiplied number, it becomes ${number + 2}`);
      return; // No value to send further down the chain
    })
    .then(() => {
      // Final step: Log a success message
      console.log("You successfully completed the game!");
    })
    .catch((error) => {
      // Error handling
      console.error('An error occurred:', error);
    });
  }
  
  numberGame(); // Call the function to run the game
  
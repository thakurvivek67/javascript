function doTask(taskName, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${taskName} completed.`);
        resolve(`${taskName} result`);
      }, delay);
    });
  }
  
  // Chaining promises
  doTask('Task 1', 1000) // Start with Task 1, which takes 1 second
    .then((result) => {
      console.log('Received in first .then:', result);
      return doTask('Task 2', 2000); // After Task 1, start Task 2, which takes 2 seconds
    })
    .then((result) => {
      console.log('Received in second .then:', result);
      return doTask('Task 3', 3000); // After Task 2, start Task 3, which takes 3 seconds
    })
    .then((result) => {
      console.log('Received in third .then:', result);
      console.log('All tasks completed.');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
  
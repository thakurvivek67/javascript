function concertPassPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Pass received");
        } else {
          reject("Pass not received");
        }
      }, 3000);
    });
  }
  
  // Using the concertPassPromise function
  concertPassPromise()
    .then(message => {
      console.log(message); 
    })
    .catch(error => {
      console.error(error); 
    });
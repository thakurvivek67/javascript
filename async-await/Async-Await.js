//if we forget to put async before a function, there would be a syntax error
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  // if await is not used it return promise object with pending state

    console.log(result); // "done!"
  }
  
  f();


// async function picnicDecision() {
//   async function checkWeather() {
//     try {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const isSunny = Math.random() > 0.5;
//           if (isSunny) {
//             resolve("Let us go for picnic");
//           } else {
//             reject("Error: It is cloudy");
//           }
//         }, 3000);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   try {
//     const result = await checkWeather();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// // Call the function outside
// picnicDecision();

async function picnicDecision() {

    
      async function checkWeather() {
          try {
              return new Promise((resolve, reject) => {
                  setTimeout(() => {
                      const isSunny = Math.random() > 0.5;
                      if (isSunny) {
                          resolve("Let us go for picnic");
                      } else {
                          reject("Error: It is cloudy");
                      }
                  }, 3000);
              });
          } catch (error) {
              console.log(error);
          }
      }
  
      try {
          const result = await checkWeather();
          console.log(result);
      } catch (err) {
          console.log(err);
      }
  }
  
  // Call the function outside
  picnicDecision();
  
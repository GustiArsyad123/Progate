
const call = (callback) => {
    console.log("Calling the callback function.");
    callback();
  };
  
  call(() => {
    console.log("Ken the Ninja");
  });
  
  // Declare the function in the argument and pass it
  call(() => {
    console.log("Master Wooly");
  });
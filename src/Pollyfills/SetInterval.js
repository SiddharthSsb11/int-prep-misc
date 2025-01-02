function customSetInterval(callback, delay) {
  let timerId = null; // To store the timer ID for reference

  // Define a function to handle repeated execution
  function intervalHandler() {
    try {
      callback(); // Execute the provided callback function
    } catch (error) {
      console.error("Error in interval callback:", error);
    }

    // Schedule the next execution
    timerId = setTimeout(intervalHandler, delay);
  }

  // Start the interval by invoking the handler the first time
  timerId = setTimeout(intervalHandler, delay);

  // Return a function to allow clearing the interval
  return () => clearTimeout(timerId);
}

// Example: Print a message every second
const stopInterval = customSetInterval(() => {
  console.log("This runs every 1 second");
}, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
  stopInterval(); // Clear the custom interval
  console.log("Interval stopped");
}, 5000);

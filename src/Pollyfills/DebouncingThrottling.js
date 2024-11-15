import React, { useCallback, useState } from "react";
import "./DebouncingThrottling.css";

// Debouncing ensures that a function is called only after a certain period of inactivity. If the function keeps being triggered within the
// specified wait time, it will reset the timer, and the function will only execute after the events stop for the given time.
// Use case: When we want to execute an event only once after the user stops performing an action.
// Example: Search Input: A user types in a search box, and you want to send an API request only after they finish typing rather than with every keystroke.
// Window resizing, to adjust the UI only after the resizing is done., Auto-saving user input after they stop typing.

//Throttling ensures that a function is called at most once in a specified time period,no matter how many times an event is triggered during that time.
// Use case: When we want to ensure a function executes at regular intervals without being triggered too often,especially when the event occurs continuously.
// Handling resize events for updating the layout.
// Rate-limiting user actions like button clicks (e.g., only allowing one click per second).
// Tracking user mouse movements, but updating only every few milliseconds.

const DebouncingThrottling = () => {
  //Debounce pollyfill

  const [pressCount, setPressCount] = useState(0);
  const [triggerCount, setTriggerCount] = useState(0);

  // debounce pollyfill
  function myDebounce(cbFn, delay) {
    let timer;

    return function (context, ...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cbFn.apply(context || this, args);
      }, delay);
    };
  }

  // throttle pollyfill
  // If the time difference is greater than or equal to delay, it means enough time has passed,
  // and it proceeds to update last to the current timestamp and then calls cbfn with any arguments passed (...args).
  function myThrottle(cbfn, delay) {
    let last = 0;
    return function (...args) {
      let now = new Date().getTime();
      if (now - last < delay) return;
      last = now;
      return cbfn(...args);
    };
  }

  const debounceCount = useCallback(
    // Using useCallback to ensure the debounce function reference doesn't change
    // myDebounce(() => {
    //   setTriggerCount((prevCount) => prevCount + 1);
    // }, 1000),

    myThrottle(() => {
      setTriggerCount((prevCount) => prevCount + 1);
    }, 1000),
    []
  );

  function clickHandler() {
    // console.log("debounced");
    setPressCount((prevCount) => prevCount + 1);
    debounceCount();
  }
  return (
    <div>
      <button className="button" onClick={clickHandler}>
        Increament
      </button>
      <p>Button Pressed : {pressCount}</p>
      <p>Triggered Count : {triggerCount}</p>
    </div>
  );
};

export default DebouncingThrottling;

// Question 3 : Debounce Polyfill

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var triggerCount = 0;
// var pressedCount = 0;

// const myDebounce = function (cb, d) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb(...args);
//     }, d);
//   };
// };

// const debouncedCount = myDebounce(() => {
//   triggerCount += 1;
//   count.innerHTML = triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debouncedCount();
// });

import React from "react";

const Call = () => {
  let car3 = {
    color: "White",
    company: "Mercedes",
  };

  function purchaseCar(currency, price) {
    console.log(
      `I have purchased ${this.color} - ${this.company} car for ${currency}${price} `
    );
  }

  // eslint-disable-next-line no-extend-native
  Function.prototype.myCall = function (currentContext = {}, ...arg) {
    if (typeof this !== "function") {
      throw new Error(this + "it's not callable");
      // this in this context refers to the function on which myCall is being called.
      // The check typeof this !== 'function' ensures that myCall is only used on functions, preventing accidental use on non-function objects.
    }
    currentContext.fn = this;
    //This line assigns the function on which myCall was called (purchaseCar) as a new property fn on the currentContext object (car3).
    // This effectively allows us to temporarily bind the function to the currentContext so that when we invoke it,
    // this inside the function points to currentContext.
    currentContext.fn(...arg);
    // This line calls the function fn (which is actually purchaseCar) as a method of currentContext.
    // Using ...arg spreads the arguments array, passing them as individual arguments to fn.
    // This ensures that purchaseCar receives all the arguments that were passed to myCall.
  };
  purchaseCar.myCall(car3, "₹", "60,00,000");

  // eslint-disable-next-line no-extend-native
  Function.prototype.myApply = function (currentContext = {}, arg = []) {
    if (typeof this !== "function") {
      throw new Error(this + "it's not callable");
    }
    if (!Array.isArray(arg)) {
      throw new TypeError("CreateListFromArrayLike called on non-object");
    }
    currentContext.fn = this;
    currentContext.fn(...arg);
  };
  purchaseCar.myApply(car3, ["₹", "60,00,000"]);

  //bind

  // eslint-disable-next-line no-extend-native
  Function.prototype.myBind = function (currentContext = {}, ...arg) {
    if (typeof this !== "function") {
      throw new Error(this + "cannot be bound as it's not callable");
    }
    currentContext.fn = this;
    return function () {
      return currentContext.fn(...arg);
    };

    // return function (...next) {
    //   return currentContext.fn(...arg, ...next);
    // };
  };

  const newFunc = purchaseCar.myBind(car3, "₹", "1,00,00,000");
  newFunc();
  // const newFunc2 = purchaseCar.myBind(car3, "₹");
  // newFunc2("1,00,00,000");

  return <div>Call</div>;
};

export default Call;

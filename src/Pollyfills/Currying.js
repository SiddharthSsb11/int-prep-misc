import React from "react";

const Currying = () => {
  //infinite currying
  // 4 : Write a currying fn
  //       evaluate("sum")(4)(2)
  //       evaluate("multiply")(4)(2)
  //       evaluate("divide")(4)(2)
  //       evaluate("substract")(4)(2);

  function evaluate(operation) {
    return function (a) {
      return function (b) {
        if (operation === "sum") return a + b;
        else if (operation === "multiply") return a * b;
        else if (operation === "divide") return a / b;
        else if (operation === "substract") return a - b;
        else return "Invalid Operation!";
      };
    };
  }
  console.log(evaluate("sum")(4)(2));
  console.log(evaluate("multiply")(4)(2));
  console.log(evaluate("divide")(4)(2));
  console.log(evaluate("substract")(4)(2));
  console.log(evaluate("substr")(4)(2));

  // Question 5 : Infinite Currying -> sum(1)(2)(3)....(n)

  function add(a) {
    return function (b) {
      if (b) return add(a + b);
      return a;
    };
  }
  console.log(add(5)(2)(4)(8)());

  // Question 6 : currying vs partial application

  // function sum(a) {
  //     return (b, c) => {
  //         return a * b * c
  //     }
  // }

  // let x = sum(10);
  // x(3,12);
  // x(20,12);
  // x(20,13);
  // OR
  // sum(10)(3,12);
  // sum(10)(20,12);
  // sum(10)(20,13);

  // Question 7 : real world example of currying => Maniplating DOM

  const updateElemText = (id) => (content) =>
    (document.querySelector(`#${id}`).textContent = content);
  const updateHeaderText = updateElemText("header");
  updateHeaderText("Subscribe to RoadsideCoder!");

  // Question 8 : Curry() implementation

  function curry(func) {
    return function curriedFunc(...args) {
      // console.log(args.length, func.length);
      if (args.length >= func.length) {
        return func(...args);
      } else {
        return function (...next) {
          return curriedFunc(...args, ...next);
        };
      }
    };
  }

  const sumCurry = (a, b, c) => a + b + c;

  const totalSum = curry(sumCurry);
  console.log(totalSum(1)(6)(5));

  //   Step 1: Call totalSum(1)
  // totalSum is called with 1:
  // args becomes [1].
  // args.length is 1, and sumCurry requires 3 arguments (func.length).
  // Since args.length (1) is less than func.length (3), we enter the else block:
  // return function (...next) {
  //   return curriedFunc(...args, ...next);
  // };
  // The function returns a new function that expects more arguments.
  // Step 2: Call the Returned Function with 6: totalSum(1)(6)
  // Now, call the returned function with 6:
  // next becomes [6].
  // curriedFunc is invoked again with ...args ([1]) and ...next ([6]):
  // return curriedFunc(1, 6);
  // Now, args is [1, 6].
  // args.length is 2, which is still less than 3.
  // The else block is executed again, returning another function that can accept more arguments:
  // return function (...next) {
  //   return curriedFunc(...args, ...next);
  // };
  // Step 3: Call the Next Returned Function with 5: totalSum(1)(6)(5)
  // Call the newly returned function with 5:
  // next becomes [5].
  // curriedFunc is invoked with ...args ([1, 6]) and ...next ([5]):
  // return curriedFunc(1, 6, 5);
  // Now, args is [1, 6, 5].
  // args.length is 3, which matches the required number of arguments (func.length).
  // This time, we execute the if condition:

  return <div>Currying</div>;
};

export default Currying;

// Currying is a technique in functional programming where a function with multiple arguments
// is transformed into a sequence of functions, each taking a single argument. This improves composability and allows partial application of functions.
// no of args shoul be equal to no. of functions

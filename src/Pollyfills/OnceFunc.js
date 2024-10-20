import React from "react";

const OnceFunc = () => {
  function once(func, context) {
    let ran;
    return function () {
      if (func) {
        // console.log(...arguments); //3,5
        ran = func.apply(context || this, arguments);
        func = null;
      }
      // console.log(ran, "--jjj-");
      return ran;
    };
  }

  const hello = once((a, b) => console.log("hello", a, b));
  hello(3, 5);
  hello(10, 12);

  // Using context ensures that this inside the function getValue refers to obj instead of the default or global context.

  // function once(func, context) {
  //   let ran;
  //   return function () {
  //     if (func) {
  //       ran = func.apply(context || this, arguments);
  //       func = null;
  //     }
  //     console.log(ran);
  //     return ran;
  //   };
  // }

  // const obj = {
  //   value: 42,
  //   getValue: function (x) {
  //     console.log("Value is:", this.value + x);
  //     return this.value + x;
  //   },
  // };

  // const getValueOnce = once(obj.getValue, obj);
  // getValueOnce(10); // First call
  // getValueOnce(20); // Second call
  return <div>once</div>;
};

export default OnceFunc;

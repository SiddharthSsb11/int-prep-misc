import React from "react";

const Factorial = () => {
  const factorial = (n) => {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };
  console.log(factorial(5));
  return <div>Factorial</div>;
};

export default Factorial;

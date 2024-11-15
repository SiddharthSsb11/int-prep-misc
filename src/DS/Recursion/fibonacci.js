import React from "react";

const fibonacci = () => {
  function fibRecursion(n) {
    if (n <= 1) return n;
    return fibRecursion(n - 1) + fibRecursion(n - 2);
  }

  console.log(fibRecursion(4));
  return <div>fibonacci</div>;
};

export default fibonacci;

import React from "react";
// Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output:

const RangeOfNumbers = () => {
  const rangeOfNumbers = (startNum, endNum) => {
    if (startNum > endNum) {
      return [];
    }
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  };

  console.log(rangeOfNumbers(1, 3));

  //     rangeOfNumbers(1, 3)
  //   -> rangeOfNumbers(1, 2)
  //     -> rangeOfNumbers(1, 1)
  //       -> rangeOfNumbers(1, 0)
  //         -> returns []
  //       -> push(1) -> returns [1]
  //     -> push(2) -> returns [1, 2]
  //   -> push(3) -> returns [1, 2, 3]

  return <div>RangeOfNumbers</div>;
};

export default RangeOfNumbers;

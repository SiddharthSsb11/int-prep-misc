import React from "react";

// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

// Brute Force Approach // Time Complexity -> O(nlogn);
function secondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr)); // O(n)

  uniqueArr.sort((a, b) => {
    // O(nlogn)
    return b - a;
  });

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }
}

const MaxSecondMax = () => {
  const secondLargestNumberFinder = (arr) => {
    let largestNumber = Number.NEGATIVE_INFINITY;
    let secondLargestNumber = Number.NEGATIVE_INFINITY;

    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > largestNumber) {
        secondLargestNumber = largestNumber;
        largestNumber = arr[i];
      } else if (arr[i] !== largestNumber && arr[i] > secondLargestNumber) {
        secondLargestNumber = arr[i];
      }
    }
    return secondLargestNumber;
  };

  console.log(secondLargestNumberFinder([12, 35, 1, 10, 34, 1, 35]));

  return <div>max-second-max</div>;
};

export default MaxSecondMax;

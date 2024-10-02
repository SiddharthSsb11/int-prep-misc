// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]

import React from "react";

const MaxSumSubArray = () => {
  const maxSumSub = (arr) => {
    let currSum = 0; //current sub array sum
    let maxSum = arr[0];
    let startIndex = 0;
    let endIndex = 0;
    let tempStart = 0;

    for (let i = 0; i < arr.length; i++) {
      currSum = currSum + arr[i];
      if (currSum > maxSum) {
        maxSum = currSum;
        endIndex = i;
        startIndex = tempStart;
        console.log("--firsr condition---", { endIndex, startIndex });
        console.log("--firsr condition---", { maxSum });
      } else if (currSum < 0) {
        currSum = 0; //rejecting this subarray
        tempStart = i + 1;
        console.log("---temp---", tempStart);
      }
    }
    return { maxSum, subArray: arr.slice(startIndex, endIndex + 1) };
  };

  console.log(maxSumSub([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

  return <div>MaxSumSubArray</div>;
};

export default MaxSumSubArray;

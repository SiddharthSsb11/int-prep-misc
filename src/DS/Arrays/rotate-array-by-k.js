// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

import React from "react";

const RotateArrayByK = () => {
  const rotateArray = (arr, k) => {
    const size = arr.length;
    if (k > size) {
      k = k % size;
    }
    const rotated = arr.splice(size - k, k); // O(n)
    // console.log(rotated, arr);
    // const rotatedArray = [...rotated, ...arr];
    arr.unshift(...rotated); // O(n)

    return arr;
    //O(n) + O(n) = O(n)
  };

  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  const rotateArrayOptimized = (arr, k) => {
    const size = arr.length;
    if (k > size) {
      k = k % size;
    }
    // reverse full array
    reverse(arr, 0, size - 1);

    // Step 2: Reverse the first k elements
    reverse(arr, 0, k - 1);

    // Step 3: Reverse the remaining n - k elements
    reverse(arr, k, size - 1);
    // console.log("in", arr);

    //O(n) + O(n) = O(n)
    return arr;
  };

  console.log(rotateArrayOptimized([1, 2, 3, 4, 5, 6, 7], 3));

  return <div>RotateArrayByK</div>;
};

export default RotateArrayByK;

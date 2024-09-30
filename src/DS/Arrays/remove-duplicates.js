import React from "react";
// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

const RemoveDuplicates = () => {
  function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // Edge case: empty array

    let slow = 0; // Pointer to track unique elements

    for (let fast = 1; fast < nums.length; fast++) {
      if (nums[fast] !== nums[slow]) {
        slow++; // Move slow pointer to the next position
        nums[slow] = nums[fast]; // Place the unique element at slow position
      }
    }

    return slow + 1; // Length of the array with unique elements
  }

  // Create a new array with the unique elements
  function getUniqueArray(nums) {
    let length = removeDuplicates(nums);
    let uniqueArray = [];

    // Copy the unique elements to a new array
    for (let i = 0; i < length; i++) {
      uniqueArray.push(nums[i]); // Manually copying each unique element
    }
    console.log(uniqueArray);
    return uniqueArray;
  }

  console.log(getUniqueArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

  return <div>RemoveDuplicates</div>;
};

export default RemoveDuplicates;

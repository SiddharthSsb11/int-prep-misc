import React from "react";
// Ques 4 : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array.

// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

const SlidingWindowMax = () => {
  const maxSlidingWindowQueue = function (nums, k) {
    const result = [];
    const deque = [];

    for (let i = 0; i < nums.length; i++) {
      // Step 1: Remove indices out of the current window
      if (deque.length > 0 && deque[0] <= i - k) {
        deque.shift();
      }

      // Step 2: Maintain decreasing order in the deque
      while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop();
      }

      // Step 3: Add the current index to the deque
      deque.push(i);

      // Step 4: Record the maximum for each window
      if (i >= k - 1) {
        result.push(nums[deque[0]]);
      }
    }

    return result;
  };

  // Time Complexity - O(n)
  // Space Complexity - O(n)
  console.log(maxSlidingWindowQueue([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Output: [3, 3, 5, 5, 6, 7]

  // deque (double-ended queue)
  return <div>SlidingWindowMax</div>;
};

export default SlidingWindowMax;

// i	nums[i]	deque	Explanation	Code	result
// 0	1	[0]	Step 3: Add 0 to deque because it's empty.	deque.push(i);	[]
// 1	3	[1]	Step 2: Remove 0 because 3 > 1. Step 3: Add 1.	deque.pop(); deque.push(i);	[]
// 2	-1	[1, 2]	Step 3: Add 2 since 3 > -1.	deque.push(i);	[3]
//                  Step 4: i >= k - 1, so add nums[1] = 3 to result.	result.push(nums[deque[0]]);
// 3	-3	[1, 2, 3]	Step 3: Add 3 since -1 > -3.	deque.push(i);	[3, 3]
// Step 4: i >= k - 1, so add nums[1] = 3 to result.	result.push(nums[deque[0]]);
// 4	5	[4]	Step 1: Remove 1 (out of bounds). Step 2: Remove 3 and 2 because 5 > -1 and -3. Step 3: Add 4.	deque.shift(); deque.pop(); deque.push(i);	[3, 3, 5]
// Step 4: i >= k - 1, so add nums[4] = 5 to result.	result.push(nums[deque[0]]);
// 5	3	[4, 5]	Step 3: Add 5 because 5 > 3.	deque.push(i);	[3, 3, 5, 5]
// Step 4: i >= k - 1, so add nums[4] = 5 to result.	result.push(nums[deque[0]]);
// 6	6	[6]	Step 2: Remove 5 and 4 because 6 > 3 and 5. Step 3: Add 6.	deque.pop(); deque.push(i);	[3, 3, 5, 5, 6]
// Step 4: i >= k - 1, so add nums[6] = 6 to result.	result.push(nums[deque[0]]);
// 7	7	[7]	Step 2: Remove 6 because 7 > 6. Step 3: Add 7.	deque.pop(); deque.push(i);	[3, 3, 5, 5, 6, 7]
// Step 4: i >= k - 1, so add nums[7] = 7 to result.	result.push(nums[deque[0]]);

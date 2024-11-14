// Ques 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([]{})"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false

import React from "react";

const validParenthesis = () => {
  const isEmpty = (stack) => stack.length === 0;

  const validParenthesisCheck = (arr) => {
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
      let char = arr[i];
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else if (char === ")" || char === "}" || char === "]") {
        if (isEmpty(stack)) {
          return false;
        }
        const top = stack.pop();
        if (
          (char === ")" && top !== "(") ||
          (char === "}" && top !== "{") ||
          (char === "]" && top !== "[")
        ) {
          return false;
        }
      }
    }

    return isEmpty(stack);
  };

  console.log(validParenthesisCheck("([{}])"));
  console.log(validParenthesisCheck("([{])"));

  return <div>valid-parentheses</div>;
};

export default validParenthesis;

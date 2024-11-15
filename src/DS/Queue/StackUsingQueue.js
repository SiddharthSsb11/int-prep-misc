import React from "react";

// Ques 2 : Implement Stack using Queues
// Implement a last -in -first - out(LIFO) stack using only two queues.
// The implemented stack should support all the functions of a stack (push, top, pop, and empty).

const StackUsingQueue = () => {
  class MyStack {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    }
    push(value) {
      while (this.q1.length !== 0) {
        this.q2.push(this.q1.shift());
      }

      this.q1.push(value);

      while (this.q2.length !== 0) {
        this.q1.push(this.q2.shift());
      }
    }
    pop() {
      return this.q1.shift();
    }
    top() {
      if (this.q1.length === 0) return false;
      return this.q1[0];
    }
    empty() {
      return this.q1.length === 0;
    }
  }

  const stack = new MyStack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  console.log(stack.top(), "----", stack.pop(), "-----", stack);
  return <div>StackUsingQueue</div>;
};

export default StackUsingQueue;

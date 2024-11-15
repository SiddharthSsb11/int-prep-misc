import React from "react";

const QueueUsingStack = () => {
  // Ques 3 : Implement Queue using Stacks
  // Implement a first in first out(FIFO) queue using only two stacks.
  // The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).

  var MyQueue = function () {
    this.stack1 = []; //for enqueuing elements
    this.stack2 = []; // used for dequeuing elements
  };

  MyQueue.prototype.enqueue = function (x) {
    this.stack1.push(x);
  };

  // stack1 = [9,10]
  // stack2 = []

  MyQueue.prototype.dequeue = function () {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  };

  MyQueue.prototype.front = function () {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2[this.stack2.length - 1];
  };

  MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0;
  };

  const queue = new MyQueue();
  queue.enqueue(3);
  queue.enqueue(6);
  queue.enqueue(7);
  queue.dequeue();
  console.log(queue.front());

  //   Why We Use the Transfer:
  // Correctly Identify Front Element: By transferring elements from stack1 to stack2 when stack2 is empty,
  // we ensure that the elements in stack2 preserve the order of insertion when accessed as a stack.
  // The top element of stack2 will always reflect the correct front of the queue.
  // This allows us to maintain the queue’s FIFO behavior despite using stacks (which are LIFO).
  // Summary:
  // Using stack1[0] would give incorrect results when elements have been moved to stack2.
  // The transfer from stack1 to stack2 ensures the queue maintains the correct order of elements,
  //allowing stack2's top to represent the true front of the queue.
  // Thus, we need to use stack2 for front() when it is not empty, rather than directly accessing stack1[0].

  return <div>QueueUsingStack</div>;
};

export default QueueUsingStack;

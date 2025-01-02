// Ques 1 - What is Event Loop?
/*
  Javascript is single threaded and The event loop is responsible for how its
  asynchronous behavior happens.
  The event loop is like a traffic controller in JavaScript that manages the execution of code.
  It ensures tasks are processed in an orderly manner, handling asynchronous operations
  by continuously checking if there are pending tasks in queues(microtasks and macrotasks). 
*/

// Ques 2 - Why we need event loop to manage these task queue and microtask queue?

console.log("1");
setTimeout(function () {
  console.log("2");
}, 0);
console.log("3");
console.log("4");
// 1
// 3
// 4
// 2

// Micro-task Queue
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then(function a(response) {
    console.log("Fetch completed:", response[0]);
  })
  .catch(function c(error) {
    console.error("Fetch error:", error);
  });

Promise.resolve().then(function b() {
  console.log("Promise resolved");
});

Promise.reject().catch(function c() {
  console.log("Promise rejected");
});

// Promise resolved
// Promise rejected
// Fetch completed: { userId: 1, id: 1, title: "sample title" }

setTimeout(() => console.log("Async 1"), 0);

console.log("Sync 2");

fetch(
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
).then(() => console.log("Promise 3"));

console.log("Sync 4");

// Sync 2
// Sync 4
// Async 1
// Promise 3 // fetch at last
// if any timer vlue given to settimeout, then chaces of promise 3 b4 async 1
// fetch request might take some time

function tenth() {
  console.log(10);
}

function ninth() {
  tenth();
  console.log(9);
}

function eigth() {
  ninth();
  console.log(8);
}

function seventh() {
  console.log(7);
  eigth();
}

function sixth() {
  seventh();
  console.log(6);
}

function fifth() {
  console.log(5);
  sixth();
}

function fourth() {
  console.log(4);
  fifth();
}

function third() {
  fourth();
  console.log(3);
}

function second() {
  console.log(2);
  third();
}

function first() {
  console.log(1);
  second();
}

first();
// 1
// 2
// 4
// 5
// 7
// 10
// 9
// 8
// 6
// 3

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise 1");
  });

  setTimeout(() => {
    console.log("Timeout 3");
  }, 0);
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 2");

  setTimeout(() => {
    console.log("Timeout 2");
  }, 0);
});

async function asyncFunction() {
  console.log("Async 1");

  await Promise.resolve();
  console.log("Async 2");

  await null;
  console.log("Async 3");
}

Promise.reject().catch(function c() {
  console.log("Promise rejected");
});
Promise.resolve().then(function b() {
  console.log("Promise resolved");
});

asyncFunction();

// Async 1
// Promise 2
// Promise rejected
// Promise resolved
// Async 2
// Async 3
// Timeout 1
// Promise 1
// Timeout 2
// Timeout 3

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise 1");
  });

  setTimeout(() => {
    console.log("Timeout 3");
  }, 0);
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 2");

  setTimeout(() => {
    console.log("Timeout 2");
  }, 0);
});

function fourth() {
  console.log(4);
  // fifth();
}

function third() {
  fourth();
  console.log(3);
}

const second = () => {
  console.log(2);
  third();
};

function first() {
  console.log(1);
  second();
}

async function asyncFunction() {
  console.log("Async 1");

  await Promise.resolve();
  console.log("Async 2");

  await null;
  console.log("Async 3");
}

Promise.reject().catch(function c() {
  console.log("Promise rejected");
});
Promise.resolve().then(function b() {
  console.log("Promise resolved");
});
asyncFunction();

first();

// Async 1
// 1
// 2
// 4
// 3
// Promise 2
// Promise rejected
// Promise resolved
// Async 2
// Async 3
// Timeout 1
// Promise 1
// Timeout 2
// Timeout 3

//if asyncfunction() moved to line 211 o/p order will change as follows, because of await null
// Async 1
// 1
// 2
// 4
// 3
// Promise 2
// Async 2
// Promise rejected
// Promise resolved
// Async 3
// Timeout 1
// Promise 1
// Timeout 2
// Timeout 3

fetch(
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
).then(() => console.log("1"));
setTimeout(() => console.log("Async 1"), 0);
Promise.resolve().then(function b() {
  console.log(2);
});

Promise.reject().catch(function c() {
  console.log(3);
});
// 2
// 3
// Async 1
// 1

const GOOGLE = "https://www.google.com";
const NEWS = "https://www.news.google.com";

/* b, c, after */
Promise.all([
  fetch(GOOGLE).then(function b() {}),
  fetch(GOOGLE).then(function c() {}),
]).then(function after() {});

/* b, after, c */
// Promise.race([
//   fetch(GOOGLE).then(function b() {}),
//   fetch(GOOGLE).then(function c() {}),
// ]).then(function after() {});

/* c, after, b */
// Promise.race([
//   fetch(NEWS).then(function b() {}),
//   fetch(GOOGLE).then(function c() {}),
// ]).then(function after() {});

Promise.resolve()
  .then(function a() {
    console.log("a");
    Promise.resolve().then(function d() {
      console.log("d");
    });
    Promise.resolve().then(function e() {
      console.log("e");
    });
    throw new Error("OH TEH NOEZ!");
    Promise.resolve().then(function f() {
      console.log("f");
    });
  })
  .catch(function b() {
    console.log("b");
  })
  .then(function c() {
    console.log("c");
  });

// a;
// d;
// e;
// b;
// c;

Promise.resolve()
  .then(function a() {
    console.log("asyncFunction");
    Promise.resolve().then(function c() {
      console.log("c");
    });
  })
  .then(function b() {
    console.log("b");
    Promise.resolve().then(function d() {
      console.log("d");
    });
  });
//   asyncFunction
//   c
//   b
//   d

const pause = (millis) =>
  new Promise((resolve) => {
    setTimeout(async () => {
      await Promise.resolve();
      console.log("Async 2");

      await null;
      console.log("Async 3");
      console.log("Resolving...");
      resolve(); // This manually calls the resolve function after the timeout
    }, millis);
  });
const start = Date.now();
console.log("Start");

pause(1000).then(() => {
  console.log("Mid");
  const end = Date.now();
  const secs = (end - start) / 1000;
  console.log("End:", secs);
});
// Start
// (after 1 second)
// Resolving... (if you add a log in the resolve function)
// Mid
// End: 1

const pause = (millis) =>
  new Promise((resolve) => {
    setTimeout(async () => {
      console.log("Resolving...");
      resolve(); // This manually calls the resolve function after the timeout
    }, millis);
  });
const start = Date.now();
pause(1000).then(() => {
  console.log("Mid");
  const end = Date.now();
  const secs = (end - start) / 1000;
  console.log("End:", secs);
});
async function asyncFunction() {
  console.log("Async 1");

  await Promise.resolve();
  console.log("Async 2");

  await null;
  console.log("Async 3");
}

asyncFunction();

console.log("Start");
fetch(
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
).then(() => console.log("fetch 1"));
setTimeout(() => console.log("set 1"), 0);
Promise.resolve().then(function b() {
  console.log("p2");
});

Promise.reject().catch(function c() {
  console.log("p3");
});
//   Async 1
//   Start
//   Async 2
//   p2
//   p3
//   Async 3
//   set 1
//   fetch 1
//   Resolving...
//   Mid
//   End: 1.002

function isPrime(n) {
  console.log("--isPrime--");
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function computePrimes(onPrime, startAt = 1) {
  let currNum;
  for (currNum = startAt; currNum % 5 !== 0; currNum++) {
    console.log("--for--");
    if (isPrime(currNum)) onPrime(currNum);
  }
  setTimeout(() => {
    conosle.log("set");
    computePrimes(onPrime, currNum + 1);
  }, 0);
}

computePrimes((prime) => {
  console.log("--compute--");
  console.log(prime);
});

//   Step 1: First Call to computePrimes
// Start with currNum = 1.
// The loop iterates over numbers until currNum % 5 === 0.
// Iteration 1 (currNum = 1):

// "--for--" is logged.
// isPrime(1) is called:
// "--isPrime--" is logged.
// The loop inside isPrime does not run (as i = 2 and n = 1).
// isPrime(1) returns true.
// onPrime(1) is called:
// "--compute--" is logged.
// Prime number 1 is logged.
// The "set" console log is executed at the end of each block of numbers (when currNum % 5 === 0) and before the next asynchronous call to computePrimes begins.
// After processing 1 to 4 (when currNum = 5).
// After processing 6 to 9 (when currNum = 10).
// After processing 11 to 14 (when currNum = 15), and so on.

console.log([] == ![]); // true '' == 0 //becoz of type coercion

blockMainThread();

console.log("Start");

function blockMainThread() {
  const start = Date.now();
  while (Date.now() - start < 3000) {}
  console.log("running..");
}

console.log("End");

// running... start end

setTimeout(function a() {
  console.log("a");
}, 1000);

setTimeout(function b() {
  console.log("b");
}, 500);

setTimeout(function c() {
  console.log("c");
}, 0);

function d() {
  console.log("d Runs");
}

d();

// Task queue - a b c
// call stack -

// d Runs
// c
// b
// a

function b() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, i * 1000);
  }
}

b(); // 3 3 3

function a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, i * 1000);
  }
}

a();

// Task Queue - log() log() log()
//                0     1     2

Promise.resolve()
  .then(function a() {
    Promise.resolve().then(
      setTimeout(function d() {
        console.log("d Runs");
      }, 0)
    );
    Promise.resolve().then(function e() {
      console.log("e Runs");
    });
    throw new Error("Error Occured!");
    Promise.resolve().then(function f() {
      console.log("f Runs");
    });
  })
  .catch(function b() {
    console.log("b Runs");
  })
  .then(function c() {
    console.log("c Runs");
  });

// Task Queue -
// Micro task queue -
// Call Stack -

// e runs
// b runs
// c runs
// d runs
new Promise((resolve) => {
  console.log(8); //always goes inside new Constructor func
  resolve(8);
}).then((value) => {
  console.log(value + 1);
});
console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
fetch(
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
).then(() => console.log(" fetch 1"));
setTimeout(() => console.log("set 1"), 0);
Promise.resolve().then(function b() {
  console.log("p2");
});
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));
console.log(7);

/**
 * 8, 1, 7
 * macro task: [
 * () => console.log(2), () => console.log("set 1"), () => console.log(6)]
 * micro task: [(value)=>{console.log(value+1)}, () => console.log(3), function b() {console.log("p2")}; () => setTimeout(() => console.log(4)), () => console.log(5)]
 */
//  () => setTimeout(() => console.log(4)) this line inside .then will be moved to macrotask queue and will be plasced at last inside macro task

// 8
// 1
// 7
// 9
// 3
// p2
// 5
// 2
// set 1
// 6
// 4
// fetch 1

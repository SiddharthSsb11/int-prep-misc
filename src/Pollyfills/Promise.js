import React from "react";

const Promise = () => {
  function PromisePolyFill(executor) {
    let onResolve,
      onReject,
      fulfilled = false,
      rejected = false,
      called = false,
      value;

    function resolve(v) {
      fulfilled = true;
      value = v;

      if (typeof onResolve === "function") {
        // for async
        console.log("inside resolve");
        onResolve(value);
        called = true;
      }
    }

    function reject(reason) {
      rejected = true;
      value = reason;

      if (typeof onReject === "function") {
        onReject(value);
        called = true;
      }
    }

    this.then = function (callback) {
      onResolve = callback;

      if (fulfilled && !called) {
        // for sync
        console.log("inside then");
        called = true;
        onResolve(value);
      }
      return this;
    };

    this.catch = function (callback) {
      onReject = callback;

      if (rejected && !called) {
        called = true;
        onReject(value);
      }
      return this;
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  const promise1 = new PromisePolyFill((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      resolve(2);
    }, 1000);
    console.log(3);
  });

  promise1.then((res) => {
    console.log(res);
  });

  const examplePromise = new PromisePolyFill((resolve, reject) => {
    resolve(2);
  });

  examplePromise
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  PromisePolyFill.resolve = (val) =>
    new PromisePolyFill(function executor(resolve, reject) {
      resolve(val);
    });

  PromisePolyFill.reject = (val) =>
    new PromisePolyFill(function executor(resolve, reject) {
      reject(val);
    });

  function importantAction(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Subscribe to ${username}`);
      }, 1000);
    });
  }

  function likeTheVideo(video) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(`not likeable ${video}`);
      }, 1000);
    });
  }

  function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Share the ${video} video`);
      }, 1000);
    });
  }
  Promise.myAllPollyfill = function (promises) {
    return new Promise((resolve, reject) => {
      const results = [];
      if (!promises.length) {
        resolve(results);
        return;
      }

      let pending = promises.length;

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((res) => {
            results[index] = res;
            pending--;

            if (pending === 0) {
              resolve(results);
            }
          })
          .catch((error) => {
            // Immediately reject on the first error encountered
            console.log("initial error", error);
            reject(error);
            // throw error;
          });
      });
    });
  };

  Promise.myAllPollyfill([
    importantAction("XYZ Channel"),
    likeTheVideo("Post match press conference"),
    shareTheVideo("Share the video"),
  ])
    .then((res) => {
      console.log("--then block...");
      console.log(res);
    })
    .catch((error) => {
      console.log("--catch block--");
      console.log("failed----:", error);
    });

  return <div>Promise</div>;
};

export default Promise;

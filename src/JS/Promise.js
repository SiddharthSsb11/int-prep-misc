// A Promise is an object representing the eventual completion or failure of an asynchronous operation

import React from "react";

const Promise = () => {
  // A Promise is an object representing the eventual completion or failure of an asynchronous operation

  // Question 7 : Promises Chaining

  const firstPromise = new Promise((resolve, reject) => {
    resolve("First!");
  });

  const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise);
  });

  secondPromise.then((res) => res).then((res) => console.log(res));

  // Question 9 : Solve Promise Recursively

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
        resolve(`Like the ${video} video`);
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

  function promRecurse(funcPromises) {
    if (funcPromises.length === 0) return;
    const promi = funcPromises.shift();

    promi
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    promRecurse(funcPromises);
  }

  promRecurse([
    importantAction("Roadside Coder"),
    likeTheVideo("Javascript Interview Questions"),
    shareTheVideo("Javascript Interview Questions"),
  ]);

  return <div>Promise</div>;
};

export default Promise;

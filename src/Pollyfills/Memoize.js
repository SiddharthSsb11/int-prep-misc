import React from "react";

const Memoize = () => {
  function clumsyProduct(num1, num2) {
    for (let i = 0; i < 1000000; i++) {
      return num1 * num2;
    }
  }

  function memoize(func, context) {
    // let res = {};

    return function (...args) {
      console.log(args);
      const cache = new Map();

      const key = JSON.stringify(args);
      console.log("--key---", key);
      // console.log(cache.has(key));

      if (cache.has(key)) {
        console.log("Fetching from cache for arguments:", args);
        return cache.get(key);
      }

      const result = func.apply(this, args);
      cache.set(key, result);
      return result;

      //   const argsCache = JSON.stringify(args);
      //   console.log(argsCache, "argsCache", key, "----key--");
      //   console.log("res[argsCache] early----", res[argsCache]);
      //   if (!res[argsCache]) {
      //     res[argsCache] = func.call(context || this, ...arguments);
      //   }

      //   return res[argsCache];
      //console.log((res[argsCache] = func.apply(context || this, args)));
      // console.log("res[argsCache]", res[argsCache]);
    };
  }

  const memoizedProduct = memoize(clumsyProduct);

  console.time("--firstCalll---");
  console.log(memoizedProduct(12, 2));
  console.timeEnd("---fistcalll----");

  console.time("----second call---");
  console.log(memoizedProduct(12, 2));
  console.timeEnd("------ secondcall---");

  // const cache = new Map();
  // console.log(cache);

  return <div>Memoize</div>;
};

export default Memoize;

// A memoization function caches the results of expensive function calls based on the input arguments, so if the function is called again with
// the same arguments, it can return the cached result instead of recomputing it. This can be particularly useful for functions with expensive computations.

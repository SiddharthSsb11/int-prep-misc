/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
// DO NOT CHANGE FUNCTION Namespace

function isPlainObject(value) {
  // {} => true
  // new Set() => false

  if (value === null || typeof value !== "object") {
    return false;
  }

  // value's prototype (value.constructor.prototype)
  // value.constructor.prototype === Object.prototype
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

function findType(value) {
  // the aim of this function is to determine
  // input value's type
  // array, object, number, string, boolean
  // invalid

  if (Array.isArray(value)) {
    return "array";
  } else if (isPlainObject(value)) {
    // {}
    return "object";
  } else {
    const type = typeof value;

    return ["number", "string", "boolean"].includes(type) ? type : "invalid";
  }
}

function promiseMerge(...promises) {
  // write your solution below
  return new Promise((resolve, reject) => {
    // [p1, p2 ...pN];
    // [r1, r2, ...];

    if (promises.length === 0) {
      return reject(new TypeError("invalid arguments"));
    }

    Promise.all(promises)
      .then((results) => {
        let response = null;
        // results: [1,2]
        // typeof results[0] => number
        const type = findType(results[0]);

        for (let i = 1; i < results.length; i++) {
          const currentItemType = findType(results[i]);

          if (currentItemType !== type) {
            return reject(new TypeError("invalid types"));
          }
        }

        if (type === "number" || type === "string") {
          response = results.reduce(
            (acc, current) => {
              acc += current;

              return acc;
            },
            type === "string" ? "" : 0
          );
        } else if (type === "array") {
          // [].concat([1,2], [3,4], [5,6])
          // [1,2,3,4,5,6]
          response = [].concat(...results);
        } else if (type === "object") {
          // Object.assign({}, {a: 1}, { b: 2} ...)
          // { a: 1, b: 2, ... }
          response = Object.assign({}, ...results);
        } else if (type === "boolean") {
          response = results.reduce((acc, current) => {
            acc = acc && current;

            return acc;
          }, true);
        } else {
          return reject(new TypeError("invalid type"));
        }

        return resolve(response);
      })
      .catch(reject);
  });
}

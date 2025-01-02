function deepEqual(obj1, obj2) {
  let keyArr1 = Object.keys(obj1);
  let keyArr2 = Object.keys(obj2);

  if (keyArr1.length !== keyArr2.length) return false;
  for (let key of keyArr1) {
    const value1 = obj1[key];
    const value2 = obj2[key];
    const isObjects = isObject(value1) && isObject(value2);
    if (!isObjects && value1 !== value2) {
      return false;
    }
    if (isObjects && !deepEqual(value1, value2)) {
      return false;
    }
  }
  return true;
}

function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

const a = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};

const b = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};

const c = {
  a: 1,
  b: {
    c: 2,
    d: [3, 5],
  },
};

console.log(deepEqual(a, b));

console.log(deepEqual(a, c));

function customAssign(target, ...sources) {
  // Step 1: Ensure the target is not null or undefined
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  // Step 2: Convert target to an object in case it's a primitive (e.g., string or number)
  const to = Object(target);

  // Step 3: Iterate over all source objects passed as arguments
  for (const source of sources) {
    // Skip null or undefined sources
    if (source != null) {
      // Step 4: Iterate over each key in the source object
      for (const key in source) {
        // Check if the key is the source's own property
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          // Step 5: Copy the property to the target object
          to[key] = source[key];
        }
      }
    }
  }

  // Step 6: Return the modified target object
  return to;
}
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3, d: 4 };

// Target starts as { a: 1 }
// After copying source1: { a: 1, b: 2 }
// After copying source2: { a: 1, b: 2, c: 3, d: 4 }

const result = customAssign(target, source1, source2);
console.log(result); // { a: 1, b: 2, c: 3, d: 4 }

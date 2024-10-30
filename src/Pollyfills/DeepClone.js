import React from "react";

const DeepClone = () => {
  function deepClone(obj) {
    // Handle null and non-object types
    if (obj === null || typeof obj != "object") {
      return obj;
    }

    // Create a new object or array based on the type of the input object
    var clone = Array.isArray(obj) ? [] : {};

    // Iterate through each key in the input object
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }

    return clone;
  }
  return <div>DeepClone</div>;
};

export default DeepClone;

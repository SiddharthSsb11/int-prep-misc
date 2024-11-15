import React from "react";

const ReverseString = () => {
  const reverseString = (str) => {
    if (str === "") return str;
    console.log("early----", str.substr(1), str.charAt(0));
    const reversed = reverseString(str.substr(1)) + str.charAt(0);
    // console.log(
    //   "----reversed-----",
    //   reversed,
    //   "----str.cahr0----",
    //   str.charAt(0)
    // );

    return reversed;
  };

  const reverseStringOptimized = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  };

  console.log(reverseString("hello"));
  return <div>ReverseString</div>;
};

export default ReverseString;

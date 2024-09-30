import React from "react";

const Undefined = () => {
  var a;
  a = "string";
  console.log(a); //'string'
  a = 10;
  console.log(a); //10

  return <div>Undefined</div>;
};

export default Undefined;

import React from "react";

const LetConstVar = () => {
  let a;
  console.log(a);
  const countersCount = 6;

  const countersArray = [...Array(countersCount).keys()];
  console.log(countersArray);
  return <div>LetConstVar</div>;
};

export default LetConstVar;

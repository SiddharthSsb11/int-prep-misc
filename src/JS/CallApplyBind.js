import React from "react";

const CallApplyBind = () => {
  // Question 6 : Output

  var status = "😎";

  setTimeout(() => {
    const status = "😍";

    const data = {
      status: "🥑",
      getStatus() {
        return this.status;
      },
    };

    console.log(data.getStatus()); // "🥑"
    console.log(data.getStatus.call(this)); //  "😎"; //
    //this never points to the func but the context of the func (window obj context for setitmeout) its is in
  }, 0);

  // Question 7 : Call printAnimals such that it prints all animals in object

  const animals = [
    { species: "Lion", name: "King" },
    { species: "Whale", name: "Queen" },
  ];

  function printAnimals(i) {
    this.print = function () {
      console.log("#" + i + " " + this.species + ": " + this.name);
    };
    this.print();
  }

  for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i);
  }

  // Question 8 : apply to append an array to another

  const array = ["a", "b"];
  const elements = [0, 1, 2];
  array.push.apply(array, elements);
  console.info(array);

  // Question 9 - Using apply to enhane built-in functions

  // Find min/max number in an array
  const numbers = [5, 6, 2, 3, 7];

  console.log(Math.max.apply(null, numbers));

  // Question 10 : How will you Create a bound function

  function f() {
    alert(this); // window obj
  }

  let user = {
    g: f.bind(null),
  };

  user.g(); // window obj is printed

  // Question 11 : Bind Chaining?

  function f2() {
    alert(this.name);
  }

  const f3 = f2.bind({ name: "John" }).bind({ name: "Ann" });

  f3(); // John //once a function is binded to an obj , f3 cant be binded further, bind chaining doesnt work

  return <div>CallApplyBind</div>;
};

export default CallApplyBind;

import React from "react";

const This = () => {
  let user = {
    name: "Piyush",
    age: 24,
    childObj: {
      newName: "Coder",
      getDetails() {
        console.log(this.newName, "and", this.name); //newNamw get consoled and this.name doesnt
      },
    },
  };

  // value of this in an arrow object comes from its parent function, in below case the getDetails parent function this value is coming from user2
  let user2 = {
    firstName: "sid",
    getName: () => {
      console.log("first---".this.firstName); //syntax error as no here this points to parent function (window obj) and no firstname in there
    },
    getDetails() {
      const nestedArrow = () => {
        console.log("nested----", this.firstName);
      };
      nestedArrow();
    },
  };

  user2.getDetails(); // sid

  var length = 4;
  function callback() {
    console.log(this.length); // What is logged?
  }
  const object = {
    length: 5,
    method(fn) {
      fn();
    },
    methodNew() {
      arguments[0]();
    },
  };
  object.method(callback); //4 because the callback function parent env is window object and in window obj length is 4
  object.methodNew(callback, 1, 2); //3, bcoz arguments is an array(obj) itself and in here it comprises of 3 itmes,
  //this length here points to the args[]

  const result = calc.add(10).multiply(5).subtract(30).add(10);
  console.log(result.total);

  // My Answer
  var calc = {
    total: 0,
    add(a) {
      this.total += a;
      return this; //return whole objects. then only we can chain further methods as asked above
    },
    subtract(a) {
      this.total -= a;
      return this;
    },
    multiply(a) {
      this.total *= a;
      return this;
    },
  };

  return <div>This</div>;
};

export default This;

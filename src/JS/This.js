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

  function makeUser() {
    return {
      name: "John",
      ref: this,
      ref2() {
        return this;
      },
    };
  }

  let user3 = makeUser();

  console.log(user3.ref.name); // nothing vonsoled.// bcoz this points towards the functions parents env where its been created or called
  // in here the makeUser is called in global env
  console.log(user3.ref2().name); //john // ref2() return 'this'..which is the obj itself

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
  //this never points to the func but the context of the func its is in
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

  const user4 = {
    name: "Sid!",
    logMessage() {
      console.log(this.name);
    },
  };
  setTimeout(user4.logMessage, 1000); //nothing //bcoz setTimeout is using user4.logMessage as a call back and will get executed in a separate context
  // hence will not have acces to the the user4 obj and will point to window obj with no 'name'
  setTimeout(function () {
    user4.logMessage(); // Sid
  }, 1000);

  return <div>This</div>;
};

export default This;

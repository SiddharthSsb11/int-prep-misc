import React from "react";

const Closures = () => {
  const outer = function (num) {
    const a = 10;
    function inner() {
      console.log(a + num);
    }
    return inner;
  };

  const innerFunction = outer(6);
  // innerFunction(); // outer()();

  //setimeout and closures

  for (var i = 0; i < 3; i++) {
    //let can be used simply or var can be used to print 123 but after like this using closures adding a function btw
    function inner(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    inner(i);
  }

  // Question 7 : How would you use a closure to create a private counter?

  function counter() {
    var _counter = 0;

    function add(increment) {
      _counter += increment;
    }

    function retrive() {
      return "Counter = " + _counter;
    }

    return {
      add,
      retrive,
    };
  }
  const c = counter();
  c.add(5);
  c.add(10);
  console.log(c.retrive());

  // Question 8 : Module Pattern :

  var module = (function () {
    function privateMethod() {
      console.log("private");
    }
    return {
      publicMethod: function () {
        console.log("public");
      },
    };
  })();
  module.publicMethod();
  module.privateMethod();

  return <div>Closures</div>;
};

export default Closures;

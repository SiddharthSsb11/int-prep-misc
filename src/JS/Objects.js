import React from "react";

const Objects = () => {
  // Question 4 : Output (Important)

  const a = {};
  const b = { key: "b" };
  const c = { key: "c" };

  a[b] = 123;
  a[c] = 456;

  console.log(a[b]); //op 456 // a["[object Object]"] = 123 // a["[object Object]"] = 456 // since the object cant be assigned as a key to our obj 'a'
  // until and iunless its in the form of a string // thats why we simply replace the a ["[object Object]"] with 123 and 456

  // Question 14 : Output

  let person = { name: "Lydia" };
  const members = [person];
  person = null;

  console.log(members);

  // Question 15 : Output

  const value = { number: 10 };

  const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
  };

  multiply(); //20
  multiply(); //20
  multiply(value); //20
  multiply(value); //40 //because her we are not going with the default value which is cloning the obj 'value', here & prev we are directly passing obj 'value'
  // as arg and the value is getting changes accordingly

  let aa = { name: "sid", work: "xyz" };
  let bb = a;
  bb.name = "siddie";
  console.log(aa.name); //siddie

  function changeAgeAndReference(person) {
    person.age = 25;
    person = {
      name: "John",
      age: 50,
    };

    return person;
  }

  const personObj1 = {
    name: "Alex",
    age: 30,
  };

  const personObj2 = changeAgeAndReference(personObj1);

  console.log(personObj1); // -> ?  { name: "Alex", age: 30,};
  console.log(personObj2); // -> ?{ name: "John ", age: 50,};

  return <div>Objects</div>;
};

export default Objects;

//------------2. ES6 Refresher---------
// Objects
/*const person = {
  name: "Mahya",
  talk() {},
  walk() {},
};
person.talk();
const targetMember = "name";
person[targetMember] = "Mary";*/

// The this Keyword
/*const person = {
  name: "Mahya",
  walk() {
    console.log(this);
  },
};
person.walk();
const walk = person.walk.bind(person);
walk();*/

//Arrow Functions
/*const square = (number) => number * number;
console.log(square(5));
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];
const activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs);*/

//Arrow Functions and this
/*const person = {
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};
person.talk();*/

// Array.map
/*const colors = ["red", "green", "blue"];
const items = colors.map((color) => `<li${color}</li>`);
console.log(items);*/

//  Object Destructuring
/*const address = {
  street: "st",
  city: "",
  country: "",
};
const { street } = address;
console.log(street);*/

// Spread Operator
/*const firt = { name: "Mahya" };
const second = { job: "student" };
const combined = { ...firt, ...second, location: "Iran" };
console.log(combined);*/

// classes and Inheritance and Modules
/*import { Teacher } from "./teacher";
const teacher = new Teacher("Mahya", "MSc");
teacher.teach();*/

// Named and Default Exports
/*import Teacher, { promote } from "./teacher";
import React, { Component } from "react";
const teacher = new Teacher("Mahya", "MSc");
teacher.teach();*/

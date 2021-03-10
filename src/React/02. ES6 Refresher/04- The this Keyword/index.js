const person = {
  name: "Mahya",
  walk() {
    console.log(this);
  },
};
person.walk();
const walk = person.walk.bind(person);
walk();

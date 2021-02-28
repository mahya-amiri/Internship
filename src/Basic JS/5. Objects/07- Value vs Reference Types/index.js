// Value vs Reference Types
let x = 10;
let y = x;
x = 25;
console.log(x); //25
console.log(y); //10

let a = {value : 12};
let b = a;
a.value = 27;
console.log(a); //27
console.log(b); //27

// Reducing an Array
const numbers = [1, 2, -1, 3];
/*let sum0 = 0;
for (let n of numbers)
    sum0 += n;
console.log(sum0); It was old*/
let sum = numbers.reduce(
    (sumAll, currentValue) => sumAll + currentValue);
console.log(sum);

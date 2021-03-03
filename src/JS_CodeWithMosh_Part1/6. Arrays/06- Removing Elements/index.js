// Removing Elements
const numbers = [1, 2, 3, 4, 5, 6, 7];
// End
const last = numbers.pop();
console.log(last);
console.log(numbers);

// First
const first = numbers.shift();
console.log(numbers);

// Middle (now nymbers = [2,3,4,5,6] and we want to Deleting 4)
const middle = numbers.splice(2,1);
console.log(numbers);

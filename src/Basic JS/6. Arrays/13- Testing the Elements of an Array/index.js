// Testing the elements of an Array
const numbers = [1, 2, -1, 3, 4];
const Positive = numbers.every(function(value){
    return value > 0;
});
console.log(Positive);

const somePositive = numbers.some(function(value){
    return value > 0;
});
console.log(somePositive);

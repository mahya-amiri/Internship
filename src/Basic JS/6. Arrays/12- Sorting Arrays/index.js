// Sorting Arrays
const numbers = [2,4,1,9];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

const courses = [
    {id:1, name:'Node.js'},
    {id:2, name:'javaScript'}
];
courses.sort(function(a, b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(courses);

// finding elements
// Primitive Types
const numbers = [1, 2, 3, 4];
console.log(numbers.indexOf(1,2)); 

// Refrence Type
const courses = [
    {id:1, name:'a'},
    {id:2, name:'b'}
];
const foundCourse = courses.findIndex(function(course) {
    return course.name === 'a';
})
console.log(foundCourse);

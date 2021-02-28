// Arrow Functions
const courses = [
    {id:1, name:'a'},
    {id:2, name:'b'}
];
const foundCourse = courses.findIndex(course => course.name === 'b');
console.log(foundCourse);

// For-in
const person = {
    name: 'Mahya', age: 22
}
for (let key in person)
    console.log(key, person[key]);

const colors = ['red', 'green', 'yellow'];
for (let index in colors) 
    console.log(index, colors[index]);

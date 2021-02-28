// Cloning an Object
const circle = {
    radius: 1,
    draw(){
        console.log('DRAW');
    }
};
const another = { ... circle };
console.log(another);

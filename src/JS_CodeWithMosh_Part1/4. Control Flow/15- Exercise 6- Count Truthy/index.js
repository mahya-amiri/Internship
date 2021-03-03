// Exercise 6- Count Truthy
function countTruthy(array){
    let count = 0;
    for (let key of array)
        if (key)
            count++;
    return count;
    
}
const array = [0, null ,8 ,7];
console.log(countTruthy(array));

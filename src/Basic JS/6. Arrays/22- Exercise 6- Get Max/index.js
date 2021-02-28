// Exercise 6- Get Max
const numbers = [-8, 2, 3, 4, 50, 6];
const max1 = getMax(numbers);
console.log(max1);

function getMax (array){
    if (array.length === 0) return undefined;
    // let max = array[0];
    // for (let i = 1; i < array.length; i++)
    //         if (array[i] > max)
    //             max = array[i];
    // return max;
    return array.reduce((accumulator, current) => 
    (current > accumulator) ? current : accumulator
    );
}

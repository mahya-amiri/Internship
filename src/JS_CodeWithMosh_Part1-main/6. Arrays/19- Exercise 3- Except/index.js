// Exercise 3- Except
const numbers = [1, 2, 3, 4, 1];
const output1 = except (numbers, [1, 2]);
console.log(output1);

function except(array, excluded) {
    const output = [];
    for (let n of array)
        if (!excluded.includes(n))
            output.push(n);
    return output;
}

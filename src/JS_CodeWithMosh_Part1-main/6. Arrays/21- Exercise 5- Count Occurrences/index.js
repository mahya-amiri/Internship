// Exercise 5- Count Occurrences
const numbers = [1, 2, 3, 4, 5, 4];
const count = countOccurences (numbers, 4);
console.log(count);

function countOccurences(array, searchElement) {
    // let count = 0
    // for (let element of array)
    //     if (element === searchElement)
    //     count ++;
    // return count;  
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, occurrence);
        return accumulator + occurrence;
    }, 0);
}

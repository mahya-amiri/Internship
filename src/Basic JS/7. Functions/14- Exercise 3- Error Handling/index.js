try{
    const numbers = [1, 2, 3, 4];
    const count = countOccurences (null, 1);
    console.log(count);
}
catch (e){
    console.log(e.message);
}
function countOccurences(array, searchElement) {
   if (!Array.isArray(array))
    throw new Error('Invalid!!!');
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

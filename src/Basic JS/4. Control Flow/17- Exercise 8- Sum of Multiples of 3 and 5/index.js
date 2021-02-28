// Exercise 8- Sum of Multiples of 3 and 5
function sum(limit){
     let Sum = 0;

    for (let i = 0; i <= limit; i++) {
      if (i % 3 === 0 ||i % 5 === 0) {
        Sum += i;
    }
}
    return Sum;     
}
console.log(sum(10));

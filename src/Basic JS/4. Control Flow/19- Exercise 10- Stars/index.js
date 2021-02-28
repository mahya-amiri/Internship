// Exercise 10- Stars
function showStars (rows){
    for (let i = 1; i <= rows; i++){
        let string = '';
        for (let j = 1; j <= i; j++)
           string += '*';
        console.log(string); 
    }         
}
showStars(5);

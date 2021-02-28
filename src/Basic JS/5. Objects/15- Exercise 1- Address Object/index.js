// Exercise 1- Address Object
const address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};
function showAddress (address){
    for (let key in address)
        console.log(key, address[key]);
}
showAddress(address);

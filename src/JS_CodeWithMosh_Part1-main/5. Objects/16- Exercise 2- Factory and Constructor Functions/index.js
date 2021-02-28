function showAddress (street, city, zipCode) {
    return{
        street,
        city,
        zipCode
    };
}
const address1 = showAddress('a', 'b', 'c');
console.log(address1);

function Address (street, city,zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
const address2 = new Address('x', 'y', 'z');
console.log(address2);

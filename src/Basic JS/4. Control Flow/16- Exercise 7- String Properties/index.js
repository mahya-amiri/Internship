const movie = {
    title: 'a',
    releaseYear: 2021,
    rating: 4.5,
    director: 'b'
}
function showPropertises(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
        console.log(key, obj[key]);
    }
}
showPropertises(movie);

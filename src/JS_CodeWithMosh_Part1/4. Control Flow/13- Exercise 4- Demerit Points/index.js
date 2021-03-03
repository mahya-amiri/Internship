// Exercise 4- Demerit Points
// Speed limit = 70
// 5 -> 1 point
// 12 points -> suspended
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint){
        console.log('Ok');
    }
    else{
        const point = Math.floor((speed - speedLimit) / kmPerPoint);
        if (point >= 12)
            console.log('License suspended');
        else
            console.log('Points', point);
    }
}
checkSpeed(130);

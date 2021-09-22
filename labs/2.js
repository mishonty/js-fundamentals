// 1
function solve(firstName, secondName, delimiter) {

    console.log(`${firstName}${delimiter}${secondName}`)
}

//2
function solve(str, char, result) {

    let res = str.replace('_', char);

    if (res === result) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

// 3
function solve(first, second, third) {

    let sum = first + second + third;
    let type = undefined;

    if (sum % 1 === 0) {
        type = "Integer";
    } else {
        type = "Float";
    }

    console.log(`${sum} - ${type}`);
}

// Второ решение
function solve(first, second, third) {

    let sum = first + second + third;

    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);
}

// 4
function solve(number) {

    let num = number.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    let result = sum.toString().includes('9') ? `${num} Amazing? True` : `${num} Amazing? False`;

    console.log(result);
}

// 5
function solve(band, album, song) {

    let songDuration = album.length * band.length * song.length / 2;
    let rotations = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}

// 6
function solve(distance, passengers, priceL) {

    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.1;
    let totalMoneyNeeded = priceL * neededFuel;

    console.log(`Needed money for that trip is ${totalMoneyNeeded} lv.`);
}

// 7
function solve(centuries) {

    let years = 100 * centuries;
    let days = Math.trunc(365.2422 * years);
    let hours = 24 * days;
    let minutes = 60 * hours;

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

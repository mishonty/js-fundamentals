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

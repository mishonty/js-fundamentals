// 1
function solve(arr) {

    let input = arr;
    let inputL = arr.length;
    let step = Number(input[inputL - 1]);
    let output = '';

    for (let i = 0; i < inputL - 1; i = i + step) {
        let current = input[i];
        output += `${current} `;

    }

    console.log(output);
}

// 2
function addAndRemove(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'remove') {
            result.pop();
        } else if (arr[i] === 'add') {
            result.push(i + 1);
        }
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}

// 3

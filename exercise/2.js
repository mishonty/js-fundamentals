// 1
function solve(num) {
    
    let number = num;
    let numStr = number.toString();
    let result;
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        result = Number(numStr[i]);
        sum += result;
    }

    console.log(sum);
}

// 2
function solve(first, second, third) {
    
    let result = first + second + third;

    console.log(result);
}
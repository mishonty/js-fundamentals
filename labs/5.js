// 1
function solve(arr) {
  let numbers = arr.map(Number);
  let firstNum = numbers.shift();
  let lastNum = numbers.pop();

  let output = firstNum + lastNum;

  console.log(output);
}

// 1. 1.
function solve(arr) {
  let numbers = arr.map(Number);
  let numbersL = numbers.length;
  let newArr = [];

  for (let currentNumber of numbers) {
    if (currentNumber < 0) {
      newArr.unshift(currentNumber);
    } else {
      newArr.push(currentNumber);
    }
  }

  console.log(newArr.join("\n"));
}

// 2
function solve(arr) {
  let numbers = arr.map(Number);
  let numbersL = numbers.length;
  let k = numbers[0];

  let firstK = numbers.slice(1, k + 1).join(' ');
  let lastK = numbers.slice(numbersL - k, numbersL).join(' ');

  console.log(firstK);
  console.log(lastK);
}

// 4
function solver(length, k) {
    let outputArr = [1];
  
    for(let i = 1; i<length; i++){
        outputArr[i] = sumLastK(outputArr, k);
    }
  
    console.log(outputArr.join(' '));
 
    function sumLastK(arr, k) {
        k = arr.length>k ? k : arr.length;
        let sum = 0;
        for(let i = 1; i<=k; i++){
            sum += arr[arr.length-i];
        }
        return sum;
    }
}

// 5
function solve(arr) {
  let numbers = arr;
  let numbersL = numbers.length;
  let output = [];

  for (let index = numbersL -1; index >= 1; index--) {
    let currentNum = Number(numbers[index]);
    if (index % 2 !== 0) {
      output.push(currentNum * 2);
    }
  }

  console.log(output.join(' '));
}

// 5

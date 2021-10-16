// 1
function solve(arr) {
  let numbers = arr.map(Number);
  let firstNum = numbers.shift();
  let lastNum = numbers.pop();

  let output = firstNum + lastNum;

  console.log(output);
}

// 2
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

// 3
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

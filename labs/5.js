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

// 3
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

// 4
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
function solve(arr) {
  arr.sort((a, b) => a - b);
  let result = arr.slice(0, 2);
  
  return result.join(' ');
}

function solve(arr) {

  let numbers = arr.map(Number);
  let sorted = [];

  for (let num = 0; num < numbers.length; num++) {
    let currentNum = numbers[num];
    sorted.push(currentNum);
  }

  let sortedInAscending = sorted.sort((a, b) => {
    return a - b;
  });

  console.log(sorted.slice(0, 2).join(' '));
}

// 6
function solve(arr) {

  let sorted = arr.sort();
  let sortedL = sorted.length;

  for (let num = 0; num < sortedL; num++) {
    console.log(`${num + 1}.${sorted[num]}`);
  }
}

// 7
function solve(arr) {

  let sorted = arr.sort();
  let sortedL = sorted.length;

  for (let num = 0; num < sortedL; num++) {
    console.log(`${num + 1}.${sorted[num]}`);
  }
}

// 8
function solve(arr) {

  let numbers = arr
    .shift()
    .split(' ')
    .map(Number);

  for (let i = 0; i < arr.length; i++) {
    let [command, firstNum, secondNum] = arr[i].split(' ');

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (command) {
      case 'Add':
        function add(el) {
          numbers.push(el);
        }
        break;
      case 'Remove':
        function remove(num) {
          numbers = numbers.filter(el => el !== num);
        }
        break;
      case 'RemoveAt':
        function removeAt(index) {
          numbers.splice(index, 1);
        }
        break;
      case 'Insert':
        function insert(num, index) {
          numbers.splice(index, 0, num);
        }
        break;
    }
  }

  console.log(numbers.join(' '));
}

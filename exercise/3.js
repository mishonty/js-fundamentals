// 1
function solve(arr) {

  let sumFirst = 0;
  let sumFinal = 0;
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    sumFirst += arr[i];
    if (arr[i] % 2 === 0) {
      output.push(arr[i] + i);
      sumFinal += arr[i] + i;
    } else if (arr[i] % 2 !== 0) {
      output.push(arr[i] - i);
      sumFinal += arr[i] - i;
    }
  }

  console.log(`[ ${output.join(', ')} ]`);
  console.log(sumFirst);
  console.log(sumFinal);
}

// 2
function solve(arr1, arr2) {
  let output = '';

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        output = arr1[i];
        console.log(output);
      }
    }
  }
}

// 3
function solve(arr1, arr2) {
  let arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    let bufferSum = Number(arr1[i]) + Number(arr2[i]);
    if (i % 2 === 0) {
      arr3.push(bufferSum);
    } else {
      arr3.push(arr1[i] + arr2[i]);
    }
  }

  console.log(arr3.join(' - '));
}

// 4
function solve(arr, n) {

    let arrNum = arr;
    let arrL = arr.length;

    for (let i = 0; i < n; i++) {
        let currentNum = arrNum.shift();
        arrNum.push(currentNum);

    }

    console.log(arrNum.join(' '));
  }

// 8
function solve(arr, n) {

  let numbers = arr;
  let numbersL = numbers.length;
  let sum = 0;
  let pair = '';

  for (let i = 0; i < numbersL; i++) {
    let firstNum = Number(numbers[i]);
    for (let j = i + 1; j < numbersL; j++) {
      let secondNum = Number(numbers[j]);
      if (firstNum + secondNum === n) {
      pair = `${firstNum} ${secondNum} `;
      
      console.log(pair);
      }
    }
  }
}

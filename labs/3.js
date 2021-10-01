// 1
function solve(input) {

    let first = Number(input[0]);
    let last = Number(input[input.length - 1]);

    console.log(first + last);
}

// 2
function solve(day) {

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    day >= 1 && day <= 7 ? console.log(days[day-1]) : console.log("Invalid day!");
}

// 3
function solve(n, arr) {

  let newArr = [];
  let output = '';

  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }

  for (let i = newArr.length - 1; i >= 0; i--) {
    output += `${newArr[i]} `;
  }

  console.log(output);
}

// 4
function solve(arr) {

  let revArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }

  console.log(revArr.join(' '));
}

/////////////////////////////////////////////////////////////
function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let buffer = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = buffer
  }

  console.log(arr.join(' '));
}

// 5
function solve(arr) {

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 === 0) {
      sum += Number(arr[i]);
    }
  }

  console.log(sum);
}

// 6
function solve(arr) {

  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }

  for (let num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }

  console.log(sumEven - sumOdd);
}

// 7
function solve(firstArr, secondArr) {

  let isIdentical = true;
  let sumFirst = 0;
  let sumSecond = 0;

  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isIdentical = false;
      break;
    }
  }

  if (isIdentical) {
    for (let numbers of firstArr) {
      numbers = Number(numbers);
      sumFirst += numbers;
    }
    
    console.log(`Arrays are identical. Sum: ${sumFirst}`);
  }
}

// 8
function solve(nums) {

  while (nums.length > 1) {
    let condensed = [];
    for (let i = 0; i < nums.length - 1; i++) {
      let num1 = nums[i];
      let num2 = nums[i + 1];
      let sum = num1 + num2;
      condensed.push(sum);
    }
    nums = condensed;
  }

  console.log(nums[0]);
}

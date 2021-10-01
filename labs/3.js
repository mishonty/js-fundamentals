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

// 1
function solve(num1, num2, num3) {

  let numbers = [num1, num2, num3];
  numbers.sort((a, b) => b - a);

  console.log(numbers[2].toString());
}

// 2
function solve(num1, num2, num3) {

  let result = 0;

  function sum(a, b) {
    return a + b;
  }
  function subtract(c) {
    return c;
  }

  result += sum(num1, num2);
  result -= subtract(num3);

  console.log(result);
}

// 3

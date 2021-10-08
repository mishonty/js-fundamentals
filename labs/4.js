// 1
function solve(str, n) {

    let result = '';

    for (let i = 0; i < n; i++) {
        result += str;
    }

    return result;
}

// 2
function solve(grade) {

  let result = '';
  
  if (grade < 3) {
    result = 'Fail (2)';
  } else if (grade >= 3 && grade < 3.5) {
    result = `Poor (${grade.toFixed(2)})`;
  } else if (grade >= 3.5 && grade < 4.5) {
    result = `Good (${grade.toFixed(2)})`;
  } else if (grade >= 4.5 && grade < 5.5) {
    result = `Very good (${grade.toFixed(2)})`;
  } else {
    result = `Excellent (${grade.toFixed(2)})`;
  }
  
  console.log(result);
}

// 3
function solve(n, pow) {

  let result = Math.pow(n, pow);

  console.log(result);
}

// 4
function solve(order, n) {

  let price = 0;

  switch (order) {
    case 'coffee':
      price = n * 1.5;
      break;
    case 'water':
      price = n;
      break;
    case 'coke':
      price = n * 1.4;
      break;
    case 'snacks':
      price = n * 2;
      break;
  }

  console.log(price.toFixed(2));
}

// 5
function solve(number1, number2, operator) {

  let result = 0;
  let multiply = (num1, num2) => num1 * num2;
  let divide = (num1, num2) => num1 / num2;
  let add = (num1, num2) => num1 + num2;
  let subtract = (num1, num2) => num1 - num2;

  switch (operator) {
    case 'multiply':
      result = multiply(number1, number2);
      break;
    case 'divide':
      result = divide(number1, number2);
      break;
    case 'add':
      result = add(number1, number2);
      break;
    case 'subtract':
      result = subtract(number1, number2);
      break;
  }

  console.log(result);
}

// 6
function solve(num1, num2, num3) {

  let totalNegative = 0;

  if (isNegative(num1)) {
    totalNegative++;
  }

  if (isNegative(num2)) {
    totalNegative++;
  }

  if (isNegative(num3)) {
    totalNegative++;
  }

  if (totalNegative % 2 == 0) {
    console.log('Positive');
  } else {
    console.log('Negative');
  }

  function isNegative(number) {
    return number < 0;
  }
}

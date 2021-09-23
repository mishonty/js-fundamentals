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

// 3
function solve(town, population, area) {

console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
}

// 4
function solve(metres) {

let kilometres = metres / 1000;

console.log(kilometres.toFixed(2));
}

// 5
function solve(pounds) {

let dollars = pounds * 1.31;

console.log(dollars.toFixed(3));
}

// 6
function solve(first, second, third) {

console.log(`${third} ${second} ${first}`);
}

// 6
function solve(char) {

  let result = '';

  char === char.toUpperCase() ? result += 'upper-case' : result += 'lower-case';

  console.log(result);
}

// 7*
function solve(firstNum, operator, secondNum) {

let result = 0;

  switch (operator) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    case '/':
      result = firstNum / secondNum;
      break;
    case '%':
      result = firstNum % secondNum;
      break;
  }

  console.log(result.toFixed(2));
}

// 8*
function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

  let expenses = 0;
  let shieldRepairs = 0;

  for (let i = 1; i <= lostFightsCount; i++) {
    if (i % 2 === 0) {
      expenses += helmetPrice;
    }

    if (i % 3 === 0) {
      expenses += swordPrice;
    }

    if (i % 2 === 0 && i % 3 === 0) {
      expenses += shieldPrice;
      shieldRepairs++;
    }
    
     if (shieldRepairs % 2 === 0 && shieldRepairs > 0) {
      expenses += armorPrice;
      shieldRepairs = 0;
    }
  }
  
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

// 9*

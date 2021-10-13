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
function solve(first, second) {

    let firstSymbolAsNumber = first.charCodeAt(0);
    let secondSymbolAsNumber = second.charCodeAt(0);
    let bigger = Math.max(firstSymbolAsNumber, secondSymbolAsNumber);
    let smaller = Math.min(firstSymbolAsNumber, secondSymbolAsNumber);
    let output = '';

    for (let i = smaller + 1; i < bigger; i++) {
        let currentSymbolAsNumber = String.fromCharCode(i);
        output += `${currentSymbolAsNumber} `;
    }

    console.log(output);
}

// 4
function solve(num) {

    let numbersToDo = num.toString();
    let sumEven = 0;
    let sumOdd = 0;

    let takeSumEven = (numbersToDo) => {
        for (let i = 0; i < numbersToDo.length; i++) {
            let currentDigit = Number(numbersToDo[i]);

            if (currentDigit % 2 === 0) {
                sumEven += currentDigit;
            }
        }
        return sumEven;
    }

    let takeSumOdd = (numbersToDo) => {
        for (let i = 0; i < numbersToDo.length; i++) {
            let currentDigit = Number(numbersToDo[i]);

            if (currentDigit % 2 !== 0) {
                sumOdd += currentDigit;
            }
        }
        return sumOdd;
    }

    console.log(`Odd sum = ${takeSumOdd(numbersToDo)}, Even sum = ${takeSumEven(numbersToDo)}`);
}

// 5
function solve(arr) {

    let arrOfNumbers = arr;
    let numbersL = arrOfNumbers.length;
    let isPalindrome = (num) => {

        let startNum = num;
        let reversedNum = Number(num.toString().split('').reverse().join(''));

        if (startNum === reversedNum) {
            return true;
        } else {
            return false;
        }
    };

    for (let i = 0; i < numbersL; i++) {
        let currentNumber = arrOfNumbers[i];

        console.log(isPalindrome(currentNumber));
    }
}

// 6

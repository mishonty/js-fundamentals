// 1
function solve(arr) {
  let wagoons = arr
    .shift()
    .split(" ")
    .map(function (a) {
      return Number(a);
    });
  let maxCap = +arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(" ");

    if (command.length === 2) {
      wagoons.push(+command[1]);
    } else if (command.length === 1) {
      let passengersToAdd = Number(command);
      for (let j = 0; j < wagoons.length; j++) {
        let currentWagoon = wagoons[j];
        let emptySeats = maxCap - currentWagoon;

        if (emptySeats >= passengersToAdd) {
          wagoons[j] += passengersToAdd;
          break;
        }
      }
    }
  }

  console.log(wagoons.join(" "));
}

// 2
function solve(arr) {
  let numbers = arr;
  let numbersL = numbers.length;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = numbers[i];

    for (let j = i + 1; j < arr.length; j++) {
      let nextNumber = numbers[j];

      if (currentNumber === nextNumber) {
        arr.splice(j, 1);
        j -= 1;
      }
    }
  }

  console.log(arr.join(" "));
}

function solve(arr) {
  let numbers = arr;
  let numbersL = numbers.length;
  let output = [];

  for (let i = 0; i < numbersL; i++) {
    let nextNumber = Number(numbers[i]);
    if (!output.includes(nextNumber)) {
      output.push(nextNumber);
    }
  }

  console.log(output.join(" "));
}

// 3
function solve(arr) {
  let responses = arr;
  let arrL = responses.length;
  let list = [];

  for (let i = 0; i < arrL; i++) {
    let currentResponse = responses[i].split(" ");
    let currentName = currentResponse[0];
    let attendingOrNot = currentResponse[2];

    if (attendingOrNot === "going!") {
      if (list.includes(currentName)) {
        console.log(`${currentName} is already in the list!`);
      } else {
        list.push(currentName);
      }
    } else if (attendingOrNot === "not") {
      if (list.includes(currentName)) {
        list.splice(list.indexOf(currentName), 1);
      } else {
        console.log(`${currentName} is not in the list!`);
      }
    }
  }

  console.log(list.join("\n"));
}

// 4
function solve(arr) {
  let numbers = arr;
  let output = [];

  numbers.sort(function sort(a, b) {
    return b - a;
  });

  while (numbers.length !== 0) {
    let currentNumber = numbers.shift();
    let currentSmallest = numbers.pop();

    output.push(currentNumber);
    output.push(currentSmallest);
  }

  console.log(output.join(" "));
}

// 5
function solve(arr) {
  let strToSort = arr;
  let sorted = strToSort.sort(function (a, b) {
    return a.localeCompare(b);
  });
  let alpabetical = sorted.sort(function (a, b) {
    return a.length - b.length;
  });

  console.log(strToSort.join("\n"));
}

// 6
function solve(arr1, arr2) {
  let sequence = arr1;
  let bomb = arr2;
  let bombNumber = bomb[0];
  let bombPower = bomb[1];

  while (sequence.includes(bombNumber)) {

      let indexOfBomb = sequence.indexOf(bombNumber);
      let elementsToRemove = bombPower * 2 + 1;
      let startIndex = indexOfBomb - bombPower;

      if (startIndex < 0) {
        elementsToRemove += startIndex;
        startIndex = 0;
      }

      sequence.splice(startIndex, elementsToRemove)
    }

  let sum = sequence.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log(sum);
}

// 7

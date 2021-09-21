// 1
function solve(age) {
  if (age >= 66) {
    console.log("elder");
  } else if (age >= 20) {
    console.log("adult");
  } else if (age >= 14) {
    console.log("teenager");
  } else if (age >= 3) {
    console.log("child");
  } else if (age >= 0) {
    console.log("baby");
  } else {
    console.log("out of bounds");
  }
}

// 2
function solve(n, r) {
  if (r > 15) {
    r = 15;
  }
  let result = parseFloat(n.toFixed(r));
  console.log(result);
}

// 3
function solve(n) {
  if (n % 10 === 0) {
    console.log("The number is divisible by 10");
  } else if (n % 7 === 0) {
    console.log("The number is divisible by 7");
  } else if (n % 6 === 0) {
    console.log("The number is divisible by 6");
  } else if (n % 3 === 0) {
    console.log("The number is divisible by 3");
  } else if (n % 2 === 0) {
    console.log("The number is divisible by 2");
  } else {
    console.log("Not divisible");
  }
}

// 4 (83 / 100)
function solve(n, typeOfGroup, day) {

    let price = 0;
  
    if (day === "Friday") {
      switch (typeOfGroup) {
        case "Students":
          price = 8.5;
          break;
        case "Business":
          price = 10.9;
          break;
        case "Regular":
          price = 15;
          break;
        default:
          price = 0;
          break;
      }
    } 
    
    if (day === "Saturday") {
      switch (typeOfGroup) {
        case "Students":
          price = 9.8;
          break;
        case "Business":
          price = 15.6;
          break;
        case "Regular":
          price = 20;
          break;
        default:
          price = 0;
          break;
      }
    } 
    
    if (day === "Sunday") {
      switch (typeOfGroup) {
        case "Students":
          price = 10.46;
          break;
        case "Business":
          price = 16;
          break;
        case "Regular":
          price = 22.5;
          break;
        default:
          price = 0;
          break;
      }
    }
  
    let totalPrice = 0;
  
    if (typeOfGroup === "Students" && n >= 30) {
      totalPrice = n * price * 0.85;
    } else if (typeOfGroup === "Business" && n >= 100) {
      totalPrice = (n - 10) * price;
    } else if (typeOfGroup === "Regular" && n >= 10 && n <= 20) {
      totalPrice = (price * n) * 0.95;
    } else {
        totalPrice = price * n;
    }
     
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
  }

// 5
function solve(year) {


    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

// 6
function solve(start, end) {

    let output = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        output += `${i} `;
        sum += i;
    }

    console.log(output);
    console.log(`Sum: ${sum}`);
}

// 7
function solve(num) {

  let number = num;
  
  for (let i = 1; i <= number; i++) {
  let output = ``;
    for (let j = 1; j <= i; j++) {
      output += `${i} `;
    }
    
    console.log(output);
  }
  
}

// 8
function solve(num) {

let number = num;

  for (let i = 1; i <= 10; i++) {
      let result = `${number} X ${i} = ${number * i}`;
      console.log(result);
    } 
}

// 9
function solve(input) {

    let username = input[0];
    let password = '';
    let currentPassword = input[1];
    let index = 1;
    let attemptsCounter = 0;


    for (var i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    while (currentPassword !== password) {
        currentPassword = input[index++];

        if (attemptsCounter >= 3) {
            console.log(`User ${username} blocked!`);
          break;
        }

        if (currentPassword !== password) {
            console.log(`Incorrect password. Try again.`);
        }

        attemptsCounter++;
    }

    if (currentPassword === password) {
        console.log(`User ${username} logged in.`);
    }
}

// 10 - EMPTY

// 11
function solve(input) {

    let dayCounter = 1;
    let firstBitcoin = 0;
    let bitcoinCounter = 0;
    let left = 0;
    let i = 0;

    while (i < input.length) {

        let todaysGold = input[i++];


        if (dayCounter % 3 === 0) {
            todaysGold *= 0.7;
        }

        left += todaysGold * 67.51;
        bitcoinCounter = Math.trunc(left / 11949.16);


        if (bitcoinCounter >= 1) {
            if (firstBitcoin === 0) {
                firstBitcoin = dayCounter;
            }
        }
        dayCounter++;
    }

    left -= bitcoinCounter * 11949.16;

    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if (bitcoinCounter >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }

    console.log(`Left money: ${left.toFixed(2)} lv.`);
}

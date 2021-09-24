// 1
function solve(number) {

  let digit = 0;

  switch (number) {
    case "one":
      digit = 1;
      break;
    case "two":
      digit = 2;
      break;
    case "three":
      digit = 3;
      break;
    case "four":
      digit = 4;
      break;
    case "five":
      digit = 5;
      break;
    case "six":
      digit = 6;
      break;
    case "seven":
      digit = 7;
      break;
    case "eight":
      digit = 8;
      break;
    case "nine":
      digit = 9;
      break;
    default:
      digit = 0;
      break;
  }

  console.log(digit);
}

// 2
function solve(number) {

  let isPrime = false;

  if (number / 1 === number && number / number === 1 && number % 2 !== 0 && number % 3 !== 0) {
    isPrime = true;
  } else {
    isPrime = false;
  }

  console.log(isPrime);
}

// 3
function solve(r, h) {

  let area = Math.PI * r * (r + Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2)));
  let volume = (Math.PI * Math.pow(r, 2) * h) / 3;
  
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`)
}
